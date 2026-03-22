"use client";

import { useState, useEffect } from "react";
import { Logo } from "./Logo";

const links = [
  { label: "About", href: "#about" },
  { label: "The Problem", href: "#problem" },
  { label: "Our Model", href: "#model" },
  { label: "Get Involved", href: "#involved" },
  { label: "Contact", href: "#contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-navy/95 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16 md:h-20">
        <a href="#" className="flex items-center gap-2">
          <Logo size="sm" />
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-body text-white/80 hover:text-amber transition-colors"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#involved"
            className="bg-amber hover:bg-amber/90 text-navy font-heading font-bold text-sm px-5 py-2.5 rounded-full transition-colors"
          >
            Volunteer Now
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-white p-2"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {menuOpen ? (
              <path d="M6 6l12 12M6 18L18 6" />
            ) : (
              <path d="M3 6h18M3 12h18M3 18h18" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-navy/95 backdrop-blur-md border-t border-white/10 px-4 pb-4">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setMenuOpen(false)}
              className="block py-3 text-white/80 hover:text-amber transition-colors font-body"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#involved"
            onClick={() => setMenuOpen(false)}
            className="block mt-2 bg-amber text-navy font-heading font-bold text-center px-5 py-2.5 rounded-full"
          >
            Volunteer Now
          </a>
        </div>
      )}
    </nav>
  );
}
