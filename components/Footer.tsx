"use client";
import { motion } from "framer-motion";
import Link from "next/link";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Why Choose Us", href: "#why-choose-us" },
  { label: "Who We Help", href: "#who-we-help" },
  { label: "Process", href: "#process" },
  { label: "Packages", href: "#packages" },
  { label: "Success Stories", href: "#success-stories" },
];

export default function Footer() {
  const scrollTo = (href: string) => {
    const el = document.getElementById(href.replace("#", ""));
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer
      className="relative py-16 border-t overflow-hidden transition-colors duration-400"
      style={{
        background: "var(--bg-primary)",
        borderColor: "rgba(212,175,55,0.1)",
      }}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="font-black text-lg tracking-wider" style={{ color: "var(--text-heading)" }}>
                REMOTE
              </span>
              <span className="text-[#D4AF37] font-black text-lg tracking-wider">SOLUTIONS</span>
            </div>
            <p className="text-sm leading-relaxed mb-4" style={{ color: "var(--text-muted)" }}>
              Building remote teams that deliver real results for businesses that refuse to settle.
            </p>
            <p className="text-xs tracking-[0.2em] font-semibold uppercase" style={{ color: "rgba(212,175,55,0.65)" }}>
              People · Process · Performance
            </p>
          </div>

          {/* Nav */}
          <div>
            <h4
              className="text-xs tracking-widest uppercase font-semibold mb-5"
              style={{ color: "var(--text-muted)", opacity: 0.8 }}
            >
              Navigation
            </h4>
            <div className="grid grid-cols-2 gap-2">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => scrollTo(link.href)}
                  className="text-left text-sm transition-colors hover:text-[#D4AF37]"
                  style={{ color: "var(--text-muted)" }}
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div>
            <h4
              className="text-xs tracking-widest uppercase font-semibold mb-5"
              style={{ color: "var(--text-muted)", opacity: 0.8 }}
            >
              Ready to Scale?
            </h4>
            <p className="text-sm mb-5" style={{ color: "var(--text-muted)" }}>
              Join 500+ businesses already growing with Remote Solutions.
            </p>
            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => scrollTo("#packages")}
              className="btn-gold px-6 py-3 rounded text-xs tracking-widest font-bold"
            >
              BOOK A FREE CALL
            </motion.button>
          </div>
        </div>

        {/* Bottom */}
        <div
          className="border-t pt-8 flex flex-col md:flex-row items-center justify-between gap-4"
          style={{ borderColor: "var(--border-subtle)" }}
        >
          <p className="text-xs" style={{ color: "var(--text-muted)", opacity: 0.4 }}>
            © {new Date().getFullYear()} Remote Solutions. All rights reserved.{" "}
            Built by{" "}
            <a
              href="https://m7md-a7md.github.io/links/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#D4AF37] transition-colors"
            >
              M7MD
            </a>
          </p>
          <div className="flex gap-6">
            {/* Privacy Policy → links to /privacy-policy page */}
            <Link
              href="/privacy-policy"
              className="text-xs transition-colors hover:text-[#D4AF37]"
              style={{ color: "var(--text-muted)", opacity: 0.6 }}
            >
              Privacy Policy
            </Link>
            {/* Terms of Service → placeholder, add page later */}
            <Link
              href="/terms-of-service"
              className="text-xs transition-colors hover:text-[#D4AF37]"
              style={{ color: "var(--text-muted)", opacity: 0.6 }}
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom gold bar */}
      <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[#D4AF37]/30 to-transparent" />
    </footer>
  );
}