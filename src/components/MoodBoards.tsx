import { useState, useEffect, useMemo } from "react";
import { motion } from "framer-motion";
import { ExternalLink, ChevronLeft, ChevronRight } from "lucide-react";
import { moodboards } from "../data/content";

const PAGE_SIZE = 2;

export default function MoodBoards() {
  const [page, setPage] = useState(0);

  const pages = useMemo(() => {
    const out = [];
    for (let i = 0; i < moodboards.length; i += PAGE_SIZE) {
      out.push(moodboards.slice(i, i + PAGE_SIZE));
    }
    return out;
  }, []);

  const totalPages = pages.length;
  const canPrev = page > 0;
  const canNext = page < totalPages - 1;

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft" && canPrev) setPage((p) => p - 1);
      if (e.key === "ArrowRight" && canNext) setPage((p) => p + 1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [canPrev, canNext]);

  return (
    <section id="moodboards" className="py-32 px-5 md:px-10">
      <div className="max-w-[1100px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <p className="text-accent text-xs tracking-[3px] uppercase mb-3 font-medium">
            AI MOOD VISUAL
          </p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-text">
            Mood Boards
          </h2>
          <p className="text-text/60 text-sm mt-4 max-w-[640px] leading-relaxed">
            프로젝트 기획 단계의 톤앤매너를 정의하는 시네마틱 무드보드 시리즈.
          </p>
        </motion.div>

        <div className="relative">
          {totalPages > 1 && (
            <>
              <button
                type="button"
                onClick={() => canPrev && setPage((p) => p - 1)}
                disabled={!canPrev}
                aria-label="이전 무드보드"
                className="hidden md:flex absolute top-1/2 -translate-y-1/2 -left-4 lg:-left-6 z-10 w-12 h-12 rounded-full bg-bg/85 backdrop-blur-md border border-border items-center justify-center text-text hover:bg-accent hover:text-bg hover:border-accent hover:scale-110 disabled:opacity-25 disabled:cursor-not-allowed disabled:hover:bg-bg/85 disabled:hover:text-text disabled:hover:border-border disabled:hover:scale-100 transition-all duration-200"
              >
                <ChevronLeft size={20} />
              </button>
              <button
                type="button"
                onClick={() => canNext && setPage((p) => p + 1)}
                disabled={!canNext}
                aria-label="다음 무드보드"
                className="hidden md:flex absolute top-1/2 -translate-y-1/2 -right-4 lg:-right-6 z-10 w-12 h-12 rounded-full bg-bg/85 backdrop-blur-md border border-border items-center justify-center text-text hover:bg-accent hover:text-bg hover:border-accent hover:scale-110 disabled:opacity-25 disabled:cursor-not-allowed disabled:hover:bg-bg/85 disabled:hover:text-text disabled:hover:border-border disabled:hover:scale-100 transition-all duration-200"
              >
                <ChevronRight size={20} />
              </button>
            </>
          )}

          <div className="overflow-hidden rounded-2xl">
            <div
              className="flex transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]"
              style={{ transform: `translateX(-${page * 100}%)` }}
            >
              {pages.map((chunk, pi) => (
                <div
                  key={pi}
                  className="shrink-0 w-full grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8"
                >
                  {chunk.map((mb) => (
                    <a
                      key={mb.id}
                      href={mb.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group block rounded-2xl overflow-hidden border border-border bg-bg-elevated hover:border-accent/40 hover:-translate-y-1 transition-all duration-300 no-underline"
                    >
                      {/* Cover */}
                      <div className="relative aspect-video overflow-hidden bg-bg">
                        <img
                          src={mb.cover}
                          alt={mb.titleEn}
                          loading="lazy"
                          className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-bg/90 via-bg/20 to-transparent" />
                        <div className="absolute bottom-0 left-0 right-0 p-5 md:p-6">
                          <div className="flex items-end justify-between gap-3">
                            <div>
                              <h3 className="text-text text-2xl md:text-3xl font-bold tracking-tight leading-tight">
                                {mb.titleKo}
                              </h3>
                              <p className="text-accent text-xs tracking-[0.25em] uppercase mt-1 font-medium">
                                {mb.titleEn}
                              </p>
                            </div>
                            <div className="shrink-0 w-9 h-9 rounded-full bg-bg/70 backdrop-blur-sm border border-border flex items-center justify-center group-hover:border-accent/60 group-hover:bg-accent/10 transition-colors">
                              <ExternalLink size={14} className="text-text-dim group-hover:text-accent transition-colors" />
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Info */}
                      <div className="p-5 md:p-6">
                        <p className="text-text/75 text-sm leading-relaxed mb-5 line-clamp-3">
                          {mb.subtitle}
                        </p>

                        <div className="flex items-center gap-2 flex-wrap mb-5">
                          <span className="text-xs tracking-wider text-accent-dim bg-accent-glow px-2.5 py-1 rounded-full">
                            톤 · {mb.toneAnchor}
                          </span>
                          <span className="text-xs tracking-wider text-text-muted bg-bg-card px-2.5 py-1 rounded-full border border-border">
                            {mb.genre}
                          </span>
                        </div>

                        {/* Thumb strip */}
                        <div className="grid grid-cols-4 gap-1.5">
                          {mb.thumbs.map((t, ti) => (
                            <div
                              key={ti}
                              className="aspect-video rounded overflow-hidden bg-bg"
                            >
                              <img
                                src={t}
                                alt=""
                                loading="lazy"
                                className="w-full h-full object-cover"
                              />
                            </div>
                          ))}
                        </div>
                      </div>
                    </a>
                  ))}
                </div>
              ))}
            </div>
          </div>

          {totalPages > 1 && (
            <div className="flex items-center justify-center gap-2.5 mt-10">
              {pages.map((_, pi) => (
                <button
                  key={pi}
                  type="button"
                  onClick={() => setPage(pi)}
                  aria-label={`${pi + 1}페이지로 이동`}
                  aria-current={pi === page}
                  className={`h-1 rounded-full transition-all duration-300 ${
                    pi === page
                      ? "w-12 bg-accent"
                      : "w-7 bg-border hover:bg-text-dim"
                  }`}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
