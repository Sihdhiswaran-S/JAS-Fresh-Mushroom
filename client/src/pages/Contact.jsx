import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import "../styles/Contact.css";

const contactInfo = [
  {
    icon: "📍",
    title: "Farm Address",
    lines: [
      "No. 12, Mushroom Valley Road,",
      "Bengalore – 641001,",
      "Karnataka, India",
    ],
  },
  {
    icon: "📞",
    title: "Phone",
    lines: ["+91 8496801546", "+91 9019851775", "+91 6382298402"],
  },
  {
    icon: "✉️",
    title: "Email",
    lines: ["jasfreshmushroom@gmail.com"],
  },
  {
    icon: "🕗",
    title: "Working Hours",
    lines: ["Mon – Sat: 8:00 AM – 6:00 PM", "Sunday: 9:00 AM – 1:00 PM"],
  },
];

const subjects = [
  "General Inquiry",
  "Product Order",
  "Bulk / Wholesale",
  "Farm Visit",
  "Careers",
  "Other",
];

function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [apiError, setApiError] = useState("");

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = "Name is required";
    if (!form.email.trim()) e.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(form.email)) e.email = "Enter a valid email";
    if (!form.phone.trim()) e.phone = "Phone is required";
    if (!form.subject) e.subject = "Please select a subject";
    if (!form.message.trim()) e.message = "Message is required";
    return e;
  };

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    setErrors((prev) => ({ ...prev, [e.target.name]: "" }));
    if (apiError) setApiError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }

    setLoading(true);
    setApiError("");

    try {
      const apiBase = import.meta.env.VITE_API_URL || "http://localhost:5000 ";
      const res = await fetch(`${apiBase}/api/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (!res.ok || !data.success) {
        // Server returned a validation or send error
        setApiError(data.error || "Something went wrong. Please try again.");
        return;
      }

      // All good — show success screen
      setSubmitted(true);
    } catch {
      // Network / unreachable server error
      setApiError(
        "Unable to reach the server. Please check your connection or call us directly at +91 8496801546.",
      );
    } finally {
      setLoading(false);
    }
  };

  const handleReset = () => {
    setForm({ name: "", email: "", phone: "", subject: "", message: "" });
    setErrors({});
    setSubmitted(false);
    setApiError("");
  };

  return (
    <div className="contact-page">
      <Helmet>
        <title>
          Contact JAS Fresh Mushroom — Bengaluru | Oyster Mushroom Supplier
          India
        </title>
        <meta
          name="description"
          content="Contact JAS Fresh Mushroom in Bengaluru for oyster mushroom spawn, grow kits, and bulk mushroom orders. Call, email, or visit us — shipping pan-India."
        />
        <link rel="canonical" href="https://jasfreshmushroom.com/contact" />
      </Helmet>

      {/* ── HERO ── */}
      <section className="ct-hero">
        <div className="ct-hero__overlay" />
        <div className="ct-hero__content">
          <span className="ct-tag">Get In Touch</span>
          <h1 className="ct-hero__title">
            We'd Love to <span>Hear From You</span>
          </h1>
          <p className="ct-hero__sub">
            Have a question about our mushrooms, want to place a bulk order, or
            just want to say hello? Reach out — we're always happy to connect.
          </p>
        </div>
        <div className="ct-hero__scroll">↓ Scroll down</div>
      </section>

      {/* ── MAIN CONTENT ── */}
      <section className="ct-main">
        {/* ── LEFT: Contact Info Cards ── */}
        <div className="ct-info">
          <span className="ct-tag">Contact Details</span>
          <h2 className="ct-section-title">
            Find Us <span>Here</span>
          </h2>
          <p className="ct-info__desc">
            Visit our farm, call us, or drop an email — we're available across
            multiple channels to serve you better.
          </p>

          <div className="ct-cards">
            {contactInfo.map((item, i) => (
              <div
                className="ct-card"
                key={i}
                style={{ animationDelay: `${i * 0.1}s` }}>
                <span className="ct-card__icon">{item.icon}</span>
                <div className="ct-card__body">
                  <h4>{item.title}</h4>
                  {item.lines.map((line, j) => (
                    <p key={j}>{line}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Local SEO note */}
          <div className="ct-local-note">
            <span>🍄</span>
            <p>
              We are a <strong>Bengaluru-based mushroom farm</strong> supplying
              fresh oyster mushrooms, lab-grade spawn, and grow kits to
              customers across <strong>India</strong>. Orders are dispatched
              within 24–48 hours with live tracking.
            </p>
          </div>

          {/* Social links */}
          <div className="ct-socials">
            <span className="ct-socials__label">Follow Us</span>
            {/* <div className="ct-socials__row">
              {[
                ["Instagram", "Facebook", "WhatsApp", "YouTube"],
                ["https://www.instagram.com/jas_fresh_mushroom_", "", "https://wa.me/8496801546", ""],
              ].map((s) => (
                <a
                  key={s[0]}
                  href={s[1][0] ? s[1][0] : "#"}
                  className="ct-social-btn"
                  aria-label={s[0]}>
                  {s[0][0]}
                </a>
              ))}
            </div> */}
            <div className="ct-socials__row">
              {[
                {
                  name: "Instagram",
                  url: "https://www.instagram.com/jas_fresh_mushroom_",
                },
                { name: "Facebook", url: "" },
                { name: "WhatsApp", url: "https://wa.me/8496801546" },
                { name: "YouTube", url: "" },
              ].map((social) => (
                <a
                  key={social.name}
                  href={social.url || "#"}
                  className="ct-social-btn"
                  aria-label={social.name}>
                  {/* This renders the first letter of the name (I, F, W, Y) */}
                  {social.name[0]}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* ── RIGHT: Form ── */}
        <div className="ct-form-wrap">
          {submitted ? (
            <div className="ct-success">
              <span className="ct-success__icon">✅</span>
              <h3>Message Sent!</h3>
              <p>
                Thank you, <strong>{form.name}</strong>! We've received your
                message and will get back to you within 24 hours.
              </p>
              <button className="ct-btn" onClick={handleReset}>
                Send Another Message
              </button>
            </div>
          ) : (
            <>
              <span className="ct-tag">Send a Message</span>
              <h2 className="ct-section-title">
                Write to <span>Us</span>
              </h2>

              <form className="ct-form" onSubmit={handleSubmit} noValidate>
                {/* Row 1 — Name & Email */}
                <div className="ct-form__row">
                  <div className="ct-field">
                    <label htmlFor="name">
                      Full Name <span>*</span>
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      placeholder="e.g. Arjun Selvam"
                      value={form.name}
                      onChange={handleChange}
                      className={errors.name ? "ct-input--error" : ""}
                    />
                    {errors.name && (
                      <span className="ct-error">{errors.name}</span>
                    )}
                  </div>
                  <div className="ct-field">
                    <label htmlFor="email">
                      Email Address <span>*</span>
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="you@example.com"
                      value={form.email}
                      onChange={handleChange}
                      className={errors.email ? "ct-input--error" : ""}
                    />
                    {errors.email && (
                      <span className="ct-error">{errors.email}</span>
                    )}
                  </div>
                </div>

                {/* Row 2 — Phone & Subject */}
                <div className="ct-form__row">
                  <div className="ct-field">
                    <label htmlFor="phone">
                      Phone Number <span>*</span>
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      placeholder="+91 98765 43210"
                      value={form.phone}
                      onChange={handleChange}
                      className={errors.phone ? "ct-input--error" : ""}
                    />
                    {errors.phone && (
                      <span className="ct-error">{errors.phone}</span>
                    )}
                  </div>
                  <div className="ct-field">
                    <label htmlFor="subject">
                      Subject <span>*</span>
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={form.subject}
                      onChange={handleChange}
                      className={errors.subject ? "ct-input--error" : ""}>
                      <option value="">Select a subject</option>
                      {subjects.map((s) => (
                        <option key={s} value={s}>
                          {s}
                        </option>
                      ))}
                    </select>
                    {errors.subject && (
                      <span className="ct-error">{errors.subject}</span>
                    )}
                  </div>
                </div>

                {/* Message */}
                <div className="ct-field ct-field--full">
                  <label htmlFor="message">
                    Your Message <span>*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    placeholder="Tell us how we can help you..."
                    value={form.message}
                    onChange={handleChange}
                    className={errors.message ? "ct-input--error" : ""}
                  />
                  {errors.message && (
                    <span className="ct-error">{errors.message}</span>
                  )}
                </div>

                {/* ── API / network error banner ── */}
                {apiError && (
                  <div
                    role="alert"
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: "10px",
                      background: "#fff5f5",
                      border: "1px solid #f5c6cb",
                      borderLeft: "4px solid #dc3545",
                      borderRadius: "8px",
                      padding: "14px 18px",
                      fontSize: "0.88rem",
                      color: "#721c24",
                      lineHeight: "1.6",
                    }}>
                    <span style={{ fontSize: "1.1rem", flexShrink: 0 }}>
                      ⚠️
                    </span>
                    <span style={{ flex: 1 }}>{apiError}</span>
                    <button
                      type="button"
                      onClick={() => setApiError("")}
                      aria-label="Dismiss error"
                      style={{
                        background: "none",
                        border: "none",
                        cursor: "pointer",
                        color: "#721c24",
                        fontSize: "1rem",
                        flexShrink: 0,
                        padding: "0 4px",
                      }}>
                      ✕
                    </button>
                  </div>
                )}

                <button
                  type="submit"
                  className="ct-btn ct-btn--full"
                  disabled={loading}
                  style={{
                    opacity: loading ? 0.75 : 1,
                    cursor: loading ? "not-allowed" : "pointer",
                  }}>
                  {loading ? (
                    <>
                      <span
                        style={{
                          display: "inline-block",
                          width: "16px",
                          height: "16px",
                          border: "2px solid rgba(255,255,255,0.4)",
                          borderTopColor: "#fff",
                          borderRadius: "50%",
                          animation: "ct-spin 0.7s linear infinite",
                          marginRight: "10px",
                          verticalAlign: "middle",
                        }}
                      />
                      Sending…
                    </>
                  ) : (
                    <>
                      Send Message <span className="ct-btn__arrow">→</span>
                    </>
                  )}
                </button>
              </form>
            </>
          )}
        </div>
      </section>

      {/* ── MAP SECTION ── */}
      <section className="ct-map">
        <div className="ct-map__header">
          <span className="ct-tag">Our Location</span>
          <h2 className="ct-section-title">
            Visit Our <span>Farm</span>
          </h2>
        </div>
        <div className="ct-map__frame">
          <iframe
            title="JAS Fresh Mushroom Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.274811783277!2d77.4647857!3d13.018163800000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae3b4978708727%3A0x85ccc0c7deb3592f!2sJAS%20fresh%20mushrooms!5e0!3m2!1sen!2sin!4v1773722308411!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
          {/* <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.274811783277!2d77.4647857!3d13.018163800000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae3b4978708727%3A0x85ccc0c7deb3592f!2sJAS%20fresh%20mushrooms!5e0!3m2!1sen!2sin!4v1773722308411!5m2!1sen!2sin"
            width="600"
            height="450"
            style="border:0;"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"></iframe> */}
        </div>
      </section>

      {/* ── CTA STRIP ── */}
      <section className="ct-cta">
        <h2>Prefer to call us directly?</h2>
        <p>Our team is available Mon–Sun, 7 AM to 10 PM</p>
        <div className="ct-cta__btns">
          <a href="tel:+918496801546" className="ct-cta__btn">
            📞 +91 8496801546
          </a>
          
          <a href="tel:+916382298402" className="ct-cta__btn">
            📞 +91 6382298402
          </a>
          <a href="tel:+919019851775" className="ct-cta__btn">
            📞 +91 9019851775
          </a>
        </div>
      </section>
    </div>
  );
}

export default Contact;
