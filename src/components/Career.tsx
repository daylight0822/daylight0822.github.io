import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronDown } from "lucide-react";
import { careers, filmography } from "../data/content";

export default function Career() {
  const [badgeImg, setBadgeImg] = useState<{ src: string; alt: string } | null>(null);
  const [filmsOpen, setFilmsOpen] = useState(false);

  return (
    <>
      <section id="career" className="py-32 px-5 md:px-10">
        <div className="max-w-[1100px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="mb-16"
          >
            <p className="text-accent text-[10px] tracking-[3px] uppercase mb-3 font-medium">
              EXPERIENCE
            </p>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-text">
              Career
            </h2>
          </motion.div>

          <div className="space-y-0">
            {careers.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="group relative grid md:grid-cols-[180px_1fr] gap-4 md:gap-12 py-8 border-b border-border"
              >
                <div>
                  <p className="text-accent text-sm tracking-wider font-medium">
                    {item.period}
                  </p>
                </div>
                <div>
                  <h3 className="text-text text-lg mb-1 font-medium">
                    {item.title}
                  </h3>
                  <p className="text-accent-dim text-sm mb-3">{item.company}</p>
                  <p className="text-text-dim text-sm leading-relaxed">
                    {item.description}
                  </p>
                  {item.badge && (
                    <button
                      onClick={() => setBadgeImg(item.badge!)}
                      className="mt-3 inline-flex items-center gap-2 text-accent text-xs tracking-wider hover:text-accent-dim transition-colors"
                    >
                      <span className="border border-accent/30 rounded px-2.5 py-1">
                        선정작 목록 보기 →
                      </span>
                    </button>
                  )}
                </div>
              </motion.div>
            ))}

            {/* Films dropdown */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="py-8"
            >
              <button
                onClick={() => setFilmsOpen(!filmsOpen)}
                className="w-full grid md:grid-cols-[180px_1fr] gap-4 md:gap-12 text-left"
              >
                <div>
                  <p className="text-accent text-sm tracking-wider font-medium">
                    2015 — 2019
                  </p>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-text text-lg mb-1 font-medium">
                      단편영화 참여
                    </h3>
                    <p className="text-text-dim text-sm">
                      한국예술종합학교 재학 중 참여한 작품
                    </p>
                  </div>
                  <span className="flex items-center gap-2 border border-accent/40 rounded-full px-4 py-1.5">
                    <span className="text-accent text-xs tracking-wider font-medium">
                      {filmsOpen ? "접기" : "펼쳐보기"}
                    </span>
                    <motion.div
                      animate={{ rotate: filmsOpen ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <ChevronDown size={16} className="text-accent" />
                    </motion.div>
                  </span>
                </div>
              </button>

              <AnimatePresence>
                {filmsOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="md:grid md:grid-cols-[180px_1fr] md:gap-12 mt-6">
                      <div />
                      <div className="space-y-0">
                        {filmography.map((film, i) => (
                          <div
                            key={i}
                            className="grid grid-cols-[50px_1fr_auto] gap-4 py-3 border-b border-border/50 last:border-b-0 items-baseline"
                          >
                            <span className="text-accent text-sm font-medium">
                              {film.year}
                            </span>
                            <div>
                              <span className="text-white text-sm font-medium">
                                {film.title}
                              </span>
                              <span className="text-text-muted text-sm ml-2">
                                {film.director}
                              </span>
                              {film.note && (
                                <p className="text-accent-dim text-xs mt-1">
                                  {film.note}
                                </p>
                              )}
                            </div>
                            <span className="text-text-dim text-sm hidden md:block">
                              {film.role}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Badge Lightbox */}
      <AnimatePresence>
        {badgeImg && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[100] flex items-center justify-center"
            onClick={() => setBadgeImg(null)}
          >
            <div className="absolute inset-0 bg-bg/95 backdrop-blur-sm" />
            <div
              className="relative z-10 max-w-[90vw] max-h-[85vh]"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setBadgeImg(null)}
                className="absolute -top-10 right-0 text-text-dim hover:text-white transition-colors"
              >
                <X size={24} />
              </button>
              <motion.img
                initial={{ opacity: 0, scale: 0.97 }}
                animate={{ opacity: 1, scale: 1 }}
                src={badgeImg.src}
                alt={badgeImg.alt}
                className="max-w-full max-h-[85vh] rounded-lg object-contain"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
