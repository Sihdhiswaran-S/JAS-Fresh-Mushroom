import React from "react";
import styled, { keyframes, createGlobalStyle } from "styled-components";
import { Link } from "react-router-dom";
import logo from "../assets/jaslogoimage.png";

// ─── Global Font ─────────────────────────────────────────────────────────────
const GlobalFont = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700;900&display=swap');
`;

// ─── Animation ───────────────────────────────────────────────────────────────
const fadeUp = keyframes`
  from { opacity: 0; transform: translateY(14px); }
  to   { opacity: 1; transform: translateY(0); }
`;

// ─── Styled Components ───────────────────────────────────────────────────────

const FooterWrapper = styled.footer`
  background-color: #ffffff;
  font-family: "Poppins", sans-serif;
  border-top: 2px solid #2e7d32;
  box-shadow: 0 -2px 16px rgba(46, 125, 50, 0.1);
  padding: 56px 60px 0;
  position: relative;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    background: linear-gradient(
      to bottom,
      rgba(230, 245, 230, 0.45) 0%,
      rgba(255, 255, 255, 0.98) 60%
    );
    pointer-events: none;
  }

  @media (max-width: 1199px) {
    padding: 48px 40px 0;
  }
  @media (max-width: 768px) {
    padding: 40px 24px 0;
  }
  @media (max-width: 468px) {
    padding: 32px 20px 0;
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1.7fr 1fr 1fr;
  gap: 48px;
  position: relative;
  animation: ${fadeUp} 0.6s ease both;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr 1fr;
    gap: 36px;
  }

  @media (max-width: 468px) {
    grid-template-columns: 1fr;
    gap: 28px;
  }
`;

/* ── Brand Column ── */
const BrandCol = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
`;

const LogoRow = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

const LogoImg = styled.img`
  width: 70px;
  height: 70px;
  object-fit: contain;
  border-radius: 8px;
  flex-shrink: 0;
  transition:
    transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1),
    filter 0.3s ease;

  &:hover {
    transform: scale(1.08);
    filter: drop-shadow(0 4px 10px rgba(46, 125, 50, 0.4));
  }
`;

const LogoText = styled.div`
  display: flex;
  flex-direction: column;
  line-height: 1;
  gap: 3px;
`;

const LogoMain = styled.span`
  font-size: 1.7rem;
  font-weight: 900;
  color: #1b5e20;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  text-shadow: 0 1px 4px rgba(255, 255, 255, 0.6);
`;

const LogoSub = styled.samp`
  font-family: "Poppins", sans-serif;
  font-size: 0.6rem;
  font-weight: 400;
  color: #1a1a1a;
  letter-spacing: 0.22em;
  text-transform: uppercase;
`;

const Tagline = styled.p`
  font-size: 0.82rem;
  font-weight: 400;
  line-height: 1.75;
  color: #4a6b4c;
  letter-spacing: 0.02em;
  max-width: 260px;
`;

const SocialRow = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 4px;
  flex-wrap: wrap;
`;

const SocialLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  border: 2px solid rgba(46, 125, 50, 0.3);
  border-radius: 8px;
  color: #2e7d32;
  background-color: rgba(241, 248, 241, 0.7);
  text-decoration: none;
  cursor: pointer;
  transition: all 0.25s ease;

  svg {
    width: 15px;
    height: 15px;
    transition: transform 0.25s ease;
  }

  &:hover {
    background-color: #2e7d32;
    border-color: #2e7d32;
    color: #ffffff;
    box-shadow: 0 2px 10px rgba(46, 125, 50, 0.35);
    transform: translateY(-2px);
    svg {
      transform: scale(1.1);
    }
  }
`;

/* ── Nav Columns ── */
const NavCol = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const ColHeading = styled.h4`
  font-family: "Poppins", sans-serif;
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: #1b5e20;
  margin-bottom: 6px;
  position: relative;
  padding-bottom: 8px;

  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 28px;
    height: 2px;
    background-color: #2e7d32;
    border-radius: 2px;
  }
`;

const NavLink = styled(Link)`
  font-size: 0.82rem;
  font-weight: 400;
  color: #1a1a1a;
  text-decoration: none;
  letter-spacing: 0.03em;
  padding: 3px 0 3px 0;
  border-left: 3px solid transparent;
  transition:
    color 0.25s ease,
    padding-left 0.25s ease,
    border-color 0.25s ease;
  cursor: pointer;

  &:hover {
    color: #2e7d32;
    padding-left: 8px;
    border-left-color: #2e7d32;
  }
`;

