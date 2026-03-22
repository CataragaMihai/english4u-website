"use client";

import { motion } from "framer-motion";
import { useCountUp } from "@/lib/hooks/useCountUp";

const stats = [
  { value: 150000, suffix: "+", label: "Students without quality English access" },
  { value: 40, prefix: "~", suffix: "%", label: "Rural schools lack qualified teachers" },
  { value: 74, suffix: "th", label: "Moldova's global English proficiency rank" },
  { value: 50, prefix: "30–", suffix: "%", label: "Wage premium for English speakers in Eastern Europe" },
];

function StatItem({ stat }: { stat: typeof stats[number] }) {
  const { count, ref } = useCountUp(stat.value, 2000);

  const display =
    stat.value === 150000
      ? `${(count / 1000).toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, ",")}${count >= 1000 ? ",000" : ""}${stat.suffix}`
      : `${stat.prefix || ""}${count}${stat.suffix}`;

  return (
    <div className="text-center px-4" ref={ref as React.RefObject<HTMLDivElement>}>
      <p className="text-2xl md:text-3xl font-heading font-bold text-amber">
        {display}
      </p>
      <p className="text-xs md:text-sm text-white/70 mt-1 font-body">
        {stat.label}
      </p>
    </div>
  );
}

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6, ease: "easeOut" as const },
  }),
};

export default function Hero() {
  return (
    <section
      id="about"
      className="relative min-h-screen flex items-center justify-center bg-navy overflow-hidden"
    >
      {/* Decorative shapes */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-teal/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-amber/10 rounded-full blur-3xl" />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 py-32 md:py-40 text-center">
        <motion.p
          custom={0}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="text-teal font-serif italic text-lg md:text-xl mb-6"
        >
          Bridging the language gap, one classroom at a time
        </motion.p>

        <motion.h1
          custom={1}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold text-white leading-tight"
        >
          Bridging the Language Gap,{" "}
          <span className="text-amber">One Classroom</span> at a Time
        </motion.h1>

        <motion.p
          custom={2}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="mt-6 text-lg md:text-xl text-white/80 max-w-3xl mx-auto font-body leading-relaxed"
        >
          English4U deploys trained volunteer educators into rural Moldovan
          schools — free of charge, grounded in evidence, built for impact.
        </motion.p>

        <motion.div
          custom={3}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#involved"
            className="bg-amber hover:bg-amber/90 text-navy font-heading font-bold px-8 py-3.5 rounded-full text-lg transition-colors"
          >
            Become a Volunteer
          </a>
          <a
            href="mailto:contact@english4u.md?subject=Partnership%20Inquiry"
            className="border-2 border-white/30 hover:border-amber text-white hover:text-amber font-heading font-bold px-8 py-3.5 rounded-full text-lg transition-colors"
          >
            Partner With Us
          </a>
        </motion.div>

        <motion.div
          custom={4}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-0 md:divide-x md:divide-white/20"
        >
          {stats.map((stat) => (
            <StatItem key={stat.label} stat={stat} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
