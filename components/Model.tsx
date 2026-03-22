"use client";

import { motion } from "framer-motion";

const pillars = [
  {
    title: "Volunteer Educators",
    desc: "University students in education, linguistics, and international relations — trained in CLT methodology, classroom management, and cultural sensitivity. Minimum 8 school visits per semester.",
    icon: (
      <svg viewBox="0 0 64 64" className="w-14 h-14" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="32" cy="20" r="10" className="stroke-navy" />
        <path d="M14 54c0-10 8-18 18-18s18 8 18 18" className="stroke-navy" />
        <path d="M32 30v10m-5-5h10" className="stroke-teal" strokeWidth="2.5" />
      </svg>
    ),
  },
  {
    title: "Communicative Curriculum",
    desc: "Built on the Council of Europe's CEFR framework (A0–A2). 90-minute lessons: review → new communicative content → interactive activity. All materials printed and provided free.",
    icon: (
      <svg viewBox="0 0 64 64" className="w-14 h-14" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="10" y="8" width="30" height="40" rx="3" className="stroke-navy" />
        <path d="M16 18h18M16 26h18M16 34h12" className="stroke-navy" opacity="0.5" />
        <path d="M44 24l8 8-8 8" className="stroke-teal" strokeWidth="2.5" />
      </svg>
    ),
  },
  {
    title: "Institutional Partnerships",
    desc: "MOUs with school inspectorates. Framed as a supplement, not a replacement. Backed by Moldova's Ministry of Education national strategy documents.",
    icon: (
      <svg viewBox="0 0 64 64" className="w-14 h-14" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M10 54V20l22-12 22 12v34" className="stroke-navy" />
        <rect x="22" y="34" width="20" height="20" rx="2" className="stroke-navy" />
        <circle cx="32" cy="26" r="4" className="stroke-teal" strokeWidth="2.5" />
      </svg>
    ),
  },
];

const phases = [
  {
    phase: "Phase 1",
    what: "Pilot: 3–5 schools, 2 raions, 15 volunteers",
    when: "Months 1–4",
  },
  {
    phase: "Phase 2",
    what: "Expand: 15 schools, 4 raions, feedback system",
    when: "Months 5–10",
  },
  {
    phase: "Phase 3",
    what: "Scale: 50+ schools, grant applications, outcomes report",
    when: "Year 2",
  },
];

export default function Model() {
  return (
    <section id="model" className="py-20 md:py-28 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-navy">
            A Human Solution to a Human Problem
          </h2>
          <p className="mt-6 text-lg text-text/80 max-w-3xl mx-auto font-body leading-relaxed">
            English4U is not a digital platform. It is a network of trained people,
            showing up in classrooms that have been forgotten by the system.
          </p>
        </motion.div>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-8">
          {pillars.map((pillar, i) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: i * 0.15, duration: 0.5 }}
              className="bg-cream rounded-2xl p-8 text-center hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex justify-center mb-5">{pillar.icon}</div>
              <h3 className="font-heading font-bold text-navy text-xl">
                {pillar.title}
              </h3>
              <p className="mt-3 text-text/70 font-body leading-relaxed">
                {pillar.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-20"
        >
          <h3 className="text-2xl md:text-3xl font-heading font-bold text-navy text-center mb-12">
            Rollout Phases
          </h3>
          <div className="relative max-w-3xl mx-auto">
            {/* Vertical line */}
            <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-0.5 bg-teal/30 -translate-x-1/2" />

            {phases.map((phase, i) => (
              <motion.div
                key={phase.phase}
                initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: i * 0.15, duration: 0.5 }}
                className={`relative flex items-start mb-10 ${
                  i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Dot */}
                <div className="absolute left-6 md:left-1/2 w-4 h-4 bg-teal rounded-full border-4 border-white -translate-x-1/2 z-10 mt-1" />

                <div
                  className={`ml-14 md:ml-0 md:w-[calc(50%-2rem)] ${
                    i % 2 === 0 ? "md:pr-8 md:text-right" : "md:pl-8 md:ml-auto"
                  }`}
                >
                  <span className="inline-block bg-teal/10 text-teal font-heading font-bold text-sm px-3 py-1 rounded-full mb-2">
                    {phase.phase} · {phase.when}
                  </span>
                  <p className="text-text/80 font-body">{phase.what}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