/* ── Bottom Bar ── */
const BottomBar = styled.div`
  margin-top: 48px;
  padding: 18px 0;
  border-top: 1px solid rgba(46, 125, 50, 0.18);
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  flex-wrap: wrap;
  position: relative;

  @media (max-width: 600px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 8px;
  }
`;

const Copyright = styled.span`
  font-size: 0.72rem;
  font-weight: 400;
  color: #4a6b4c;
  letter-spacing: 0.04em;
`;

const LegalLinks = styled.div`
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
`;

const LegalLink = styled.a`
  font-size: 0.72rem;
  font-weight: 400;
  color: #4a6b4c;
  text-decoration: none;
  letter-spacing: 0.04em;
  position: relative;
  cursor: pointer;
  transition: color 0.2s ease;

  &::after {
    content: "";
    position: absolute;
    bottom: -1px;
    left: 0;
    right: 0;
    height: 1px;
    background-color: #2e7d32;
    transform: scaleX(0);
    transform-origin: left;
    transition: transform 0.25s ease;
  }

  &:hover {
    color: #2e7d32;
    &::after {
      transform: scaleX(1);
    }
  }
`;

// ─── SVG Icons ───────────────────────────────────────────────────────────────
const InstagramIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none" />
  </svg>
);

const FacebookIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

const YouTubeIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor">
    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
  </svg>
);

const WhatsAppIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" />
  </svg>
);

// ─── Data ────────────────────────────────────────────────────────────────────
const NAV_COLS = [
  {
    heading: "Help",
    links: [
      { label: "Track My Order", to: "/contact" },
      { label: "Returns & Exchanges", to: "/contact" },
      { label: "Shipping Info", to: "/contact" },
      { label: "Contact Us", to: "/contact" },
    ],
  },
  {
    heading: "Company",
    links: [
      { label: "About Us", to: "/about" },
      { label: "Sustainability", to: "/about" },
      { label: "Careers", to: "/about" },
      { label: "Press", to: "/about" },
    ],
  },
];

const SOCIALS = [
  {
    label: "Instagram",
    icon: <InstagramIcon />,
    href: "https://www.instagram.com/jas_fresh_mushroom_",
  },
  { label: "Facebook", icon: <FacebookIcon />, href: "" },
  { label: "YouTube", icon: <YouTubeIcon />, href: "" },
  {
    label: "WhatsApp",
    icon: <WhatsAppIcon />,
    href: "https://wa.me/8496801546",
  },
];
// ─── Component ───────────────────────────────────────────────────────────────
const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <>
      <GlobalFont />
      <FooterWrapper>
        <Grid>
          {/* ── Brand Column ── */}
          <BrandCol>
            <LogoRow>
              <LogoImg
                src="https://res.cloudinary.com/dqcznvpuw/image/upload/v1776156825/jaslogoimage_uifuuj.png"
                alt="JAS Fresh Mushroom Logo"
              />
              <LogoText>
                <LogoMain>JAS</LogoMain>
                <LogoSub>Fresh Mushroom</LogoSub>
              </LogoText>
            </LogoRow>

            <Tagline>
              Farm-fresh, organically grown mushrooms — from our fields to your
              table, sustainably and naturally.
            </Tagline>

            <SocialRow>
              {SOCIALS.map(({ label, icon, href }) => (
                <SocialLink
                  key={label}
                  href={href}
                  aria-label={label}
                  target="_blank"
                  title={label}>
                  {icon}
                </SocialLink>
              ))}
            </SocialRow>
          </BrandCol>

          {/* ── Nav Columns ── */}
          {NAV_COLS.map(({ heading, links }) => (
            <NavCol key={heading}>
              <ColHeading>{heading}</ColHeading>
              {links.map(({ label, to }) => (
                <NavLink key={label} to={to}>
                  {label}
                </NavLink>
              ))}
            </NavCol>
          ))}
        </Grid>

        {/* ── Bottom Bar ── */}
        <BottomBar>
          <Copyright>
            {/* © {year} */}
            {console.log(year)}
            JAS Fresh Mushroom.
            {/* All rights reserved. */}
          </Copyright>
          <LegalLinks>
            <LegalLink href="#">Privacy Policy</LegalLink>
            <LegalLink href="#">Terms of Service</LegalLink>
            <LegalLink href="#">Cookie Preferences</LegalLink>
          </LegalLinks>
        </BottomBar>
      </FooterWrapper>
    </>
  );
};

export default Footer;
