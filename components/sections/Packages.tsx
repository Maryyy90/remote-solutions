"use client";
import { useRef, useState, useEffect } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import SectionHeader from "../ui/SectionHeader";

const packages = [
  {
    id: "bronze",
    label: "Bronze",
    tag: "Best for Starters",
    price: "$850",
    priceNote: "per user / month",
    desc: "Perfect for small businesses looking to boost their cold calling and lead generation.",
    features: [
      "Full Time Professional Cold Caller",
      "Quality Assurance Manager",
      "Account Manager",
      "Weekly / Bi-weekly Management Meetings on Demand",
    ],
    cta: "Get Started",
    highlight: false,
  },
  {
    id: "silver",
    label: "Silver",
    tag: "Most Popular",
    price: "$1,400",
    priceNote: "per user / month",
    desc: "Ideal for growing businesses ready to scale their acquisition pipeline.",
    features: [
      "Full Time Professional Cold Caller",
      "Quality Assurance Manager",
      "Professional Acquisition Manager",
      "Account Manager",
      "Weekly / Bi-weekly Management Meetings on Demand",
    ],
    cta: "Get Silver Plan",
    highlight: true,
  },
  {
    id: "gold",
    label: "Gold",
    tag: "Scale Faster",
    price: "$2,150",
    priceNote: "per user / month",
    desc: "Comprehensive solution for teams that need two dedicated cold callers and full management.",
    features: [
      "1 Full Time Professional Cold Caller",
      "Quality Assurance Manager",
      "Professional Acquisition Manager",
      "Account Manager",
      "Weekly / Bi-weekly Management Meetings on Demand",
    ],
    cta: "Get Gold Plan",
    highlight: false,
  },
  {
    id: "emerald",
    label: "Emerald",
    tag: "Enterprise Scale",
    price: "$5,050",
    priceNote: "per user / month",
    desc: "Full-scale remote operations for enterprises that demand the highest performance.",
    features: [
      "2 Full Time Professional Cold Callers",
      "Quality Assurance Manager",
      "Professional Acquisition Manager",
      "Account Manager",
      "Weekly / Bi-weekly Management Meetings on Demand",
    ],
    cta: "Scale with Emerald",
    highlight: false,
  },
  {
    id: "wholesaling",
    label: "Wholesaling",
    tag: "Full Service",
    price: "$5,000",
    priceNote: "per month",
    desc: "The complete done-for-you wholesaling operation — everything you need under one roof.",
    features: [
      "Full Wholesaling Operation",
      "1 Professional Cold Caller",
      "Quality Assurance Manager",
      "Full Management Team",
      "Daily Performance Reports",
      "1 Acquisition Manager",
      "1 Disposition Manager",
    ],
    cta: "Start Wholesaling",
    highlight: false,
  },
];

function CalendlyModal({ onClose }: { onClose: () => void }) {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = ""; };
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{ background: "rgba(0,0,0,0.8)", backdropFilter: "blur(8px)" }}
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.85, opacity: 0, y: 30 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.85, opacity: 0 }}
        transition={{ type: "spring", stiffness: 300, damping: 25 }}
        className="relative w-full max-w-2xl rounded-2xl overflow-hidden border border-[#D4AF37]/20"
        style={{ background: "var(--bg-card)" }}
        onClick={(e) => e.stopPropagation()}
      >
        <div
          className="flex items-center justify-between p-6 border-b"
          style={{ borderColor: "var(--border-subtle)" }}
        >
          <div>
            <h3 className="text-xl font-black" style={{ color: "var(--text-heading)" }}>
              Book Your Free Discovery Call
            </h3>
            <p className="text-sm mt-1" style={{ color: "var(--text-muted)" }}>
              Choose a time that works for you
            </p>
          </div>
          <button
            onClick={onClose}
            className="w-9 h-9 rounded-full flex items-center justify-center transition-colors"
            style={{ background: "var(--border-subtle)", color: "var(--text-primary)" }}
          >
            ✕
          </button>
        </div>
        <iframe
          src="https://calendly.com/remotesolutionss-info/30min"
          width="100%" height="650" frameBorder="0" title="Schedule a Meeting"
        />
      </motion.div>
    </motion.div>
  );
}

