import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import { useNavigate } from "react-router-dom";
import "../styles/Product.css";

const categories = [
  "All",
  "Fresh Mushrooms",
  "Spawn & Seeds",
  "Grow Kits",
  "Dried & Processed",
  "Accessories",
];

const products = [
  // ── Fresh Mushrooms ──
  {
    id: 1,
    category: "Fresh Mushrooms",
    icon: "🍄",
    name: "Oyster Mushrooms",
    description:
      "Tender, flavourful oyster mushrooms hand-picked at peak freshness. Perfect for stir-fries, soups, and curries. Rich in protein, fibre, and essential vitamins.",
    tag: "Best Seller",
    img: "https://res.cloudinary.com/dqcznvpuw/image/upload/v1776157128/IMG20260325173205_wablqr.jpg",
    images: [
      "https://res.cloudinary.com/dqcznvpuw/image/upload/v1776157128/IMG20260325173205_wablqr.jpg",
      "https://images.unsplash.com/photo-1476718406336-bb5a9690ee2a?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1518977676601-b53f82aba655?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?auto=format&fit=crop&w=1200&q=85",
    ],
  },
  {
    id: 2,
    category: "Fresh Mushrooms",
    icon: "🍄",
    name: "Button Mushrooms",
    description:
      "Classic white button mushrooms with a mild, earthy taste. Versatile for pizzas, pastas, and sautés. Freshly harvested from our controlled grow rooms.",
    tag: "Popular",
    img: "https://images.unsplash.com/photo-1589367920969-ab8e050bbb04?auto=format&fit=crop&w=600&q=80",
    images: [
      "https://images.unsplash.com/photo-1589367920969-ab8e050bbb04?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1504545102780-26774c1bb073?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1476718406336-bb5a9690ee2a?auto=format&fit=crop&w=1200&q=85",
    ],
  },
  {
    id: 3,
    category: "Fresh Mushrooms",
    icon: "🍄",
    name: "Milky Mushrooms",
    description:
      "Large, firm milky mushrooms ideal for Indian cooking. High in protein and with a meaty texture that holds well in gravies and dry preparations.",
    tag: "Farm Fresh",
    img: "https://images.unsplash.com/photo-1518977676601-b53f82aba655?auto=format&fit=crop&w=600&q=80",
    images: [
      "https://images.unsplash.com/photo-1518977676601-b53f82aba655?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1589367920969-ab8e050bbb04?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?auto=format&fit=crop&w=1200&q=85",
    ],
  },
  {
    id: 4,
    category: "Fresh Mushrooms",
    icon: "🍄",
    name: "Portobello Mushrooms",
    description:
      "Thick, gourmet portobello caps perfect for grilling, stuffing, or using as a meat substitute. A restaurant-favourite variety grown right on our farm.",
    tag: "Gourmet",
    img: "https://images.unsplash.com/photo-1476718406336-bb5a9690ee2a?auto=format&fit=crop&w=600&q=80",
    images: [
      "https://images.unsplash.com/photo-1476718406336-bb5a9690ee2a?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1504545102780-26774c1bb073?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1518977676601-b53f82aba655?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1589367920969-ab8e050bbb04?auto=format&fit=crop&w=1200&q=85",
    ],
  },
  // ── Spawn & Seeds ──
  {
    id: 5,
    category: "Spawn & Seeds",
    icon: "🌾",
    name: "Oyster Mushroom Spawn",
    description:
      "High-quality oyster mushroom spawn cultivated in sterile conditions for maximum colonisation success. Suitable for straw, corn cob, and sawdust substrates.",
    tag: "Top Rated",
    img: "https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?auto=format&fit=crop&w=600&q=80",
    images: [
      "https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1504545102780-26774c1bb073?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1518977676601-b53f82aba655?auto=format&fit=crop&w=1200&q=85",
    ],
  },
  {
    id: 6,
    category: "Spawn & Seeds",
    icon: "🌾",
    name: "Button Mushroom Spawn",
    description:
      "Premium button mushroom spawn with high yield potential. Ideal for composted manure substrates. Trusted by home growers and commercial farmers alike.",
    tag: "Professional",
    img: "https://images.unsplash.com/photo-1504545102780-26774c1bb073?auto=format&fit=crop&w=600&q=80",
    images: [
      "https://images.unsplash.com/photo-1504545102780-26774c1bb073?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1589367920969-ab8e050bbb04?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?auto=format&fit=crop&w=1200&q=85",
    ],
  },
  {
    id: 7,
    category: "Spawn & Seeds",
    icon: "🌾",
    name: "Milky Mushroom Spawn",
    description:
      "Robust milky mushroom spawn suited to tropical climates. Germinates fast with excellent resistance to contamination under proper conditions.",
    tag: "Tropical",
    img: "https://images.unsplash.com/photo-1589367920969-ab8e050bbb04?auto=format&fit=crop&w=600&q=80",
    images: [
      "https://images.unsplash.com/photo-1589367920969-ab8e050bbb04?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1476718406336-bb5a9690ee2a?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1518977676601-b53f82aba655?auto=format&fit=crop&w=1200&q=85",
    ],
  },
  // ── Grow Kits ──
  {
    id: 8,
    category: "Grow Kits",
    icon: "📦",
    name: "Beginner Oyster Grow Kit",
    description:
      "Everything you need to grow your first flush of oyster mushrooms at home. Includes pre-inoculated substrate bag, instruction booklet, and spray bottle.",
    tag: "Starter Kit",
    img: "https://images.unsplash.com/photo-1518977676601-b53f82aba655?auto=format&fit=crop&w=600&q=80",
    images: [
      "https://images.unsplash.com/photo-1518977676601-b53f82aba655?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1504545102780-26774c1bb073?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?auto=format&fit=crop&w=1200&q=85",
    ],
  },
  {
    id: 9,
    category: "Grow Kits",
    icon: "📦",
    name: "Complete Farm Setup Kit",
    description:
      "A full starter pack for small-scale commercial cultivation. Includes spawn, substrate bags, lime powder, bleaching powder, and a step-by-step farming guide.",
    tag: "Commercial",
    img: "https://images.unsplash.com/photo-1476718406336-bb5a9690ee2a?auto=format&fit=crop&w=600&q=80",
    images: [
      "https://images.unsplash.com/photo-1476718406336-bb5a9690ee2a?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1589367920969-ab8e050bbb04?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1518977676601-b53f82aba655?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?auto=format&fit=crop&w=1200&q=85",
    ],
  },
  {
    id: 10,
    category: "Grow Kits",
    icon: "📦",
    name: "School & Lab Grow Kit",
    description:
      "Compact mushroom grow kit designed for educational demonstrations, school science projects, and lab environments. Safe, clean, and easy to manage.",
    tag: "Educational",
    img: "https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?auto=format&fit=crop&w=600&q=80",
    images: [
      "https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1504545102780-26774c1bb073?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1476718406336-bb5a9690ee2a?auto=format&fit=crop&w=1200&q=85",
    ],
  },
  // ── Dried & Processed ──
  {
    id: 11,
    category: "Dried & Processed",
    icon: "🥄",
    name: "Dried Oyster Mushrooms",
    description:
      "Sun-dried and dehydrated oyster mushrooms with an intense umami flavour. Long shelf life with no preservatives. Rehydrates beautifully for cooking.",
    tag: "Long Shelf Life",
    img: "https://images.unsplash.com/photo-1504545102780-26774c1bb073?auto=format&fit=crop&w=600&q=80",
    images: [
      "https://images.unsplash.com/photo-1504545102780-26774c1bb073?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1518977676601-b53f82aba655?auto=format&fit=crop&w=1200&q=85",
    ],
  },
  {
    id: 12,
    category: "Dried & Processed",
    icon: "🥄",
    name: "Mushroom Powder",
    description:
      "Fine-ground mushroom powder made from 100% pure dried oyster mushrooms. Add to soups, sauces, and smoothies for a natural nutrition and flavour boost.",
    tag: "Organic",
    img: "https://images.unsplash.com/photo-1518977676601-b53f82aba655?auto=format&fit=crop&w=600&q=80",
    images: [
      "https://images.unsplash.com/photo-1518977676601-b53f82aba655?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1589367920969-ab8e050bbb04?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1476718406336-bb5a9690ee2a?auto=format&fit=crop&w=1200&q=85",
    ],
  },
  // ── Accessories ──
  {
    id: 13,
    category: "Accessories",
    icon: "🛠️",
    name: "Plastic Growing Bags (50 pcs)",
    description:
      "High-quality, food-grade polypropylene bags designed for mushroom cultivation. Heat-resistant for autoclaving. Available in standard and long filter-patch sizes.",
    tag: "Consumable",
    img: "https://images.unsplash.com/photo-1589367920969-ab8e050bbb04?auto=format&fit=crop&w=600&q=80",
    images: [
      "https://images.unsplash.com/photo-1589367920969-ab8e050bbb04?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1504545102780-26774c1bb073?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?auto=format&fit=crop&w=1200&q=85",
    ],
  },
  {
    id: 14,
    category: "Accessories",
    icon: "🛠️",
    name: "Substrate Sterilisation Kit",
    description:
      "Includes measured lime powder and bleaching powder packs for sterilising your growing substrate. Enough for 10 standard cultivation batches.",
    tag: "Essential",
    img: "https://images.unsplash.com/photo-1476718406336-bb5a9690ee2a?auto=format&fit=crop&w=600&q=80",
    images: [
      "https://images.unsplash.com/photo-1476718406336-bb5a9690ee2a?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1518977676601-b53f82aba655?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1589367920969-ab8e050bbb04?auto=format&fit=crop&w=1200&q=85",
    ],
  },
  {
    id: 15,
    category: "Accessories",
    icon: "🛠️",
    name: "Humidity & Temperature Kit",
    description:
      "Digital hygrometer and thermometer combo for monitoring your grow room conditions. Accurate, easy to read, and essential for consistent results.",
    tag: "Monitoring",
    img: "https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?auto=format&fit=crop&w=600&q=80",
    images: [
      "https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1476718406336-bb5a9690ee2a?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1504545102780-26774c1bb073?auto=format&fit=crop&w=1200&q=85",
    ],
  },
];

