import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, ChevronLeft, ChevronRight } from "lucide-react";
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
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);
  const [playing, setPlaying] = useState(false);

  const go = (idx: number) => {
    setPlaying(false);
    setDirection(idx > current ? 1 : -1);
    setCurrent(idx);
  };
  const prev = () => go((current - 1 + aiCinema.length) % aiCinema.length);
  const next = () => go((current + 1) % aiCinema.length);

  const item = aiCinema[current];
  const videoId = getYoutubeId(item.youtubeUrl);
  const thumb = videoId
    ? `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`
    : "";

  return (
    <section id="ai-works" className="py-32 px-5 md:px-10">
      <div className="max-w-[1100px] mx-auto">
        {/* 헤더 */}
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
            AI Works
          </h2>
        </motion.div>

        {/* 메인 카루셀 */}
        <div className="relative group/carousel">
          <div className="relative overflow-hidden rounded-2xl border border-border bg-bg-elevated">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={current}
                custom={direction}
                initial={{ opacity: 0, x: direction * 80 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: direction * -80 }}
                transition={{ duration: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
                className="relative aspect-video"
              >
                {playing && videoId ? (
                  /* 인라인 재생 */
                  <iframe
                    src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
                    title={item.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                    className="w-full h-full"
                  />
                ) : (
                  /* 썸네일 + 플레이 버튼 */
                  <div
                    className="relative w-full h-full cursor-pointer group"
                    onClick={() => setPlaying(true)}
                  >
                    {thumb && (
                      <img
                        src={thumb}
                        alt={item.title}
                        className="w-full h-full object-cover"
                      />
                    )}
                    <div className="absolute inset-0 bg-bg/10 group-hover:bg-bg/30 transition-colors duration-300" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-16 h-16 rounded-full bg-accent/90 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-xl">
                        <Play size={24} className="text-bg ml-1" fill="currentColor" />
                      </div>
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 px-6 py-5 bg-gradient-to-t from-bg/80 to-transparent">
                      <p className="text-text font-semibold text-lg">{item.title}</p>
                    </div>
                  </div>
                )}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* 화살표 — 호버 시 표시 */}
          <button
            onClick={prev}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-bg-elevated/80 backdrop-blur-sm border border-border flex items-center justify-center hover:border-accent/50 transition-all duration-200 z-10 opacity-0 group-hover/carousel:opacity-100"
          >
            <ChevronLeft size={18} className="text-text" />
          </button>
          <button
            onClick={next}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-bg-elevated/80 backdrop-blur-sm border border-border flex items-center justify-center hover:border-accent/50 transition-all duration-200 z-10 opacity-0 group-hover/carousel:opacity-100"
          >
            <ChevronRight size={18} className="text-text" />
          </button>
        </div>

        {/* 썸네일 스트립 + 카운터 */}
        <div className="flex items-center justify-between mt-4">
          <div className="flex gap-2 flex-wrap">
            {aiCinema.map((v, i) => {
              const vid = getYoutubeId(v.youtubeUrl);
              const t = vid
                ? `https://img.youtube.com/vi/${vid}/mqdefault.jpg`
                : "";
              return (
                <button
                  key={v.id}
                  onClick={() => go(i)}
                  className={`relative w-16 md:w-20 aspect-video rounded-lg overflow-hidden border transition-all duration-200 ${
                    i === current
                      ? "border-accent scale-105"
                      : "border-border opacity-40 hover:opacity-70"
                  }`}
                >
                  {t && (
                    <img
                      src={t}
                      alt={v.title}
                      className="w-full h-full object-cover"
                    />
                  )}
                </button>
              );
            })}
          </div>
          <p className="text-text-dim text-sm tabular-nums shrink-0 ml-4">
            <span className="text-text font-medium">{current + 1}</span>
            <span className="mx-1">/</span>
            {aiCinema.length}
          </p>
        </div>
      </div>
    </section>
  );
}
