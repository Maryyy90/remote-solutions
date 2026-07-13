"use client";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

/* ── Particle canvas ── */
function ParticleCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d")!;

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const particles: {
      x: number; y: number; r: number;
      vx: number; vy: number; alpha: number; gold: boolean;
    }[] = [];

    for (let i = 0; i < 120; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        r: Math.random() * 2 + 0.5,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        alpha: Math.random() * 0.5 + 0.1,
        gold: Math.random() > 0.75,
      });
    }

    let frame: number;
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const isDark = document.documentElement.getAttribute("data-theme") !== "light";

      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 130) {
            ctx.beginPath();
            const lineAlpha = 0.18 * (1 - dist / 130);
            ctx.strokeStyle = particles[i].gold
              ? `rgba(212,175,55,${lineAlpha})`
              : isDark
                ? `rgba(30,58,95,${lineAlpha * 2})`
                : `rgba(13,27,42,${lineAlpha})`;
            ctx.lineWidth = 0.8;
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }

      particles.forEach((p) => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = p.gold
          ? `rgba(212,175,55,${p.alpha})`
          : `rgba(100,149,237,${p.alpha * 0.6})`;
        ctx.fill();
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;
      });

      frame = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
      style={{ pointerEvents: "none" }}
    />
  );
}

/* ── Typewriter effect ── */
function Typewriter({ texts }: { texts: string[] }) {
  const [index, setIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = texts[index];
    let timeout: ReturnType<typeof setTimeout>;

    if (!deleting && displayed.length < current.length) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 60);
    } else if (!deleting && displayed.length === current.length) {
      timeout = setTimeout(() => setDeleting(true), 2000);
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 35);
    } else {
      setDeleting(false);
      setIndex((prev) => (prev + 1) % texts.length);
    }

    return () => clearTimeout(timeout);
  }, [displayed, deleting, index, texts]);

  return (
    <span className="text-[#D4AF37]">
      {displayed}
      <span className="animate-pulse">|</span>
    </span>
  );
}

/* ── Stat counter ── */
function StatCounter({ value, label, prefix = "", suffix = "" }: {
  value: number; label: string; prefix?: string; suffix?: string;
}) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        let start = 0;
        const step = value / (2000 / 16);
        const timer = setInterval(() => {
          start += step;
          if (start >= value) { setCount(value); clearInterval(timer); }
          else setCount(Math.floor(start));
        }, 16);
        observer.disconnect();
      }
    });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [value]);

  return (
    <div ref={ref} className="text-center">
      <div className="text-3xl md:text-4xl font-black text-[#D4AF37]">
        {prefix}{count}{suffix}
      </div>
      <div
        className="text-xs mt-1 tracking-widest uppercase"
        style={{ color: "var(--text-muted)" }}
      >
        {label}
      </div>
    </div>
  );
}

export default function Hero() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden transition-colors duration-400"
      style={{ background: "var(--bg-primary)" }}
    >
      {/* Radial accent — adapts per theme */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 60% 40%, rgba(212,175,55,0.06) 0%, transparent 65%)",
        }}
      />

      {/* Particle background */}
      <ParticleCanvas />

      {/* Subtle grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(212,175,55,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(212,175,55,0.4) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      {/* Main content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-32 pb-20 flex flex-col lg:flex-row items-center gap-16">

        {/* Left: Text */}
        <div className="flex-1 text-center lg:text-left">

          {/* Headline */}
<motion.h1
  initial={{ opacity: 0, y: 30 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.4, duration: 0.7 }}
  className="text-5xl md:text-6xl lg:text-7xl font-black leading-[1.05] tracking-tight mb-6"
  style={{ color: "var(--text-heading)" }}
>
  Scale Your Business With{" "}
  <span className="text-4xl md:text-5xl lg:text-6xl">
    <Typewriter
      texts={["Remote Teams", "Top Talent", "Smart Processes", "Real Results"]}
    />
  </span>
</motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.65 }}
            className="text-lg leading-relaxed max-w-xl mx-auto lg:mx-0 mb-10"
            style={{ color: "var(--text-muted)" }}
          >
            Remote Solutions provides elite remote professionals and streamlined
            processes to drive measurable performance for growing businesses worldwide.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => scrollTo("packages")}
              className="btn-gold px-8 py-4 rounded text-sm tracking-widest font-bold"
            >
              GET STARTED TODAY
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => scrollTo("why-choose-us")}
              className="btn-outline px-8 py-4 rounded text-sm tracking-widest font-bold"
            >
              WHY CHOOSE US
            </motion.button>
          </motion.div>
        </div>

        {/* Right: Floating logo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" }}
          className="flex-shrink-0 hidden lg:flex flex-col items-center gap-6"
        >
          <div className="relative">
            {/* Rotating dashed rings */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute rounded-full border border-dashed border-[#D4AF37]/20"
              style={{ width: 300, height: 300, top: "50%", left: "50%", transform: "translate(-50%,-50%)" }}
            />
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              className="absolute rounded-full border border-dashed"
              style={{
                width: 370, height: 370,
                top: "50%", left: "50%", transform: "translate(-50%,-50%)",
                borderColor: "var(--border-subtle)",
              }}
            />

            {/* Soft glow behind the logo */}
            <div
              className="absolute rounded-full pointer-events-none"
              style={{
                width: 260, height: 260,
                top: "50%", left: "50%", transform: "translate(-50%,-50%)",
                background: "radial-gradient(circle, rgba(212,175,55,0.25) 0%, transparent 70%)",
                filter: "blur(20px)",
              }}
            />

            {/* Floating logo image */}
            <motion.div
              animate={{ y: [0, -18, 0] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
              className="relative z-10 flex items-center justify-center"
              style={{ width: 220, height: 220 }}
            >
              <Image
                src="/Remote_Solutions_logo-removebg-preview.png"
                alt="Remote Solutions logo"
                width={220}
                height={220}
                priority
                style={{
                  filter: "drop-shadow(0 10px 40px rgba(212,175,55,0.35))",
                  width: "100%",
                  height: "auto",
                }}
              />
            </motion.div>
          </div>

          {/* Wordmark under the floating logo */}
          <div className="text-center">
            <div className="font-black text-sm tracking-widest" style={{ color: "var(--text-heading)" }}>
              REMOTE <span className="text-[#D4AF37]">SOLUTIONS</span>
            </div>
            <div className="text-[10px] tracking-[0.25em] mt-1" style={{ color: "var(--text-muted)" }}>
              PEOPLE · PROCESS · PERFORMANCE
            </div>
          </div>
        </motion.div>
      </div>

      {/* Stats bar */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.1 }}
        className="relative z-10 w-full border-t "
style={{
  borderColor: "var(--border-subtle)",
  background: "transparent",
}}
      >
        <div className="max-w-7xl mx-auto px-6 py-8 grid grid-cols-2 md:grid-cols-4 gap-8">
          <StatCounter value={100} suffix="+" label="Clients Served" />
          <StatCounter value={70} suffix="%" label="Satisfaction Rate" />
          <StatCounter value={10} suffix="+" label="Industries" />
          <StatCounter value={2} suffix="x" label="Avg. ROI Growth" />
        </div>
      </motion.div>
    </section>
  );
}
