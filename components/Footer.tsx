"use client";

import { Logo } from "./Logo";

const links = [
  { label: "About", href: "#about" },
  { label: "The Problem", href: "#problem" },
  { label: "Our Model", href: "#model" },
  { label: "Get Involved", href: "#involved" },
];

export default function Footer() {
  return (
    <footer id="contact" className="bg-navy py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div>
            <Logo size="md" />
            <p className="mt-2 text-white/60 font-body text-sm max-w-md">
              Deploying trained volunteer educators into rural Moldovan schools —
              free of charge, grounded in evidence, built for impact.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 sm:gap-10">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-white/60 hover:text-amber text-sm font-body transition-colors"
              >
                {l.label}
              </a>
            ))}
          </div>
        </div>

        <div className="mt-10 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-white/40 text-sm font-body text-center md:text-left">
            <a
              href="mailto:contact@english4u.md"
              className="text-amber hover:text-amber/80 transition-colors"
            >
              contact@english4u.md
            </a>
            <span className="mx-3">·</span>
            English4U · Republic of Moldova · 2025
          </div>
          <p className="text-white/30 text-xs font-body text-center md:text-right">
            Currently seeking founding board members, volunteer educators, and funding partners.
          </p>
        </div>
      </div>
    </footer>
  );
}
