import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import {
  heroData,
  stats,
  phases,
  creditSegments,
  insights,
} from "../data/content";

export default function CaseStudyPage() {
  return (
    <div className="min-h-screen bg-bg">
      {/* Back nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-bg/80 backdrop-blur-xl border-b border-border">
        <div className="max-w-[1100px] mx-auto px-5 md:px-10 py-5 flex items-center justify-between">
          <Link
            to="/"
            className="flex items-center gap-2 text-text-dim hover:text-accent transition-colors text-sm"
          >
            <ArrowLeft size={16} />
            <span className="tracking-[0.15em]">BACK</span>
          </Link>
          <span className="text-lg font-semibold tracking-[0.2em] text-text">
            DAYLIGHT
          </span>
        </div>
      </nav>

      {/* ===== HERO ===== */}
      <section className="relative min-h-screen flex flex-col justify-end px-5 md:px-10 pb-20 pt-24 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(180deg,#0a0a0c_0%,#0f0f14_50%,#0a0a0c_100%)]" />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 600px 400px at 20% 60%, rgba(232,197,71,0.04), transparent), radial-gradient(ellipse 500px 500px at 80% 30%, rgba(74,143,232,0.03), transparent)",
          }}
        />
        <div className="relative z-10">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-accent text-[11px] tracking-[3px] uppercase mb-5 font-medium"
          >
            {heroData.label}
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-[clamp(48px,10vw,120px)] font-bold leading-[0.95] tracking-wide mb-8"
          >
            {heroData.title}
            <br />
            <span className="text-accent">{heroData.titleAccent}</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="text-text-dim text-base max-w-[560px] leading-relaxed"
          >
            {heroData.description}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="flex flex-wrap gap-6 md:gap-10 mt-12 pt-8 border-t border-border"
          >
            {heroData.meta.map((item) => (
              <div key={item.label} className="flex flex-col gap-1">
                <span className="text-[10px] tracking-[2px] uppercase text-text-muted font-medium">
                  {item.label}
                </span>
                <span className="text-sm font-medium text-text">
                  {item.value}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ===== VIDEO ===== */}
      <section className="px-5 md:px-10 pb-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-[1000px] mx-auto relative overflow-hidden rounded-lg border border-border bg-bg-card"
          style={{ aspectRatio: "2.35 / 1" }}
        >
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,255,255,0.01) 2px, rgba(255,255,255,0.01) 4px)",
            }}
          />
          <div className="w-full h-full flex flex-col items-center justify-center gap-4">
            <div className="w-[72px] h-[72px] rounded-full border-2 border-accent flex items-center justify-center cursor-pointer hover:bg-accent-glow hover:scale-110 transition-all duration-300">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-accent"
              >
                <polygon points="8,5 19,12 8,19" />
              </svg>
            </div>
            <span className="text-text-muted text-[11px] tracking-[2px] uppercase font-medium">
              완성 영상 (YouTube / Vimeo Embed)
            </span>
          </div>
        </motion.div>
      </section>

      {/* ===== STATS ===== */}
      <section className="py-20 px-5 md:px-10 max-w-[1100px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-12"
        >
          <p className="text-accent text-[10px] tracking-[3px] uppercase mb-3 font-medium">
            Production Metrics
          </p>
          <h2 className="text-[clamp(32px,5vw,56px)] font-bold tracking-wide leading-tight mb-6">
            제작 효율 대시보드
          </h2>
          <p className="text-text-dim text-[15px] max-w-[600px]">
            AI 파이프라인의 실제 성과를 수치로 보여줍니다. 비용, 시간, 크레딧
            소모를 투명하게 공개합니다.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 mb-20">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className={`glass-card p-7 relative overflow-hidden group ${
                stat.highlight
                  ? "border-accent-dim! bg-[linear-gradient(135deg,var(--color-bg-card),rgba(232,197,71,0.04))]"
                  : ""
              }`}
            >
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <p className="text-[10px] tracking-[2px] uppercase text-text-muted mb-3 font-medium">
                {stat.label}
              </p>
              <p
                className={`text-[42px] font-bold leading-none mb-1 ${
                  stat.highlight ? "text-accent" : "text-text"
                }`}
              >
                {stat.value}
                {stat.unit && (
                  <span className="text-xl text-text-dim ml-0.5">
                    {stat.unit}
                  </span>
                )}
              </p>
              <p className="text-xs text-text-dim">{stat.sub}</p>
            </motion.div>
          ))}
        </div>

        {/* Cost Comparison */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="glass-card p-6 md:p-10"
        >
          <h3 className="text-[28px] font-bold tracking-wide mb-8">
            TRADITIONAL vs AI PRODUCTION
          </h3>
          <div className="flex flex-col gap-6">
            <div>
              <label className="text-[11px] tracking-[1px] uppercase text-text-dim block mb-2 font-medium">
                예상 제작 비용
              </label>
              <div className="h-10 bg-bg rounded-md overflow-hidden relative">
                <div
                  className="h-full rounded-md flex items-center pl-4 text-[13px] font-medium text-bg bar-animate"
                  style={{
                    width: "95%",
                    background:
                      "linear-gradient(90deg, var(--color-red), #c04535)",
                  }}
                >
                  ₩15,000,000+
                </div>
              </div>
            </div>
            <div>
              <label className="text-[11px] tracking-[1px] uppercase text-text-dim block mb-2 font-medium">
                AI 파이프라인 실제 비용
              </label>
              <div className="h-10 bg-bg rounded-md overflow-hidden relative">
                <div
                  className="h-full rounded-md flex items-center pl-4 text-[13px] font-medium text-bg bar-animate"
                  style={{
                    width: "8%",
                    background:
                      "linear-gradient(90deg, var(--color-accent), var(--color-accent-dim))",
                  }}
                >
                  $49
                </div>
                <span className="absolute right-3 top-1/2 -translate-y-1/2 text-[13px] text-text-dim">
                  ≈ ₩67,000
                </span>
              </div>
            </div>
            <div className="mt-4">
              <label className="text-[11px] tracking-[1px] uppercase text-text-dim block mb-2 font-medium">
                전통 제작 기간 (5분 단편 기준)
              </label>
              <div className="h-10 bg-bg rounded-md overflow-hidden">
                <div
                  className="h-full rounded-md flex items-center pl-4 text-[13px] font-medium text-bg bar-animate"
                  style={{
                    width: "90%",
                    background:
                      "linear-gradient(90deg, var(--color-red), #c04535)",
                  }}
                >
                  4~8주
                </div>
              </div>
            </div>
            <div>
              <label className="text-[11px] tracking-[1px] uppercase text-text-dim block mb-2 font-medium">
                AI 파이프라인 제작 기간
              </label>
              <div className="h-10 bg-bg rounded-md overflow-hidden">
                <div
                  className="h-full rounded-md flex items-center pl-4 text-[13px] font-medium text-bg bar-animate"
                  style={{
                    width: "15%",
                    background:
                      "linear-gradient(90deg, var(--color-accent), var(--color-accent-dim))",
                  }}
                >
                  12일
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* ===== PIPELINE ===== */}
      <section className="py-20 px-5 md:px-10 max-w-[1100px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-12"
        >
          <p className="text-accent text-[10px] tracking-[3px] uppercase mb-3 font-medium">
            Production Pipeline
          </p>
          <h2 className="text-[clamp(32px,5vw,56px)] font-bold tracking-wide leading-tight mb-6">
            제작 과정
          </h2>
          <p className="text-text-dim text-[15px] max-w-[600px]">
            텍스트 시나리오부터 최종 편집까지, 6단계 AI 영상 제작 파이프라인의
            각 과정을 실제 작업물과 함께 보여줍니다.
          </p>
        </motion.div>

        <div className="relative">
          <div className="pipeline-line" />
          {phases.map((phase, i) => (
            <motion.div
              key={phase.number}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.05 }}
              className="relative pl-[72px] pb-15 last:pb-0"
            >
              <div className="absolute left-3 top-1 w-[25px] h-[25px] rounded-full border-2 border-accent bg-bg flex items-center justify-center text-[10px] text-accent font-medium z-10">
                {phase.number}
              </div>
              <div className="flex items-baseline gap-4 flex-wrap mb-3">
                <span className="text-[28px] font-bold tracking-wide">
                  {phase.name}
                </span>
                {phase.tags.map((tag) => (
                  <span
                    key={tag.label}
                    className={`text-[10px] tracking-[1px] uppercase px-2.5 py-1 rounded border font-medium ${
                      tag.type === "tool"
                        ? "border-blue text-blue"
                        : tag.type === "credit"
                          ? "border-accent-dim text-accent"
                          : "border-border text-text-dim"
                    }`}
                  >
                    {tag.label}
                  </span>
                ))}
              </div>
              <p className="text-sm text-text-dim mb-5 max-w-[600px] leading-relaxed">
                {phase.body}
              </p>

              {phase.gallery && (
                <div className="grid grid-cols-[repeat(auto-fill,minmax(180px,1fr))] gap-3">
                  {phase.gallery.map((img) => (
                    <div
                      key={img.label}
                      className={`aspect-video bg-bg-elevated border border-border rounded-lg flex items-center justify-center text-[10px] text-text-muted tracking-[1px] uppercase relative overflow-hidden hover:border-accent-dim transition-colors duration-300 ${
                        img.wide ? "col-span-2" : ""
                      }`}
                    >
                      {img.label}
                      <span className="absolute bottom-2 left-2.5 text-[9px] bg-black/70 px-1.5 py-0.5 rounded">
                        {img.sublabel}
                      </span>
                    </div>
                  ))}
                </div>
              )}

              {phase.cameras && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-5">
                  {phase.cameras.map((cam) => (
                    <div
                      key={cam.title}
                      className="bg-bg-elevated border border-border rounded-xl p-6"
                    >
                      <h4 className="text-[11px] tracking-[2px] uppercase text-accent mb-4 font-medium">
                        {cam.title}
                      </h4>
                      {cam.rows.map((row) => (
                        <div
                          key={row.label}
                          className="flex justify-between py-1.5 border-b border-white/[0.04] last:border-b-0 text-[13px]"
                        >
                          <span className="text-text-muted">{row.label}</span>
                          <span className="text-text font-normal">
                            {row.value}
                          </span>
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
              )}

              {phase.models && (
                <div>
                  <p className="text-[11px] tracking-[1px] text-text-muted uppercase mb-4 font-medium">
                    Model Comparison — 취조실 클로즈업 샷
                  </p>
                  <div className="grid grid-cols-[repeat(auto-fill,minmax(220px,1fr))] gap-3">
                    {phase.models.map((model) => (
                      <div
                        key={model.name}
                        className="bg-bg-elevated border border-border rounded-xl overflow-hidden hover:border-accent-dim transition-colors duration-300"
                      >
                        <div className="aspect-video bg-bg flex items-center justify-center text-[10px] text-text-muted tracking-[1px] uppercase">
                          {model.name}
                        </div>
                        <div className="p-3.5">
                          <p className="text-xs font-medium text-text mb-1">
                            {model.name}
                          </p>
                          <p className="text-[11px] text-text-muted mb-2">
                            {model.meta}
                          </p>
                          <span
                            className={`text-[11px] inline-block px-2 py-1 rounded ${
                              model.selected
                                ? "bg-accent-glow text-accent border border-accent-dim"
                                : "bg-red/[0.08] text-red border border-red/20"
                            }`}
                          >
                            {model.selected ? "✓" : "✗"} {model.verdict}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Credit Breakdown */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="glass-card p-6 md:p-10 mt-16"
        >
          <h3 className="text-[28px] font-bold tracking-wide mb-2">
            CREDIT USAGE BREAKDOWN
          </h3>
          <p className="text-[13px] text-text-dim mb-8">
            Plus 플랜 1,000크레딧 중 940 사용 · 무제한 모델로 이미지 생성 커버
          </p>
          <div className="h-8 bg-bg rounded-md flex overflow-hidden mb-5">
            {creditSegments.map((seg) => (
              <div
                key={seg.label}
                className="h-full flex items-center justify-center text-[10px] font-medium text-bg"
                style={{ background: seg.color, width: seg.width }}
              >
                {seg.label}
              </div>
            ))}
          </div>
          <div className="flex flex-wrap gap-5">
            {creditSegments.map((seg) => (
              <div
                key={seg.label}
                className="flex items-center gap-2 text-xs text-text-dim"
              >
                <div
                  className="w-2.5 h-2.5 rounded-sm"
                  style={{ background: seg.color }}
                />
                {seg.legend}
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* ===== INSIGHTS ===== */}
      <section className="py-20 px-5 md:px-10 max-w-[1100px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-10"
        >
          <p className="text-accent text-[10px] tracking-[3px] uppercase mb-3 font-medium">
            Retrospective
          </p>
          <h2 className="text-[clamp(32px,5vw,56px)] font-bold tracking-wide leading-tight">
            회고 & 인사이트
          </h2>
        </motion.div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {insights.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`glass-card p-7 ${
                item.type === "learned"
                  ? "border-l-[3px] border-l-green"
                  : "border-l-[3px] border-l-blue"
              }`}
            >
              <h4 className="text-[15px] font-medium mb-2.5">
                {item.type === "learned" ? "🎯" : "🔧"} {item.title}
              </h4>
              <p className="text-[13px] text-text-dim leading-relaxed">
                {item.body}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 px-5 md:px-10 text-center border-t border-border mt-20">
        <p className="text-text-muted text-[11px] tracking-[2px] uppercase">
          Produced by DAYLIGHT — {new Date().getFullYear()}
        </p>
      </footer>
    </div>
  );
}
