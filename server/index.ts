import "dotenv/config";
import express from "express";
import { createServer } from "http";
import nodemailer from "nodemailer";
import path from "path";
import { CONTACT_EMAIL } from "../shared/const";

type ContactInquiry = {
  kind: "contact";
  name: string;
  email: string;
  phone?: string;
  subject: string;
  message: string;
};

type QuoteInquiry = {
  kind: "quote";
  name: string;
  email: string;
  phone: string;
  projectType: string;
  scope: string;
  budget: string;
  timeline: string;
  message?: string;
};

type InquiryPayload = ContactInquiry | QuoteInquiry;

const GMAIL_USER = process.env.GMAIL_USER || CONTACT_EMAIL;
const GMAIL_APP_PASSWORD = process.env.GMAIL_APP_PASSWORD;

const mailTransport =
  GMAIL_APP_PASSWORD
    ? nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: GMAIL_USER,
          pass: GMAIL_APP_PASSWORD,
        },
      })
    : null;

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function asNonEmptyString(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

function buildInquiryEmail(payload: InquiryPayload) {
  if (payload.kind === "contact") {
    const subject = `Contact Form: ${payload.subject}`;
    const text = [
      "New contact form inquiry",
      "",
      `Name: ${payload.name}`,
      `Email: ${payload.email}`,
      `Phone: ${payload.phone || "Not provided"}`,
      `Subject: ${payload.subject}`,
      "",
      "Message:",
      payload.message,
    ].join("\n");

    const html = `
      <h2>New contact form inquiry</h2>
      <p><strong>Name:</strong> ${escapeHtml(payload.name)}</p>
      <p><strong>Email:</strong> ${escapeHtml(payload.email)}</p>
      <p><strong>Phone:</strong> ${escapeHtml(payload.phone || "Not provided")}</p>
      <p><strong>Subject:</strong> ${escapeHtml(payload.subject)}</p>
      <p><strong>Message:</strong></p>
      <p>${escapeHtml(payload.message).replaceAll("\n", "<br />")}</p>
    `;

    return { subject, text, html, replyTo: payload.email };
  }

  const subject = `Quote Request: ${payload.name}`;
  const text = [
    "New quote request",
    "",
    `Name: ${payload.name}`,
    `Email: ${payload.email}`,
    `Phone: ${payload.phone}`,
    `Project Type: ${payload.projectType}`,
    `Scope: ${payload.scope}`,
    `Budget: ${payload.budget}`,
    `Timeline: ${payload.timeline}`,
    "",
    "Project Details:",
    payload.message || "Not provided",
  ].join("\n");

  const html = `
    <h2>New quote request</h2>
    <p><strong>Name:</strong> ${escapeHtml(payload.name)}</p>
    <p><strong>Email:</strong> ${escapeHtml(payload.email)}</p>
    <p><strong>Phone:</strong> ${escapeHtml(payload.phone)}</p>
    <p><strong>Project Type:</strong> ${escapeHtml(payload.projectType)}</p>
    <p><strong>Scope:</strong> ${escapeHtml(payload.scope)}</p>
    <p><strong>Budget:</strong> ${escapeHtml(payload.budget)}</p>
    <p><strong>Timeline:</strong> ${escapeHtml(payload.timeline)}</p>
    <p><strong>Project Details:</strong></p>
    <p>${escapeHtml(payload.message || "Not provided").replaceAll("\n", "<br />")}</p>
  `;

  return { subject, text, html, replyTo: payload.email };
}

async function startServer() {
  const app = express();
  const server = createServer(app);

  app.use(express.json({ limit: "1mb" }));

  app.post("/api/contact", async (req, res) => {
    if (!mailTransport) {
      res.status(500).json({
        message: "Email sending is not configured on the server. Set GMAIL_APP_PASSWORD first.",
      });
      return;
    }

    const kind = asNonEmptyString((req.body as { kind?: unknown })?.kind);

    let payload: InquiryPayload | null = null;

    if (kind === "contact") {
      const contactPayload: ContactInquiry = {
        kind: "contact",
        name: asNonEmptyString(req.body?.name),
        email: asNonEmptyString(req.body?.email),
        phone: asNonEmptyString(req.body?.phone),
        subject: asNonEmptyString(req.body?.subject),
        message: asNonEmptyString(req.body?.message),
      };

      if (!contactPayload.name || !contactPayload.email || !contactPayload.subject || !contactPayload.message) {
        res.status(400).json({ message: "Missing required contact form fields." });
        return;
      }

      payload = contactPayload;
    }

    if (kind === "quote") {
      const quotePayload: QuoteInquiry = {
        kind: "quote",
        name: asNonEmptyString(req.body?.name),
        email: asNonEmptyString(req.body?.email),
        phone: asNonEmptyString(req.body?.phone),
        projectType: asNonEmptyString(req.body?.projectType),
        scope: asNonEmptyString(req.body?.scope),
        budget: asNonEmptyString(req.body?.budget),
        timeline: asNonEmptyString(req.body?.timeline),
        message: asNonEmptyString(req.body?.message),
      };

      if (
        !quotePayload.name ||
        !quotePayload.email ||
        !quotePayload.phone ||
        !quotePayload.projectType ||
        !quotePayload.scope ||
        !quotePayload.budget ||
        !quotePayload.timeline
      ) {
        res.status(400).json({ message: "Missing required quote form fields." });
        return;
      }

      payload = quotePayload;
    }

    if (!payload) {
      res.status(400).json({ message: "Unsupported form submission." });
      return;
    }

    try {
      const email = buildInquiryEmail(payload);

      await mailTransport.sendMail({
        from: `"Cabinet Venue Website" <${GMAIL_USER}>`,
        to: CONTACT_EMAIL,
        replyTo: email.replyTo,
        subject: email.subject,
        text: email.text,
        html: email.html,
      });

      res.json({ success: true });
    } catch (error) {
      console.error("Failed to send inquiry email:", error);
      res.status(500).json({ message: "Unable to send your message right now." });
    }
  });

  // 🔥 GUARANTEED CORRECT PATH
  const staticPath = path.join(process.cwd(), "dist", "public");

  console.log("Serving from:", staticPath);

  app.use(express.static(staticPath));

  app.get("*", (_req, res) => {
    res.sendFile(path.join(staticPath, "index.html"));
  });

  const port = process.env.PORT || 10000;

  server.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });
}

startServer().catch(console.error);
