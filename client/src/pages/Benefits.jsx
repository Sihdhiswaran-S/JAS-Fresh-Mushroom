import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import "../styles/Benefits.css";

// ── Data ─────────────────────────────────────────────────────────────────────

// Updated with reference-accurate %DV values per 1 cup (86g)
const nutritionFacts = [
  { label: "Calories", value: "28 kcal", per: "per cup (86g)", dv: null },
  { label: "Protein", value: "3 g", per: "per cup (86g)", dv: null },
  { label: "Carbohydrates", value: "5 g", per: "per cup (86g)", dv: null },
  { label: "Dietary Fibre", value: "2 g", per: "per cup (86g)", dv: null },
  { label: "Total Fat", value: "<1 g", per: "per cup (86g)", dv: null },
  { label: "Niacin (B3)", value: "27%", per: "Daily Value", dv: true },
  {
    label: "Pantothenic Acid (B5)",
    value: "22%",
    per: "Daily Value",
    dv: true,
  },
  { label: "Folate (B9)", value: "8%", per: "Daily Value", dv: true },
  { label: "Choline", value: "8%", per: "Daily Value", dv: true },
  { label: "Potassium", value: "8%", per: "Daily Value", dv: true },
  { label: "Phosphorus", value: "8%", per: "Daily Value", dv: true },
  { label: "Iron", value: "6%", per: "Daily Value", dv: true },
  { label: "Zinc", value: "6%", per: "Daily Value", dv: true },
];

const healthBenefits = [
  {
    icon: "🌟",
    title: "Rich in Nutrients", // NEW from reference
    color: "#f57c00",
    summary:
      "Loaded with fibre, vitamins, minerals — yet low in calories and carbs.",
    detail: `Oyster mushrooms are one of the most nutrient-dense foods available. One cup (86g) provides just 28 calories while delivering meaningful amounts of niacin (27% DV), pantothenic acid (22% DV), folate, choline, potassium, phosphorus, iron, and zinc. They are also low in carbohydrates, making them an ideal choice for people following low-carb or calorie-controlled eating patterns. They also contain smaller amounts of vitamin D and selenium.`,
    studyStat: null,
  },
  {
    icon: "⚗️",
    title: "Powerful Antioxidants", // NEW — previously buried in Anti-Inflammatory
    color: "#6a1b9a",
    summary: "Contains unique phenolic compounds that fight cellular damage.",
    detail: `Seven phenolic compounds have been detected in P. ostreatus extracts, including gallic acid, chlorogenic acid, and naringenin — all of which act as antioxidants in the body. These mushrooms also contain the amino acid ergothioneine, which has powerful antioxidant effects. A 2016 study found that gray oyster mushroom extract inhibited oxidative damage to human artery cells and prevented oxidation of LDL (bad) cholesterol — a key mechanism in atherosclerosis and heart disease. Animal studies also confirm reduced inflammatory markers like malondialdehyde (MDA).`,
    studyStat: null,
  },
  {
    icon: "❤️",
    title: "Heart Health",
    color: "#e53935",
    summary: "Supports healthy cholesterol, triglycerides and blood pressure.",
    detail: `P. ostreatus is especially high in beta-glucans — soluble fibres that are fermented by gut bacteria to produce short-chain fatty acids that reduce cholesterol production. Notably, oyster mushrooms provide twice the beta-glucans of white button mushrooms. A 2011 randomised trial in 20 people found that consuming oyster mushroom soup for 21 days decreased triglycerides, total cholesterol, and oxidised LDL. A 2020 review of eight human studies also found that P. ostreatus helped lower blood sugar, triglycerides, blood pressure, and insulin levels.`,
    studyStat: "2× more beta-glucans than white button mushrooms",
  },
  {
    icon: "🩸",
    title: "Blood Sugar Control",
    color: "#c62828",
    summary: "Clinically shown to reduce fasting and post-meal blood glucose.",
    detail: `A study in 30 hospitalised people with Type 2 diabetes found that eating 150g of cooked P. ostreatus daily for 7 days reduced fasting blood sugar by 22% and post-meal blood sugar by an average of 23%. After stopping treatment for one week, blood sugar increased again — confirming the mushroom's direct role. Another study in 27 men with Type 2 diabetes found that 3g of powdered P. ostreatus per day for 3 months significantly reduced HbA1c — the key long-term blood sugar marker. These effects are attributed to beta-glucans slowing carbohydrate digestion and absorption.`,
    studyStat: "22% ↓ fasting sugar · 23% ↓ post-meal sugar",
  },
  {
    icon: "🛡️",
    title: "Immune System Support",
    color: "#2e7d32",
    summary:
      "Pleuran and beta-glucans powerfully activate your body's defences.",
    detail: `Pleuran — a specific beta-glucan fibre derived from P. ostreatus — has well-documented immune-modulating properties. In a 130-day study of 90 people with herpes simplex virus (HSV-1), a pleuran + vitamin C + zinc supplement significantly reduced symptom severity and duration. Pleuran has also improved symptoms in children with recurrent respiratory tract infections and reduced upper respiratory infections in athletes. An 8-week study in 41 people found that oyster mushroom extract heightened immunity by activating interferon-γ (IFN-γ) — a molecule critical in protecting against infection. These mushrooms also show antiviral and antibacterial effects.`,
    studyStat: "Activates interferon-γ (IFN-γ) immune response",
  },
  {
    icon: "🧠",
    title: "Brain & Nerve Health",
    color: "#1565c0",
    summary: "Nourishes the nervous system and supports cognitive function.",
    detail: `Oyster mushrooms are a natural source of ergothioneine — a powerful antioxidant amino acid that concentrates in brain tissue and protects neurons from oxidative damage. They also contain B vitamins, including niacin (B3), pantothenic acid (B5), and riboflavin, which are essential for energy production in brain cells and healthy neurotransmitter function. Choline — another nutrient found in oyster mushrooms — plays a direct role in memory, mood regulation, and nerve signal transmission.`,
    studyStat: null,
  },
  {
    icon: "⚖️",
    title: "Weight Management",
    color: "#00897b",
    summary: "Low-calorie, high-protein — perfect for healthy weight control.",
    detail: `With just 28 kcal per cup and 3g of protein, oyster mushrooms are one of the most nutrient-dense, calorie-light foods available. Their high dietary fibre content slows digestion, increases satiety, and helps prevent overeating. Their low carbohydrate profile also makes them an excellent choice for people on low-carb, keto-adjacent, or diabetic-friendly dietary plans. They make an ideal meat substitute that keeps you full without excess calories or cholesterol.`,
    studyStat: null,
  },
  {
    icon: "🦴",
    title: "Bone Strength",
    color: "#558b2f",
    summary: "One of the few plant sources of Vitamin D.",
    detail: `Oyster mushrooms are one of the very few non-animal sources of Vitamin D, which is critical for calcium absorption and bone mineralisation. They also supply phosphorus (8% DV per cup) — a mineral that works alongside calcium to build and maintain strong bones. This makes them especially valuable for vegetarians and vegans who may struggle to meet Vitamin D requirements through diet alone.`,
    studyStat: null,
  },
  {
    icon: "🔬",
    title: "Anti-Tumour Properties",
    color: "#00695c",
    summary: "Compounds studied for tumour-inhibiting effects in lab research.",
    detail: `Research in test tubes and animals suggests that oyster mushrooms may provide anti-tumour effects. Polysaccharides and lectins from P. ostreatus have shown the ability to inhibit cancer cell proliferation and stimulate apoptosis (programmed cell death) in lab settings. Promising results have been observed particularly against breast, colon, and prostate cancer cell lines. While human studies are still needed, regular dietary inclusion is considered part of a cancer-protective lifestyle.`,
    studyStat: null,
  },
  {
    icon: "🌿",
    title: "Anti-Inflammatory",
    color: "#e65100",
    summary:
      "Natural compounds help reduce chronic inflammation throughout the body.",
    detail: `Oyster mushrooms contain powerful anti-inflammatory compounds. A 2020 rat study found that oral treatment with P. ostreatus extract significantly reduced induced paw inflammation. Their phenolic compounds, flavonoids, and ergothioneine collectively suppress pro-inflammatory cytokines. Chronic inflammation underlies most lifestyle diseases including arthritis, diabetes, and cardiovascular disease — making regular mushroom consumption a natural protective strategy.`,
    studyStat: null,
  },
  {
    icon: "🦠",
    title: "Gut Health",
    color: "#4e342e",
    summary: "Feeds beneficial gut bacteria and supports healthy digestion.",
    detail: `A 2021 study found that supplementing the diet of obese rats with oyster mushrooms decreased the growth of pathogenic bacteria and increased the production of beneficial short-chain fatty acids in the gut. The dietary fibre — including prebiotic compounds — acts as fuel for beneficial bacteria like Lactobacillus and Bifidobacterium. A healthy gut microbiome is linked to improved immunity, better mental health, and reduced risk of colon disease.`,
    studyStat: null,
  },
];

