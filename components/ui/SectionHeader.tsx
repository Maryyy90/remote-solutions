"use client";
import { motion } from "framer-motion";

interface SectionHeaderProps {
  eyebrow: string;
  title: string;
  highlight: string;
  subtitle: string;
}

export default function SectionHeader({
  eyebrow,
  title,
  highlight,
  subtitle,
}: SectionHeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6 }}
      className="text-center mb-14"
    >
      {/* Eyebrow */}
      <div className="inline-flex items-center gap-2 mb-4">
        <div className="h-px w-8 bg-[#D4AF37]/50" />
        <span
          className="text-[11px] font-bold tracking-[0.25em] uppercase"
          style={{ color: "#D4AF37" }}
        >
          {eyebrow}
        </span>
        <div className="h-px w-8 bg-[#D4AF37]/50" />
      </div>

      {/* Title */}
      <h2
        className="text-4xl md:text-5xl font-black tracking-tight leading-tight mb-5"
        style={{ color: "var(--text-heading)" }}
      >
        {title}{" "}
        <span className="gold-shimmer">{highlight}</span>
      </h2>

      {/* Gold divider */}
      <div className="gold-divider mb-5" />

      {/* Subtitle — italic with gold tint */}
      <p
        className="text-base md:text-lg max-w-2xl mx-auto leading-relaxed italic"
        style={{
          color: "var(--text-heading)",
          opacity: 0.6,
          fontWeight: 400,
          letterSpacing: "0.01em",
        }}
      >
        {subtitle}
      </p>
    </motion.div>
  );
}