"use client";

import { motion } from "framer-motion";
import { useCountUp } from "@/lib/hooks/useCountUp";

const metrics = [
  { value: 500, suffix: "+", label: "Students reached" },
  { value: 70, suffix: "%", label: "Students showing measurable progress" },
  { value: 75, prefix: ">", suffix: "%", label: "Volunteer retention rate" },
  { value: 80, suffix: "%+", label: "School satisfaction" },
  { value: 30, prefix: "<", suffix: " EUR", label: "Cost per student per semester" },
];

function MetricBlock({ metric, index }: { metric: typeof metrics[number]; index: number }) {
  const { count, ref } = useCountUp(metric.value, 2000);

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className="bg-navy rounded-2xl p-6 text-center hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
      ref={ref as React.RefObject<HTMLDivElement>}
    >
      <p className="text-3xl md:text-4xl font-heading font-bold text-amber">
        {metric.prefix || ""}{count}{metric.suffix}
      </p>
      <p className="mt-2 text-white/70 font-body text-sm">{metric.label}</p>
    </motion.div>
  );
}

export default function Impact() {
  return (
    <section className="py-20 md:py-28 bg-cream">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-navy">
            We Measure What We Do
          </h2>
          <p className="mt-2 text-teal font-heading font-semibold text-lg">
            Year 1 Targets
          </p>
        </motion.div>

        <div className="mt-14 grid grid-cols-2 md:grid-cols-5 gap-4 md:gap-6">
          {metrics.map((metric, i) => (
            <MetricBlock key={metric.label} metric={metric} index={i} />
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 text-center text-lg font-serif italic text-navy/80 max-w-3xl mx-auto leading-relaxed"
        >
          &ldquo;Impact is not assumed — it is measured. Every module ends with a CEFR
          self-assessment. Every school is surveyed termly. Every semester we publish
          what we find.&rdquo;
        </motion.p>
      </div>
    </section>
  );
}
