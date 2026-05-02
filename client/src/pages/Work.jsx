import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import "../styles/Work.css";

const steps = [
  {
    number: "01",
    icon: "🍄",
    title: "What is Oyster Mushroom Farming?",
    body: `Oyster mushrooms are one of the most commonly cultivated edible mushrooms worldwide. They thrive in warm, humid environments and are considered the ideal variety for beginners — easier to cultivate than most other mushroom species, with fast growth cycles and high market demand.`,
  },
  {
    number: "02",
    icon: "🧺",
    title: "Materials Needed",
    body: null,
    list: [
      "Mushroom spawn (mushroom seeds)",
      "Corn cob powder or dried agricultural straw",
      "Plastic growing bags",
      "Long-size water filtering bags",
      "Plastic water storage drum",
      "Lime powder & Bleaching powder",
      "Clean water",
      "A dark room with proper humidity control",
    ],
  },
  {
    number: "03",
    icon: "⚗️",
    title: "Preparing the Growing Medium",
    body: "The growing medium must be sterilized properly before spawning to prevent contamination — the single biggest risk in mushroom cultivation.",
    substeps: [
      "Place the plastic drum outside the farming area to keep preparation separate.",
      "Fill the drum with about ¾ of clean water.",
      "Mix lime powder and bleaching powder in 5 litres of water, then pour into the drum.",
      "Fill three long bags with corn cob material and submerge fully in the treated water.",
      "Soak for 12–24 hours to allow thorough sterilization.",
      "After soaking, drain the drum and remove the bags.",
      "Dry the corn cob until it is slightly moist — ready for spawning.",
    ],
    note: "Contamination can ruin an entire crop. Never skip this step.",
  },
  {
    number: "04",
    icon: "🛍️",
    title: "Bag Preparation & Spawning",
    body: "With your sterilized substrate ready, it's time to prepare the growing bags.",
    substeps: [
      "Place a layer of prepared straw/corn cob inside the plastic bag.",
      "Add a layer of mushroom spawn on top.",
      "Repeat the layers alternately until the bag is full.",
      "Tie the bag tightly to seal it.",
      "Make small holes throughout the bag for air circulation and mushroom emergence.",
    ],
  },
  {
    number: "05",
    icon: "🌑",
    title: "Incubation Stage",
    body: "Patience is key during incubation. The mycelium needs darkness, moisture, and still air to colonise the substrate.",
    substeps: [
      "Place the bags in a dark, humid room away from direct sunlight.",
      "Maintain proper moisture levels and gentle ventilation.",
      "Within 10–15 days, white fungal growth (mycelium) will spread through the substrate.",
    ],
    highlight: "10–15 days for mycelium to fully colonise",
  },
  {
    number: "06",
    icon: "🌱",
    title: "Mushroom Growth",
    body: "Once the mycelium spreads fully through the bag, the fruiting stage begins.",
    substeps: [
      "Small mushroom buds (pins) appear from the holes.",
      "Mushrooms grow rapidly within just a few days after pinning.",
      "Maintaining proper humidity significantly increases your yield.",
    ],
  },
  {
    number: "07",
    icon: "✂️",
    title: "Harvesting",
    body: "Mushrooms are ready to harvest when the caps are fully open and spread wide.",
    substeps: [
      "Grip the mushroom cluster at the base.",
      "Gently twist and pull — do not yank or tear.",
      "Harvest the entire cluster at once for best results.",
      "The bag can produce 2–3 more flushes after the first harvest.",
    ],
    highlight: "Multiple harvests per bag — 2 to 3 flushes",
  },
  {
    number: "08",
    icon: "💰",
    title: "Selling & Profit",
    body: "Fresh oyster mushrooms enjoy strong local demand and command good market prices.",
    list: [
      "Local vegetable markets — quick daily sales",
      "Restaurants and hotels — premium pricing",
      "Direct-to-consumer delivery — highest margins",
      "Dried mushrooms — longer shelf life, export potential",
    ],
  },
];

const stats = [
  { value: "Low", label: "Investment Required" },
  { value: "10–15", label: "Days to Mycelium" },
  { value: "2–3×", label: "Harvests Per Bag" },
  { value: "High", label: "Market Demand" },
];

