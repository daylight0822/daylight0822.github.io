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
            <p className="text-accent text-xs tracking-[3px] uppercase mb-3 font-medium">
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

            {/* Competition experience is separate from employment history. */}
            <div className="py-8 border-b border-border">
              <p className="text-accent text-xs tracking-[3px] uppercase mb-5 font-medium">
                AI COMPETITION
              </p>
              <div className="grid md:grid-cols-[180px_1fr] gap-4 md:gap-12">
                <p className="text-accent text-sm tracking-wider font-medium">SAIR</p>
                <div className="min-w-0">
                  <h3 className="text-text text-lg mb-1 font-medium">
                    Mathematics Distillation Challenge
                  </h3>
                  <p className="text-accent-dim text-sm mb-3">
                    Equational Theories · Stage 2
                  </p>
                  <p className="text-text-dim text-sm leading-relaxed">
                    K-Arts Alumni (Lost) 팀으로 참가. SAIR 프로필에 표시된
                    google-gemma-4-31b-it 모델의 marathon·solo 트랙 리더보드에서
                    각각 1위를 기록했습니다.
                  </p>
                  <div className="mt-4 rounded-lg border border-border bg-bg/50 p-4 space-y-3">
                    <p className="text-text-dim text-sm leading-relaxed">
                      <span className="text-text font-medium">대회 소개</span>
                      {" "}AI의 수학적 추론을 검증 가능한 풀이로 연결하는 대회입니다.
                      두 수학 법칙 중 하나가 다른 하나를 반드시 성립시키는지 판단하고,
                      참이면 증명, 거짓이면 반례를 제출합니다.
                      결과는 증명 검증 도구 Lean 4로 확인합니다.
                    </p>
                    <dl className="grid gap-3 sm:grid-cols-2 text-sm leading-relaxed">
                      <div>
                        <dt className="text-accent font-medium">Solo</dt>
                        <dd className="text-text-dim">문제마다 독립된 실행과 개별 자원 한도 안에서 풀이합니다.</dd>
                      </div>
                      <div>
                        <dt className="text-accent font-medium">Marathon</dt>
                        <dd className="text-text-dim">여러 문제를 함께 처리하며 전체 시간·토큰 예산을 배분합니다.</dd>
                      </div>
                    </dl>
                    <a
                      href="https://github.com/SAIRcompetition/equational-theories-lean-stage2"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block text-accent text-xs underline underline-offset-4 hover:text-accent-dim transition-colors"
                    >
                      대회·트랙 설명 출처: SAIR 공식 안내 ↗
                    </a>
                  </div>
                  <p className="text-text-muted text-xs leading-relaxed mt-2">
                    제공한 프로필 캡처 기준 기록이며, 최종 수상 결과를 의미하지 않습니다.
                  </p>
                  <div className="flex flex-wrap gap-4 mt-4">
                    <a
                      href="https://sair.foundation/u/95080974"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-accent text-xs tracking-wider underline underline-offset-4 hover:text-accent-dim transition-colors"
                    >
                      SAIR 프로필 보기 ↗
                    </a>
                    <button
                      type="button"
                      onClick={() => setBadgeImg({
                        src: "/career/sair-profile.png",
                        alt: "Dayoung Koo의 SAIR 프로필: K-Arts Alumni (Lost) 팀의 Equational Theories Stage 2 marathon·solo 트랙 1위 기록",
                      })}
                      className="text-accent text-xs tracking-wider underline underline-offset-4 hover:text-accent-dim transition-colors"
                    >
                      리더보드 캡처 보기 →
                    </button>
                  </div>
                </div>
              </div>
            </div>

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
                              <span className="text-text text-sm font-medium">
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
                aria-label="이미지 닫기"
                className="absolute -top-10 right-0 text-text-dim hover:text-text transition-colors"
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
