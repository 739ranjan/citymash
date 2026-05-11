import { createServer } from "node:http";
import { promises as fs } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import dotenv from "dotenv";
import nodemailer from "nodemailer";

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const distDir = path.join(__dirname, "dist");

const port = Number(process.env.PORT || 8787);
const smtpHost = process.env.SMTP_HOST || "";
const smtpPort = Number(process.env.SMTP_PORT || 587);
const smtpSecure = String(process.env.SMTP_SECURE || "false").toLowerCase() === "true";
const smtpUser = process.env.SMTP_USER || "";
const smtpPass = process.env.SMTP_PASS || "";
const contactToEmail = process.env.CONTACT_TO_EMAIL || process.env.SMTP_USER || "";
const contactFromEmail = process.env.CONTACT_FROM_EMAIL || smtpUser || "";

const transport =
  smtpHost && smtpPort && smtpUser && smtpPass
    ? nodemailer.createTransport({
        host: smtpHost,
        port: smtpPort,
        secure: smtpSecure,
        auth: {
          user: smtpUser,
          pass: smtpPass,
        },
      })
    : null;

const mimeTypes = {
  ".css": "text/css; charset=utf-8",
  ".html": "text/html; charset=utf-8",
  ".js": "application/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".svg": "image/svg+xml",
  ".webp": "image/webp",
  ".ico": "image/x-icon",
  ".txt": "text/plain; charset=utf-8",
};

function sendJson(response, statusCode, body) {
  response.writeHead(statusCode, {
    "Content-Type": "application/json; charset=utf-8",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET,POST,OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
  });
  response.end(JSON.stringify(body));
}

function sanitize(value) {
  return String(value ?? "").replace(/\r/g, " ").trim();
}

function escapeHtml(value) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function isValidEmail(value) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

async function readRequestBody(request) {
  const chunks = [];
  for await (const chunk of request) {
    chunks.push(chunk);
  }

  const rawBody = Buffer.concat(chunks).toString("utf8");
  return rawBody ? JSON.parse(rawBody) : {};
}

async function handleContact(request, response) {
  if (request.method === "OPTIONS") {
    response.writeHead(204, {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET,POST,OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type",
    });
    response.end();
    return;
  }

  if (request.method !== "POST") {
    sendJson(response, 405, { message: "Method not allowed." });
    return;
  }

  if (!transport || !contactToEmail || !contactFromEmail) {
    sendJson(response, 500, { message: "SMTP is not configured on the server." });
    return;
  }

  try {
    const payload = await readRequestBody(request);
    const name = sanitize(payload.name);
    const email = sanitize(payload.email);
    const phone = sanitize(payload.phone);
    const service = sanitize(payload.service || "Mandate Projects");
    const message = sanitize(payload.message);
    const company = sanitize(payload.company);

    if (company) {
      sendJson(response, 200, { message: "Thanks. The CityMash team will get back to you shortly." });
      return;
    }

    if (!name || !email || !phone || !message) {
      sendJson(response, 400, { message: "Please complete all required details before sending." });
      return;
    }

    if (!isValidEmail(email)) {
      sendJson(response, 400, { message: "Please enter a valid email address." });
      return;
    }

    const subject = `New CityMash enquiry from ${name}`;
    const text = [
      "A new contact enquiry was submitted on the CityMash website.",
      "",
      `Name: ${name}`,
      `Email: ${email}`,
      `Phone: ${phone}`,
      `Project Type: ${service}`,
      "",
      "Project Brief:",
      message,
    ].join("\n");

    const html = `
      <div style="font-family:Arial,sans-serif;line-height:1.6;color:#111827">
        <h2 style="margin-bottom:16px;">New CityMash contact enquiry</h2>
        <p><strong>Name:</strong> ${escapeHtml(name)}</p>
        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
        <p><strong>Phone:</strong> ${escapeHtml(phone)}</p>
        <p><strong>Project Type:</strong> ${escapeHtml(service)}</p>
        <p><strong>Project Brief:</strong></p>
        <p>${escapeHtml(message).replace(/\n/g, "<br />")}</p>
      </div>
    `;

    await transport.sendMail({
      to: contactToEmail,
      from: contactFromEmail,
      replyTo: email,
      subject,
      text,
      html,
    });

    sendJson(response, 200, {
      message: "Thanks. The CityMash team will get back to you shortly.",
    });
  } catch (error) {
    console.error("Contact form submission failed:", error);
    sendJson(response, 500, { message: "Unable to send enquiry right now." });
  }
}

async function serveStatic(request, response) {
  const requestUrl = new URL(request.url || "/", `http://${request.headers.host}`);
  const requestedPath = requestUrl.pathname === "/" ? "/index.html" : requestUrl.pathname;
  const safePath = path.normalize(requestedPath).replace(/^(\.\.[/\\])+/, "");
  const filePath = path.join(distDir, safePath);

  try {
    const file = await fs.readFile(filePath);
    const extension = path.extname(filePath).toLowerCase();
    response.writeHead(200, {
      "Content-Type": mimeTypes[extension] || "application/octet-stream",
    });
    response.end(file);
  } catch {
    try {
      const indexFile = await fs.readFile(path.join(distDir, "index.html"));
      response.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
      response.end(indexFile);
    } catch {
      response.writeHead(404, { "Content-Type": "text/plain; charset=utf-8" });
      response.end("Build output not found. Run `npm run build` first.");
    }
  }
}

const server = createServer(async (request, response) => {
  const requestUrl = new URL(request.url || "/", `http://${request.headers.host}`);

  if (requestUrl.pathname === "/api/contact") {
    await handleContact(request, response);
    return;
  }

  await serveStatic(request, response);
});

server.listen(port, () => {
  console.log(`CityMash server running on http://localhost:${port}`);
});
