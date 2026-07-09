"use client";
import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import {
  Building2, Sun, HardHat, Wrench,
  HeadphonesIcon, MessageSquare, Briefcase, Users,
} from "lucide-react";
import SectionHeader from "../ui/SectionHeader";

const industries = [
  { Icon: Building2,      title: "Real Estate",      desc: "Find high-value deals and motivated sellers through targeted outreach campaigns." },
  { Icon: Sun,            title: "Solar",             desc: "Identify homeowners interested in renewable energy and boost your installation appointments." },
  { Icon: HardHat,        title: "Roofing",           desc: "Connect with property owners in need of roofing services and secure more contracts." },
  { Icon: Wrench,         title: "Home Improvement",  desc: "Reach homeowners ready to upgrade their properties with professional outreach campaigns." },
  { Icon: HeadphonesIcon, title: "Customer Service",  desc: "Deliver exceptional support experiences with trained agents who represent your brand." },
  { Icon: MessageSquare,  title: "Texting",           desc: "Engage leads instantly with high-response SMS campaigns that drive real conversations." },
  { Icon: Briefcase,      title: "B2B",               desc: "Reach decision-makers and grow your pipeline with targeted business-to-business outreach." },
  { Icon: Users,          title: "Consultation",      desc: "Book more qualified consultations and convert prospects into long-term clients." },
];

export default function WhoWeHelp() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [active, setActive] = useState<number | null>(null);

  return (
    <section
      id="who-we-help"
      className="relative py-28 overflow-hidden transition-colors duration-400"
      style={{ background: "var(--bg-primary)" }}
    >
      {/* Decorative blobs */}
      <div className="absolute top-1/4 left-0 w-72 h-72 rounded-full blur-3xl pointer-events-none"
        style={{ background: "var(--blob-1)" }} />
      <div className="absolute bottom-1/4 right-0 w-72 h-72 rounded-full blur-3xl pointer-events-none"
        style={{ background: "var(--blob-2)" }} />

      <div className="max-w-7xl mx-auto px-6 ">
        <SectionHeader
          eyebrow="Industries"
          title="Who We"
          highlight="Help"
          subtitle="Our team delivers exceptional results across multiple industries, driving growth for diverse business types."
        />

        <div ref={ref} className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {industries.map(({ Icon, title, desc }, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.92 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.4, delay: i * 0.07 }}
              onMouseEnter={() => setActive(i)}
              onMouseLeave={() => setActive(null)}
              className="relative rounded-xl p-6 cursor-default border transition-all duration-300"
              style={{
                background: active === i ? "var(--bg-card-hover)" : "var(--bg-card)",
                borderColor: active === i ? "var(--border-hover)" : "var(--border-subtle)",
                boxShadow: active === i ? "0 0 30px rgba(212,175,55,0.1)" : "none",
                transform: active === i ? "translateY(-4px)" : "translateY(0)",
              }}
            >
              {/* Icon wrapper */}
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center mb-4 transition-all duration-300"
                style={{
                  background: active === i ? "rgba(212,175,55,0.15)" : "rgba(212,175,55,0.07)",
                }}
              >
                <Icon
                  size={24}
                  strokeWidth={1.5}
                  style={{
                    color: active === i ? "#D4AF37" : "var(--text-muted)",
                    transition: "color 0.3s",
                  }}
                />
              </div>

              <h3
                className="font-bold text-base mb-2 transition-colors duration-300"
                style={{ color: active === i ? "#D4AF37" : "var(--text-heading)" }}
              >
                {title}
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>
                {desc}
              </p>

              {active === i && (
                <motion.div
                  layoutId="activeDot"
                  className="absolute top-4 right-4 w-2 h-2 rounded-full bg-[#D4AF37]"
                />
              )}
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.7 }}
          className="text-center mt-14"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => {
              document.getElementById("packages")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="btn-gold px-10 py-4 rounded text-sm tracking-widest font-bold"
          >
            GROW YOUR BUSINESS TODAY
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}