export default function Packages() {
  const [active, setActive] = useState("silver");
  const [showCalendly, setShowCalendly] = useState(false);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const pkg = packages.find((p) => p.id === active)!;

  return (
    <section
      id="packages"
      className="relative py-28 overflow-hidden transition-colors duration-400"
      style={{ background: "var(--bg-secondary)" }}
    >
      {/* Glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full blur-3xl pointer-events-none"
        style={{ background: "var(--blob-1)" }}
      />

      <div className="max-w-5xl mx-auto px-6">
        <SectionHeader
          eyebrow="Pricing"
          title="Our"
          highlight="Packages"
          subtitle="Select the perfect package for your business. Each is designed to maximize ROI and accelerate growth."
        />

        {/* Tab selector */}
        <div ref={ref} className="flex flex-wrap gap-3 justify-center mb-8">
          {packages.map((p) => (
            <motion.button
              key={p.id}
              onClick={() => setActive(p.id)}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="relative px-5 py-3 rounded-lg text-sm font-bold tracking-wider transition-all duration-200 border"
              style={{
                color: active === p.id ? "#D4AF37" : "var(--text-muted)",
                borderColor: active === p.id ? "rgba(212,175,55,0.4)" : "var(--border-subtle)",
                background: active === p.id ? "rgba(212,175,55,0.08)" : "var(--bg-card)",
              }}
            >
              {active === p.id && (
                <motion.div
                  layoutId="pkgIndicator"
                  className="absolute inset-0 rounded-lg border border-[#D4AF37]/30"
                  style={{ background: "rgba(212,175,55,0.05)" }}
                />
              )}
              {p.label}
              {p.id === "silver" && (
                <span className="ml-2 text-[9px] bg-[#D4AF37] text-[#0D1B2A] px-1.5 py-0.5 rounded-full font-black">
                  ★
                </span>
              )}
            </motion.button>
          ))}
        </div>

        {/* Package card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="relative rounded-2xl overflow-hidden"
            style={{
              background: "var(--bg-card)",
              border: pkg.highlight
                ? "2px solid rgba(212,175,55,0.5)"
                : "1px solid var(--border-subtle)",
              boxShadow: pkg.highlight ? "0 0 60px rgba(212,175,55,0.1)" : "none",
            }}
          >
            {/* Most popular badge */}
            {pkg.highlight && (
              <div className="absolute top-0 left-1/2 -translate-x-1/2 bg-gradient-to-r from-[#b8962e] to-[#e8c84a] text-[#0D1B2A] text-xs font-black tracking-widest px-6 py-1.5 rounded-b-xl">
                MOST POPULAR
              </div>
            )}

            <div className="p-10 md:p-14">
              <div className="flex flex-col md:flex-row gap-10">

                {/* Left: info */}
                <div className="flex-1">
                  <div className="inline-block text-[10px] text-[#D4AF37]/70 tracking-widest border border-[#D4AF37]/20 px-3 py-1 rounded-full mb-4">
                    {pkg.tag}
                  </div>

                  <h3 className="text-3xl font-black mb-2" style={{ color: "var(--text-heading)" }}>
                    {pkg.label} <span className="text-[#D4AF37]">Package</span>
                  </h3>

                  <p className="text-sm leading-relaxed mb-6 max-w-sm" style={{ color: "var(--text-muted)" }}>
                    {pkg.desc}
                  </p>

                  {/* Price */}
                  <div className="flex items-end gap-2 mb-1">
                    <span className="text-5xl font-black text-[#D4AF37]">{pkg.price}</span>
                  </div>
                  <p className="text-xs mb-8" style={{ color: "var(--text-muted)" }}>
                    {pkg.priceNote}
                  </p>

                  <motion.button
                    whileHover={{ scale: 1.04 }}
                    whileTap={{ scale: 0.97 }}
                    onClick={() => setShowCalendly(true)}
                    className="btn-gold px-8 py-4 rounded-lg text-sm tracking-widest font-bold w-full md:w-auto"
                  >
                    {pkg.cta} →
                  </motion.button>
                </div>

                {/* Right: features */}
                <div className="flex-1">
                  <div className="text-[#D4AF37] text-xs font-bold tracking-widest mb-5 uppercase">
                    What&apos;s Included
                  </div>
                  <div className="space-y-3">
                    {pkg.features.map((f, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.07 }}
                        className="flex items-start gap-3"
                      >
                        <div className="w-5 h-5 rounded-full bg-[#D4AF37]/15 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <svg viewBox="0 0 12 12" fill="none" className="w-3 h-3">
                            <path d="M2 6l3 3 5-5" stroke="#D4AF37" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        </div>
                        <span className="text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>
                          {f}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Bottom note */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.5 }}
          className="text-center text-xs mt-8"
          style={{ color: "var(--text-muted)" }}
        >
          All packages include onboarding support · No long-term contracts · Cancel anytime
        </motion.p>
      </div>

      <AnimatePresence>
        {showCalendly && <CalendlyModal onClose={() => setShowCalendly(false)} />}
      </AnimatePresence>
    </section>
  );
}
