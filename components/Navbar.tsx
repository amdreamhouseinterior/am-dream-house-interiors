"use client";

import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav
      style={{
        position: "sticky",
        top: 0,
        zIndex: 1000,
        background: "#ffffff",
        boxShadow: "0 2px 15px rgba(0,0,0,0.08)",
      }}
    >
      <div
        style={{
          maxWidth: "1250px",
          margin: "0 auto",
          padding: "16px 25px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        {/* Logo */}
        <a
          href="#home"
          style={{
            textDecoration: "none",
            color: "#D4AF37",
            fontWeight: 800,
            fontSize: "24px",
          }}
        >
          AM Dream House
          <span
            style={{
              display: "block",
              color: "#333",
              fontSize: "11px",
              letterSpacing: "2px",
              textTransform: "uppercase",
              marginTop: "2px",
            }}
          >
            Interiors
          </span>
        </a>

        {/* Desktop Menu */}
        <div className="desktop-menu">
          <a href="#home">Home</a>
          <a href="#services">Services</a>
          <a href="#gallery">Projects</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>

          <a
            href="https://wa.me/917534005812"
            target="_blank"
            rel="noopener noreferrer"
            className="whatsapp-button"
          >
            💬 WhatsApp
          </a>
        </div>

        {/* Mobile Button */}
        <button
          className="mobile-button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="mobile-menu">
          <a href="#home" onClick={() => setMenuOpen(false)}>
            Home
          </a>

          <a href="#services" onClick={() => setMenuOpen(false)}>
            Services
          </a>

          <a href="#gallery" onClick={() => setMenuOpen(false)}>
            Projects
          </a>

          <a href="#about" onClick={() => setMenuOpen(false)}>
            About
          </a>

          <a href="#contact" onClick={() => setMenuOpen(false)}>
            Contact
          </a>

          <a
            href="https://wa.me/917534005812"
            target="_blank"
            rel="noopener noreferrer"
            className="mobile-whatsapp"
          >
            💬 WhatsApp Us
          </a>
        </div>
      )}

      <style>{`
        .desktop-menu {
          display: flex;
          align-items: center;
          gap: 28px;
        }

        .desktop-menu a {
          color: #333;
          text-decoration: none;
          font-size: 15px;
          font-weight: 600;
          transition: 0.3s;
        }

        .desktop-menu a:hover {
          color: #D4AF37;
        }

        .whatsapp-button {
          background: #25D366 !important;
          color: #ffffff !important;
          padding: 11px 18px;
          border-radius: 8px;
        }

        .mobile-button {
          display: none;
          border: none;
          background: transparent;
          font-size: 28px;
          cursor: pointer;
          color: #333;
        }

        .mobile-menu {
          display: none;
        }

        @media (max-width: 850px) {
          .desktop-menu {
            display: none;
          }

          .mobile-button {
            display: block;
          }

          .mobile-menu {
            display: flex;
            flex-direction: column;
            gap: 5px;
            padding: 10px 25px 20px;
            border-top: 1px solid #eeeeee;
            background: #ffffff;
          }

          .mobile-menu a {
            padding: 13px 10px;
            color: #333;
            text-decoration: none;
            font-weight: 600;
            border-radius: 6px;
          }

          .mobile-menu a:hover {
            background: #faf7eb;
            color: #D4AF37;
          }

          .mobile-whatsapp {
            margin-top: 8px;
            text-align: center;
            background: #25D366 !important;
            color: white !important;
          }
        }

        @media (max-width: 500px) {
          nav > div {
            padding-left: 18px !important;
            padding-right: 18px !important;
          }

          nav h2 {
            font-size: 21px !important;
          }
        }
      `}</style>
    </nav>
  );
}