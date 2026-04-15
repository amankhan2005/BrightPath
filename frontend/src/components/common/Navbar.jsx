import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../../assets/logo/logo.png";

const navLinks = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about-us" },
  { label: "Services", to: "/services" },
  { label: "FAQ", to: "/faq" },
];

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-slate-200" style={{ fontFamily: "'Inter', sans-serif" }}>
      <div className="max-w-7xl mx-auto px-6" style={{ height: "68px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>

        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 no-underline">
          <img src={logo} alt="BrightPath Autism" className="h-10 w-auto" />
          <div className="leading-tight">
            <p style={{ fontSize: "17px", fontWeight: 700, color: "#1A202C", margin: 0 }}>BrightPath</p>
            <p style={{ fontSize: "12px", fontWeight: 500, color: "#5DBB2E", margin: 0, letterSpacing: "0.3px" }}>Autism Therapy</p>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map((link, i) => {
            const isActive = location.pathname === link.to;
            return (
              <Link
                key={i}
                to={link.to}
                style={{
                  fontSize: "14px",
                  fontWeight: isActive ? 600 : 500,
                  color: isActive ? "#2C5F9E" : "#4A5568",
                  background: isActive ? "#E8F0FA" : "transparent",
                  padding: "8px 14px",
                  borderRadius: "8px",
                  textDecoration: "none",
                  transition: "background .15s, color .15s",
                }}
                onMouseEnter={e => { if (!isActive) { e.target.style.background = "#E8F0FA"; e.target.style.color = "#2C5F9E"; }}}
                onMouseLeave={e => { if (!isActive) { e.target.style.background = "transparent"; e.target.style.color = "#4A5568"; }}}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Desktop Actions */}
     <div className="hidden md:flex items-center gap-3">
  <a
    href="tel:+14439003895"
    style={{
      display: "flex",
      alignItems: "center",
      gap: "7px",
      fontSize: "13px",
      fontWeight: 500,
      color: "#2C5F9E",
      border: "1.5px solid #2C5F9E",
      padding: "8px 16px",
      borderRadius: "100px",
      textDecoration: "none",
      transition: "background .15s, color .15s",
    }}
    onMouseEnter={(e) => {
      e.currentTarget.style.background = "#2C5F9E";
      e.currentTarget.style.color = "#fff";
    }}
    onMouseLeave={(e) => {
      e.currentTarget.style.background = "#fff";
      e.currentTarget.style.color = "#2C5F9E";
    }}
  >
   1 (443) 900-3895
  </a>
          <Link
            to="/contact-us"
            style={{
              fontSize: "13px", fontWeight: 600, color: "#fff",
              background: "#5DBB2E", padding: "9px 20px",
              borderRadius: "100px", textDecoration: "none",
              transition: "background .15s",
            }}
            onMouseEnter={e => e.currentTarget.style.background = "#3D8F18"}
            onMouseLeave={e => e.currentTarget.style.background = "#5DBB2E"}
          >
            Get Started →
          </Link>
        </div>

        {/* Hamburger */}
        <button
          className="md:hidden flex flex-col gap-1 p-2 rounded-lg border-none bg-transparent cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span style={{ display: "block", width: "20px", height: "2px", background: "#2C5F9E", borderRadius: "2px" }} />
          <span style={{ display: "block", width: "14px", height: "2px", background: "#2C5F9E", borderRadius: "2px" }} />
          <span style={{ display: "block", width: "20px", height: "2px", background: "#2C5F9E", borderRadius: "2px" }} />
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden border-t border-slate-200" style={{ padding: "16px", display: "flex", flexDirection: "column", gap: "2px" }}>
          {navLinks.map((link, i) => {
            const isActive = location.pathname === link.to;
            return (
              <Link
                key={i}
                to={link.to}
                onClick={() => setIsOpen(false)}
                style={{
                  fontSize: "14px", fontWeight: isActive ? 600 : 500,
                  color: isActive ? "#2C5F9E" : "#4A5568",
                  background: isActive ? "#E8F0FA" : "transparent",
                  padding: "10px 12px", borderRadius: "8px", textDecoration: "none",
                }}
              >
                {link.label}
              </Link>
            );
          })}
          <div style={{ marginTop: "12px", display: "flex", flexDirection: "column", gap: "8px" }}>
            
            <a
  href="tel:+14439003895"
  style={{
    fontSize: "13px",
    fontWeight: 500,
    color: "#2C5F9E",
    border: "1.5px solid #2C5F9E",
    padding: "10px 16px",
    borderRadius: "100px",
    textAlign: "center",
    textDecoration: "none",
  }}
>
  Call: 1 (443) 900-3895
</a>
            <Link
              to="/contact-us"
              onClick={() => setIsOpen(false)}
              style={{
                fontSize: "13px", fontWeight: 600, color: "#fff",
                background: "#5DBB2E", padding: "10px 16px",
                borderRadius: "100px", textAlign: "center", textDecoration: "none",
              }}
            >
              Get Started
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;