"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import SectionHeader from "../ui/SectionHeader";

const steps = [
  {
    num: "01", title: "Call",
    desc: "Our professionals make strategic cold calls to potential leads, using proven scripts and persuasive techniques.",
    icon: (
      <svg viewBox="0 0 32 32" fill="none" className="w-7 h-7">
        <path d="M6 8a2 2 0 012-2h16a2 2 0 012 2v12a2 2 0 01-2 2H10l-4 4V8z" stroke="#D4AF37" strokeWidth="1.8" strokeLinejoin="round"/>
        <path d="M11 13h10M11 17h6" stroke="#D4AF37" strokeWidth="1.8" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    num: "02", title: "Qualify",
    desc: "Each prospect undergoes thorough qualification to ensure they meet your specific criteria and are worth your attention.",
    icon: (
      <svg viewBox="0 0 32 32" fill="none" className="w-7 h-7">
        <circle cx="12" cy="11" r="5" stroke="#D4AF37" strokeWidth="1.8"/>
        <path d="M4 28c0-4.418 3.582-8 8-8" stroke="#D4AF37" strokeWidth="1.8" strokeLinecap="round"/>
        <path d="M22 20l2 2 4-4" stroke="#D4AF37" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
        <circle cx="24" cy="22" r="6" stroke="#D4AF37" strokeWidth="1.8"/>
      </svg>
    ),
  },
  {
    num: "03", title: "Deliver",
    desc: "Qualified leads are delivered directly to your sales team, ready for follow-up and conversion.",
    icon: (
      <svg viewBox="0 0 32 32" fill="none" className="w-7 h-7">
        <rect x="6" y="4" width="20" height="24" rx="2" stroke="#D4AF37" strokeWidth="1.8"/>
        <path d="M10 10h12M10 15h12M10 20h8" stroke="#D4AF37" strokeWidth="1.8" strokeLinecap="round"/>
      </svg>
    ),
  },
];

export default function Process() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px", amount: 0.1 });

  return (
    <section
      id="process"
      className="relative py-28 overflow-hidden transition-colors duration-400"
      style={{ background: "var(--bg-primary)", minHeight: "200px" }}
    >
      {/* Background grid */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: "linear-gradient(#D4AF37 1px, transparent 1px), linear-gradient(90deg, #D4AF37 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader
          eyebrow="How It Works"
          title="Our"
          highlight="Process"
          subtitle="Our three-step process ensures efficient and effective lead generation for your business success."
        />

        {/* Desktop: horizontal timeline */}
        <div ref={ref} className="hidden lg:block relative">
          {/* Connector line — centered with circles (h-24 = 6rem → top = 3rem) */}
          <div
            className="absolute h-px pointer-events-none"
            style={{
              top: "3rem",
              left: "calc(16.67% + 3rem)",   /* center of first circle */
              right: "calc(16.67% + 3rem)",  /* center of last circle  */
              background: "linear-gradient(to right, rgba(212,175,55,0.2), rgba(212,175,55,0.5), rgba(212,175,55,0.2))",
            }}
          />

          {/* 3 columns → each step naturally centered in its column */}
          <div className="grid grid-cols-3 gap-6">
            {steps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="flex flex-col items-center text-center"
              >
                {/* Circle */}
                <motion.div
                  initial={{ scale: 0 }}
                  animate={inView ? { scale: 1 } : {}}
                  transition={{ duration: 0.4, delay: i * 0.15 + 0.2, type: "spring" }}
                  className="relative z-10 w-24 h-24 rounded-full flex flex-col items-center justify-center mb-5 border-2"
                  style={{
                    background: "var(--bg-card)",
                    borderColor: "rgba(212,175,55,0.35)",
                    boxShadow: "0 0 24px rgba(212,175,55,0.08)",
                  }}
                >
                  {step.icon}
                  <span className="text-[10px] text-[#D4AF37]/60 font-bold mt-1">{step.num}</span>
                </motion.div>

                <h3 className="font-bold text-sm mb-2" style={{ color: "var(--text-heading)" }}>
                  {step.title}
                </h3>
                <p className="text-xs leading-relaxed" style={{ color: "var(--text-muted)" }}>
                  {step.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Mobile: vertical timeline */}
        <div className="lg:hidden space-y-0">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="flex gap-5 relative"
            >
              <div className="flex flex-col items-center">
                <div
                  className="w-12 h-12 rounded-full border-2 flex items-center justify-center flex-shrink-0"
                  style={{ background: "var(--bg-card)", borderColor: "rgba(212,175,55,0.4)" }}
                >
                  {step.icon}
                </div>
                {i < steps.length - 1 && (
                  <div
                    className="w-px flex-1 my-2"
                    style={{ background: "linear-gradient(to bottom, rgba(212,175,55,0.3), transparent)" }}
                  />
                )}
              </div>

              <div className="pb-8 pt-1">
                <div className="text-[10px] text-[#D4AF37] font-bold tracking-widest mb-1">{step.num}</div>
                <h3 className="font-bold mb-2" style={{ color: "var(--text-heading)" }}>{step.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>{step.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}