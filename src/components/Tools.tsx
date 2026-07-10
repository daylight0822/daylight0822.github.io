import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { tools } from "../data/content";

export default function Tools() {
  const [lightbox, setLightbox] = useState<{ toolIdx: number; shotIdx: number } | null>(null);

  const current =
    lightbox !== null ? tools[lightbox.toolIdx].shots[lightbox.shotIdx] : null;

  const move = (dir: number) => {
    setLightbox((lb) => {
      if (!lb) return lb;
      const shots = tools[lb.toolIdx].shots;
      const next = (lb.shotIdx + dir + shots.length) % shots.length;
      return { ...lb, shotIdx: next };
    });
  };

  useEffect(() => {
    if (lightbox === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightbox(null);
      if (e.key === "ArrowLeft") move(-1);
      if (e.key === "ArrowRight") move(1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [lightbox]);

  return (
    <section id="tools" className="py-32 px-5 md:px-10">
      <div className="max-w-[1100px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <p className="text-accent text-xs tracking-[3px] uppercase mb-3 font-medium">
            TOOLS I BUILT
          </p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-text">
            제작 도구
          </h2>
          <p className="text-text/60 text-sm mt-4 max-w-[640px] leading-relaxed">
            제작 현장의 불편함을 직접 프로그램으로 만들어 해결합니다. 기획부터 후반까지, AI 영상 제작 워크플로우를 담은 도구를 설계하고 만들었습니다.
          </p>
        </motion.div>

        <div className="space-y-24">
          {tools.map((tool, ti) => (
            <motion.div
              key={tool.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7 }}
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                {/* 러프 컷 트리밍 데모 (GIF) */}
                <div>
                  <div className="rounded-2xl overflow-hidden border border-border bg-bg-elevated shadow-2xl">
                    <img
                      src={tool.gif}
                      alt={tool.gifCaption}
                      loading="lazy"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <p className="text-text-muted text-xs mt-3 text-center">
                    {tool.gifCaption}
                  </p>
                </div>

                {/* 소개 */}
                <div>
                  <h3 className="text-3xl md:text-4xl font-bold tracking-tight text-text">
                    {tool.title}
                    {tool.titleAccent && (
                      <span className="bg-gradient-to-r from-accent to-accent-sub bg-clip-text text-transparent">
                        {" "}
                        {tool.titleAccent}
                      </span>
                    )}
                  </h3>
                  <p className="text-accent text-sm tracking-wide mt-2 font-medium">
                    {tool.subtitle}
                  </p>
                  <p className="text-text/75 text-sm md:text-[15px] leading-relaxed mt-5">
                    {tool.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mt-6">
                    {tool.tags.map((t) => (
                      <span
                        key={t}
                        className="text-xs tracking-wide text-text-muted bg-bg-card px-3 py-1.5 rounded-full border border-border"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* 스크린샷 썸네일 */}
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4 mt-8">
                {tool.shots.map((shot, si) => (
                  <button
                    key={shot.src}
                    onClick={() => setLightbox({ toolIdx: ti, shotIdx: si })}
                    className="group relative aspect-video rounded-xl overflow-hidden border border-border bg-bg-elevated hover:border-accent/40 transition-all duration-300"
                  >
                    <img
                      src={shot.src}
                      alt={shot.caption}
                      loading="lazy"
                      className="w-full h-full object-cover object-top group-hover:scale-[1.03] transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-bg/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <span className="absolute bottom-0 left-0 right-0 p-3 text-left text-[11px] leading-snug text-text opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      {shot.caption}
                    </span>
                  </button>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* 라이트박스 */}
      <AnimatePresence>
        {current && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightbox(null)}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/85 backdrop-blur-sm p-4 md:p-10"
          >
            <button
              onClick={() => setLightbox(null)}
              aria-label="닫기"
              className="absolute top-5 right-5 w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition"
            >
              <X size={20} />
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                move(-1);
              }}
              aria-label="이전"
              className="absolute left-3 md:left-8 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition"
            >
              <ChevronLeft size={22} />
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                move(1);
              }}
              aria-label="다음"
              className="absolute right-3 md:right-8 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition"
            >
              <ChevronRight size={22} />
            </button>
            <div
              onClick={(e) => e.stopPropagation()}
              className="max-w-[1100px] w-full"
            >
              <img
                src={current.src}
                alt={current.caption}
                className="w-full max-h-[80vh] object-contain rounded-lg"
              />
              <p className="text-center text-white/80 text-sm mt-4">
                {current.caption}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
