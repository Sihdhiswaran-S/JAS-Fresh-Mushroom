const express = require("express");
const { body, validationResult } = require("express-validator");
const { transporter } = require("../utils/mailer");

const router = express.Router();

// ── Allowed subject values (mirror the frontend list) ───────────────────────
const ALLOWED_SUBJECTS = [
  "General Inquiry",
  "Product Order",
  "Bulk / Wholesale",
  "Farm Visit",
  "Careers",
  "Other",
];

// ── Validation & sanitisation rules ─────────────────────────────────────────
const contactValidators = [
  body("name")
    .trim()
    .notEmpty()
    .withMessage("Name is required.")
    .isLength({ max: 100 })
    .withMessage("Name must be 100 characters or fewer.")
    .escape(),

  body("email")
    .trim()
    .notEmpty()
    .withMessage("Email address is required.")
    .isEmail()
    .withMessage("Enter a valid email address.")
    .normalizeEmail(),

  body("phone")
    .trim()
    .notEmpty()
    .withMessage("Phone number is required.")
    .matches(/^[+\d\s\-().]{7,20}$/)
    .withMessage("Enter a valid phone number.")
    .escape(),

  body("subject")
    .trim()
    .notEmpty()
    .withMessage("Please select a subject.")
    .isIn(ALLOWED_SUBJECTS)
    .withMessage("Invalid subject selected."),

  body("message")
    .trim()
    .notEmpty()
    .withMessage("Message is required.")
    .isLength({ max: 2000 })
    .withMessage("Message must be 2000 characters or fewer.")
    .escape(),
];

// ── POST /api/contact ────────────────────────────────────────────────────────
router.post("/", contactValidators, async (req, res) => {
  // 1. Check for validation errors
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({
      success: false,
      error: errors.array()[0].msg, // Return first error as a readable string
      fields: errors.array().map((e) => ({ field: e.path, msg: e.msg })),
    });
  }

  const { name, email, phone, subject, message } = req.body;
  const recipient = process.env.RECIPIENT_EMAIL;
  const sender = process.env.GMAIL_USER;

  try {
    // 2a. Business notification email
    await transporter.sendMail({
      from: `"JAS Website Contact Form" <${sender}>`,
      to: recipient,
      replyTo: email,
      subject: `[Contact Form] ${subject} — ${name}`,
      html: `
        <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;border:1px solid #e0e0e0;border-radius:8px;overflow:hidden;">
          <div style="background:#2e7d32;padding:24px 32px;">
            <h2 style="color:#fff;margin:0;font-size:20px;">📬 New Contact Form Submission</h2>
          </div>
          <div style="padding:28px 32px;background:#fff;">
            <table style="width:100%;border-collapse:collapse;font-size:14px;color:#333;">
              <tr><td style="padding:8px 0;font-weight:bold;width:120px;color:#2e7d32;">Name</td><td>${name}</td></tr>
              <tr><td style="padding:8px 0;font-weight:bold;color:#2e7d32;">Email</td><td><a href="mailto:${email}" style="color:#2e7d32;">${email}</a></td></tr>
              <tr><td style="padding:8px 0;font-weight:bold;color:#2e7d32;">Phone</td><td>${phone}</td></tr>
              <tr><td style="padding:8px 0;font-weight:bold;color:#2e7d32;">Subject</td><td>${subject}</td></tr>
            </table>
            <hr style="border:none;border-top:1px solid #e8f5e9;margin:20px 0;" />
            <h4 style="color:#1b5e20;margin:0 0 10px;">Message</h4>
            <p style="color:#444;line-height:1.7;white-space:pre-wrap;">${message}</p>
          </div>
          <div style="background:#f1f8f1;padding:14px 32px;font-size:12px;color:#888;">
            Sent from the JAS Fresh Mushroom website contact form.
          </div>
        </div>
      `,
    });

    // 2b. Auto-reply to the sender
    await transporter.sendMail({
      from: `"JAS Fresh Mushroom" <${sender}>`,
      to: email,
      subject: "We've received your message — JAS Fresh Mushroom",
      html: `
        <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;border:1px solid #e0e0e0;border-radius:8px;overflow:hidden;">
          <div style="background:#2e7d32;padding:24px 32px;">
            <h2 style="color:#fff;margin:0;font-size:20px;">🍄 Thank You, ${name}!</h2>
          </div>
          <div style="padding:28px 32px;background:#fff;color:#333;line-height:1.8;">
            <p>We've received your message about <strong>${subject}</strong> and will get back to you within <strong>24 hours</strong>.</p>
            <p>Here's a copy of what you sent us:</p>
            <blockquote style="border-left:4px solid #2e7d32;margin:16px 0;padding:12px 20px;background:#f9fdf9;color:#555;font-style:italic;white-space:pre-wrap;">${message}</blockquote>
            <p>If you have any urgent questions, feel free to call us at <a href="tel:+918496801546" style="color:#2e7d32;">+91 8496801546</a>.</p>
            <p style="margin-top:24px;">Warm regards,<br/><strong style="color:#2e7d32;">JAS Fresh Mushroom Team</strong></p>
          </div>
          <div style="background:#f1f8f1;padding:14px 32px;font-size:12px;color:#888;">
            No. 12, Mushroom Valley Road, Karnataka, India ·
            <a href="mailto:jasfreshmushroom@gmail.com" style="color:#2e7d32;">jasfreshmushroom@gmail.com</a>
          </div>
        </div>
      `,
    });

    return res.status(200).json({
      success: true,
      message: "Your message has been sent successfully!",
    });
  } catch (err) {
    console.error("❌ Email send error:", err.message);
    return res.status(500).json({
      success: false,
      error:
        "Failed to send your message due to a server error. Please try again or call us directly.",
    });
  }
});

module.exports = router;