// Updated vitamins — added Pantothenic Acid (B5) and Choline from reference
const vitamins = [
  {
    name: "Niacin (B3)",
    icon: "⚡",
    benefit: "Energy metabolism & DNA repair — 27% DV per cup",
  },
  {
    name: "Pantothenic Acid (B5)",
    icon: "🔋",
    benefit: "Hormone synthesis & energy production — 22% DV per cup",
  },
  {
    name: "Folate (B9)",
    icon: "🌿",
    benefit: "Cell division, DNA synthesis & foetal development",
  },
  {
    name: "Choline",
    icon: "🧬",
    benefit: "Memory, mood, nerve signalling & liver function",
  },
  {
    name: "Vitamin D",
    icon: "☀️",
    benefit: "Bone health, immune regulation & calcium absorption",
  },
  {
    name: "Vitamin C",
    icon: "🍋",
    benefit: "Antioxidant protection & immune support",
  },
];

// NEW — cooking section from reference "Versatile and Delicious"
const cookingMethods = [
  {
    icon: "🍜",
    method: "Soups & Stews",
    desc: "Add whole or sliced oyster mushrooms to broths and slow-cooked stews for a rich, umami depth.",
  },
  {
    icon: "🍝",
    method: "Pasta & Grains",
    desc: "Cook and toss into pasta, risotto, or grain bowls for a meaty, satisfying texture.",
  },
  {
    icon: "🥘",
    method: "Sauté with Garlic",
    desc: "Sauté in olive oil and garlic for a quick, nutritious side dish ready in under 5 minutes.",
  },
  {
    icon: "🥚",
    method: "Egg Dishes",
    desc: "Chop and add to frittatas, omelets, and quiches for extra flavour and nutrition.",
  },
  {
    icon: "🍢",
    method: "Grilled Skewers",
    desc: "Thread onto skewers with vegetables and protein like shrimp or chicken, then grill.",
  },
  {
    icon: "🔥",
    method: "Oven Roasted",
    desc: "Roast at high heat with olive oil and seasoning for crispy, flavour-packed mushrooms.",
  },
];

