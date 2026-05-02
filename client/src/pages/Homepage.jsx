import React, { useState, useEffect, useRef } from 'react'
import { Helmet } from 'react-helmet-async'
import { useNavigate } from 'react-router-dom'
import ImageSlide from '../components/ImageSlide.jsx'
import HomeDescription from '../components/HomeDescription.jsx'
import '../styles/Homepage.css'

// ── Section 1: Stats Strip ────────────────────────────────────────────────────
const stats = [
  { icon: '🍄', value: '1',  label: 'Mushroom Varieties' },
  { icon: '🌿', value: '100%', label: 'Organically Grown'  },
  { icon: '😊', value: '100',  label: 'Happy Customers'    },
  // { icon: '🚜', value: '2',   label: 'Years Farming'      },
  { icon: '📦', value: '2',    label: 'Farm Facilities'    },
]

// ── Section 2: Why Choose Us ──────────────────────────────────────────────────
const features = [
  {
    icon: '🌱',
    title: 'Farm Direct',
    desc:  'Harvested and delivered within 24 hours — no middlemen, no cold-chain delays. Pure freshness, every time.',
  },
  {
    icon: '🔬',
    title: 'Science-Backed Growing',
    desc:  'Our cultivation process follows strict hygiene and environmental protocols backed by modern agro-science.',
  },
  {
    icon: '♻️',
    title: 'Sustainable Practices',
    desc:  'We recycle agricultural waste as substrate, minimising our footprint and giving back to the earth.',
  },
  {
    icon: '🏆',
    title: 'Premium Quality',
    desc:  'Each mushroom is hand-inspected before packing. We never compromise on size, freshness, or nutrition.',
  },
]

// ── Section 3: Product Preview ────────────────────────────────────────────────
const previewProducts = [
  {
    icon: "🍄",
    name: "Oyster Mushrooms",
    tag: "Best Seller",
    desc: "Tender and flavourful, hand-picked at peak freshness. Perfect for any cuisine.",
    img: "https://res.cloudinary.com/dqcznvpuw/image/upload/v1777563355/30dfec51-eff3-4ef2-8dc5-fc535abccaca_kafr5d.png",
  },
  {
    icon: "🌾",
    name: "Mushroom Spawn",
    tag: "Top Rated",
    desc: "High-purity spawn for home and commercial growers. High colonisation success rate.",
    img: "https://res.cloudinary.com/dqcznvpuw/image/upload/v1777563449/ecd28f84-c34e-4f2a-924f-1563bcd7244c_sldo9m.png",
  },
  {
    icon: "📦",
    name: "Beginner Grow Kit",
    tag: "Starter Kit",
    desc: "Everything you need to grow your first flush at home — included and ready to go.",
    img: "https://images.unsplash.com/photo-1518977676601-b53f82aba655?auto=format&fit=crop&w=600&q=80",
  },
  {
    icon: "🥄",
    name: "Mushroom Powder",
    tag: "Organic",
    desc: "Pure dried and ground oyster mushroom powder. No preservatives, no additives.",
    img: "https://res.cloudinary.com/dqcznvpuw/image/upload/v1777706545/ChatGPT_Image_Apr_29_2026_08_57_40_AM_fngpjx.png",
  },
];

// ── Section 4: How It Works ───────────────────────────────────────────────────
const steps = [
  { number: '01', icon: '🌾', title: 'Substrate Prep',   desc: 'Agricultural straw and corn cob are sterilised and prepared as the natural growing medium.' },
  { number: '02', icon: '🧫', title: 'Spawn Inoculation', desc: 'High-quality mushroom spawn is layered into bags and sealed for the incubation stage.' },
  { number: '03', icon: '🌑', title: 'Incubation',        desc: 'Bags rest in a dark, humid environment for 10–15 days as mycelium colonises the substrate.' },
  { number: '04', icon: '✂️', title: 'Harvest',           desc: 'Fully grown clusters are gently twisted and harvested at peak freshness — same-day packed.' },
]

