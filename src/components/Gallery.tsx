import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight, Layers } from "lucide-react";
import { Link } from "react-router-dom";
import { gallery } from "../data/content";

export default function Gallery() {
  // 일반 이미지 뷰어
  const [viewer, setViewer] = useState<{
    groupIdx: number;
    imgIdx: number;
  } | null>(null);

  // 묶음(bundle) 뷰어
  const [bundleViewer, setBundleViewer] = useState<{
    images: { src: string; alt: string }[];
    idx: number;
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

  const navigateBundle = (dir: -1 | 1) => {
    if (!bundleViewer) return;
    const next = bundleViewer.idx + dir;
    if (next >= 0 && next < bundleViewer.images.length) {
      setBundleViewer({ ...bundleViewer, idx: next });
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

                <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
                  {group.images.map((img, ii) => (
                    <motion.div
                      key={ii}
                      whileHover={{ scale: 1.02 }}
                      onClick={() =>
                        img.bundle
                          ? setBundleViewer({ images: img.bundle, idx: 0 })
                          : setViewer({ groupIdx: gi, imgIdx: ii })
                      }
                      className="cursor-pointer rounded-lg overflow-hidden border border-border hover:border-accent/40 transition-colors duration-300 bg-bg-elevated p-2 relative"
                    >
                      <img
                        src={img.src}
                        alt={img.alt}
                        className="w-full rounded object-contain"
                        loading="lazy"
                      />
                      {img.bundle && (
                        <div className="absolute top-3 right-3 bg-bg/80 backdrop-blur-sm rounded-full px-2.5 py-1 flex items-center gap-1.5 border border-accent/30">
                          <Layers size={12} className="text-accent" />
                          <span className="text-accent text-[10px] font-medium tracking-wider">
                            {img.bundle.length}장
                          </span>
                        </div>
                      )}
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Case Study CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="mt-24 text-center"
          >
            <div className="divider-line mb-12" />
            <p className="text-text-muted text-sm tracking-wider mb-6">
              AI 영상 제작에 대한 생각과 기록
            </p>
            <Link
              to="/case-study"
              className="inline-flex items-center gap-3 text-accent text-sm tracking-[0.2em] font-medium border border-accent/30 hover:border-accent hover:bg-accent/5 px-8 py-3.5 rounded-full transition-all duration-300 no-underline"
            >
              CASE STUDY →
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Lightbox — 일반 이미지 */}
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

      {/* Lightbox — 묶음(Bundle) 이미지 */}
      <AnimatePresence>
        {bundleViewer && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[100] flex items-center justify-center"
            onClick={() => setBundleViewer(null)}
          >
            <div className="absolute inset-0 bg-bg/95 backdrop-blur-sm" />

            <div
              className="relative z-10 max-w-[90vw] max-h-[85vh] flex items-center"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close */}
              <button
                onClick={() => setBundleViewer(null)}
                className="absolute -top-10 right-0 text-text-dim hover:text-white transition-colors"
              >
                <X size={24} />
              </button>

              {/* Prev */}
              {bundleViewer.idx > 0 && (
                <button
                  onClick={() => navigateBundle(-1)}
                  className="absolute -left-12 md:-left-14 text-text-muted hover:text-white transition-colors"
                >
                  <ChevronLeft size={28} />
                </button>
              )}

              {/* Image */}
              <motion.img
                key={`bundle-${bundleViewer.idx}`}
                initial={{ opacity: 0, scale: 0.97 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.2 }}
                src={bundleViewer.images[bundleViewer.idx].src}
                alt={bundleViewer.images[bundleViewer.idx].alt}
                className="max-w-full max-h-[85vh] rounded-lg object-contain"
              />

              {/* Next */}
              {bundleViewer.idx < bundleViewer.images.length - 1 && (
                <button
                  onClick={() => navigateBundle(1)}
                  className="absolute -right-12 md:-right-14 text-text-muted hover:text-white transition-colors"
                >
                  <ChevronRight size={28} />
                </button>
              )}

              {/* Counter + Title */}
              <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-text-muted text-xs tracking-wider">
                {bundleViewer.idx + 1} / {bundleViewer.images.length}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
