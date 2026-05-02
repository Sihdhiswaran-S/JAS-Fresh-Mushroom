import React from "react";
import { Helmet } from "react-helmet-async";
import "../styles/About.css";

const values = [
  {
    icon: "🌱",
    title: "Organic Farming",
    desc: "Every mushroom we grow is cultivated using 100% natural methods — no chemicals, no shortcuts, just pure nature.",
  },
  {
    icon: "♻️",
    title: "Sustainability",
    desc: "Our growing process recycles agricultural waste into nutrient-rich substrate, closing the loop on farm sustainability.",
  },
  {
    icon: "🤝",
    title: "Community First",
    desc: "We partner with local farmers and communities to spread knowledge, create livelihoods, and grow together.",
  },
  {
    icon: "🔬",
    title: "Quality Assured",
    desc: "Each batch is carefully monitored from spawn to harvest, ensuring peak nutrition and flavour in every pack.",
  },
];

// const team = [
//   {
//     name: "Arjun Selvam",
//     role: "Founder & Head Cultivator",
//     img: "https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&w=400&q=80",
//   },
//   {
//     name: "Priya Nair",
//     role: "Agro-Scientist",
//     img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80",
//   },
//   {
//     name: "Rajan Kumar",
//     role: "Operations Manager",
//     img: "https://images.unsplash.com/photo-1607990281513-2c110a25bd8c?auto=format&fit=crop&w=400&q=80",
//   },
// ];

// const milestones = [
//   {
//     year: "2018",
//     event:
//       "JAS Fresh Mushroom founded in a small farm shed with a single grow room.",
//   },
//   {
//     year: "2020",
//     event:
//       "Expanded to 12 varieties and partnered with 30+ local retailers across the region.",
//   },
//   {
//     year: "2022",
//     event: "Launched our organic certification and online delivery platform.",
//   },
//   {
//     year: "2024",
//     event:
//       "Reached 5,000+ happy customers and opened our second cultivation facility.",
//   },
// ];