// ── Section 5: FAQ ───────────────────────────────────────────────────────────
const faqs = [
  {
    q: "Do you ship white and grey oyster mushroom , oyster mushroom spawn and grow kits across India?",
    a: "Yes, we ship to all major cities and towns across India from our Bengaluru facility. Orders are dispatched within 24–48 hours and packed to maintain mushroom and spawn viability during transit.",
  },
  {
    q: "How long does oyster mushroom spawn stay fresh after delivery?",
    a: "Our spawn stays viable for up to 30 days when stored in a cool, dry place away from direct sunlight. For best results, inoculate your substrate within one week of receiving the spawn.",
  },
  {
    q: "How long does white and grey oyster mushroom stay fresh after delivery?",
    a: "Our mushroom stays viable for up to 3-5 days when stored in a cool, dry place away from direct sunlight. For best results, inoculate your substrate within one week of receiving the spawn.",
  },
  {
    q: "Are your grow kits suitable for beginners with no farming experience?",
    a: "Absolutely. Our grow kits are pre-inoculated and ready to fruit — no prior knowledge needed. Each kit includes a step-by-step guide designed for first-time home growers.",
  },
  {
    q: "What substrates work best with oyster mushroom spawn?",
    a: "Oyster mushrooms grow well on paddy straw, sugarcane bagasse, sawdust, and cardboard. Our product pages include substrate compatibility notes to help you choose the right option.",
  },
  {
    q: "What is the shelf life of your mushroom grow kits?",
    a: "Our mushroom grow kits have a shelf life of 2–3 months when stored in a cool, dry place away from direct sunlight. For best results, use the kit within one month of receiving it.",
  },
  {
    q:"why choose JAS mushroom farming?",
    a:"We are a family-owned business based in Bengaluru, India. Our mushrooms are grown in a controlled environment using organic methods. We offer a variety of mushroom products, including fresh mushrooms, spawn, and grow kits. We also provide training and support to home growers and commercial farmers."
  },
  {
    q:"why choose Oyster Mushroom",
    a:"Oyster mushrooms are a great source of protein, fibre, and essential vitamins. They are also low in calories and fat, making them a healthy addition to any diet. Additionally, oyster mushrooms are easy to grow and can be cultivated in a variety of climates."
  },
  {
    q: "Can I grow oyster mushrooms year-round in Bengaluru?",
    a: "Yes. Bengaluru's climate (typically 18°C–28°C) is ideal for oyster mushroom cultivation throughout the year. No special cooling or heating equipment is required for most varieties we supply.",
  },
];

// ── Section 6: Testimonials ───────────────────────────────────────────────────
const testimonials = [
  {
    name:   'Priya R.',
    role:   'Home Cook, Coimbatore',
    avatar: 'P',
    color:  '#2e7d32',
    review: 'The oyster mushrooms from JAS are consistently fresh and flavourful. They arrive the same day they are harvested — you can literally taste the difference!',
    stars:  5,
  },
  {
    name:   'Chef Rajan',
    role:   'Head Chef, Taj Hotel',
    avatar: 'R',
    color:  '#1565c0',
    review: 'We source exclusively from JAS for our restaurant. Their portobello mushrooms are top-grade and the bulk delivery has never missed a deadline.',
    stars:  5,
  },
  {
    name:   'Anbu Selvan',
    role:   'Mushroom Farmer, Erode',
    avatar: 'A',
    color:  '#6a1b9a',
    review: 'Started with their beginner kit and now run a full grow room. The spawn quality is excellent and their team was incredibly helpful throughout.',
    stars:  5,
  },
]

// ── FAQ Schema JSON-LD ───────────────────────────────────────────────────────
const faqSchemaJson = JSON.stringify({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map(f => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: { '@type': 'Answer', text: f.a },
  })),
})

