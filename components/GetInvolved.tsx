"use client";

import { motion } from "framer-motion";

const cards = [
  {
    title: "Become a Volunteer Educator",
    desc: "You have English skills and the motivation to share them. We provide training, materials, and a certificate recognized by partner universities.",
    cta: "Apply to Volunteer",
    subject: "Volunteer%20Application",
    color: "bg-amber",
    textColor: "text-navy",
  },
  {
    title: "Partner Your School",
    desc: "English4U works directly with school principals and district inspectorates. No cost, no disruption — a qualified educator in your classroom.",
    cta: "Become a Partner School",
    subject: "School%20Partnership%20Inquiry",
    color: "bg-teal",
    textColor: "text-white",
  },
  {
    title: "Join Our Board",
    desc: "We are building our founding board: people with expertise in education, civil society, law, communications, or fundraising.",
    cta: "Express Interest",
    subject: "Board%20Member%20Interest",
    color: "bg-navy",
    textColor: "text-white",
  },
  {
    title: "Fund the Mission",
    desc: "Grant organizations, corporate partners, and individual donors: our model is low-cost, high-accountability, and built for scale.",
    cta: "Discuss Funding",
    subject: "Funding%20Inquiry",
    color: "bg-navy",
    textColor: "text-white",
  },
];

export default function GetInvolved() {
  return (
    <section id="involved" className="py-20 md:py-28 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-navy">
            Four Ways to Make This Real
          </h2>
        </motion.div>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-6">
          {cards.map((card, i) => (
            <motion.article
              key={card.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ delay: i * 0.12, duration: 0.5 }}
              className="rounded-2xl p-8 bg-cream border border-navy/5 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col"
            >
              <h3 className="font-heading font-bold text-navy text-xl">
                {card.title}
              </h3>
              <p className="mt-3 text-text/70 font-body leading-relaxed flex-1">
                {card.desc}
              </p>
              <a
                href={`mailto:contact@english4u.md?subject=${card.subject}`}
                className={`mt-6 inline-flex items-center gap-2 ${card.color} ${card.textColor} font-heading font-bold px-6 py-3 rounded-full text-sm hover:opacity-90 transition-opacity self-start`}
              >
                {card.cta}
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M3 8h10m-4-4l4 4-4 4" />
                </svg>
              </a>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