// ── Review Modal ──────────────────────────────────────────────────────────────
function ReviewModal({ product, onClose }) {
  const [rating, setRating] = useState(0);
  const [hovered, setHovered] = useState(0);
  const [review, setReview] = useState("");
  const [name, setName] = useState("");
  const [done, setDone] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (rating === 0 || !review.trim() || !name.trim()) return;
    setDone(true);
  };

  return (
    <div className="pd-modal__backdrop" onClick={onClose}>
      <div className="pd-modal" onClick={(e) => e.stopPropagation()}>
        <button className="pd-modal__close" onClick={onClose}>
          ✕
        </button>

        {done ? (
          <div className="pd-modal__thanks">
            <span>⭐</span>
            <h3>Thank You, {name}!</h3>
            <p>
              Your review for <strong>{product.name}</strong> has been
              submitted.
            </p>
            <button className="pd-btn pd-btn--primary" onClick={onClose}>
              Close
            </button>
          </div>
        ) : (
          <>
            <div className="pd-modal__head">
              <span className="pd-modal__icon">{product.icon}</span>
              <div>
                <h3>Review Product</h3>
                <p>{product.name}</p>
              </div>
            </div>

            <form className="pd-modal__form" onSubmit={handleSubmit}>
              {/* Star rating */}
              <div className="pd-modal__stars">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    type="button"
                    key={star}
                    className={`pd-star ${star <= (hovered || rating) ? "pd-star--active" : ""}`}
                    onMouseEnter={() => setHovered(star)}
                    onMouseLeave={() => setHovered(0)}
                    onClick={() => setRating(star)}>
                    ★
                  </button>
                ))}
                <span className="pd-modal__rating-label">
                  {rating === 0
                    ? "Select a rating"
                    : ["", "Poor", "Fair", "Good", "Great", "Excellent"][
                        rating
                      ]}
                </span>
              </div>

              <div className="pd-modal__field">
                <label>Your Name</label>
                <input
                  type="text"
                  placeholder="e.g. Arjun"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>

              <div className="pd-modal__field">
                <label>Your Review</label>
                <textarea
                  rows={4}
                  placeholder="Share your experience with this product..."
                  value={review}
                  onChange={(e) => setReview(e.target.value)}
                  required
                />
              </div>

              <button
                type="submit"
                className="pd-btn pd-btn--primary pd-btn--full"
                disabled={rating === 0 || !review.trim() || !name.trim()}>
                Submit Review
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}