// ── Homepage Component ────────────────────────────────────────────────────────
function Homepage() {
  const navigate = useNavigate()
  const [visibleTestimonial, setVisibleTestimonial] = useState(0)
  const [openFaq, setOpenFaq] = useState(null)
  const testimonialRef = useRef(null)

  // Auto-rotate testimonials
  useEffect(() => {
    const timer = setInterval(() => {
      setVisibleTestimonial(p => (p + 1) % testimonials.length)
    }, 4000)
    return () => clearInterval(timer)
  }, [])

  return (
    <>
      <Helmet>
        <title>
          JAS Fresh Mushroom | Oyster Mushroom Spawn &amp; Grow Kits | Ships
          Across India — JAS Fresh
        </title>
        <meta
          name="description"
          content="Buy oyster mushroom spawn, grow kits &amp; mushroom farming supplies online. Trusted by home growers &amp; commercial farms across India. Based in Bengaluru."
        />
        <meta
          name="keywords"
          content="oyster mushroom spawn, mushroom grow kit Bengaluru, mushroom farming supplies India, buy mushroom spawn online India, oyster mushroom grow kit"
        />
        <link rel="canonical" href="https://jasfreshmushroom.com/" />
        <script type="application/ld+json">{faqSchemaJson}</script>
      </Helmet>

      {/* ── 1. Image Slider ── */}
      <ImageSlide />

      {/* ── 2. Stats Strip ── */}
      <div className="hp-stats">
        {stats.map((s, i) => (
          <div className="hp-stats__item" key={i}>
            <span className="hp-stats__icon">{s.icon}</span>
            <span className="hp-stats__value">{s.value}</span>
            <span className="hp-stats__label">{s.label}</span>
          </div>
        ))}
      </div>

      {/* ── 3. Home Description (existing component) ── */}
      <HomeDescription />

      {/* ── 4. Why Choose Us ── */}
      <section className="hp-features">
        <div className="hp-features__header">
          <span className="hp-tag">Why JAS?</span>
          <h2 className="hp-section-title">
            What Sets Us <span>Apart</span>
          </h2>
          <p className="hp-section-sub">
            We don't just grow mushrooms — we grow them the right way.
          </p>
        </div>
        <div className="hp-features__grid">
          {features.map((f, i) => (
            <div
              className="hp-feature-card"
              key={i}
              style={{ animationDelay: `${i * 0.1}s` }}>
              <div className="hp-feature-card__icon-wrap">
                <span>{f.icon}</span>
              </div>
              <h3>{f.title}</h3>
              <p>{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── 5. Product Preview ── */}
      <section className="hp-products">
        <div className="hp-products__header">
          <span className="hp-tag">Our Products</span>
          <h2 className="hp-section-title">
            Fresh From the <span>Farm</span>
          </h2>
          <p className="hp-section-sub">
            From freshly harvested mushrooms to complete grow kits — we have
            everything you need.
          </p>
        </div>
        <div className="hp-products__grid">
          {previewProducts.map((p, i) => (
            <div className="hp-prod-card" key={i}>
              <div className="hp-prod-card__img-wrap">
                <img src={p.img} alt={p.name} />
                <span className="hp-prod-card__tag">{p.tag}</span>
              </div>
              <div className="hp-prod-card__body">
                <span className="hp-prod-card__icon">{p.icon}</span>
                <h3>{p.name}</h3>
                <p>{p.desc}</p>
                <button
                  className="hp-prod-card__btn"
                  onClick={() => navigate("/products")}>
                  View Product →
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className="hp-products__cta">
          <button
            className="hp-btn hp-btn--primary"
            onClick={() => navigate("/products")}>
            View All Products →
          </button>
        </div>
      </section>

      {/* ── 6. How It Works ── */}
      <section className="hp-process">
        <div className="hp-process__header">
          <span className="hp-tag">Our Process</span>
          <h2 className="hp-section-title">
            From Substrate <span>to Your Table</span>
          </h2>
        </div>
        <div className="hp-process__steps">
          {steps.map((s, i) => (
            <div className="hp-process__step" key={i}>
              <div className="hp-process__step-num">{s.number}</div>
              <div className="hp-process__step-icon">{s.icon}</div>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
              {i < steps.length - 1 && (
                <div className="hp-process__connector" />
              )}
            </div>
          ))}
        </div>
        <div className="hp-process__learn">
          <button
            className="hp-btn hp-btn--outline"
            onClick={() => navigate("/work")}>
            Learn the Full Process →
          </button>
        </div>
      </section>

      {/* ── 7. Health Benefits Teaser ── */}
      <section className="hp-health">
        <div className="hp-health__img-side">
          <img
            src="https://res.cloudinary.com/dqcznvpuw/image/upload/v1777706003/IMG_20260417_151156_f8iudu.jpg"
            alt="Health benefits of mushrooms"
          />
          <div className="hp-health__badge">
            <span className="hp-health__badge-num">10+</span>
            <span className="hp-health__badge-label">
              Proven Health Benefits
            </span>
          </div>
        </div>
        <div className="hp-health__content">
          <span className="hp-tag">Health & Nutrition</span>
          <h2 className="hp-section-title">
            A Superfood on <span>Your Plate</span>
          </h2>
          <p>
            Oyster mushrooms are packed with protein, dietary fibre, Vitamin D,
            B vitamins, and powerful antioxidants. Research links regular
            consumption to improved heart health, stronger immunity, better
            blood sugar control, and much more.
          </p>
          <div className="hp-health__pills">
            {[
              "❤️ Heart Health",
              "🛡️ Immunity",
              "🧠 Brain Health",
              "⚖️ Weight Control",
              "🦴 Bone Strength",
            ].map((b) => (
              <span key={b}>{b}</span>
            ))}
          </div>
          <button
            className="hp-btn hp-btn--primary"
            onClick={() => navigate("/benefits")}>
            Explore All Benefits →
          </button>
        </div>
      </section>

      {/* ── 8. Testimonials ── */}
      <section className="hp-testimonials">
        <div className="hp-testimonials__header">
          <span className="hp-tag">What People Say</span>
          <h2 className="hp-section-title">
            Loved by Customers <span>& Chefs</span>
          </h2>
        </div>

        <div className="hp-testimonials__track" ref={testimonialRef}>
          {testimonials.map((t, i) => (
            <div
              key={i}
              className={`hp-testi-card ${i === visibleTestimonial ? "hp-testi-card--active" : ""}`}>
              <div className="hp-testi-card__stars">{"★".repeat(t.stars)}</div>
              <p className="hp-testi-card__review">"{t.review}"</p>
              <div className="hp-testi-card__author">
                <div
                  className="hp-testi-card__avatar"
                  style={{ background: t.color }}>
                  {t.avatar}
                </div>
                <div>
                  <span className="hp-testi-card__name">{t.name}</span>
                  <span className="hp-testi-card__role">{t.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="hp-testimonials__dots">
          {testimonials.map((_, i) => (
            <button
              key={i}
              className={`hp-testi-dot ${i === visibleTestimonial ? "hp-testi-dot--active" : ""}`}
              onClick={() => setVisibleTestimonial(i)}
            />
          ))}
        </div>
      </section>

      {/* ── 9. FAQ Section ── */}
      <section className="hp-faq">
        <div className="hp-faq__header">
          <span className="hp-tag">FAQs</span>
          <h2 className="hp-section-title">
            Common Questions About <span>Mushroom Farming</span>
          </h2>
          <p className="hp-section-sub">
            Everything you need to know before you order oyster mushroom spawn,
            grow kits, or farming supplies.
          </p>
        </div>
        <div className="hp-faq__list">
          {faqs.map((f, i) => (
            <div
              key={i}
              className={`hp-faq__item ${openFaq === i ? "hp-faq__item--open" : ""}`}>
              <button
                className="hp-faq__question"
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
                aria-expanded={openFaq === i}>
                <span>{f.q}</span>
                <span className="hp-faq__chevron">
                  {openFaq === i ? "−" : "+"}
                </span>
              </button>
              <div className="hp-faq__answer">
                <p>{f.a}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── 10. CTA Banner ── */}
      <section className="hp-cta">
        <div className="hp-cta__content">
          <h2>Ready to Start Growing Oyster Mushrooms?</h2>
          <p>
            Order directly from the farm — fresh mushrooms, quality spawn, grow
            kits, and mushroom farming supplies directly from our Bengaluru farm
            — shipped fresh across India.
          </p>
          <div className="hp-cta__btns">
            <button
              className="hp-btn hp-btn--white"
              onClick={() => navigate("/products")}>
              Shop Products →
            </button>
            <button
              className="hp-btn hp-btn--outline-white"
              onClick={() => navigate("/contact")}>
              Contact Us
            </button>
          </div>
        </div>
      </section>
    </>
  );
}

export default Homepage