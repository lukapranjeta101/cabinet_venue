import express from "express";
import { createServer } from "http";
import path from "path";

async function startServer() {
  const app = express();
  const server = createServer(app);

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