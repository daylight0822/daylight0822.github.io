import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ChevronRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const conceptArt = [
  {
    id: "1A",
    title: "붕괴하는 성소",
    desc: "디지털 코드가 침식하는 고딕 성당. 물리적 신앙의 공간이 데이터로 해체되는 순간.",
    img: "/m83/1A-cathedral-collapse.png",
    tags: ["Gothic Architecture", "Digital Erosion", "Cyan/Magenta"],
  },
  {
    id: "1B",
    title: "빛나는 오류",
    desc: "성당 전체가 디지털 회로처럼 발광하는 장면. 신앙이 코드로 변환되는 메타포.",
    img: "/m83/1B-glowing-error.png",
    tags: ["Sacred Light", "Circuit Pattern", "Warm Glow"],
  },
];

const workflowNodes = [
  { name: "Load Checkpoint", role: "AI 모델 로딩", detail: "사전 학습된 모델을 GPU에 로드. 화풍과 스타일을 결정하는 출발점." },
  { name: "CLIP Encode", role: "프롬프트 → 벡터", detail: "텍스트를 AI가 이해하는 수치 벡터로 변환. Positive/Negative 2개 사용." },
  { name: "KSampler", role: "이미지 생성 엔진", detail: "노이즈 제거를 반복하며 이미지 생성. Steps, CFG 등 핵심 파라미터 제어." },
  { name: "VAE Decode", role: "잠재 공간 → 픽셀", detail: "잠재 공간 데이터를 사람이 볼 수 있는 실제 이미지로 디코딩." },
  { name: "Save Image", role: "결과물 저장", detail: "메타데이터(프롬프트, 설정값)가 포함된 이미지 파일 출력." },
];

const vfxScenarios = [
  {
    num: "01",
    title: "콘셉트 아트 옵션 제안",
    desc: "하나의 장면을 여러 분위기로 빠르게 시각화. 프롬프트와 시드값만 변경하여 3~5개 비주얼 옵션을 30분 내 생성.",
    tags: ["Checkpoint 교체", "Seed 변경", "CFG 조절"],
  },
  {
    num: "02",
    title: "스타일 일관성 유지",
    desc: "ControlNet과 IP-Adapter로 레퍼런스 스타일을 유지하면서 구도나 배경만 변경. 시퀀스 전체 비주얼 톤 통일.",
    tags: ["ControlNet", "IP-Adapter", "Style Transfer"],
  },
  {
    num: "03",
    title: "프리비즈 파이프라인 자동화",
    desc: "워크플로우 템플릿으로 프롬프트만 교체하여 8~12컷의 프리비즈를 일관된 스타일로 대량 생성.",
    tags: ["Batch Processing", "Workflow Template", "Prompt Queue"],
  },
];

const roadmap = [
  { phase: "DONE", label: "Phase 1", title: "기본 워크플로우", desc: "Text-to-Image 기본 파이프라인 구축. 6개 핵심 노드 역할과 연결 구조 이해." },
  { phase: "NEXT", label: "Phase 2", title: "모델 업그레이드", desc: "SDXL / Flux 최신 모델 적용. LoRA로 특정 스타일 적용, Hires Fix로 고해상도 출력." },
  { phase: "FUTURE", label: "Phase 3", title: "ControlNet & IP-Adapter", desc: "구도/포즈 제어와 레퍼런스 스타일 전이. VFX 프리비즈 필수 역량." },
  { phase: "FUTURE", label: "Phase 4", title: "실무 파이프라인", desc: "프로젝트별 워크플로우 템플릿, 배치 프로세싱, 팀 협업 표준화." },
];

