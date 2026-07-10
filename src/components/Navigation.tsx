import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Sun, Moon } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";

const navItems = [
  { label: "PROFILE", target: "profile" },
  { label: "CAREER", target: "career" },
  { label: "WORKS", target: "works" },
  { label: "AI WORKS", target: "ai-works" },
  { label: "MOODBOARDS", target: "moodboards" },
  { label: "TOOLS", target: "tools" },
  { label: "GALLERY", target: "gallery" },
];

const darkColors: Record<string, string> = {
  "--color-bg": "#0a0a0c",
  "--color-bg-card": "#111115",
  "--color-bg-elevated": "#1a1a20",
  "--color-accent": "#00e5ff",
  "--color-accent-dim": "#0099bb",
  "--color-accent-glow": "rgba(0, 229, 255, 0.10)",
  "--color-accent-sub": "#ff4081",
  "--color-accent-sub-dim": "#c7285e",
  "--color-accent-sub-glow": "rgba(255, 64, 129, 0.10)",
  "--color-text": "#ffffff",
  "--color-text-dim": "#d0d0d0",
  "--color-text-muted": "#a0a0a0",
  "--color-border": "#2a2a30",
};

const lightColors: Record<string, string> = {
  "--color-bg": "#f5f4f0",
  "--color-bg-card": "#ffffff",
  "--color-bg-elevated": "#e8e6e0",
  "--color-accent": "#007a95",
  "--color-accent-dim": "#005a70",
  "--color-accent-glow": "rgba(0, 122, 149, 0.10)",
  "--color-accent-sub": "#b8204e",
  "--color-accent-sub-dim": "#8e1840",
  "--color-accent-sub-glow": "rgba(184, 32, 78, 0.10)",
  "--color-text": "#111111",
  "--color-text-dim": "#333333",
  "--color-text-muted": "#666666",
  "--color-border": "#c8c5be",
};

function ThemeToggle({
  theme,
  onToggle,
  size = "default",
}: {
  theme: "dark" | "light";
  onToggle: () => void;
  size?: "default" | "mobile";
}) {
  const isLight = theme === "light";
  const w = size === "mobile" ? "w-16" : "w-14";
  const h = size === "mobile" ? "h-8" : "h-7";
  const dotSize = size === "mobile" ? 22 : 19;
  const iconSize = size === "mobile" ? 13 : 12;

  return (
    <button
      onClick={onToggle}
      className={`${w} ${h} rounded-full relative flex items-center justify-between px-1.5 cursor-pointer`}
      style={{
        backgroundColor: isLight ? "#c8c5bc" : "#1e1e24",
        boxShadow: isLight
          ? "inset 0 2px 4px rgba(0,0,0,0.15), 0 1px 2px rgba(0,0,0,0.08)"
          : "inset 0 2px 4px rgba(0,0,0,0.4), 0 1px 2px rgba(0,0,0,0.2)",
        border: isLight ? "1px solid #b5b2aa" : "1px solid #3a3a42",
      }}
      aria-label="테마 전환"
    >
      <Sun
        size={iconSize}
        strokeWidth={2.5}
        className="relative z-10"
        style={{
          color: isLight ? "#e88a00" : "#6a6860",
          filter: isLight ? "drop-shadow(0 0 2px rgba(232,138,0,0.4))" : "none",
        }}
      />
      <Moon
        size={iconSize}
        strokeWidth={2.5}
        className="relative z-10"
        style={{
          color: isLight ? "#8a8a8a" : "#00e5ff",
          filter: !isLight ? "drop-shadow(0 0 2px rgba(0,229,255,0.4))" : "none",
        }}
      />
      <motion.div
        className="rounded-full absolute top-1/2 -translate-y-1/2"
        style={{
          width: dotSize,
          height: dotSize,
          backgroundColor: isLight ? "#ffffff" : "#00e5ff",
          boxShadow: isLight
            ? "0 2px 6px rgba(0,0,0,0.2), 0 1px 2px rgba(0,0,0,0.15)"
            : "0 2px 6px rgba(0,0,0,0.4), 0 0 8px rgba(0,229,255,0.3)",
        }}
        animate={{ left: isLight ? "4px" : "calc(100% - 4px)", x: isLight ? "0%" : "-100%" }}
        transition={{ type: "spring", stiffness: 500, damping: 30 }}
      />
    </button>
  );
}

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [theme, setTheme] = useState<"dark" | "light">(() => {
    if (typeof window !== "undefined") {
      return (localStorage.getItem("theme") as "dark" | "light") || "dark";
    }
    return "dark";
  });
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const colors = theme === "light" ? lightColors : darkColors;
    const root = document.documentElement;
    for (const [key, value] of Object.entries(colors)) {
      root.style.setProperty(key, value);
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => setTheme(theme === "dark" ? "light" : "dark");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (target: string) => {
    setMobileOpen(false);
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        document.getElementById(target)?.scrollIntoView({ behavior: "smooth" });
      }, 300);
    } else {
      setTimeout(() => {
        document.getElementById(target)?.scrollIntoView({ behavior: "smooth" });
      }, 150);
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-bg/80 backdrop-blur-xl border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-[1100px] mx-auto px-5 md:px-10 py-5 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <button
            onClick={() => {
              navigate("/");
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="text-lg font-semibold tracking-[0.2em] text-text hover:text-accent transition-colors"
          >
            DAYLIGHT
          </button>
          <ThemeToggle theme={theme} onToggle={toggleTheme} />
        </div>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <button
              key={item.target}
              onClick={() => scrollTo(item.target)}
              className="text-xs tracking-[0.15em] text-text-dim hover:text-text transition-colors duration-300"
            >
              {item.label}
            </button>
          ))}
          <button
            onClick={() => navigate("/case-study")}
            className="text-xs tracking-[0.15em] text-accent border border-accent/30 hover:border-accent hover:bg-accent/5 px-4 py-2 rounded-full font-medium transition-all duration-300"
          >
            CASE STUDY
          </button>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-text-dim"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-bg/95 backdrop-blur-xl border-b border-border"
          >
            <div className="px-5 py-4 flex flex-col gap-4">
              {navItems.map((item) => (
                <button
                  key={item.target}
                  onClick={() => scrollTo(item.target)}
                  className="text-left text-sm tracking-[0.15em] text-text-dim hover:text-text transition-colors"
                >
                  {item.label}
                </button>
              ))}
              <button
                onClick={() => {
                  navigate("/case-study");
                  setMobileOpen(false);
                }}
                className="text-left text-sm tracking-[0.15em] text-accent hover:text-accent-dim transition-colors font-medium"
              >
                CASE STUDY →
              </button>
              <div className="flex items-center gap-3">
                <ThemeToggle theme={theme} onToggle={toggleTheme} size="mobile" />
                <span className="text-sm tracking-[0.15em] text-text-muted">
                  {theme === "dark" ? "LIGHT MODE" : "DARK MODE"}
                </span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
