import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Play } from "lucide-react";
import { works } from "../data/content";

function getYoutubeId(url?: string): string | null {
  if (!url) return null;
  try {
    const u = new URL(url);
    if (u.hostname === "youtu.be") return u.pathname.slice(1);
    if (u.hostname.includes("youtube.com")) return u.searchParams.get("v");
  } catch {
    // ignore
  }
  return null;
}

export default function Works() {
  const [activeId, setActiveId] = useState<string | null>(null);
  const activeWork = works.find((w) => w.id === activeId);

  return (
    <>
      <section id="works" className="py-32 px-5 md:px-10">
        <div className="max-w-[1100px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="mb-16"
          >
            <p className="text-accent text-[10px] tracking-[3px] uppercase mb-3 font-medium">
              PORTFOLIO
            </p>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-text">
              Works
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {works.map((work, i) => {
              const videoId = getYoutubeId(work.youtubeUrl);
              const thumb =
                work.thumbnail ||
                (videoId
                  ? `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`
                  : "");

              return (
                <motion.div
                  key={work.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  onClick={() => setActiveId(work.id)}
                  className="group cursor-pointer glass-card rounded-xl overflow-hidden"
                >
                  {/* Thumbnail */}
                  <div className="aspect-video bg-bg-elevated overflow-hidden relative">
                    {thumb ? (
                      <img
                        src={thumb}
                        alt={work.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center">
                        <span className="text-text-muted text-xs tracking-wider">
                          THUMBNAIL
                        </span>
                      </div>
                    )}
                    {/* Play overlay */}
                    <div className="absolute inset-0 flex items-center justify-center bg-bg/30 group-hover:bg-bg/50 transition-colors duration-300">
                      <div className="w-10 h-10 rounded-full bg-accent/90 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <Play
                          size={16}
                          className="text-bg ml-0.5"
                          fill="currentColor"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Info */}
                  <div className="p-5">
                    <p className="text-accent text-[10px] tracking-[2px] mb-2 font-medium">
                      {work.category.toUpperCase()}
                    </p>
                    <h3 className="text-white text-base font-medium mb-2 group-hover:text-accent transition-colors">
                      {work.title}
                    </h3>
                    <p className="text-white/70 text-sm leading-relaxed mb-4">
                      {work.description}
                    </p>
                    <div className="flex gap-2 flex-wrap">
                      {work.tools.map((tool) => (
                        <span
                          key={tool}
                          className="text-[10px] tracking-wider text-accent-dim bg-accent-glow px-2.5 py-1 rounded-full"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Video + Detail Modal */}
      <AnimatePresence>
        {activeWork && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[100] overflow-y-auto"
            onClick={() => setActiveId(null)}
          >
            {/* Backdrop */}
            <div className="fixed inset-0 bg-bg/90 backdrop-blur-sm" />

            {/* Content */}
            <div className="relative min-h-full flex items-start justify-center py-12 px-4">
              <motion.div
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.95, opacity: 0 }}
                transition={{ duration: 0.25 }}
                className="relative w-full max-w-[800px]"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Close */}
                <button
                  onClick={() => setActiveId(null)}
                  className="absolute -top-10 right-0 text-text-dim hover:text-white transition-colors"
                >
                  <X size={24} />
                </button>

                {/* Category + Title */}
                <div className="mb-6">
                  <p className="text-accent text-[10px] tracking-[3px] uppercase mb-2 font-medium">
                    {activeWork.category.toUpperCase()}
                  </p>
                  <h2 className="text-white text-2xl md:text-3xl font-bold tracking-tight">
                    {activeWork.title}
                  </h2>
                </div>

                {/* YouTube Embed */}
                {activeWork.youtubeUrl && (
                  <div className="aspect-video rounded-xl overflow-hidden border border-border bg-bg-elevated mb-8">
                    <iframe
                      src={`https://www.youtube.com/embed/${getYoutubeId(activeWork.youtubeUrl)}?autoplay=1`}
                      title={activeWork.title}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                      className="w-full h-full"
                    />
                  </div>
                )}

                {/* Details */}
                {activeWork.details && activeWork.details.length > 0 && (
                  <div className="space-y-6">
                    {activeWork.details.map((section, i) => (
                      <div
                        key={i}
                        className="border-l-2 border-accent/30 pl-6"
                      >
                        <h3 className="text-accent text-sm tracking-wider font-medium mb-3">
                          {section.heading}
                        </h3>
                        <ul className="space-y-2">
                          {section.items.map((item, j) => (
                            <li
                              key={j}
                              className="text-white/80 text-sm leading-relaxed flex gap-3"
                            >
                              <span className="text-accent/50 mt-1 shrink-0">
                                •
                              </span>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                )}

                {/* Tags */}
                <div className="flex gap-2 flex-wrap mt-8 pt-6 border-t border-border">
                  {activeWork.tools.map((tool) => (
                    <span
                      key={tool}
                      className="text-[10px] tracking-wider text-accent-dim bg-accent-glow px-2.5 py-1 rounded-full"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