export default function M83Page() {
  const navigate = useNavigate();
  const [selectedImg, setSelectedImg] = useState<string | null>(null);

  return (
    <div className="min-h-screen" style={{ background: "#0a0a0f", fontFamily: "'Noto Sans KR', sans-serif" }}>
      {/* Nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-10 py-4" style={{ background: "rgba(10,10,15,0.85)", backdropFilter: "blur(12px)", borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
        <button onClick={() => navigate("/")} className="flex items-center gap-2 text-sm tracking-widest transition-colors cursor-pointer" style={{ color: "#888" }} onMouseEnter={e => (e.currentTarget.style.color = "#00f0ff")} onMouseLeave={e => (e.currentTarget.style.color = "#888")}>
          <ArrowLeft size={16} /> BACK
        </button>
        <span className="text-base font-semibold tracking-[0.2em]" style={{ color: "#fff" }}>DAYLIGHT</span>
        <div className="w-16" />
      </nav>

      {/* Hero */}
      <section className="flex flex-col items-center justify-center text-center pt-32 pb-20 px-6" style={{ background: "radial-gradient(ellipse at 30% 50%, rgba(0,240,255,0.06) 0%, transparent 60%), radial-gradient(ellipse at 70% 50%, rgba(255,0,110,0.04) 0%, transparent 60%), #0a0a0f" }}>
        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-xs font-medium tracking-[0.3em] uppercase mb-6" style={{ color: "#00f0ff", opacity: 0.8 }}>
          M83 AI Artist Portfolio
        </motion.p>
        <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }} className="text-4xl md:text-6xl font-black mb-4" style={{ color: "#fff", letterSpacing: "-1px" }}>
          AI <span style={{ background: "linear-gradient(135deg, #00f0ff, #ff006e)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Visual Development</span>
        </motion.h1>
        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} className="text-lg mb-10" style={{ color: "#888", fontWeight: 300 }}>
          VFX 현장을 위한 AI 콘셉트 아트 & 워크플로우 설계
        </motion.p>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }} className="w-16 h-0.5" style={{ background: "linear-gradient(90deg, #00f0ff, #ff006e)" }} />
      </section>

      {/* Section 1: Concept Art */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="flex items-center gap-3 mb-3">
          <span className="text-xs font-bold tracking-widest" style={{ color: "#00f0ff" }}>01</span>
          <h2 className="text-2xl md:text-3xl font-bold" style={{ color: "#fff" }}>콘셉트 아트 — 옵션 제안</h2>
        </div>
        <p className="text-sm mb-10" style={{ color: "#888", maxWidth: 600 }}>
          하나의 장면에 대해 서로 다른 비주얼 방향성을 제안합니다. 연출/PD에게 빠르게 선택지를 제공하는 실무 중심 접근.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {conceptArt.map((art, i) => (
            <motion.div key={art.id} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.15 }} className="rounded-xl overflow-hidden cursor-pointer group" style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)" }} onClick={() => setSelectedImg(art.img)}>
              <div className="overflow-hidden">
                <img src={art.img} alt={art.title} className="w-full aspect-video object-cover transition-transform duration-500 group-hover:scale-105" />
              </div>
              <div className="p-5">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs font-bold tracking-widest" style={{ color: "#ff006e" }}>OPTION {art.id}</span>
                </div>
                <h3 className="text-lg font-bold mb-2" style={{ color: "#fff" }}>{art.title}</h3>
                <p className="text-sm leading-relaxed mb-3" style={{ color: "#aaa" }}>{art.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {art.tags.map(tag => (
                    <span key={tag} className="text-xs px-2 py-1 rounded" style={{ background: "rgba(255,255,255,0.06)", color: "#aaa" }}>{tag}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Section 2: ComfyUI Workflow */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="flex items-center gap-3 mb-3">
          <span className="text-xs font-bold tracking-widest" style={{ color: "#00f0ff" }}>02</span>
          <h2 className="text-2xl md:text-3xl font-bold" style={{ color: "#fff" }}>ComfyUI 워크플로우 설계</h2>
        </div>
        <p className="text-sm mb-10" style={{ color: "#888", maxWidth: 600 }}>
          노드 기반 AI 이미지 생성 파이프라인. 프롬프트부터 최종 출력까지 전 과정을 시각적으로 설계합니다.
        </p>

        {/* Workflow Screenshot */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="rounded-xl overflow-hidden mb-8" style={{ border: "1px solid rgba(255,255,255,0.1)" }}>
          <img src="/m83/comfyui_workflow.jpg" alt="ComfyUI Workflow" className="w-full object-contain" style={{ background: "#111" }} />
        </motion.div>

        {/* Node Flow */}
        <div className="flex items-center justify-center flex-wrap gap-3 mb-10">
          {workflowNodes.map((node, i) => (
            <div key={node.name} className="flex items-center gap-3">
              <span className="text-xs font-medium px-3 py-1.5 rounded-md" style={{ background: "rgba(0,240,255,0.1)", border: "1px solid rgba(0,240,255,0.2)", color: "#00f0ff" }}>{node.name}</span>
              {i < workflowNodes.length - 1 && <ChevronRight size={14} style={{ color: "#555" }} />}
            </div>
          ))}
        </div>

        {/* Node Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {workflowNodes.map((node, i) => (
            <motion.div key={node.name} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }} className="rounded-lg p-4" style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)" }}>
              <p className="text-sm font-bold mb-1" style={{ color: "#00f0ff" }}>{node.name}</p>
              <p className="text-sm font-medium mb-2" style={{ color: "#fff" }}>{node.role}</p>
              <p className="text-xs leading-relaxed" style={{ color: "#888" }}>{node.detail}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Section 3: VFX Application */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="flex items-center gap-3 mb-3">
          <span className="text-xs font-bold tracking-widest" style={{ color: "#00f0ff" }}>03</span>
          <h2 className="text-2xl md:text-3xl font-bold" style={{ color: "#fff" }}>VFX 제작 현장 활용</h2>
        </div>
        <p className="text-sm mb-10" style={{ color: "#888", maxWidth: 600 }}>
          AI 도구를 VFX 파이프라인에 통합하는 실무 시나리오.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {vfxScenarios.map((s, i) => (
            <motion.div key={s.num} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="rounded-xl p-6" style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)" }}>
              <p className="text-xs font-bold tracking-widest mb-2" style={{ color: "#ff006e" }}>SCENARIO {s.num}</p>
              <h3 className="text-base font-bold mb-3" style={{ color: "#fff" }}>{s.title}</h3>
              <p className="text-sm leading-relaxed mb-4" style={{ color: "#aaa" }}>{s.desc}</p>
              <div className="flex flex-wrap gap-2">
                {s.tags.map(tag => (
                  <span key={tag} className="text-xs px-2 py-1 rounded" style={{ background: "rgba(255,255,255,0.06)", color: "#aaa" }}>{tag}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="rounded-xl p-6" style={{ background: "linear-gradient(135deg, rgba(0,240,255,0.08), rgba(255,0,110,0.05))", border: "1px solid rgba(0,240,255,0.15)" }}>
          <h3 className="text-sm font-bold mb-2" style={{ color: "#00f0ff" }}>M83 MetaScene Creator와의 연결</h3>
          <p className="text-sm leading-relaxed" style={{ color: "#aaa" }}>
            M83의 자회사 디블라트(DiBlAT)가 KIST와 공동 개발 중인 AI 프리비즈 도구 'MetaScene Creator'는 AI 기반 시각 자료 생성을 제작 파이프라인에 통합합니다.
            ComfyUI의 노드 기반 워크플로우 설계 경험은 이러한 AI 프리비즈 도구를 이해하고 활용하는 데 직접적인 기반이 됩니다.
          </p>
        </motion.div>
      </section>

      {/* Section 4: Learning Roadmap */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="flex items-center gap-3 mb-10">
          <span className="text-xs font-bold tracking-widest" style={{ color: "#00f0ff" }}>04</span>
          <h2 className="text-2xl md:text-3xl font-bold" style={{ color: "#fff" }}>학습 로드맵</h2>
        </div>
        <div className="space-y-4">
          {roadmap.map((item, i) => (
            <motion.div key={item.label} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="flex gap-4 md:gap-6">
              <div className="flex-shrink-0 w-20 pt-1">
                <span className="text-xs font-bold px-3 py-1 rounded-full" style={{
                  background: item.phase === "DONE" ? "rgba(0,240,255,0.15)" : item.phase === "NEXT" ? "rgba(255,0,110,0.15)" : "rgba(255,255,255,0.08)",
                  color: item.phase === "DONE" ? "#00f0ff" : item.phase === "NEXT" ? "#ff006e" : "#888",
                }}>{item.phase}</span>
              </div>
              <div className="flex-1 rounded-lg p-4" style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)" }}>
                <h4 className="text-sm font-bold mb-1" style={{ color: "#fff" }}>{item.title}</h4>
                <p className="text-xs leading-relaxed" style={{ color: "#888" }}>{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center py-12 px-6" style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }}>
        <p className="text-xs" style={{ color: "#444" }}>
          ComfyUI는 도구입니다. 중요한 것은 연출의 의도를 빠르게 시각화하고 옵션을 제안하는 능력입니다.
        </p>
        <p className="text-xs mt-4" style={{ color: "#333" }}>
          &copy; 2026 DAYLIGHT. All rights reserved.
        </p>
      </footer>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImg && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-[100] flex items-center justify-center p-4 cursor-pointer" style={{ background: "rgba(0,0,0,0.9)" }} onClick={() => setSelectedImg(null)}>
            <motion.img initial={{ scale: 0.9 }} animate={{ scale: 1 }} exit={{ scale: 0.9 }} src={selectedImg} alt="" className="max-w-full max-h-[90vh] object-contain rounded-lg" />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
