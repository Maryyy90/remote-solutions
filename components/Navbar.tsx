"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import ThemeToggle from "@/components/ui/ThemeToggle";

const navLinks = [
  { label: "HOME",            href: "#home" },
  { label: "WHY US",        href: "#why-choose-us" },
  { label: "WHO WE HELP",     href: "#who-we-help" },
  { label: "PROCESS",         href: "#process" },
  { label: "PACKAGES",        href: "#packages" },
  { label: "SUCCESS STORIES", href: "#success-stories" },
];

export default function Navbar() {
  const [scrolled,       setScrolled]       = useState(false);
  const [mobileOpen,     setMobileOpen]     = useState(false);
  const [activeSection,  setActiveSection]  = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = navLinks.map((l) => l.href.replace("#", ""));
      for (const id of [...sections].reverse()) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActiveSection(id);
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (href: string) => {
    setMobileOpen(false);
    const el = document.getElementById(href.replace("#", ""));
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "backdrop-blur-md shadow-lg shadow-black/20 border-b border-[#D4AF37]/10"
          : "bg-transparent"
      }`}
      style={scrolled ? { background: "var(--bg-primary)", opacity: 0.97 } : {}}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* ── Logo ─────────────────────────────────────── */}
       <motion.div
  whileHover={{ scale: 1.03 }}
  className="flex items-center gap-3 cursor-pointer"
  onClick={() => scrollTo("#home")}
>
  <div className="relative w-16 h-16">
    <Image
      src="/Remote_Solutions_logo-removebg-preview.png"
      alt="Logo"
      fill
      className="object-contain"
      priority
    />
  </div>
</motion.div>

        {/* ── Desktop Nav ──────────────────────────────── */}
<div className="hidden lg:flex items-center gap-5">
  {navLinks.map((link) => {
    const id       = link.href.replace("#", "");
    const isActive = activeSection === id;
    return (
      <button
        key={link.href}
        onClick={() => scrollTo(link.href)}
        className="nav-link relative text-[10px] tracking-widest transition-colors duration-200"
        style={{
          fontWeight: 700,
          color: isActive ? "#D4AF37" : "var(--text-muted)",
        }}
      >
        {link.label}
        {isActive && (
          <motion.div
            layoutId="activeIndicator"
            className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[#D4AF37]"
          />
        )}
      </button>
    );
  })}

          {/* Theme Toggle — desktop */}
          <ThemeToggle />

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => scrollTo("#packages")}
            className="btn-gold px-5 py-2.5 rounded text-xs tracking-widest"
          >
            BOOK A CALL
          </motion.button>
        </div>

        {/* ── Mobile: toggle + hamburger ───────────────── */}
        <div className="lg:hidden flex items-center gap-3">
          {/* Theme Toggle — mobile */}
          <ThemeToggle />

          <button
            className="p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Open menu"
          >
            <div className="w-6 flex flex-col gap-1.5">
              <motion.span
                animate={mobileOpen ? { rotate: 45,  y:  8 } : { rotate: 0, y: 0 }}
                className="block h-0.5 bg-[#D4AF37] transition-all"
              />
              <motion.span
                animate={mobileOpen ? { opacity: 0 } : { opacity: 1 }}
                className="block h-0.5 bg-[#D4AF37]"
              />
              <motion.span
                animate={mobileOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
                className="block h-0.5 bg-[#D4AF37] transition-all"
              />
            </div>
          </button>
        </div>
      </div>

      {/* ── Mobile Menu ──────────────────────────────────── */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{   opacity: 0, height: 0 }}
            className="lg:hidden backdrop-blur-md border-t border-[#D4AF37]/10"
            style={{ background: "var(--bg-primary)" }}
          >
            <div className="px-6 py-6 flex flex-col gap-5">
              {navLinks.map((link, i) => (
                <motion.button
                  key={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x:   0 }}
                  transition={{ delay: i * 0.05 }}
                  onClick={() => scrollTo(link.href)}
                  className="text-left text-sm font-bold tracking-widest transition-colors"
                  style={{ color: "var(--text-muted)" }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "#D4AF37")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-muted)")}
                >
                  {link.label}
                </motion.button>
              ))}

              <motion.button
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.35 }}
                onClick={() => scrollTo("#packages")}
                className="btn-gold px-5 py-3 rounded text-xs tracking-widest mt-2"
              >
                BOOK A CALL
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}