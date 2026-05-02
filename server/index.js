require("dotenv").config();

const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const rateLimit = require("express-rate-limit");
const { verifyMailer } = require("./utils/mailer");
const contactRouter = require("./routes/contact");

const app = express();
const PORT = process.env.PORT || 5000 ;

// ── Security headers ─────────────────────────────────────────────────────────
app.use(helmet());

// ── CORS — only allow the frontend origin ────────────────────────────────────
app.use(
  cors({
    origin: process.env.ALLOWED_ORIGIN || "http://localhost:5173" ,
    methods: ["POST", "OPTIONS"],
    allowedHeaders: ["Content-Type"],
  })
);

// ── Body parser ──────────────────────────────────────────────────────────────
app.use(express.json({ limit: "16kb" }));

// ── Rate limiter — max 10 contact submissions per IP per minute ──────────────
const contactLimiter = rateLimit({
  windowMs: 60 * 1000, // 1 minute
  max: 10,
  standardHeaders: true,
  legacyHeaders: false,
  message: {
    success: false,
    error: "Too many requests. Please wait a moment before trying again.",
  },
});

// ── Routes ───────────────────────────────────────────────────────────────────
app.use("/api/contact", contactLimiter, contactRouter);

// ── Health check ─────────────────────────────────────────────────────────────
app.get("/health", (_req, res) => res.json({ status: "ok" }));

// ── 404 catch-all ────────────────────────────────────────────────────────────
app.use((_req, res) => res.status(404).json({ error: "Route not found." }));

// ── Global error handler ─────────────────────────────────────────────────────
// eslint-disable-next-line no-unused-vars
app.use((err, _req, res, _next) => {
  console.error("Unhandled error:", err);
  res.status(500).json({ success: false, error: "Internal server error." });
});

// ── Start ─────────────────────────────────────────────────────────────────────
app.listen(PORT, async () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
  await verifyMailer();
});