function Work() {
  const [activeStep, setActiveStep] = useState(null);

  const toggle = (i) => setActiveStep(activeStep === i ? null : i);

  return (
    <div className="work-page">
      <Helmet>
        <title>How to Grow Oyster Mushrooms at Home — Step-by-Step Guide | JAS Fresh</title>
        <meta name="description" content="Learn oyster mushroom farming step by step — substrate prep, spawn inoculation, incubation, harvesting &amp; selling. A beginner's guide from JAS Fresh, Bengaluru." />
        <meta name="keywords" content="how to grow oyster mushrooms at home India, oyster mushroom farming beginners, mushroom cultivation guide, mushroom spawn inoculation" />
        <link rel="canonical" href="https://jasfreshmushroom.com/work" />
      </Helmet>

      {/* ── HERO ── */}
      <section className="wk-hero">
        <div className="wk-hero__overlay" />
        <div className="wk-hero__content">
          <span className="wk-tag">How It Works</span>
          <h1 className="wk-hero__title">
            Growing Oyster Mushrooms
            <br />
            <span>Step by Step</span>
          </h1>
          <p className="wk-hero__sub">
            Mushroom farming is one of the easiest and most profitable
            small-scale agricultural businesses. Little land, low investment,
            and quick returns — here's everything you need to know.
          </p>
          <div className="wk-hero__pills">
            <span>🌿 Beginner Friendly</span>
            <span>📦 Low Investment</span>
            <span>📈 Quick Returns</span>
          </div>
        </div>
      </section>

      {/* ── STATS BAR ── */}
      <div className="wk-statsbar">
        {stats.map((s, i) => (
          <div className="wk-statsbar__item" key={i}>
            <span className="wk-statsbar__value">{s.value}</span>
            <span className="wk-statsbar__label">{s.label}</span>
          </div>
        ))}
      </div>

      {/* ── INTRO ── */}
      <section className="wk-intro">
        <div className="wk-intro__content">
          <span className="wk-tag">Overview</span>
          <h2 className="wk-section-title">
            Why Oyster <span>Mushroom Farming?</span>
          </h2>
          <p>
            Oyster mushroom cultivation requires very little land and minimal
            infrastructure, making it accessible to small-scale farmers,
            homesteaders, and entrepreneurs alike. With the right technique,
            even a complete beginner can achieve consistent harvests and
            generate sustainable income — all from a small, dedicated grow
            space.
          </p>
          <p>
            In this guide, you will learn the complete process from preparing
            the substrate to harvesting and selling your mushrooms — step by
            step, with clear explanations at every stage.
          </p>
        </div>
        <div className="wk-intro__img-wrap">
          <img
            src="https://res.cloudinary.com/dqcznvpuw/image/upload/v1777705510/IMG20260502084244_egjyvk.jpg"
            alt="Oyster mushroom farming"
          />
          <div className="wk-intro__img-badge">🍄 Oyster Mushroom Guide</div>
        </div>
      </section>

      {/* ── STEPS ── */}
      <section className="wk-steps">
        <div className="wk-steps__header">
          <span className="wk-tag">The Process</span>
          <h2 className="wk-section-title">
            8 Steps to Your <span>First Harvest</span>
          </h2>
        </div>

        <div className="wk-steps__grid">
          {steps.map((step, i) => (
            <div
              key={i}
              className={`wk-step ${activeStep === i ? "wk-step--open" : ""}`}
              onClick={() => toggle(i)}>
              {/* Step Header */}
              <div className="wk-step__head">
                <div className="wk-step__left">
                  <span className="wk-step__num">{step.number}</span>
                  <span className="wk-step__icon">{step.icon}</span>
                  <h3 className="wk-step__title">{step.title}</h3>
                </div>
                <span className="wk-step__toggle">
                  {activeStep === i ? "−" : "+"}
                </span>
              </div>

              {/* Step Body */}
              <div className="wk-step__body">
                {step.body && <p className="wk-step__desc">{step.body}</p>}

                {step.highlight && (
                  <div className="wk-step__highlight">
                    <span>⏱</span> {step.highlight}
                  </div>
                )}

                {step.substeps && (
                  <ol className="wk-step__substeps">
                    {step.substeps.map((s, j) => (
                      <li key={j}>{s}</li>
                    ))}
                  </ol>
                )}

                {step.list && (
                  <ul className="wk-step__list">
                    {step.list.map((item, j) => (
                      <li key={j}>
                        <span>✓</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                )}

                {step.note && (
                  <div className="wk-step__note">⚠️ {step.note}</div>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── TIPS BANNER ── */}
      <section className="wk-tips">
        <div className="wk-tips__header">
          <span className="wk-tag">Pro Tips</span>
          <h2 className="wk-section-title">
            Keys to <span>Success</span>
          </h2>
        </div>
        <div className="wk-tips__grid">
          {[
            {
              icon: "🧼",
              tip: "Hygiene First",
              desc: "Always sterilize your tools, bags, and work area before each batch.",
            },
            {
              icon: "💧",
              tip: "Control Humidity",
              desc: "Maintain 70–90% humidity in the grow room for optimal yields.",
            },
            {
              icon: "🌡️",
              tip: "Temperature Matters",
              desc: "Keep your grow room between 20–28°C for healthy mycelium and fruiting.",
            },
            {
              icon: "🔄",
              tip: "Multiple Flushes",
              desc: "Each bag gives 2–3 harvests. Don't discard bags after the first flush.",
            },
          ].map((t, i) => (
            <div className="wk-tip-card" key={i}>
              <span className="wk-tip-card__icon">{t.icon}</span>
              <h4>{t.tip}</h4>
              <p>{t.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="wk-cta">
        <div className="wk-cta__content">
          <h2>Ready to Start Your Mushroom Farm?</h2>
          <p>
            With proper hygiene and environmental control, beginners can start
            small and gradually expand production into a thriving agro-business.
          </p>
          <div className="wk-cta__btns">
            <a href="/products" className="wk-cta__btn wk-cta__btn--primary">
              Shop Mushroom Products →
            </a>
            <a href="/contact" className="wk-cta__btn wk-cta__btn--outline">
              Contact Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Work;
