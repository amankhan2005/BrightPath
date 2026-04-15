import Container from "../common/Container";
import { Link } from "react-router-dom";
import { Phone, Smartphone, Mail, MapPin, ArrowUpRight, Heart } from "lucide-react";
import logo from "../../assets/logo/logo.png";

const PINK = "#E8194B";
const PINK_LIGHT = "rgba(232, 25, 75, 0.08)";
const PINK_BORDER = "rgba(232, 25, 75, 0.12)";

const quickLinks = [
  { label: "Home", to: "/" },
  { label: "About Us", to: "/about-us" },
  { label: "Services", to: "/services" },
  { label: "FAQ", to: "/faq" },
  { label: "Contact", to: "/contact-us" },
];

const contactInfo = [
  {
    icon: <Phone size={15} strokeWidth={1.8} color={PINK} />,
    label: "Phone",
    text: "1 443-900-3895",
    href: "tel:+14439003895",
  },
  {
    icon: <Smartphone size={15} strokeWidth={1.8} color="#9ca3af" />,
    label: "Fax",
    text: "1 410-834-7514",
    href: "tel:+14108347514",
  },
  {
    icon: <Mail size={15} strokeWidth={1.8} color={PINK} />,
    label: "Email",
    text: "arutere@bpautism.com",
    href: "mailto:arutere@bpautism.com",
  },
  {
    icon: <MapPin size={15} strokeWidth={1.8} color={PINK} />,
    label: "Address",
    text: "3501 Sheffield Manor Terrace\nSilver Spring, MD 20904",
    href: null,
  },
];

const socialLinks = [
  {
    label: "Facebook",
    href: "#",
    icon: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
      </svg>
    ),
  },
  {
    label: "Instagram",
    href: "#",
    icon: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "#",
    icon: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect width="4" height="12" x="2" y="9" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
  },
];

function Footer() {
  return (
    <footer
      className="relative overflow-hidden"
      style={{
        background: "#ffffff",
        fontFamily: "'DM Sans', 'Inter', sans-serif",
        borderTop: "1px solid #f3f4f6",
      }}
    >
      {/* Decorative top accent */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: 3,
          background: `linear-gradient(90deg, transparent 0%, ${PINK} 40%, ${PINK} 60%, transparent 100%)`,
          opacity: 0.15,
        }}
      />

      <Container className="relative pt-16 pb-10 md:pt-20 md:pb-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-10">

          {/* ── BRAND COLUMN ── */}
          <div className="lg:col-span-5">
            {/* Logo */}
            <div className="flex items-center gap-3 mb-5">
              <img src={logo} alt="BrightPath Autism Logo" className="h-10 w-auto" />
              <div className="leading-tight">
                <p style={{ fontSize: 18, fontWeight: 700, color: "#111111", letterSpacing: "-0.02em" }}>
                  BrightPath
                </p>
                <p style={{ fontSize: 12.5, fontWeight: 500, color: "#9ca3af", letterSpacing: "0.04em" }}>
                  Autism Therapy
                </p>
              </div>
            </div>

            {/* Tagline */}
            <p style={{ fontSize: 14.5, color: "#6b7280", lineHeight: 1.75, maxWidth: 340 }}>
              Providing compassionate ABA therapy to help children build
              communication, social, and life skills for a brighter and more
              independent future.
            </p>

            {/* Social links */}
            {/* <div className="flex items-center gap-2 mt-7">
              {socialLinks.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  title={s.label}
                  style={{
                    width: 36,
                    height: 36,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    borderRadius: 10,
                    border: "1px solid #e5e7eb",
                    color: "#9ca3af",
                    transition: "all 0.2s ease",
                    textDecoration: "none",
                    flexShrink: 0,
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.border = `1px solid ${PINK_BORDER}`;
                    e.currentTarget.style.background = PINK_LIGHT;
                    e.currentTarget.style.color = PINK;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.border = "1px solid #e5e7eb";
                    e.currentTarget.style.background = "transparent";
                    e.currentTarget.style.color = "#9ca3af";
                  }}
                >
                  {s.icon}
                </a>
              ))}
            </div> */}
          </div>

          {/* ── QUICK LINKS COLUMN ── */}
          <div className="lg:col-span-3">
            <h4
              style={{
                fontSize: 11,
                fontWeight: 600,
                color: "#111111",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                marginBottom: 22,
              }}
            >
              Quick Links
            </h4>

            <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: 14 }}>
              {quickLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    style={{
                      fontSize: 14.5,
                      color: "#6b7280",
                      textDecoration: "none",
                      display: "inline-flex",
                      alignItems: "center",
                      gap: 8,
                      transition: "color 0.2s ease",
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = PINK)}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "#6b7280")}
                  >
                    <span
                      style={{
                        display: "inline-block",
                        width: 4,
                        height: 4,
                        borderRadius: "50%",
                        background: "#e5e7eb",
                        flexShrink: 0,
                        transition: "background 0.2s",
                      }}
                    />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ── CONTACT COLUMN ── */}
          <div className="lg:col-span-4">
            <h4
              style={{
                fontSize: 11,
                fontWeight: 600,
                color: "#111111",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                marginBottom: 22,
              }}
            >
              Contact Us
            </h4>

            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              {contactInfo.map((item, i) => {
                const Tag = item.href ? "a" : "div";
                return (
                  <Tag
                    key={i}
                    href={item.href || undefined}
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: 12,
                      fontSize: 14,
                      color: "#6b7280",
                      textDecoration: "none",
                      lineHeight: 1.6,
                      transition: "color 0.2s ease",
                      cursor: item.href ? "pointer" : "default",
                    }}
                    onMouseEnter={item.href ? (e) => (e.currentTarget.style.color = "#111111") : undefined}
                    onMouseLeave={item.href ? (e) => (e.currentTarget.style.color = "#6b7280") : undefined}
                  >
                    {/* Icon pill */}
                    <div
                      style={{
                        width: 34,
                        height: 34,
                        borderRadius: 9,
                        background: PINK_LIGHT,
                        border: `1px solid ${PINK_BORDER}`,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                        marginTop: 1,
                      }}
                    >
                      {item.icon}
                    </div>

                    {/* Text */}
                    <div>
                      <p style={{ fontSize: 11, fontWeight: 600, color: "#9ca3af", letterSpacing: "0.06em", textTransform: "uppercase", marginBottom: 2 }}>
                        {item.label}
                      </p>
                      <p style={{ margin: 0, whiteSpace: "pre-line" }}>{item.text}</p>
                    </div>
                  </Tag>
                );
              })}
            </div>
          </div>
        </div>
      </Container>

      {/* ── BOTTOM BAR ── */}
      <div style={{ borderTop: "1px solid #f3f4f6" }}>
        <Container className="py-5 flex flex-col md:flex-row items-center justify-between gap-3">
          <p style={{ fontSize: 13, color: "#9ca3af", display: "flex", alignItems: "center", gap: 4 }}>
            © {new Date().getFullYear()} BrightPath Autism LLC. All rights reserved.
          </p>

          <a
            href="https://www.webieapp.com"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontSize: 13,
              color: "#9ca3af",
              textDecoration: "none",
              display: "inline-flex",
              alignItems: "center",
              gap: 5,
              transition: "color 0.2s ease",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#6b7280")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "#9ca3af")}
          >
            Designed &amp; Developed by{" "}
            <span style={{ color: PINK, fontWeight: 600 }}>Webieapp</span>
            <ArrowUpRight size={13} style={{ opacity: 0.5 }} />
          </a>
        </Container>
      </div>
    </footer>
  );
}

export default Footer;