import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Play } from "lucide-react";
import { aiCinema } from "../data/content";

function getYoutubeId(url: string): string | null {
  try {
    const u = new URL(url);
    if (u.hostname === "youtu.be") return u.pathname.slice(1);
    if (u.hostname.includes("youtube.com")) return u.searchParams.get("v");
  } catch {
    // ignore
  }
  return null;
}

export default function AICinema() {
  const [activeId, setActiveId] = useState<string | null>(null);

  return (
    <>
      <section id="ai-cinema" className="py-32 px-5 md:px-10">
        <div className="max-w-[1100px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="mb-16"
          >
            <p className="text-accent text-[10px] tracking-[3px] uppercase mb-3 font-medium">
              AI VIDEO PRODUCTION
            </p>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-text">
              AI Cinema
            </h2>
          </motion.div>

          <div className="grid grid-cols-2 gap-4 md:gap-6">
            {aiCinema.map((item, i) => {
              const videoId = getYoutubeId(item.youtubeUrl);
              const thumb = videoId
                ? `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`
                : "";

              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  onClick={() => setActiveId(item.id)}
                  className="group cursor-pointer relative rounded-xl overflow-hidden border border-border hover:border-accent/40 transition-colors duration-300"
                >
                  <div className="aspect-video bg-bg-elevated overflow-hidden">
                    {thumb && (
                      <img
                        src={thumb}
                        alt={item.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                    )}
                  </div>
                  {/* Play overlay */}
                  <div className="absolute inset-0 flex items-center justify-center bg-bg/30 group-hover:bg-bg/50 transition-colors duration-300">
                    <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-accent/90 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Play size={20} className="text-bg ml-0.5" fill="currentColor" />
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Video Modal */}
      <AnimatePresence>
        {activeId && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[100] flex items-center justify-center px-4"
            onClick={() => setActiveId(null)}
          >
            {/* Backdrop */}
            <div className="absolute inset-0 bg-bg/90 backdrop-blur-sm" />

            {/* Content */}
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="relative w-full max-w-[800px]"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close button */}
              <button
                onClick={() => setActiveId(null)}
                className="absolute -top-10 right-0 text-text-dim hover:text-text transition-colors"
              >
                <X size={24} />
              </button>

              <div className="aspect-video rounded-xl overflow-hidden border border-border bg-bg-elevated">
                {(() => {
                  const item = aiCinema.find((v) => v.id === activeId);
                  if (!item) return null;
                  const videoId = getYoutubeId(item.youtubeUrl);
                  if (!videoId) return null;
                  return (
                    <iframe
                      src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
                      title={item.title}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                      className="w-full h-full"
                    />
                  );
                })()}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