const faqs = [
  {
    q: "How often should I eat oyster mushrooms to see health benefits?",
    a: "Studies suggest consuming 80–150g of fresh oyster mushrooms (about a cup) 3–5 times per week. Clinical trials showing blood sugar reductions used 150g daily for 7 days, while immune studies used extract supplements for 8 weeks.",
  },
  {
    q: "Are oyster mushrooms safe for children and pregnant women?",
    a: "Yes — oyster mushrooms are generally safe for all age groups when consumed as part of a balanced diet. They provide folate, iron, choline, and B vitamins that are especially beneficial during pregnancy and child development.",
  },
  {
    q: "Can oyster mushrooms replace meat in a diet?",
    a: "Oyster mushrooms are an excellent partial meat substitute due to their protein content, meaty texture, and umami flavour. Combining them with legumes and whole grains creates a nutritionally complete protein profile.",
  },
  {
    q: "Do oyster mushrooms lose their nutritional value when cooked?",
    a: "Light cooking (sautéing, steaming, or stir-frying) preserves most nutrients. Some heat-sensitive vitamins like vitamin C are slightly reduced, but most minerals, B vitamins, and beta-glucans remain stable. Avoid over-boiling in excess water.",
  },
  {
    q: "What is pleuran and why does it matter for immunity?", // NEW from reference
    a: "Pleuran is a specific type of beta-glucan fibre derived from P. ostreatus. It has been clinically studied for its immune-modulating properties — shown to reduce HSV-1 symptom severity, improve outcomes in children with recurrent respiratory infections, and activate interferon-γ (IFN-γ) immune signalling.",
  },
  {
    q: "Are there any side effects of eating oyster mushrooms?",
    a: "Oyster mushrooms are very safe for most people. In rare cases, individuals with mushroom allergies may experience mild reactions. Consult a healthcare provider if you have specific medical conditions or take medications that interact with immunomodulators.",
  },
];

