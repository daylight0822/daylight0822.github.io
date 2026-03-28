import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { gallery } from "../data/content";

export default function Gallery() {
  const [viewer, setViewer] = useState<{
    groupIdx: number;
    imgIdx: number;
  } | null>(null);

  const currentGroup = viewer !== null ? gallery[viewer.groupIdx] : null;
  const currentImg = currentGroup ? currentGroup.images[viewer!.imgIdx] : null;
  const totalInGroup = currentGroup ? currentGroup.images.length : 0;

  const navigate = (dir: -1 | 1) => {
    if (!viewer || !currentGroup) return;
    const next = viewer.imgIdx + dir;
    if (next >= 0 && next < totalInGroup) {
      setViewer({ ...viewer, imgIdx: next });
    }
  };

  return (
    <>
      <section id="gallery" className="py-32 px-5 md:px-10">
        <div className="max-w-[1100px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="mb-16"
          >
            <p className="text-accent text-[10px] tracking-[3px] uppercase mb-3 font-medium">
              ETC
            </p>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-text">
              Gallery
            </h2>
          </motion.div>

          <div className="space-y-16">
            {gallery.map((group, gi) => (
              <motion.div
                key={group.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6 }}
              >
                <div className="mb-6">
                  <h3 className="text-white text-lg font-medium mb-1">
                    {group.title}
                  </h3>
                  <p className="text-white/60 text-sm">{group.description}</p>
                </div>

                <div className="grid grid-cols-3 md:grid-cols-4 gap-2 md:gap-3">
                  {group.images.map((img, ii) => (
                    <motion.div
                      key={ii}
                      whileHover={{ scale: 1.03 }}
                      onClick={() =>
                        setViewer({ groupIdx: gi, imgIdx: ii })
                      }
                      className="cursor-pointer rounded-lg overflow-hidden border border-border hover:border-accent/40 transition-colors duration-300 bg-bg-elevated"
                    >
                      <img
                        src={img.src}
                        alt={img.alt}
                        className="w-full h-full object-cover aspect-[16/9]"
                        loading="lazy"
                      />
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {viewer !== null && currentImg && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[100] flex items-center justify-center"
            onClick={() => setViewer(null)}
          >
            <div className="absolute inset-0 bg-bg/95 backdrop-blur-sm" />

            <div
              className="relative z-10 max-w-[90vw] max-h-[85vh] flex items-center"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close */}
              <button
                onClick={() => setViewer(null)}
                className="absolute -top-10 right-0 text-text-dim hover:text-white transition-colors"
              >
                <X size={24} />
              </button>

              {/* Prev */}
              {viewer.imgIdx > 0 && (
                <button
                  onClick={() => navigate(-1)}
                  className="absolute -left-12 md:-left-14 text-text-muted hover:text-white transition-colors"
                >
                  <ChevronLeft size={28} />
                </button>
              )}

              {/* Image */}
              <motion.img
                key={`${viewer.groupIdx}-${viewer.imgIdx}`}
                initial={{ opacity: 0, scale: 0.97 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.2 }}
                src={currentImg.src}
                alt={currentImg.alt}
                className="max-w-full max-h-[85vh] rounded-lg object-contain"
              />

              {/* Next */}
              {viewer.imgIdx < totalInGroup - 1 && (
                <button
                  onClick={() => navigate(1)}
                  className="absolute -right-12 md:-right-14 text-text-muted hover:text-white transition-colors"
                >
                  <ChevronRight size={28} />
                </button>
              )}

              {/* Counter */}
              <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-text-muted text-xs tracking-wider">
                {viewer.imgIdx + 1} / {totalInGroup}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
