import { motion } from "framer-motion";
import { profile } from "../data/content";
import { ChevronDown } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[linear-gradient(180deg,#0a0a0c_0%,#0f0f14_50%,#0a0a0c_100%)]" />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 600px 400px at 30% 50%, rgba(232,197,71,0.05), transparent), radial-gradient(ellipse 500px 500px at 70% 40%, rgba(74,143,232,0.03), transparent)",
        }}
      />

      <div className="relative z-10 text-center px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="mb-6"
        >
          <span className="inline-block text-accent text-xs tracking-[0.4em] px-4 py-1.5 border border-accent/20 rounded-full font-medium">
            PORTFOLIO
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tight text-accent mb-6"
        >
          {profile.name}
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.0 }}
          className="flex items-center justify-center gap-3 md:gap-4"
        >
          {["Think", "Write", "Create"].map((word, i) => (
            <span key={word} className="flex items-center gap-3 md:gap-4">
              {i > 0 && <span className="text-accent/30 text-xs">·</span>}
              <span className="text-text-dim text-sm md:text-base tracking-[0.2em] font-light">
                {word}
              </span>
            </span>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-10 flex flex-col items-center gap-2"
      >
        <span className="text-text-muted text-[10px] tracking-[0.3em]">
          SCROLL
        </span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ChevronDown size={16} className="text-accent/50" />
        </motion.div>
      </motion.div>
    </section>
  );
}
