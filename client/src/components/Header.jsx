import React, { useState } from "react";
import "../styles/Header.css";
import "../styles/Link_fix.css";
import "../styles/logo.css";
import { Link } from "react-router-dom";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <div className="headermainclass">
        {/* ── Logo + Brand ── */}
        <div className="logo__wrapper">
          <img
            src=
              "https://res.cloudinary.com/dqcznvpuw/image/upload/v1776156825/jaslogoimage_uifuuj.png"
            alt="JAS Fresh Mushroom Logo"
            className="logo__img"
          />
          <div className="logo__text">
            <span className="logo__name">JAS</span>
            <samp className="logo__tagline">fresh mushroom</samp>
          </div>
          <div className="logo__wrapper"></div>
        </div>

        {/* Desktop Nav */}
        <nav className={menuOpen ? "nav-open" : ""}>
          <Link to="/">
            <h1>Home</h1>
          </Link>
          <Link to="/about">
            <h1>About</h1>
          </Link>
          <Link to="/work">
            <h1>Work</h1>
          </Link>
          <Link to="/products">
            <h1>Products</h1>
          </Link>
          <Link to="/benefits">
            <h1>Benefits</h1>
          </Link>
          {/* <Link to="/contact">
            <h1>Contact</h1>
          </Link> */}
          <Link to="/contact">
            <h1>Contact</h1>
          </Link>
        </nav>

        {/* Hamburger Button */}
        <button
          className={`burger ${menuOpen ? "burger--open" : ""}`}
          onClick={() => setMenuOpen((o) => !o)}
          aria-label="Toggle menu">
          <span className="burger__bar" />
          <span className="burger__bar" />
          <span className="burger__bar" />
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      <div className={`mobile-menu ${menuOpen ? "mobile-menu--open" : ""}`}>
        <Link to="/" onClick={() => setMenuOpen(false)}>
          <h1>Home</h1>
        </Link>
        <Link to="/about" onClick={() => setMenuOpen(false)}>
          <h1>About</h1>
        </Link>
        <Link to="/work" onClick={() => setMenuOpen(false)}>
          <h1>Work</h1>
        </Link>
        <Link to="/products" onClick={() => setMenuOpen(false)}>
          <h1>Products</h1>
        </Link>
        <Link to="/benefits" onClick={() => setMenuOpen(false)}>
          <h1>Benefits</h1>
        </Link>
        <Link to="/contact" onClick={() => setMenuOpen(false)}>
          <h1>Contact</h1>
        </Link>
      </div>
    </>
  );
}

export default Header;