function About() {
  return (
    <div className="about-page">
      <Helmet>
        <title>About JAS Fresh — Bengaluru Oyster Mushroom Farm &amp; Supplier</title>
        <meta name="description" content="Learn about JAS Fresh Mushroom — a Bengaluru-based oyster mushroom farm committed to organic cultivation, sustainability, and supplying fresh mushrooms across India." />
        <link rel="canonical" href="https://jasfreshmushroom.com/about" />
      </Helmet>

      {/* ── HERO BANNER ── */}
      <section className="ab-hero">
        <div className="ab-hero__overlay" />
        <div className="ab-hero__content">
          <span className="ab-tag">Who We Are</span>
          <h1 className="ab-hero__title">
            Grown with Purpose,
            <br />
            <span>Harvested with Care</span>
          </h1>
          <p className="ab-hero__sub">
            JAS Fresh Mushroom is a family-rooted agro-farm dedicated to
            bringing the freshest, most nutritious mushrooms from our fields to
            your table — sustainably and naturally.
          </p>
        </div>
        <div className="ab-hero__scroll">↓ Scroll to explore</div>
      </section>

      {/* ── OUR STORY ── */}
      <section className="ab-story">
        <div className="ab-story__img-wrap">
          <img
            src="https://res.cloudinary.com/dqcznvpuw/image/upload/v1777705510/IMG20260502084244_egjyvk.jpg"
            alt="Our mushroom farm"
            className="ab-story__img"
          />
          <div className="ab-story__img-badge">
            <span className="ab-story__img-badge-year">Est. 2026</span>
            <span className="ab-story__img-badge-label">
              JAS Fresh Mushroom
            </span>
          </div>
        </div>
        <div className="ab-story__text">
          <span className="ab-tag">Our Story</span>
          <h2 className="ab-section-title">
            From a Small Shed <span>to a Growing Legacy</span>
          </h2>
          <p>
            It all began in 2026 when our founder is Abhinaya and Sihdhiswaran noticed that the
            local market lacked access to fresh, organically grown mushrooms.
            Armed with a passion for sustainable agriculture and a small grow
            room, JAS Fresh Mushroom was born.
          </p>
          <p>
            What started as a single variety — oyster mushrooms — quickly
            expanded as demand grew and our knowledge deepened. Today we
            cultivate over 12 varieties across two facilities, supplying
            households, restaurants, and retailers with the finest quality
            mushrooms available.
          </p>
          <p>
            We believe that good food starts with good farming — and good
            farming starts with respect for the earth, the community, and the
            science of nature.
          </p>
          {/* <div className="ab-story__stats">
            <div className="ab-stat">
              <span className="ab-stat__num">12+</span>
              <span className="ab-stat__label">Varieties</span>
            </div>
            <div className="ab-stat">
              <span className="ab-stat__num">5K+</span>
              <span className="ab-stat__label">Customers</span>
            </div>
            <div className="ab-stat">
              <span className="ab-stat__num">6+</span>
              <span className="ab-stat__label">Years Growing</span>
            </div>
            <div className="ab-stat">
              <span className="ab-stat__num">2</span>
              <span className="ab-stat__label">Facilities</span>
            </div>
          </div> */}
        </div>
      </section>

      {/* ── MISSION & VISION ── */}
      <section className="ab-mv">
        <div className="ab-mv__card ab-mv__card--mission">
          <div className="ab-mv__icon">🎯</div>
          <h3>Our Mission</h3>
          <p>
            To make fresh, organic, and nutritionally rich mushrooms accessible
            to every household — grown sustainably, delivered freshly, and
            priced fairly.
          </p>
        </div>
        <div className="ab-mv__divider" />
        <div className="ab-mv__card ab-mv__card--vision">
          <div className="ab-mv__icon">🌍</div>
          <h3>Our Vision</h3>
          <p>
            To become the most trusted agro-mushroom brand in the region,
            pioneering sustainable farming practices that benefit both people
            and the planet for generations to come.
          </p>
        </div>
      </section>

      {/* ── VALUES ── */}
      <section className="ab-values">
        <div className="ab-values__header">
          <span className="ab-tag">What Drives Us</span>
          <h2 className="ab-section-title">
            Our Core <span>Values</span>
          </h2>
        </div>
        <div className="ab-values__grid">
          {values.map((v, i) => (
            <div
              className="ab-value-card"
              key={i}
              style={{ animationDelay: `${i * 0.1}s` }}>
              <span className="ab-value-card__icon">{v.icon}</span>
              <h4>{v.title}</h4>
              <p>{v.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── JOURNEY / TIMELINE ── */}
      {/* <section className="ab-timeline">
          <div className="ab-timeline__header">
            <span className="ab-tag">Our Journey</span>
            <h2 className="ab-section-title">
              Milestones That <span>Matter</span>
            </h2>
          </div>
          <div className="ab-timeline__track">
            {milestones.map((m, i) => (
              <div
                className={`ab-timeline__item ${i % 2 === 0 ? "ab-timeline__item--left" : "ab-timeline__item--right"}`}
                key={i}>
                <div className="ab-timeline__dot" />
                <div className="ab-timeline__card">
                  <span className="ab-timeline__year">{m.year}</span>
                  <p>{m.event}</p>
                </div>
              </div>
            ))}
            <div className="ab-timeline__line" />
          </div>
        </section> */}

      {/* ── TEAM ── */}
      {/* <section className="ab-team">
        <div className="ab-team__header">
          <span className="ab-tag">The People Behind It</span>
          <h2 className="ab-section-title">
            Meet Our <span>Team</span>
          </h2>
        </div>
        <div className="ab-team__grid">
          {team.map((member, i) => (
            <div className="ab-team__card" key={i}>
              <div className="ab-team__img-wrap">
                <img src={member.img} alt={member.name} />
              </div>
              <h4>{member.name}</h4>
              <span>{member.role}</span>
            </div>
          ))}
        </div>
      </section> */}

      {/* ── CTA BANNER ── */}
      <section className="ab-cta">
        <div className="ab-cta__content">
          <h2>Ready to taste the difference?</h2>
          <p>
            Explore our full range of fresh, organic mushrooms — delivered right
            to your door.
          </p>
          <a href="/products" className="ab-cta__btn">
            Explore Products →
          </a>
        </div>
      </section>
    </div>
  );
}

export default About;