// ── Image Panel with Slider ───────────────────────────────────────────────────
function ImagePanel({ product, onClose, onContact, onReview }) {
  const images = product.images?.length ? product.images : [product.img];
  const total = images.length;

  const [current, setCurrent] = useState(0);
  const [incoming, setIncoming] = useState(null); // index of the entering slide
  const [direction, setDirection] = useState(null); // 'next' | 'prev'
  const [animating, setAnimating] = useState(false);
  const [dragOffset, setDragOffset] = useState(0); // live-drag px for rubber-band feel

  // Refs for touch / swipe tracking
  const touchStartX = React.useRef(null);
  const touchStartY = React.useRef(null);
  const dragX = React.useRef(0);

  // ── Navigate to a specific index ────────────────────────────────────────────
  const goTo = (idx, dir) => {
    if (animating || idx === current) return;
    const resolvedDir = dir ?? (idx > current ? "next" : "prev");
    setDirection(resolvedDir);
    setIncoming(idx);
    setAnimating(true);
    setTimeout(() => {
      setCurrent(idx);
      setIncoming(null);
      setAnimating(false);
      setDirection(null);
    }, 340);
  };

  const prev = () => goTo((current - 1 + total) % total, "prev");
  const next = () => goTo((current + 1) % total, "next");

  // ── Keyboard: Escape = close, Arrow keys = navigate ─────────────────────────
  React.useEffect(() => {
    const handler = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [current, animating, next, prev, onClose]);

  // ── Touch / Swipe handlers ───────────────────────────────────────────────────
  const onTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
    touchStartY.current = e.touches[0].clientY;
    dragX.current = 0;
  };

  const onTouchMove = (e) => {
    if (touchStartX.current === null || animating) return;
    const dx = e.touches[0].clientX - touchStartX.current;
    const dy = e.touches[0].clientY - touchStartY.current;
    // Only intercept horizontal swipes (not vertical scrolls)
    if (Math.abs(dx) > Math.abs(dy)) {
      e.preventDefault();
      dragX.current = dx;
      // Rubber-band: dampen & clamp the visual drag
      const clamped = Math.max(-80, Math.min(80, dx * 0.4));
      setDragOffset(clamped);
    }
  };

  const onTouchEnd = () => {
    setDragOffset(0);
    if (touchStartX.current === null) return;
    const dx = dragX.current;
    if (Math.abs(dx) > 50) {
      dx < 0 ? next() : prev();
    }
    touchStartX.current = null;
    touchStartY.current = null;
    dragX.current = 0;
  };

  // ── Reset to slide 0 whenever a new product is opened ───────────────────────
  React.useEffect(() => {
    setCurrent(0);
    setIncoming(null);
    setAnimating(false);
    setDirection(null);
    setDragOffset(0);
  }, [product.id]);

  // ── Resolve CSS class for each slide image ───────────────────────────────────
  const slideClass = (i) => {
    const cls = ["pd-panel__slide-img"];
    if (!animating && i === current) cls.push("pd-panel__slide-img--active");
    if (animating && i === current)
      cls.push(`pd-panel__slide-img--exit-${direction}`);
    if (animating && i === incoming)
      cls.push(`pd-panel__slide-img--enter-${direction}`);
    return cls.join(" ");
  };

  return (
    <>
      <div className="pd-panel__backdrop" onClick={onClose} />

      <div className="pd-panel">
        {/* ── Close button ── */}
        <button
          className="pd-panel__close"
          onClick={onClose}
          aria-label="Close panel">
          ✕
        </button>

        {/* ════════════════════════════════════════
            IMAGE SLIDER
        ════════════════════════════════════════ */}
        <div
          className="pd-panel__img-wrap"
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}>
          {/* Slider track — all images stacked, CSS handles visibility */}
          <div
            className="pd-panel__slider-track"
            style={{
              transform: dragOffset ? `translateX(${dragOffset}px)` : undefined,
              transition: dragOffset ? "none" : undefined,
            }}>
            {images.map((src, i) => (
              <img
                key={i}
                src={src}
                alt={`${product.name} — view ${i + 1}`}
                className={slideClass(i)}
                draggable={false}
              />
            ))}
          </div>

          {/* Bottom gradient fade */}
          <div className="pd-panel__img-overlay" />

          {/* Tag + category badges */}
          <span className="pd-panel__img-tag">{product.tag}</span>
          <span className="pd-panel__img-category">{product.category}</span>

          {/* Image counter pill  e.g. "2 / 4" */}
          {total > 1 && (
            <span className="pd-panel__counter">
              <span className="pd-panel__counter-current">{current + 1}</span>
              <span className="pd-panel__counter-sep"> / </span>
              <span className="pd-panel__counter-total">{total}</span>
            </span>
          )}

          {/* Mobile swipe hint */}
          {total > 1 && (
            <div className="pd-panel__swipe-hint" aria-hidden="true">
              ‹ swipe ›
            </div>
          )}

          {/* Prev / Next arrows — desktop */}
          {total > 1 && (
            <>
              <button
                className="pd-panel__arrow pd-panel__arrow--prev"
                onClick={prev}
                disabled={animating}
                aria-label="Previous image">
                ‹
              </button>
              <button
                className="pd-panel__arrow pd-panel__arrow--next"
                onClick={next}
                disabled={animating}
                aria-label="Next image">
                ›
              </button>
            </>
          )}

          {/* Progress dots at bottom of image (like reference) */}
          {total > 1 && (
            <div
              className="pd-panel__dots"
              role="tablist"
              aria-label="Image navigation">
              {images.map((_, i) => (
                <button
                  key={i}
                  role="tab"
                  aria-selected={i === current}
                  className={`pd-panel__dot ${i === current ? "pd-panel__dot--active" : ""}`}
                  onClick={() => goTo(i)}
                  aria-label={`Image ${i + 1} of ${total}`}
                />
              ))}
            </div>
          )}
        </div>
        {/* end .pd-panel__img-wrap */}

        {/* Thumbnail strip — horizontal scroll row below the main image */}
        {total > 1 && (
          <div className="pd-panel__thumbs" role="list">
            {images.map((src, i) => (
              <button
                key={i}
                role="listitem"
                className={`pd-panel__thumb-btn ${i === current ? "pd-panel__thumb-btn--active" : ""}`}
                onClick={() => goTo(i)}
                aria-label={`View image ${i + 1}`}>
                <img src={src.replace("w=1200", "w=120")} alt="" />
                {i === current && (
                  <div className="pd-panel__thumb-active-bar" />
                )}
              </button>
            ))}
          </div>
        )}

        {/* Product info content */}
        <div className="pd-panel__content">
          <div className="pd-panel__icon-row">
            <span className="pd-panel__icon">{product.icon}</span>
            <div className="pd-panel__title-group">
              <h2 className="pd-panel__name">{product.name}</h2>
              <span className="pd-panel__cat-label">{product.category}</span>
            </div>
          </div>

          <p className="pd-panel__desc">{product.description}</p>

          <div className="pd-panel__divider" />

          <div className="pd-panel__actions">
            <button className="pd-btn pd-btn--primary" onClick={onContact}>
              📞 Contact Us
            </button>
            <button className="pd-btn pd-btn--outline" onClick={onReview}>
              ⭐ Write a Review
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

// ── Main Component ────────────────────────────────────────────────────────────
function Product() {
  const navigate = useNavigate();
  const [activeCategory, setActiveCategory] = useState("All");
  const [reviewProduct, setReviewProduct] = useState(null);
  const [previewProduct, setPreviewProduct] = useState(null);

  const filtered1 =
    activeCategory === "All"
      ? products
      : products.filter((p) => p.category === activeCategory);
  const filtered = filtered1.filter(
    (p) =>
      p.id !== 3 &&
      p.id !== 4 &&
      p.id !== 7 &&
      p.id !== 8 &&
      p.id !== 10 &&
     
      p.id !== 14 &&
      p.id !== 15,
  );

  return (
    <div className="product-page">
      <Helmet>
        <title>
          Buy Oyster Mushroom,Oyster Mushroom Spawn, Grow Kits &amp; Supplies —
          JAS Fresh
        </title>
        <meta
          name="description"
          content="Buy Oyster Mushroom,Shop oyster mushroom spawn, beginner grow kits, dried mushrooms &amp; farming accessories. Lab-grade quality, shipped from Bengaluru across India in 24–48 hrs."
        />
        <link rel="canonical" href="https://jasfreshmushroom.com/products" />
      </Helmet>

      {/* ── HERO ── */}
      <section className="pd-hero">
        <div className="pd-hero__overlay" />
        <div className="pd-hero__content">
          <span className="pd-tag">Our Products</span>
          <h1 className="pd-hero__title">
            Fresh From Our <span>Farm to You</span>
          </h1>
          <p className="pd-hero__sub">
            Explore our full range of organically grown mushrooms, quality
            spawn, easy-to-use grow kits, and everything you need to start your
            own farm.
          </p>
        </div>
      </section>

      {/* ── SHIPPING BANNER ── */}
      <div className="pd-shipping-banner">
        <span className="pd-shipping-banner__icon">🚚</span>
        <span>
          Shipped fresh from <strong>Bengaluru</strong> — Pan-India delivery in{" "}
          <strong>24–48 hours</strong>. Free shipping on orders above ₹999.
        </span>
      </div>

      {/* ── SEO INTRO ── */}
      <div className="pd-seo-intro">
        <p>
          JAS Fresh is Bengaluru's trusted source for{" "}
          <strong>Fresh Oyster mushroom </strong>
          <strong>White Oyster mushroom </strong>
          <strong>Grey Oyster mushroom </strong>
          <strong>oyster mushroom spawn</strong>, ready-to-use
          <strong> mushroom grow kits</strong>, and complete{" "}
          <strong>mushroom farming supplies</strong>. Whether you are a home
          grower, a commercial farm, or a curious beginner, we have the right
          product for you. All spawn is produced in our contamination-free lab
          and shipped pan-India with live tracking.
        </p>
      </div>

      {/* ── FILTER TABS ── */}
      <div className="pd-filters">
        {categories.map((cat) => (
          <button
            key={cat}
            className={`pd-filter-btn ${activeCategory === cat ? "pd-filter-btn--active" : ""}`}
            onClick={() => setActiveCategory(cat)}>
            {cat}
          </button>
        ))}
      </div>

      {/* ── PRODUCT GRID ── */}
      <section className="pd-grid-section">
        <p className="pd-count">
          {filtered.length} product{filtered.length !== 1 ? "s" : ""} found
        </p>

        <div className="pd-grid">
          {filtered.map((product, i) => (
            <div
              className="pd-card"
              key={product.id}
              style={{ animationDelay: `${i * 0.06}s` }}>
              {/* Card image — click opens the panel */}
              <div
                className="pd-card__img-wrap pd-card__img-wrap--clickable"
                onClick={() => setPreviewProduct(product)}
                title="Click to view full image">
                <img
                  src={product.img}
                  alt={product.name}
                  className="pd-card__img"
                />
                <span className="pd-card__tag">{product.tag}</span>
                <span className="pd-card__category">{product.category}</span>
                {/* Hover hint overlay */}
                <div className="pd-card__view-hint">
                  <span>🔍 View Image</span>
                </div>
              </div>

              {/* Card body */}
              <div className="pd-card__body">
                <div className="pd-card__icon-row">
                  <span className="pd-card__icon">{product.icon}</span>
                </div>
                <h3 className="pd-card__name">{product.name}</h3>
                <p className="pd-card__desc">{product.description}</p>
              </div>

              {/* Card actions */}
              <div className="pd-card__actions">
                <button
                  className="pd-btn pd-btn--primary"
                  onClick={() => navigate("/contact")}>
                  📞 Contact Us
                </button>
                <button
                  className="pd-btn pd-btn--outline"
                  onClick={() => setReviewProduct(product)}>
                  ⭐ Write a Review
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── MUSHROOM BENEFITS STRIP ── */}
      <section className="pd-benefits-strip">
        <div className="pd-benefits-strip__grid">
          <div className="pd-benefits-strip__card">
            <span>✅</span>
            <h3>High Germination Rate</h3>
            <p>
              Lab-tested spawn with strong mycelium for faster colonisation and
              better yields per flush.
            </p>
          </div>
          <div className="pd-benefits-strip__card">
            <span>✅</span>
            <h3>Multiple Substrate Options</h3>
            <p>
              Compatible with straw, sawdust, and cardboard — flexible for any
              home or commercial setup.
            </p>
          </div>
          <div className="pd-benefits-strip__card">
            <span>✅</span>
            <h3>Pan-India Shipping</h3>
            <p>
              Packed fresh in Bengaluru and dispatched within 24–48 hours with
              temperature-safe packaging.
            </p>
          </div>
        </div>
      </section>

      {/* ── CTA STRIP ── */}
      <section className="pd-cta">
        <h2>Need a Custom Order or Bulk Supply?</h2>
        <p>
          We work directly with restaurants, retailers, and agro-entrepreneurs.
          Get in touch for wholesale pricing.
        </p>
        <button className="pd-cta__btn" onClick={() => navigate("/contact")}>
          Talk to Us →
        </button>
      </section>

      {/* ── Review Modal ── */}
      {reviewProduct && (
        <ReviewModal
          product={reviewProduct}
          onClose={() => setReviewProduct(null)}
        />
      )}

      {/* ── Image Preview Panel ── */}
      {previewProduct && (
        <ImagePanel
          product={previewProduct}
          onClose={() => setPreviewProduct(null)}
          onContact={() => {
            setPreviewProduct(null);
            navigate("/contact");
          }}
          onReview={() => {
            setPreviewProduct(null);
            setReviewProduct(previewProduct);
          }}
        />
      )}
    </div>
  );
}

export default Product;
