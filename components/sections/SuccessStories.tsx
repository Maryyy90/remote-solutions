"use client";
import { useRef, useState, useEffect } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import SectionHeader from "../ui/SectionHeader";

const testimonials = [
  {
    name: "James R.", role: "Real Estate Investor", location: "Texas, USA",
    text: "Remote Solutions transformed our acquisitions pipeline. Within 60 days we had a full team of vetted VAs handling outreach, and our deal flow tripled. The quality control they maintain is unlike anything I've seen with other services.",
    metric: "3x", metricLabel: "Deal Flow Increase", initials: "JR",
  },
  {
    name: "Sarah M.", role: "CEO, Insurance Agency", location: "Florida, USA",
    text: "We were drowning in admin work and losing sales opportunities daily. Remote Solutions built us a custom back-office team in under two weeks. Our agents now focus 100% on closing — revenue is up 40% this quarter alone.",
    metric: "+40%", metricLabel: "Revenue Growth", initials: "SM",
  },
  {
    name: "David K.", role: "Solar Installation Company", location: "California, USA",
    text: "The appointment-setting team Remote Solutions put together for us is absolutely elite. They understood our industry immediately and started booking qualified appointments from week one. Our close rate went from 18% to 31%.",
    metric: "+72%", metricLabel: "Close Rate Improvement", initials: "DK",
  },
  {
    name: "Marcus T.", role: "Wholesaler", location: "Georgia, USA",
    text: "I was skeptical about remote teams after bad experiences elsewhere. Remote Solutions is different — they handle everything from recruitment to training to monitoring. It's a complete solution and the ROI speaks for itself.",
    metric: "5x", metricLabel: "ROI in 90 Days", initials: "MT",
  },
];

export default function SuccessStories() {
  const [current, setCurrent] = useState(0);
  const [auto, setAuto] = useState(true);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  useEffect(() => {
    if (!auto) return;
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [auto]);

  const go = (i: number) => { setAuto(false); setCurrent(i); };

  return (
    <section
      id="success-stories"
      className="relative py-28 overflow-hidden transition-colors duration-400"
      style={{ background: "var(--bg-primary)" }}
    >
      {/* Decorative quote mark */}
      <div
        className="absolute top-20 left-10 text-[200px] font-black leading-none select-none pointer-events-none"
        style={{ color: "rgba(212,175,55,0.04)", fontFamily: "Georgia, serif" }}
      >
        "
      </div>

      <div className="max-w-6xl mx-auto px-6">
        <SectionHeader
          eyebrow="Testimonials"
          title="Success"
          highlight="Stories"
          subtitle="Real results from real businesses that trusted Remote Solutions to scale their operations."
        />

        <div ref={ref}>
          {/* Main testimonial card */}
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.4 }}
              className="relative rounded-2xl p-10 md:p-14 mb-8"
              style={{
                background: "var(--bg-card)",
                borderLeft: "4px solid #D4AF37",
                boxShadow: "0 0 60px rgba(212,175,55,0.05)",
              }}
            >
              <div className="flex flex-col md:flex-row gap-10">
                {/* Quote */}
                <div className="flex-1">
                  <div className="flex gap-1 mb-6">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="text-[#D4AF37] text-lg">★</span>
                    ))}
                  </div>

                  <blockquote
                    className="text-lg leading-relaxed mb-8 italic"
                    style={{ color: "var(--text-primary)" }}
                  >
                    &ldquo;{testimonials[current].text}&rdquo;
                  </blockquote>

                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#D4AF37] to-[#b8962e] flex items-center justify-center text-[#0D1B2A] font-black text-sm flex-shrink-0">
                      {testimonials[current].initials}
                    </div>
                    <div>
                      <div className="font-bold" style={{ color: "var(--text-heading)" }}>
                        {testimonials[current].name}
                      </div>
                      <div className="text-sm" style={{ color: "var(--text-muted)" }}>
                        {testimonials[current].role}
                      </div>
                      <div className="text-xs" style={{ color: "var(--text-muted)", opacity: 0.7 }}>
                        {testimonials[current].location}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Metric */}
                <div className="flex-shrink-0 flex flex-col items-center justify-center md:items-end gap-3 text-center md:text-right">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", delay: 0.2 }}
                    className="text-6xl md:text-7xl font-black text-[#D4AF37]"
                    style={{ textShadow: "0 0 30px rgba(212,175,55,0.25)" }}
                  >
                    {testimonials[current].metric}
                  </motion.div>
                  <div
                    className="text-xs tracking-widest uppercase max-w-[120px]"
                    style={{ color: "var(--text-muted)" }}
                  >
                    {testimonials[current].metricLabel}
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Dots + nav */}
          <div className="flex items-center justify-center gap-4">
            <button
              onClick={() => go((current - 1 + testimonials.length) % testimonials.length)}
              className="w-10 h-10 rounded-full border flex items-center justify-center transition-all hover:text-[#D4AF37] hover:border-[#D4AF37]/40"
              style={{ borderColor: "var(--border-subtle)", color: "var(--text-muted)" }}
            >
              ←
            </button>

            {testimonials.map((_, i) => (
              <button key={i} onClick={() => go(i)} className="transition-all duration-300">
                <div
                  className={`rounded-full transition-all duration-300 ${
                    i === current ? "w-8 h-2 bg-[#D4AF37]" : "w-2 h-2 hover:opacity-60"
                  }`}
                  style={i !== current ? { background: "var(--border-subtle)" } : {}}
                />
              </button>
            ))}

            <button
              onClick={() => go((current + 1) % testimonials.length)}
              className="w-10 h-10 rounded-full border flex items-center justify-center transition-all hover:text-[#D4AF37] hover:border-[#D4AF37]/40"
              style={{ borderColor: "var(--border-subtle)", color: "var(--text-muted)" }}
            >
              →
            </button>
          </div>

          {/* Mini thumbnails */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12"
          >
            {testimonials.map((t, i) => (
              <button
                key={i}
                onClick={() => go(i)}
                className="rounded-xl p-4 text-left transition-all duration-200 border"
                style={{
                  borderColor: i === current ? "rgba(212,175,55,0.4)" : "var(--border-subtle)",
                  background: i === current ? "rgba(212,175,55,0.06)" : "var(--bg-card)",
                }}
              >
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-7 h-7 rounded-full bg-gradient-to-br from-[#D4AF37] to-[#b8962e] flex items-center justify-center text-[#0D1B2A] font-black text-xs flex-shrink-0">
                    {t.initials}
                  </div>
                  <span className="text-xs font-semibold truncate" style={{ color: "var(--text-muted)" }}>
                    {t.name}
                  </span>
                </div>
                <div className="text-[#D4AF37] font-black text-lg">{t.metric}</div>
                <div className="text-[10px]" style={{ color: "var(--text-muted)" }}>{t.metricLabel}</div>
              </button>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}