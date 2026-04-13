import express from "express";
import { createServer } from "http";
import path from "path";
import { fileURLToPath } from "url";
import fs from "fs";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  const server = createServer(app);

  const staticPath = path.join(__dirname, "public");

  console.log("Serving static from:", staticPath);
  console.log("Index exists:", fs.existsSync(path.join(staticPath, "index.html")));

  // Serve static files
  app.use(express.static(staticPath));

  // 🔥 FORCE fallback BEFORE anything else breaks
  app.use((req, res) => {
    const indexPath = path.join(staticPath, "index.html");

    if (fs.existsSync(indexPath)) {
      res.sendFile(indexPath);
    } else {
      res.status(500).send("index.html not found");
    }
  });

  const port = process.env.PORT || 10000;

  server.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });
}

startServer().catch(console.error);