// ── Component ─────────────────────────────────────────────────────────────────
function Benefits() {
  const [openFaq, setOpenFaq] = useState(null);
  const [openBenefit, setOpenBenefit] = useState(null);

  return (
    <div className="benefits-page">
      <Helmet>
        <title>Oyster Mushroom Health Benefits &amp; Nutrition Facts | JAS Fresh</title>
        <meta name="description" content="Discover 11 science-backed health benefits of oyster mushrooms — heart health, immunity, blood sugar, brain health &amp; more. Fresh from our Bengaluru farm." />
        <meta name="keywords" content="oyster mushroom health benefits, oyster mushroom nutrition, pleurotus ostreatus benefits, mushroom immunity, oyster mushroom superfood" />
        <link rel="canonical" href="https://jasfreshmushroom.com/benefits" />
      </Helmet>

      {/* ── HERO ── */}
      <section className="bn-hero">
        <div className="bn-hero__overlay" />
        <div className="bn-hero__content">
          <span className="bn-tag">Health & Nutrition</span>
          <h1 className="bn-hero__title">
            Why Oyster Mushrooms Are
            <br />
            <span>Nature's Superfood</span>
          </h1>
          <p className="bn-hero__sub">
            Backed by peer-reviewed science and centuries of traditional use —
            discover the extraordinary health benefits packed inside every fresh
            oyster mushroom from JAS Fresh Mushroom.
          </p>
          <div className="bn-hero__pills">
            <span>🧬 Nutrient Dense</span>
            <span>💊 Vitamin Rich</span>
            <span>🌱 100% Natural</span>
            <span>🔬 Science Backed</span>
          </div>
        </div>
      </section>

      {/* ── INTRO ── */}
      <section className="bn-intro">
        <div className="bn-intro__text">
          <span className="bn-tag">Overview</span>
          <h2 className="bn-section-title">
            What Makes Oyster Mushrooms <span>Special?</span>
          </h2>
          <p>
            <em>Pleurotus ostreatus</em> — the oyster mushroom — is not just a
            delicious culinary ingredient. It is one of the most nutritionally
            complete foods on the planet, containing a rare combination of
            protein, fibre, vitamins, minerals, and bioactive compounds that
            benefit virtually every system in the human body.
          </p>
          <p>
            Unlike many so-called "superfoods", oyster mushrooms are affordable,
            widely available, easy to cook, and supported by a robust body of
            scientific research spanning immunology, oncology, cardiology, and
            metabolic health.
          </p>
          <p>
            At JAS Fresh Mushroom, we grow every variety under carefully
            controlled conditions to preserve maximum nutritional density — so
            you get the full benefit in every bite.
          </p>
        </div>
        <div className="bn-intro__img-wrap">
          <img
            src="https://res.cloudinary.com/dqcznvpuw/image/upload/v1777705510/IMG20260502084244_egjyvk.jpg"
            alt="Fresh oyster mushrooms"
          />
          <div className="bn-intro__quote">
            <span className="bn-intro__quote-mark">"</span>
            <p>Food is the most powerful medicine available to us.</p>
          </div>
        </div>
      </section>

      {/* ── NUTRITION TABLE ── */}
      <section className="bn-nutrition">
        <div className="bn-nutrition__header">
          <span className="bn-tag">Nutritional Profile</span>
          <h2 className="bn-section-title">
            What's Inside <span>Every Cup?</span>
          </h2>
          <p className="bn-nutrition__sub">
            One cup (86g) of raw oyster mushrooms delivers just 28 calories yet
            provides significant amounts of 8+ essential vitamins and minerals.
          </p>
        </div>

        <div className="bn-nutrition__grid">
          {nutritionFacts.map((item, i) => (
            <div
              className={`bn-nutr-card ${item.dv ? "bn-nutr-card--dv" : ""}`}
              key={i}
              style={{ animationDelay: `${i * 0.05}s` }}>
              {item.dv && <span className="bn-nutr-card__dv-badge">%DV</span>}
              <span className="bn-nutr-card__value">{item.value}</span>
              <span className="bn-nutr-card__label">{item.label}</span>
              <span className="bn-nutr-card__per">{item.per}</span>
            </div>
          ))}
        </div>

        <p className="bn-nutrition__note">
          * Values from USDA FoodData Central for raw P. ostreatus (1 cup /
          86g). %DV based on a 2,000 calorie diet.
        </p>
      </section>

      {/* ── HEALTH BENEFITS ACCORDION ── */}
      <section className="bn-benefits">
        <div className="bn-benefits__header">
          <span className="bn-tag">Health Benefits</span>
          <h2 className="bn-section-title">
            11 Science-Backed <span>Reasons to Eat More</span>
          </h2>
          <p className="bn-benefits__sub">
            Click any benefit to read the full scientific explanation.
          </p>
        </div>

        <div className="bn-benefits__grid">
          {healthBenefits.map((item, i) => (
            <div
              key={i}
              className={`bn-benefit-card ${openBenefit === i ? "bn-benefit-card--open" : ""}`}
              onClick={() => setOpenBenefit(openBenefit === i ? null : i)}
              style={{ "--accent": item.color }}>
              <div className="bn-benefit-card__head">
                <div className="bn-benefit-card__left">
                  <span className="bn-benefit-card__icon">{item.icon}</span>
                  <div>
                    <h3 className="bn-benefit-card__title">{item.title}</h3>
                    <p className="bn-benefit-card__summary">{item.summary}</p>
                  </div>
                </div>
                <span className="bn-benefit-card__toggle">
                  {openBenefit === i ? "−" : "+"}
                </span>
              </div>
              <div className="bn-benefit-card__body">
                {item.studyStat && (
                  <div className="bn-benefit-card__stat">
                    📊 {item.studyStat}
                  </div>
                )}
                <p>{item.detail}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── VITAMINS GRID ── */}
      <section className="bn-vitamins">
        <div className="bn-vitamins__header">
          <span className="bn-tag">Key Vitamins & Compounds</span>
          <h2 className="bn-section-title">
            Essential Nutrients <span>Found Inside</span>
          </h2>
        </div>
        <div className="bn-vitamins__grid">
          {vitamins.map((v, i) => (
            <div className="bn-vitamin-card" key={i}>
              <span className="bn-vitamin-card__icon">{v.icon}</span>
              <h4>{v.name}</h4>
              <p>{v.benefit}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── COMPARISON TABLE ── */}
      <section className="bn-compare">
        <div className="bn-compare__header">
          <span className="bn-tag">Why Choose Mushrooms?</span>
          <h2 className="bn-section-title">
            Oyster Mushrooms <span>vs Common Foods</span>
          </h2>
        </div>
        <div className="bn-compare__table-wrap">
          <table className="bn-table">
            <thead>
              <tr>
                <th>Nutrient</th>
                <th>🍄 Oyster Mushroom</th>
                <th>🥩 Chicken Breast</th>
                <th>🥦 Broccoli</th>
                <th>🥚 Egg</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Calories (kcal)</td>
                <td className="bn-table__highlight">28</td>
                <td>165</td>
                <td>34</td>
                <td>155</td>
              </tr>
              <tr>
                <td>Protein (g)</td>
                <td className="bn-table__highlight">3</td>
                <td>31</td>
                <td>2.8</td>
                <td>13</td>
              </tr>
              <tr>
                <td>Fat (g)</td>
                <td className="bn-table__highlight">&lt;1</td>
                <td>3.6</td>
                <td>0.4</td>
                <td>11</td>
              </tr>
              <tr>
                <td>Dietary Fibre (g)</td>
                <td className="bn-table__highlight">2</td>
                <td>0</td>
                <td>2.6</td>
                <td>0</td>
              </tr>
              <tr>
                <td>Vitamin D</td>
                <td className="bn-table__highlight">✓ Present</td>
                <td>Minimal</td>
                <td>✗ None</td>
                <td>✓ Present</td>
              </tr>
              <tr>
                <td>Cholesterol</td>
                <td className="bn-table__highlight">0 mg</td>
                <td>85 mg</td>
                <td>0 mg</td>
                <td>372 mg</td>
              </tr>
              <tr>
                <td>Beta-Glucans</td>
                <td className="bn-table__highlight">✓ High</td>
                <td>✗ None</td>
                <td>✗ None</td>
                <td>✗ None</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="bn-compare__note">
          Values per 100g (mushroom values per 86g cup). Source: USDA FoodData
          Central.
        </p>
      </section>

      {/* ── VERSATILE & DELICIOUS — NEW SECTION ── */}
      <section className="bn-cooking">
        <div className="bn-cooking__header">
          <span className="bn-tag">In the Kitchen</span>
          <h2 className="bn-section-title">
            Versatile, Delicious <span>& Easy to Cook</span>
          </h2>
          <p className="bn-cooking__sub">
            All parts of the oyster mushroom are edible — caps, gills, and
            stems. Here are six delicious ways to add them to your meals.
          </p>
        </div>
        <div className="bn-cooking__grid">
          {cookingMethods.map((c, i) => (
            <div
              className="bn-cooking-card"
              key={i}
              style={{ animationDelay: `${i * 0.08}s` }}>
              <span className="bn-cooking-card__icon">{c.icon}</span>
              <h4>{c.method}</h4>
              <p>{c.desc}</p>
            </div>
          ))}
        </div>
        <div className="bn-cooking__tip">
          <span>💡</span>
          <p>
            <strong>Quick tip:</strong> Oyster mushrooms cook in under 5
            minutes. Don't overcrowd the pan — cook in batches for the best
            golden sear.
          </p>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="bn-faq">
        <div className="bn-faq__header">
          <span className="bn-tag">Common Questions</span>
          <h2 className="bn-section-title">
            Frequently Asked <span>Questions</span>
          </h2>
        </div>
        <div className="bn-faq__list">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className={`bn-faq__item ${openFaq === i ? "bn-faq__item--open" : ""}`}
              onClick={() => setOpenFaq(openFaq === i ? null : i)}>
              <div className="bn-faq__question">
                <span>{faq.q}</span>
                <span className="bn-faq__icon">
                  {openFaq === i ? "−" : "+"}
                </span>
              </div>
              <div className="bn-faq__answer">
                <p>{faq.a}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bn-cta">
        <div className="bn-cta__content">
          <h2>Experience the Benefits Yourself</h2>
          <p>
            Order fresh, organically grown oyster mushrooms from JAS Fresh
            Mushroom and start nourishing your body with nature's most powerful
            superfood.
          </p>
          <div className="bn-cta__btns">
            <a href="/products" className="bn-cta__btn bn-cta__btn--primary">
              Shop Now →
            </a>
            <a href="/contact" className="bn-cta__btn bn-cta__btn--outline">
              Contact Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Benefits;
// // import React from 'react';
// // import '../styles/Benefits.css';

// // const Benefits = () => {
// //   return (
// //     <div className="benefits-container">
// //       <h1 className="benefits-title">Health Benefits & Nutrition</h1>

// //       <div className="benefits-grid">
// //         <div className="benefit-card">
// //           <h3>Immune System Support</h3>
// //           <p>Oyster mushrooms are rich in beta-glucans, which act as immunomodulators. They help activate your body's natural defense systems to fend off illness and keep your immune system strong.</p>
// //         </div>

// //         <div className="benefit-card">
// //           <h3>Antioxidant Powerhouse</h3>
// //           <p>Packed with ergothioneine, an antioxidant that protects your cells from oxidative stress and free radical damage, promoting anti-aging, reduced inflammation, and overall cellular health.</p>
// //         </div>

// //         <div className="benefit-card">
// //           <h3>Heart Health</h3>
// //           <p>Naturally low in sodium and high in potassium, oyster mushrooms help maintain healthy blood pressure. They also contain compounds such as statins that can naturally help lower your cholesterol levels.</p>
// //         </div>

// //         <div className="benefit-card">
// //           <h3>Brain Health & Memory</h3>
// //           <p>Research suggests that the specific amino acids and nutrients found in oyster mushrooms provide neuroprotective benefits, potentially reducing the risk of cognitive decline.</p>
// //         </div>

// //         <div className="benefit-card">
// //           <h3>Metabolic Health</h3>
// //           <p>With an incredibly low glycemic index and high dietary fiber content, they help regulate blood sugar levels, making them an excellent choice for diabetic diets and healthy weight management.</p>
// //         </div>

// //         <div className="benefit-card">
// //           <h3>Rich in Vitamins</h3>
// //           <p>They are an excellent source of essential vitamins, including Niacin (Vitamin B3) and Riboflavin (Vitamin B2), which are pivotal for energy production and a healthy nervous system.</p>
// //         </div>
// //       </div>

// //       <div className="nutrition-section">
// //         <h2>Nutritional Profile (per 100g)</h2>
// //         <ul className="nutrition-list">
// //           <li><span>Calories</span> <span>~33 kcal</span></li>
// //           <li><span>Protein</span> <span>3.3 g</span></li>
// //           <li><span>Carbohydrates</span> <span>6.1 g</span></li>
// //           <li><span>Dietary Fiber</span> <span>2.3 g</span></li>
// //           <li><span>Fat</span> <span>0.4 g</span></li>
// //           <li><span>Potassium</span> <span>420 mg</span></li>
// //           <li><span>Iron</span> <span>1.3 mg</span></li>
// //           <li><span>Niacin (B3)</span> <span>4.9 mg</span></li>
// //         </ul>
// //       </div>
// //     </div>
// //   );
// // };

// // export default Benefits;
// import React, { useState } from "react";
// import "../styles/Benefits.css";

// // ── Data ─────────────────────────────────────────────────────────────────────

// const nutritionFacts = [
//   { label: "Calories", value: "33 kcal", per: "per 100g" },
//   { label: "Protein", value: "3.3 g", per: "per 100g" },
//   { label: "Carbohydrates", value: "6.1 g", per: "per 100g" },
//   { label: "Dietary Fibre", value: "2.3 g", per: "per 100g" },
//   { label: "Total Fat", value: "0.4 g", per: "per 100g" },
//   { label: "Vitamin D", value: "~18 IU", per: "per 100g" },
//   { label: "Vitamin B12", value: "0.4 µg", per: "per 100g" },
//   { label: "Iron", value: "1.3 mg", per: "per 100g" },
//   { label: "Potassium", value: "420 mg", per: "per 100g" },
//   { label: "Niacin (B3)", value: "4.9 mg", per: "per 100g" },
// ];

// const healthBenefits = [
//   {
//     icon: "❤️",
//     title: "Heart Health",
//     color: "#e53935",
//     summary: "Supports healthy cholesterol and blood pressure levels.",
//     detail: `Oyster mushrooms contain beta-glucans — soluble fibres proven to reduce LDL (bad) cholesterol and support healthy blood pressure. They are also naturally low in sodium and fat, making them an excellent food for cardiovascular health. Studies show that regular consumption can reduce the risk of arterial plaque formation and improve overall heart function.`,
//   },
//   {
//     icon: "🛡️",
//     title: "Immune System Boost",
//     color: "#2e7d32",
//     summary: "Strengthens your body's natural defence system.",
//     detail: `Rich in polysaccharides, particularly beta-(1,3)(1,6)-glucans, oyster mushrooms powerfully stimulate macrophage and natural killer cell activity — your body\'s first line of defence. These compounds have been studied for their ability to enhance immune response, helping the body fight infections, inflammation, and even supporting recovery after illness.`,
//   },
//   {
//     icon: "🧠",
//     title: "Brain & Nerve Health",
//     color: "#6a1b9a",
//     summary: "Nourishes the nervous system and supports cognitive function.",
//     detail: `Oyster mushrooms are a natural source of ergothioneine — a powerful antioxidant amino acid that concentrates in brain tissue and protects neurons from oxidative damage. They also contain B vitamins, including niacin and riboflavin, which are essential for energy production in brain cells and maintaining healthy neurotransmitter levels. Regular consumption is linked to reduced cognitive decline.`,
//   },
//   {
//     icon: "⚖️",
//     title: "Weight Management",
//     color: "#f57c00",
//     summary: "Low-calorie, high-protein — perfect for healthy weight control.",
//     detail: `With just 33 kcal per 100g and 3.3g of protein, oyster mushrooms are one of the most nutrient-dense, calorie-light foods available. Their high dietary fibre content slows digestion, increases satiety, and helps prevent overeating. They make an excellent meat substitute that keeps you full longer without the excess calories, fat, or cholesterol.`,
//   },
//   {
//     icon: "🩸",
//     title: "Blood Sugar Control",
//     color: "#c62828",
//     summary: "Helps regulate blood glucose — beneficial for diabetics.",
//     detail: `The beta-glucans in oyster mushrooms slow glucose absorption in the intestines, preventing post-meal blood sugar spikes. Research published in multiple nutritional journals confirms that oyster mushroom extract can improve insulin sensitivity and reduce fasting blood glucose levels. Their low glycaemic index makes them safe and beneficial for people with Type 2 diabetes or pre-diabetic conditions.`,
//   },
//   {
//     icon: "🦴",
//     title: "Bone Strength",
//     color: "#1565c0",
//     summary: "Provides Vitamin D and minerals essential for bone density.",
//     detail: `Oyster mushrooms are one of the very few non-animal sources of Vitamin D, which is critical for calcium absorption and bone mineralisation. They also supply phosphorus and magnesium — minerals that work alongside calcium to build and maintain strong bones. This makes them especially valuable for vegetarians and vegans who may struggle to meet Vitamin D requirements.`,
//   },
//   {
//     icon: "🔬",
//     title: "Anti-Cancer Properties",
//     color: "#00695c",
//     summary: "Contains compounds studied for tumour-inhibiting effects.",
//     detail: `Multiple peer-reviewed studies have investigated the anti-tumour potential of oyster mushroom polysaccharides and lectins. These compounds have shown the ability to inhibit cancer cell proliferation and stimulate apoptosis (programmed cell death) in lab settings. Pleurotus ostreatus extracts have shown promising results particularly against breast, colon, and prostate cancer cell lines. While not a replacement for medical treatment, regular dietary inclusion is considered protective.`,
//   },
//   {
//     icon: "🌿",
//     title: "Anti-Inflammatory",
//     color: "#558b2f",
//     summary: "Natural compounds help reduce chronic inflammation.",
//     detail: `Chronic inflammation underlies most lifestyle diseases, including arthritis, diabetes, and cardiovascular disease. Oyster mushrooms contain powerful phenolic compounds, flavonoids, and ergothioneine that collectively suppress pro-inflammatory cytokines. Regular consumption helps lower systemic inflammation markers, offering natural relief and long-term protective benefits without the side effects associated with anti-inflammatory medications.`,
//   },
//   {
//     icon: "🫁",
//     title: "Respiratory Health",
//     color: "#0277bd",
//     summary: "Traditionally used to support lung and respiratory function.",
//     detail: `In traditional Chinese and Ayurvedic medicine, oyster mushrooms have long been used to support lung health. Modern research backs this — their polysaccharides have shown bronchodilatory properties and may help reduce the severity of respiratory infections. The antioxidants they contain also protect lung tissue from oxidative damage caused by pollution and smoking-related compounds.`,
//   },
//   {
//     icon: "🦠",
//     title: "Gut Health",
//     color: "#4e342e",
//     summary: "Feeds beneficial gut bacteria and supports digestion.",
//     detail: `The dietary fibre in oyster mushrooms — including prebiotic compounds — acts as fuel for beneficial gut bacteria like Lactobacillus and Bifidobacterium. A healthy gut microbiome is linked to improved immunity, better mental health, and reduced risk of colon cancer. The chitin and beta-glucan content also supports regular bowel movements and healthy intestinal lining integrity.`,
//   },
// ];

// const faqs = [
//   {
//     q: "How often should I eat oyster mushrooms to see health benefits?",
//     a: "Research suggests consuming 80–100g of fresh oyster mushrooms (about a cup) 3–5 times per week is sufficient to begin experiencing measurable health benefits, particularly in cholesterol and immune function.",
//   },
//   {
//     q: "Are oyster mushrooms safe for children and pregnant women?",
//     a: "Yes — oyster mushrooms are generally considered safe for all age groups, including children and pregnant women, when consumed as part of a balanced diet. They provide important nutrients like folate, iron, and B vitamins that are especially beneficial during pregnancy.",
//   },
//   {
//     q: "Can oyster mushrooms replace meat in a diet?",
//     a: "Oyster mushrooms are an excellent partial meat substitute due to their high protein content, meaty texture, and umami flavour. While they don't provide all amino acids in the same profile as meat, combining them with legumes and whole grains creates a complete protein profile.",
//   },
//   {
//     q: "Do oyster mushrooms lose their nutritional value when cooked?",
//     a: "Light cooking (sautéing, steaming, or stir-frying) preserves most nutrients. Some heat-sensitive vitamins like Vitamin C are reduced, but fat-soluble vitamins and most minerals remain stable. Avoid overcooking or boiling in excess water, which can leach water-soluble nutrients.",
//   },
//   {
//     q: "Are there any side effects of eating oyster mushrooms?",
//     a: "Oyster mushrooms are very safe for most people. In rare cases, individuals with mushroom allergies may experience mild reactions. It's always advisable to introduce any new food gradually and consult a healthcare provider if you have specific medical conditions or take medications that interact with immunomodulators.",
//   },
// ];

// const vitamins = [
//   { name: "Vitamin D", icon: "☀️", benefit: "Bone health & immune regulation" },
//   { name: "Niacin B3", icon: "⚡", benefit: "Energy metabolism & DNA repair" },
//   {
//     name: "Riboflavin",
//     icon: "🔋",
//     benefit: "Cell energy & red blood cell production",
//   },
//   {
//     name: "Vitamin B12",
//     icon: "🧬",
//     benefit: "Nerve function & red blood cell formation",
//   },
//   { name: "Folate B9", icon: "🌿", benefit: "Cell division & DNA synthesis" },
//   { name: "Vitamin C", icon: "🍋", benefit: "Antioxidant & immune support" },
// ];

// // ── Component ─────────────────────────────────────────────────────────────────
// function Benefits() {
//   const [openFaq, setOpenFaq] = useState(null);
//   const [openBenefit, setOpenBenefit] = useState(null);

//   return (
//     <div className="benefits-page">
//       {/* ── HERO ── */}
//       <section className="bn-hero">
//         <div className="bn-hero__overlay" />
//         <div className="bn-hero__content">
//           <span className="bn-tag">Health & Nutrition</span>
//           <h1 className="bn-hero__title">
//             Why Oyster Mushrooms Are
//             <br />
//             <span>Nature's Superfood</span>
//           </h1>
//           <p className="bn-hero__sub">
//             Backed by science and centuries of traditional use — discover the
//             extraordinary health benefits packed inside every fresh oyster
//             mushroom from JAS Fresh Mushroom.
//           </p>
//           <div className="bn-hero__pills">
//             <span>🧬 Nutrient Dense</span>
//             <span>💊 Vitamin Rich</span>
//             <span>🌱 100% Natural</span>
//             <span>🔬 Science Backed</span>
//           </div>
//         </div>
//       </section>

//       {/* ── QUICK INTRO ── */}
//       <section className="bn-intro">
//         <div className="bn-intro__text">
//           <span className="bn-tag">Overview</span>
//           <h2 className="bn-section-title">
//             What Makes Oyster Mushrooms <span>Special?</span>
//           </h2>
//           <p>
//             <em>Pleurotus ostreatus</em> — the oyster mushroom — is not just a
//             delicious culinary ingredient. It is one of the most nutritionally
//             complete foods on the planet, containing a rare combination of
//             protein, fibre, vitamins, minerals, and bioactive compounds that
//             benefit virtually every system in the human body.
//           </p>
//           <p>
//             Unlike many so-called "superfoods," oyster mushrooms are affordable,
//             widely available, easy to cook, and genuinely supported by a robust
//             body of scientific research spanning immunology, oncology,
//             cardiology, and metabolic health.
//           </p>
//           <p>
//             At JAS Fresh Mushroom, we grow every variety under carefully
//             controlled conditions to preserve maximum nutritional density — so
//             you get the full benefit in every bite.
//           </p>
//         </div>
//         <div className="bn-intro__img-wrap">
//           <img
//             src="https://images.unsplash.com/photo-1504545102780-26774c1bb073?auto=format&fit=crop&w=900&q=80"
//             alt="Fresh oyster mushrooms"
//           />
//           <div className="bn-intro__quote">
//             <span className="bn-intro__quote-mark">"</span>
//             <p>Food is the most powerful medicine available to us.</p>
//           </div>
//         </div>
//       </section>

//       {/* ── NUTRITION TABLE ── */}
//       <section className="bn-nutrition">
//         <div className="bn-nutrition__header">
//           <span className="bn-tag">Nutritional Profile</span>
//           <h2 className="bn-section-title">
//             What's Inside <span>Every 100g?</span>
//           </h2>
//           <p className="bn-nutrition__sub">
//             Oyster mushrooms are low in calories yet extraordinarily rich in
//             micronutrients — making them one of the best food choices for both
//             weight management and long-term health.
//           </p>
//         </div>

//         <div className="bn-nutrition__grid">
//           {nutritionFacts.map((item, i) => (
//             <div
//               className="bn-nutr-card"
//               key={i}
//               style={{ animationDelay: `${i * 0.06}s` }}>
//               <span className="bn-nutr-card__value">{item.value}</span>
//               <span className="bn-nutr-card__label">{item.label}</span>
//               <span className="bn-nutr-card__per">{item.per}</span>
//             </div>
//           ))}
//         </div>

//         <p className="bn-nutrition__note">
//           * Nutritional values are approximate and may vary slightly by variety
//           and growing conditions. Source: USDA National Nutrient Database.
//         </p>
//       </section>

//       {/* ── HEALTH BENEFITS ACCORDION ── */}
//       <section className="bn-benefits">
//         <div className="bn-benefits__header">
//           <span className="bn-tag">Health Benefits</span>
//           <h2 className="bn-section-title">
//             10 Science-Backed <span>Reasons to Eat More</span>
//           </h2>
//           <p className="bn-benefits__sub">
//             Click any benefit to read the full scientific explanation.
//           </p>
//         </div>

//         <div className="bn-benefits__grid">
//           {healthBenefits.map((item, i) => (
//             <div
//               key={i}
//               className={`bn-benefit-card ${openBenefit === i ? "bn-benefit-card--open" : ""}`}
//               onClick={() => setOpenBenefit(openBenefit === i ? null : i)}
//               style={{ "--accent": item.color }}>
//               <div className="bn-benefit-card__head">
//                 <div className="bn-benefit-card__left">
//                   <span className="bn-benefit-card__icon">{item.icon}</span>
//                   <div>
//                     <h3 className="bn-benefit-card__title">{item.title}</h3>
//                     <p className="bn-benefit-card__summary">{item.summary}</p>
//                   </div>
//                 </div>
//                 <span className="bn-benefit-card__toggle">
//                   {openBenefit === i ? "−" : "+"}
//                 </span>
//               </div>
//               <div className="bn-benefit-card__body">
//                 <p>{item.detail}</p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* ── VITAMINS GRID ── */}
//       <section className="bn-vitamins">
//         <div className="bn-vitamins__header">
//           <span className="bn-tag">Key Vitamins</span>
//           <h2 className="bn-section-title">
//             Essential Vitamins <span>Found Inside</span>
//           </h2>
//         </div>
//         <div className="bn-vitamins__grid">
//           {vitamins.map((v, i) => (
//             <div className="bn-vitamin-card" key={i}>
//               <span className="bn-vitamin-card__icon">{v.icon}</span>
//               <h4>{v.name}</h4>
//               <p>{v.benefit}</p>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* ── COMPARISON STRIP ── */}
//       <section className="bn-compare">
//         <div className="bn-compare__header">
//           <span className="bn-tag">Why Choose Mushrooms?</span>
//           <h2 className="bn-section-title">
//             Oyster Mushrooms <span>vs Common Foods</span>
//           </h2>
//         </div>
//         <div className="bn-compare__table-wrap">
//           <table className="bn-table">
//             <thead>
//               <tr>
//                 <th>Nutrient</th>
//                 <th>🍄 Oyster Mushroom</th>
//                 <th>🥩 Chicken Breast</th>
//                 <th>🥦 Broccoli</th>
//                 <th>🥚 Egg</th>
//               </tr>
//             </thead>
//             <tbody>
//               <tr>
//                 <td>Calories (kcal)</td>
//                 <td className="bn-table__highlight">33</td>
//                 <td>165</td>
//                 <td>34</td>
//                 <td>155</td>
//               </tr>
//               <tr>
//                 <td>Protein (g)</td>
//                 <td className="bn-table__highlight">3.3</td>
//                 <td>31</td>
//                 <td>2.8</td>
//                 <td>13</td>
//               </tr>
//               <tr>
//                 <td>Fat (g)</td>
//                 <td className="bn-table__highlight">0.4</td>
//                 <td>3.6</td>
//                 <td>0.4</td>
//                 <td>11</td>
//               </tr>
//               <tr>
//                 <td>Dietary Fibre (g)</td>
//                 <td className="bn-table__highlight">2.3</td>
//                 <td>0</td>
//                 <td>2.6</td>
//                 <td>0</td>
//               </tr>
//               <tr>
//                 <td>Vitamin D</td>
//                 <td className="bn-table__highlight">✓ Present</td>
//                 <td>Minimal</td>
//                 <td>✗ None</td>
//                 <td>✓ Present</td>
//               </tr>
//               <tr>
//                 <td>Cholesterol</td>
//                 <td className="bn-table__highlight">0 mg</td>
//                 <td>85 mg</td>
//                 <td>0 mg</td>
//                 <td>372 mg</td>
//               </tr>
//             </tbody>
//           </table>
//         </div>
//         <p className="bn-compare__note">
//           All values per 100g. Source: USDA FoodData Central.
//         </p>
//       </section>

//       {/* ── FAQ ── */}
//       <section className="bn-faq">
//         <div className="bn-faq__header">
//           <span className="bn-tag">Common Questions</span>
//           <h2 className="bn-section-title">
//             Frequently Asked <span>Questions</span>
//           </h2>
//         </div>
//         <div className="bn-faq__list">
//           {faqs.map((faq, i) => (
//             <div
//               key={i}
//               className={`bn-faq__item ${openFaq === i ? "bn-faq__item--open" : ""}`}
//               onClick={() => setOpenFaq(openFaq === i ? null : i)}>
//               <div className="bn-faq__question">
//                 <span>{faq.q}</span>
//                 <span className="bn-faq__icon">
//                   {openFaq === i ? "−" : "+"}
//                 </span>
//               </div>
//               <div className="bn-faq__answer">
//                 <p>{faq.a}</p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* ── CTA ── */}
//       <section className="bn-cta">
//         <div className="bn-cta__content">
//           <h2>Experience the Benefits Yourself</h2>
//           <p>
//             Order fresh, organically grown oyster mushrooms from JAS Fresh
//             Mushroom and start nourishing your body with nature's most powerful
//             superfood.
//           </p>
//           <div className="bn-cta__btns">
//             <a href="/products" className="bn-cta__btn bn-cta__btn--primary">
//               Shop Now →
//             </a>
//             <a href="/contact" className="bn-cta__btn bn-cta__btn--outline">
//               Contact Us
//             </a>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }

// export default Benefits;
