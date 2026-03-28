import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";

const navItems = [
  { label: "PROFILE", target: "profile" },
  { label: "AI WORKS", target: "ai-works" },
  { label: "CAREER", target: "career" },
  { label: "WORKS", target: "works" },
  { label: "GALLERY", target: "gallery" },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (target: string) => {
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        document.getElementById(target)?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    } else {
      document.getElementById(target)?.scrollIntoView({ behavior: "smooth" });
    }
    setMobileOpen(false);
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
        <button
          onClick={() => {
            navigate("/");
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          className="text-lg font-semibold tracking-[0.2em] text-text hover:text-accent transition-colors"
        >
          DAYLIGHT
        </button>

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
            className="text-xs tracking-[0.15em] text-bg bg-accent hover:bg-accent-dim px-4 py-2 rounded-full font-medium transition-colors duration-300"
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
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
