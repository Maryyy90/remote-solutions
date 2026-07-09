"use client";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

const sections = [
  {
    id: "s1",
    num: "01",
    title: "Information We Collect",
    content: (
      <div className="space-y-3">
        <p>We may collect several types of information from and about users of our services, including:</p>
        <ul className="space-y-2 mt-3">
          {[
            "Contact information (name, email address, phone number, business name)",
            "Communication records and call recordings (with your consent)",
            "Technical data (IP address, browser type, device information)",
            "Usage data (how you interact with our services)",
            "Marketing preferences",
          ].map((item, i) => (
            <li key={i} className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] flex-shrink-0 mt-2 opacity-70" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    ),
  },
  {
    id: "s2",
    num: "02",
    title: "How We Use Your Information",
    content: (
      <div className="space-y-3">
        <p>We use the information we collect to:</p>
        <ul className="space-y-2 mt-3">
          {[
            "Provide and maintain our services",
            "Process and complete transactions",
            "Send administrative information",
            "Improve our services and customer experience",
            "Respond to inquiries and provide customer support",
            "Send marketing communications (with your consent)",
            "Monitor and analyze usage patterns and trends",
          ].map((item, i) => (
            <li key={i} className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] flex-shrink-0 mt-2 opacity-70" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    ),
  },
  {
    id: "s3",
    num: "03",
    title: "Data Storage and Security",
    content: (
      <div className="space-y-4">
        <p>
          We implement appropriate technical and organizational measures to protect your personal
          information against unauthorized access, accidental loss, or destruction. While we strive
          to use commercially acceptable means to protect your personal information, we cannot
          guarantee its absolute security.
        </p>
        <div
          className="p-4 rounded-lg border-l-4 border-[#D4AF37] text-sm"
          style={{ background: "rgba(212,175,55,0.07)", color: "var(--text-muted)" }}
        >
          <strong className="text-[#D4AF37]">Retention Policy:</strong> We retain your personal
          information only for as long as necessary to fulfill the purposes for which we collected
          it, including for the purposes of satisfying any legal, accounting, or reporting
          requirements.
        </div>
      </div>
    ),
  },
  {
    id: "s4",
    num: "04",
    title: "Information Sharing and Disclosure",
    content: (
      <div className="space-y-4">
        <p>We may share your information with:</p>
        <ul className="space-y-2 mt-3">
          {[
            "Service providers who perform services on our behalf",
            "Business partners with your consent",
            "In response to legal requests or to protect our rights",
            "In connection with a business transaction such as a merger or acquisition",
          ].map((item, i) => (
            <li key={i} className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] flex-shrink-0 mt-2 opacity-70" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <div
          className="p-4 rounded-lg border-l-4 border-[#D4AF37] text-sm font-semibold"
          style={{ background: "rgba(212,175,55,0.07)", color: "var(--text-muted)" }}
        >
          🔒 We do <strong className="text-[#D4AF37]">not</strong> sell your personal information
          to third parties.
        </div>
      </div>
    ),
  },
  {
    id: "s5",
    num: "05",
    title: "Cookies and Tracking Technologies",
    content: (
      <div className="space-y-4">
        <p>
          We use cookies and similar tracking technologies to track activity on our website and
          hold certain information. Cookies are files with a small amount of data that may include
          an anonymous unique identifier.
        </p>
        <div
          className="p-4 rounded-lg border-l-4 border-[#D4AF37] text-sm"
          style={{ background: "rgba(212,175,55,0.07)", color: "var(--text-muted)" }}
        >
          You can instruct your browser to refuse all cookies or to indicate when a cookie is being
          sent. However, if you do not accept cookies, you may not be able to use some portions of
          our service.
        </div>
      </div>
    ),
  },
  {
    id: "s6",
    num: "06",
    title: "Your Rights",
    content: (
      <div className="space-y-4">
        <p>
          Depending on your location, you may have certain rights regarding your personal
          information, including:
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-3">
          {[
            "Access to your personal information",
            "Correction of inaccurate or incomplete information",
            "Deletion of your personal information",
            "Restriction or objection to processing",
            "Data portability",
            "Withdrawal of consent",
          ].map((right, i) => (
            <div
              key={i}
              className="flex items-center gap-3 px-4 py-3 rounded-lg border transition-colors"
              style={{
                background: "rgba(255,255,255,0.03)",
                borderColor: "var(--border-subtle)",
              }}
            >
              <div className="w-5 h-5 rounded-md bg-[#D4AF37]/15 flex items-center justify-center flex-shrink-0">
                <svg viewBox="0 0 12 12" fill="none" className="w-3 h-3">
                  <path d="M2 6l3 3 5-5" stroke="#D4AF37" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <span className="text-sm">{right}</span>
            </div>
          ))}
        </div>
        <p className="text-sm" style={{ color: "var(--text-muted)" }}>
          To exercise any of these rights, please contact us using the information provided below.
        </p>
      </div>
    ),
  },
  {
    id: "s7",
    num: "07",
    title: "Contact Us",
    content: (
      <div className="space-y-4">
        <p>If you have any questions about this Privacy Policy, please contact us at:</p>
        <div
          className="rounded-xl border overflow-hidden"
          style={{ borderColor: "rgba(212,175,55,0.2)" }}
        >
          {[
            {
              icon: (
                <svg viewBox="0 0 20 20" fill="none" className="w-5 h-5">
                  <path d="M2 4a2 2 0 012-2h12a2 2 0 012 2v12a2 2 0 01-2 2H4a2 2 0 01-2-2V4z" stroke="#D4AF37" strokeWidth="1.4"/>
                  <path d="M2 7l8 5 8-5" stroke="#D4AF37" strokeWidth="1.4"/>
                </svg>
              ),
              label: "Email",
              value: "info.remotesolutionsgroup@gmail.com",
              href: "mailto:info.remotesolutionsgroup@gmail.com",
            },
            {
              icon: (
                <svg viewBox="0 0 20 20" fill="none" className="w-5 h-5">
                  <path d="M3 5a2 2 0 012-2h1.5a1 1 0 01.97.757l.69 2.764a1 1 0 01-.578 1.15l-1.2.6a10 10 0 005.354 5.354l.6-1.2a1 1 0 011.15-.578l2.764.69A1 1 0 0117 13.5V15a2 2 0 01-2 2h-1C6.716 17 3 13.284 3 8V5z" stroke="#D4AF37" strokeWidth="1.4"/>
                </svg>
              ),
              label: "Phone",
              value: "+1 (475) 381-3506",
              href: "tel:+14753813506",
            },
            {
              icon: (
                <svg viewBox="0 0 20 20" fill="none" className="w-5 h-5">
                  <circle cx="10" cy="10" r="7" stroke="#D4AF37" strokeWidth="1.4"/>
                  <path d="M10 6v4l2.5 2.5" stroke="#D4AF37" strokeWidth="1.4" strokeLinecap="round"/>
                </svg>
              ),
              label: "Response Time",
              value: "Within 24 hours, Monday – Friday",
              href: null,
            },
          ].map((item, i) => (
            <div
              key={i}
              className="flex items-center gap-4 p-4 border-b last:border-b-0"
              style={{ borderColor: "rgba(212,175,55,0.1)", background: "rgba(30,58,95,0.2)" }}
            >
              <div className="w-10 h-10 rounded-xl bg-[#D4AF37]/10 flex items-center justify-center flex-shrink-0">
                {item.icon}
              </div>
              <div>
                <div className="text-xs tracking-widest uppercase mb-0.5" style={{ color: "var(--text-muted)", opacity: 0.6 }}>
                  {item.label}
                </div>
                {item.href ? (
                  <a href={item.href} className="text-sm font-semibold text-[#D4AF37] hover:underline">
                    {item.value}
                  </a>
                ) : (
                  <div className="text-sm font-semibold" style={{ color: "var(--text-heading)" }}>
                    {item.value}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    ),
  },
];

export default function PrivacyContent() {
  const [activeSection, setActiveSection] = useState("s1");
  const sectionRefs = useRef<Record<string, HTMLDivElement | null>>({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { threshold: 0.4 }
    );
    Object.values(sectionRefs.current).forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const scrollToSection = (id: string) => {
    sectionRefs.current[id]?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div
      className="min-h-screen transition-colors duration-400"
      style={{ background: "var(--bg-primary)", color: "var(--text-primary)" }}
    >
      {/* ── Hero Header ── */}
      <div
        className="relative overflow-hidden border-b"
        style={{
          background: "linear-gradient(135deg, var(--bg-primary) 0%, var(--bg-card) 100%)",
          borderColor: "rgba(212,175,55,0.15)",
        }}
      >
        {/* Grid overlay */}
        <div
          className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(rgba(212,175,55,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(212,175,55,0.5) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        <div className="relative max-w-5xl mx-auto px-6 py-16 text-center">
          {/* Back link */}
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            className="absolute top-8 left-6"
          >
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase hover:text-[#D4AF37] transition-colors"
              style={{ color: "var(--text-muted)" }}
            >
              <svg viewBox="0 0 16 16" fill="none" className="w-4 h-4">
                <path d="M10 3L5 8l5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              Back to Home
            </Link>
          </motion.div>

          {/* Shield icon */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1 }}
            className="w-16 h-16 rounded-2xl bg-[#D4AF37]/10 border border-[#D4AF37]/25 flex items-center justify-center mx-auto mb-6"
          >
            <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
              <path d="M14 3L5 7v7c0 5.5 3.8 10.6 9 12 5.2-1.4 9-6.5 9-12V7L14 3z" stroke="#D4AF37" strokeWidth="1.8" strokeLinejoin="round"/>
              <path d="M9.5 14l3 3 6-6" stroke="#D4AF37" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
            className="text-[#D4AF37] text-xs tracking-[0.25em] font-semibold uppercase mb-3"
          >
            Legal
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-5xl font-black mb-4"
            style={{ color: "var(--text-heading)" }}
          >
            Privacy <span className="text-[#D4AF37]">Policy</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-base max-w-xl mx-auto mb-6 leading-relaxed"
            style={{ color: "var(--text-muted)" }}
          >
            We value your privacy and are committed to protecting your personal information.
            Here&apos;s exactly how we handle your data.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.35 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border text-sm"
            style={{
              borderColor: "rgba(212,175,55,0.2)",
              background: "rgba(212,175,55,0.06)",
              color: "var(--text-muted)",
            }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]" />
            Last Updated: September 26, 2025
          </motion.div>
        </div>
      </div>

      {/* ── Body: Sidebar + Content ── */}
      <div className="max-w-5xl mx-auto px-6 py-16">
        <div className="flex gap-12 items-start">

          {/* Sidebar TOC */}
          <motion.aside
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="hidden lg:block w-52 flex-shrink-0 sticky top-24"
          >
            <div
              className="text-xs font-bold tracking-[0.2em] uppercase mb-4"
              style={{ color: "var(--text-muted)", opacity: 0.5 }}
            >
              Contents
            </div>
            <div className="space-y-1">
              {sections.map((s) => (
                <button
                  key={s.id}
                  onClick={() => scrollToSection(s.id)}
                  className="w-full text-left flex items-center gap-3 px-3 py-2.5 rounded-lg text-xs font-semibold transition-all duration-200 border"
                  style={{
                    color: activeSection === s.id ? "#D4AF37" : "var(--text-muted)",
                    borderColor: activeSection === s.id ? "rgba(212,175,55,0.25)" : "transparent",
                    background: activeSection === s.id ? "rgba(212,175,55,0.07)" : "transparent",
                  }}
                >
                  <span
                    className="text-[10px] font-bold flex-shrink-0"
                    style={{ color: activeSection === s.id ? "#D4AF37" : "var(--text-muted)", opacity: activeSection === s.id ? 1 : 0.5 }}
                  >
                    {s.num}
                  </span>
                  <span className="leading-tight">{s.title}</span>
                </button>
              ))}
            </div>
          </motion.aside>

          {/* Sections */}
          <div className="flex-1 min-w-0 space-y-0">
            {sections.map((s, i) => (
              <motion.div
                key={s.id}
                id={s.id}
                ref={(el) => { sectionRefs.current[s.id] = el; }}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + i * 0.07 }}
                className="py-10 border-b"
                style={{ borderColor: "var(--border-subtle)" }}
              >
                {/* Section header */}
                <div className="flex items-start gap-4 mb-5">
                  <div
                    className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0 text-[11px] font-black border"
                    style={{
                      background: "rgba(212,175,55,0.1)",
                      borderColor: "rgba(212,175,55,0.2)",
                      color: "#D4AF37",
                    }}
                  >
                    {s.num}
                  </div>
                  <h2
                    className="text-xl font-black pt-1"
                    style={{ color: "var(--text-heading)" }}
                  >
                    {s.title}
                  </h2>
                </div>

                {/* Section body */}
                <div
                  className="pl-[52px] text-sm leading-relaxed"
                  style={{ color: "var(--text-muted)" }}
                >
                  {s.content}
                </div>
              </motion.div>
            ))}

            {/* Bottom note */}
            <div className="pt-10 text-center">
              <p className="text-xs" style={{ color: "var(--text-muted)", opacity: 0.5 }}>
                © {new Date().getFullYear()} Remote Solutions · All rights reserved
              </p>
              <Link
                href="/"
                className="inline-flex items-center gap-2 mt-4 text-xs font-bold tracking-widest uppercase text-[#D4AF37] hover:underline"
              >
                ← Back to Home
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}