"use client";
import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import SectionHeader from "../ui/SectionHeader";

function CalendlyModal({ onClose }: { onClose: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
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
          src="https://calendly.com/info-remotesolutionsgroup/30min"
          width="100%"
          height="650"
          frameBorder="0"
          title="Schedule a Meeting"
        />
      </motion.div>
    </motion.div>
  );
}

type FormState = "idle" | "sending" | "success" | "error";

const socialLinks = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/remote.solutionsgroup?igsh=c3NleGswdXZxZ3Nn",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-5 h-5">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
        <circle cx="12" cy="12" r="4"/>
        <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none"/>
      </svg>
    ),
  }, 
];

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [showCalendly, setShowCalendly] = useState(false);
  const [formState, setFormState] = useState<FormState>("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const [form, setForm] = useState({ name: "", company: "", email: "", phone: "", message: "" });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormState("sending");
    setErrorMsg("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Failed to send");

      setFormState("success");
      setForm({ name: "", company: "", email: "", phone: "", message: "" });
      setTimeout(() => setFormState("idle"), 5000);
    } catch (err) {
      setErrorMsg(err instanceof Error ? err.message : "Something went wrong");
      setFormState("error");
      setTimeout(() => setFormState("idle"), 5000);
    }
  };

  return (
    <section
      id="contact"
      className="relative py-28 overflow-hidden transition-colors duration-400"
      style={{ background: "var(--bg-secondary)" }}
    >
      <div className="absolute top-0 left-1/4 right-1/4 h-px bg-gradient-to-r from-transparent via-[#D4AF37]/30 to-transparent" />

      <div className="max-w-6xl mx-auto px-6">
        <SectionHeader
          eyebrow="Get In Touch"
          title="Let's"
          highlight="Connect"
          subtitle="Ready to transform your sales process? Our experts are here to help you reach new heights."
        />

        {/* Book a call CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2 }}
          className="text-center mb-14"
        >
          <motion.button
            whileHover={{ scale: 1.06 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => setShowCalendly(true)}
            className="btn-gold inline-flex items-center gap-3 px-10 py-5 rounded-xl text-sm tracking-widest font-bold"
            style={{ fontSize: "0.9rem" }}
          >
            <svg viewBox="0 0 20 20" fill="none" className="w-5 h-5">
              <rect x="3" y="4" width="14" height="14" rx="2" stroke="currentColor" strokeWidth="1.5"/>
              <path d="M7 2v4M13 2v4M3 9h14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
            BOOK YOUR FREE DISCOVERY CALL
          </motion.button>
        </motion.div>

        <div className="flex items-center gap-6 mb-12">
          <div className="flex-1 h-px" style={{ background: "var(--border-subtle)" }} />
          <span className="text-xs tracking-widest uppercase" style={{ color: "var(--text-muted)" }}>
            Or send us a message
          </span>
          <div className="flex-1 h-px" style={{ background: "var(--border-subtle)" }} />
        </div>

        <div ref={ref} className="grid md:grid-cols-2 gap-10">
          {/* Contact form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="rounded-2xl p-8 border"
            style={{ background: "var(--bg-card)", borderColor: "var(--border-subtle)" }}
          >
            <h3 className="text-lg font-bold mb-6" style={{ color: "var(--text-heading)" }}>
              Send a Message
            </h3>

            <form onSubmit={handleSubmit} className="space-y-4">
              {[
                { key: "name",    label: "Your Name",     placeholder: "John Smith",        type: "text"  },
                { key: "company", label: "Company Name",  placeholder: "Acme Corp",         type: "text"  },
                { key: "email",   label: "Email Address", placeholder: "john@acme.com",     type: "email" },
                { key: "phone",   label: "Phone Number",  placeholder: "+1 (555) 000-0000", type: "tel"   },
              ].map((field) => (
                <div key={field.key}>
                  <label
                    className="text-xs font-semibold tracking-widest uppercase block mb-2"
                    style={{ color: "var(--text-muted)" }}
                  >
                    {field.label}
                  </label>
                  <input
                    type={field.type}
                    placeholder={field.placeholder}
                    required={field.key !== "company"}
                    value={form[field.key as keyof typeof form] ?? ""}
                    onChange={(e) => setForm({ ...form, [field.key]: e.target.value })}
                    disabled={formState === "sending"}
                    className="w-full px-4 py-3 rounded-lg text-sm outline-none transition-all focus:ring-1 focus:ring-[#D4AF37]/50 disabled:opacity-50"
                    style={{
                      background: "var(--bg-secondary)",
                      border: "1px solid var(--border-subtle)",
                      color: "var(--text-primary)",
                    }}
                    onFocus={(e) => (e.target.style.borderColor = "rgba(212,175,55,0.5)")}
                    onBlur={(e)  => (e.target.style.borderColor = "var(--border-subtle)")}
                  />
                </div>
              ))}

              <div>
                <label
                  className="text-xs font-semibold tracking-widest uppercase block mb-2"
                  style={{ color: "var(--text-muted)" }}
                >
                  Your Message
                </label>
                <textarea
                  rows={4}
                  placeholder="Tell us about your business and what you need..."
                  required
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  disabled={formState === "sending"}
                  className="w-full px-4 py-3 rounded-lg text-sm outline-none resize-none transition-all focus:ring-1 focus:ring-[#D4AF37]/50 disabled:opacity-50"
                  style={{
                    background: "var(--bg-secondary)",
                    border: "1px solid var(--border-subtle)",
                    color: "var(--text-primary)",
                  }}
                  onFocus={(e) => (e.target.style.borderColor = "rgba(212,175,55,0.5)")}
                  onBlur={(e)  => (e.target.style.borderColor = "var(--border-subtle)")}
                />
              </div>

              <AnimatePresence>
                {formState === "success" && (
                  <motion.div
                    initial={{ opacity: 0, y: -8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="flex items-center gap-2 text-sm font-semibold px-4 py-3 rounded-lg"
                    style={{ background: "rgba(34,197,94,0.12)", color: "#4ade80", border: "1px solid rgba(34,197,94,0.25)" }}
                  >
                    <svg viewBox="0 0 20 20" fill="none" className="w-4 h-4 flex-shrink-0">
                      <circle cx="10" cy="10" r="8" stroke="#4ade80" strokeWidth="1.5"/>
                      <path d="M6.5 10l2.5 2.5 4.5-4.5" stroke="#4ade80" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    Message sent! We&apos;ll get back to you within 24 hours.
                  </motion.div>
                )}
                {formState === "error" && (
                  <motion.div
                    initial={{ opacity: 0, y: -8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="flex items-center gap-2 text-sm font-semibold px-4 py-3 rounded-lg"
                    style={{ background: "rgba(239,68,68,0.12)", color: "#f87171", border: "1px solid rgba(239,68,68,0.25)" }}
                  >
                    <svg viewBox="0 0 20 20" fill="none" className="w-4 h-4 flex-shrink-0">
                      <circle cx="10" cy="10" r="8" stroke="#f87171" strokeWidth="1.5"/>
                      <path d="M10 6v4M10 13v1" stroke="#f87171" strokeWidth="1.5" strokeLinecap="round"/>
                    </svg>
                    {errorMsg || "Failed to send. Please try again or email us directly."}
                  </motion.div>
                )}
              </AnimatePresence>

              <motion.button
                type="submit"
                whileHover={{ scale: formState === "sending" ? 1 : 1.02 }}
                whileTap={{ scale: formState === "sending" ? 1 : 0.98 }}
                disabled={formState === "sending"}
                className="btn-gold w-full py-4 rounded-lg text-sm tracking-widest font-bold flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {formState === "sending" ? (
                  <>
                    <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none">
                      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3" strokeDasharray="30 70" strokeLinecap="round"/>
                    </svg>
                    SENDING...
                  </>
                ) : formState === "success" ? (
                  <>✓ MESSAGE SENT!</>
                ) : (
                  <>
                    <svg viewBox="0 0 20 20" fill="none" className="w-4 h-4">
                      <path d="M3 10L17 3l-7 7-7 7V10z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
                    </svg>
                    SEND MESSAGE
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>

          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="flex flex-col gap-6"
          >
            <div>
              <h3 className="text-lg font-bold mb-6" style={{ color: "var(--text-heading)" }}>
                Get In Touch
              </h3>
              <div className="space-y-5">
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
                    sub: "We respond within 24 hours",
                  },
                  {
                    icon: (
                      <svg viewBox="0 0 20 20" fill="none" className="w-5 h-5">
                        <path d="M3 5a2 2 0 012-2h1.5a1 1 0 01.97.757l.69 2.764a1 1 0 01-.578 1.15l-1.2.6a10 10 0 005.354 5.354l.6-1.2a1 1 0 011.15-.578l2.764.69A1 1 0 0117 13.5V15a2 2 0 01-2 2h-1C6.716 17 3 13.284 3 8V5z" stroke="#D4AF37" strokeWidth="1.4"/>
                      </svg>
                    ),
                    label: "Phone",
                    value: "+1 (475) 381-3506",
                    sub: "Mon–Fri, 9am–6pm EST",
                  },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-[#D4AF37]/10 flex items-center justify-center flex-shrink-0">
                      {item.icon}
                    </div>
                    <div>
                      <div className="text-xs tracking-widest uppercase mb-0.5" style={{ color: "var(--text-muted)", opacity: 0.7 }}>
                        {item.label}
                      </div>
                      <div className="font-semibold text-sm break-all" style={{ color: "var(--text-heading)" }}>
                        {item.value}
                      </div>
                      <div className="text-xs" style={{ color: "var(--text-muted)" }}>{item.sub}</div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Social links */}
              <div className="mt-8">
                <div className="text-xs tracking-widest uppercase font-semibold mb-4" style={{ color: "var(--text-muted)", opacity: 0.7 }}>
                  Follow Us
                </div>
                <div className="flex items-center gap-3 flex-wrap">
                  {socialLinks.map((s) => (
                    <motion.a
                      key={s.label}
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={s.label}
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-200 border"
                      style={{
                        background: "var(--bg-secondary)",
                        borderColor: "var(--border-subtle)",
                        color: "var(--text-muted)",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.borderColor = "rgba(212,175,55,0.5)";
                        e.currentTarget.style.color = "#D4AF37";
                        e.currentTarget.style.background = "rgba(212,175,55,0.08)";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.borderColor = "var(--border-subtle)";
                        e.currentTarget.style.color = "var(--text-muted)";
                        e.currentTarget.style.background = "var(--bg-secondary)";
                      }}
                    >
                      {s.icon}
                    </motion.a>
                  ))}
                </div>
              </div>
            </div>

            {/* Why book a call */}
            <div
              className="rounded-xl p-6 border"
              style={{ background: "rgba(212,175,55,0.06)", borderColor: "rgba(212,175,55,0.18)" }}
            >
              <h4 className="text-[#D4AF37] font-bold text-sm mb-4">Why book a call?</h4>
              {[
                "No commitment — just a conversation",
                "Get a custom solution blueprint",
                "Meet your dedicated team lead",
                "Pricing tailored to your budget",
              ].map((point, i) => (
                <div key={i} className="flex items-center gap-2 mb-2.5 last:mb-0">
                  <span className="text-[#D4AF37] text-xs">✓</span>
                  <span className="text-sm" style={{ color: "var(--text-muted)" }}>{point}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      <AnimatePresence>
        {showCalendly && <CalendlyModal onClose={() => setShowCalendly(false)} />}
      </AnimatePresence>
    </section>
  );
}
