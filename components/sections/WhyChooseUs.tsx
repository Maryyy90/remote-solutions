"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import SectionHeader from "../ui/SectionHeader";

const reasons = [
  {
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-7 h-7">
        <path
          d="M20 4l12 4v10c0 8-5 14-12 18-7-4-12-10-12-18V8l12-4z"
          stroke="#D4AF37"
          strokeWidth="2"
          strokeLinejoin="round"
        />
      </svg>
    ),
    title: "Experienced Professionals",
    desc: "Our skilled virtual assistants are trained in the art of persuasion and communication, bringing years of industry expertise to every campaign.",
  },
  {
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-7 h-7">
        <circle cx="20" cy="15" r="9" stroke="#D4AF37" strokeWidth="2" />
        <path
          d="M14 22l-3 13 9-5 9 5-3-13"
          stroke="#D4AF37"
          strokeWidth="2"
          strokeLinejoin="round"
        />
      </svg>
    ),
    title: "Quality Assurance",
    desc: "Our dedicated quality team verifies each lead, ensuring only qualified prospects reach your sales team, maximizing your conversion potential.",
  },
  {
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-7 h-7">
        <path
          d="M6 28l8-9 7 6 13-17"
          stroke="#D4AF37"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M26 8h8v8"
          stroke="#D4AF37"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    title: "Competitive Pricing",
    desc: "Affordable rates that don't sacrifice quality. Our pricing structure ensures you get maximum value without exceeding your budget.",
  },
];

export default function WhyChooseUs() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="why-choose-us"
      className="relative py-28 overflow-hidden transition-colors duration-400"
      style={{ background: "var(--bg-primary)" }}
    >
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-full pointer-events-none"
        style={{ background: "linear-gradient(to bottom, transparent, rgba(212,175,55,0.1), transparent)" }}
      />

      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader
          eyebrow="Why Choose Us"
          title="Why Choose"
          highlight="Remote Solutions?"
          subtitle="Our services are built on experience and enhanced with modern techniques to deliver unmatched results."
        />

        <div ref={ref} className="grid md:grid-cols-3 gap-6">
          {reasons.map((reason, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="card-glow group relative rounded-xl p-8 cursor-default overflow-hidden text-center flex flex-col items-center"
              style={{ background: "var(--bg-card)" }}
            >
              {/* Icon */}
              <div className="mb-5 w-14 h-14 rounded-full bg-[#D4AF37]/10 flex items-center justify-center group-hover:bg-[#D4AF37]/20 transition-colors">
                {reason.icon}
              </div>

              <h3
                className="text-lg font-bold mb-3 transition-colors duration-300 group-hover:text-[#D4AF37]"
                style={{ color: "var(--text-heading)" }}
              >
                {reason.title}
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>
                {reason.desc}
              </p>

              {/* Bottom accent line */}
              <motion.div
                initial={{ scaleX: 0 }}
                whileHover={{ scaleX: 1 }}
                className="absolute bottom-0 left-0 right-0 h-0.5 rounded-b-xl origin-left"
                style={{ background: "linear-gradient(90deg, #D4AF37, transparent)" }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}