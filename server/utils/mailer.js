const nodemailer = require("nodemailer");

/**
 * Nodemailer transporter using Gmail SMTP with STARTTLS.
 * Credentials are loaded from environment variables — never hardcoded.
 */
const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false, // STARTTLS
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_APP_PASSWORD,
  },
});

/**
 * Verifies the SMTP connection at startup so misconfiguration is caught early.
 */
async function verifyMailer() {
  try {
    await transporter.verify();
    console.log("✉️  Mailer ready — SMTP connection verified.");
  } catch (err) {
    console.error("❌ Mailer configuration error:", err.message);
    console.error(
      "   Make sure GMAIL_USER and GMAIL_APP_PASSWORD are set in server/.env"
    );
  }
}

module.exports = { transporter, verifyMailer };
