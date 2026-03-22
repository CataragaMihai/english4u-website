"use client";

import { motion } from "framer-motion";

const causes = [
  {
    title: "Teacher Qualification Gap",
    desc: "English taught by unqualified substitutes (PE teachers, biology teachers) filling roster gaps",
    icon: (
      <svg viewBox="0 0 48 48" className="w-10 h-10" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="24" cy="14" r="8" className="stroke-amber" />
        <path d="M8 42c0-8.8 7.2-16 16-16s16 7.2 16 16" className="stroke-amber" />
        <path d="M32 20l4-4m0 0l4-4m-4 4l4 4m-4-4l-4-4" className="stroke-red-400" />
      </svg>
    ),
  },
  {
    title: "Funding Disparity",
    desc: "Only 4.1% of GDP to education; rural schools receive disproportionately less",
    icon: (
      <svg viewBox="0 0 48 48" className="w-10 h-10" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="6" y="20" width="8" height="20" rx="1" className="stroke-amber" />
        <rect x="20" y="12" width="8" height="28" rx="1" className="stroke-amber" />
        <rect x="34" y="28" width="8" height="12" rx="1" className="stroke-amber" />
        <path d="M6 16l14-8 14 12" className="stroke-red-400" strokeDasharray="4 2" />
      </svg>
    ),
  },
  {
    title: "Outdated Materials",
    desc: "Textbooks from the 1990s; poor digital connectivity",
    icon: (
      <svg viewBox="0 0 48 48" className="w-10 h-10" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M8 8h24v32H8z" className="stroke-amber" />
        <path d="M12 16h16M12 22h16M12 28h10" className="stroke-amber" opacity="0.5" />
        <path d="M36 14l6-6m0 0l-6-6m6 6H32" className="stroke-red-400" />
      </svg>
    ),
  },
  {
    title: "Compounding Disadvantage",
    desc: "Without English, rural youth are excluded from Erasmus+, DAAD, international scholarships, and global employment",
    icon: (
      <svg viewBox="0 0 48 48" className="w-10 h-10" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="24" cy="24" r="18" className="stroke-amber" />
        <path d="M6 24h36M24 6c-6 6-6 30 0 36M24 6c6 6 6 30 0 36" className="stroke-amber" />
        <path d="M16 32l16-16" className="stroke-red-400" strokeWidth="3" />
      </svg>
    ),
  },
];

export default function Problem() {
  return (
    <section id="problem" className="py-20 md:py-28 bg-cream">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-navy text-center">
            A Gap That Maps Onto a Map
          </h2>
          <p className="mt-6 text-lg text-text/80 max-w-3xl mx-auto text-center font-body leading-relaxed">
            Moldova ranks 74th globally in English proficiency (EF EPI 2023, score 50.2) —
            significantly behind Romania (36th) and Ukraine (45th). In rural areas, English
            is often taught by teachers whose primary qualification is in an entirely
            different subject. The result: over 150,000 students are denied access to a
            language that is increasingly the gateway to international education,
            employment, and opportunity.
          </p>
        </motion.div>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-6">
          {causes.map((cause, i) => (
            <motion.div
              key={cause.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: i * 0.12, duration: 0.5 }}
              className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md hover:-translate-y-1 transition-shadow duration-300 border border-navy/5"
            >
              <div className="flex items-start gap-4">
                <div className="shrink-0 mt-1">{cause.icon}</div>
                <div>
                  <h3 className="font-heading font-bold text-navy text-lg">
                    {cause.title}
                  </h3>
                  <p className="mt-1 text-text/70 font-body">{cause.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.blockquote
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-14 border-l-4 border-teal pl-6 py-4 max-w-3xl mx-auto"
        >
          <p className="text-lg md:text-xl font-serif italic text-navy/90 leading-relaxed">
            &ldquo;A rural Moldovan child without English is not merely missing one school
            subject. They are being systematically excluded from international education,
            global employment, and civic participation at the European level.&rdquo;
          </p>
        </motion.blockquote>
      </div>
    </section>
  );
}
