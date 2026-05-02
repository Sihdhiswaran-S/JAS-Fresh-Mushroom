import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/HomeDescription.css";

const circleImages = [
  "https://res.cloudinary.com/dqcznvpuw/image/upload/v1776156969/IMG20260409121804_ygf2rk.jpg",
  // "https://i.pinimg.com/736x/bf/89/79/bf89791bcc300eff4636c70c72a8f1a1.jpg",
  "https://res.cloudinary.com/dqcznvpuw/image/upload/v1776157135/IMG20260409121700_kmubzx.jpg",
  "https://res.cloudinary.com/dqcznvpuw/image/upload/v1776157126/IMG20260409121611_bkriyl.jpg",
  "https://res.cloudinary.com/dqcznvpuw/image/upload/v1776157128/IMG20260325173205_wablqr.jpg",
];

function HomeDescription() {
  const [activeIndex, setActiveIndex] = useState(0);
  const intervalRef = useRef(null);
  const navigate = useNavigate();

  const startSlide = () => {
    intervalRef.current = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % circleImages.length);
    }, 2800);
  };

  const stopSlide = () => clearInterval(intervalRef.current);

  useEffect(() => {
    startSlide();
    return () => stopSlide();
  }, []);

  return (
    <section className="about__section">
      {/* ── LEFT: Description ── */}
      <div className="about__left">
        <p className="about__tag">100% Organic & Natural</p>

        <h2 className="about__title">
          Nature's Finest <br />
          <span>Fresh Mushrooms</span>
        </h2>

        <p className="about__desc">
          At <strong>JAS Fresh Mushroom</strong>, we cultivate premium-quality
          mushrooms grown in the most natural conditions — free from chemicals,
          pesticides, and artificial additives. From the earthy richness of
          Portobello to the delicate texture of Oyster mushrooms, Mushrooms that
          we grow is hand-picked at peak freshness to deliver the best flavour
          and nutrition straight to your table.
        </p>

        <p className="about__desc">
          Packed with essential vitamins, minerals, and antioxidants, our
          mushrooms support a healthy lifestyle while elevating every meal.
          Whether you're a home cook or a professional chef, JAS brings the
          farm's freshness right to your kitchen — sustainably grown, ethically
          harvested, and always fresh.
        </p>

        {/* <div className="about__stats">
          <div className="about__stat">
            <span className="about__stat-number">12+</span>
            <span className="about__stat-label">Varieties</span>
          </div>
          <div className="about__stat">
            <span className="about__stat-number">100%</span>
            <span className="about__stat-label">Organic</span>
          </div>
          <div className="about__stat">
            <span className="about__stat-number">5K+</span>
            <span className="about__stat-label">Happy Customers</span>
          </div>
        </div> */}

        <button className="about__btn" onClick={() => navigate("/products")}>
          Explore Products
          <span className="about__btn-arrow">→</span>
        </button>
      </div>

      {/* ── RIGHT: Circle Image Slider ── */}
      <div
        className="about__right"
        onMouseEnter={stopSlide}
        onMouseLeave={startSlide}>
        {/* Decorative ring */}
        <div className="about__ring" />

        {/* Main circle image */}
        <div className="about__circle-main">
          {circleImages.map((src, i) => (
            <img
              key={i}
              src={src}
              alt={`Mushroom ${i + 1}`}
              className={`about__circle-img ${i === activeIndex ? "about__circle-img--active" : ""}`}
            />
          ))}
        </div>

        {/* Orbiting thumbnail dots */}
        <div className="about__orbit">
          {circleImages.map((src, i) => (
            <button
              key={i}
              className={`about__thumb ${i === activeIndex ? "about__thumb--active" : ""}`}
              style={{ "--i": i, "--total": circleImages.length }}
              onClick={() => setActiveIndex(i)}
              aria-label={`View mushroom image ${i + 1}`}>
              <img src={src} alt="" />
            </button>
          ))}
        </div>

        {/* Floating badge */}
        <div className="about__badge">
          <span className="about__badge-icon">🍄</span>
          <span className="about__badge-text">Farm Fresh</span>
        </div>
      </div>
    </section>
  );
}

export default HomeDescription;
