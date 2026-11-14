import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
export default function CaseStudyPreview() {
  return <section className="py-24 px-5 md:px-10"><div className="max-w-[1100px] mx-auto border-t border-border pt-14"><p className="text-accent text-xs tracking-[3px] mb-4">PRODUCTION REPORT</p><div className="grid md:grid-cols-[1.2fr_1fr] gap-8 items-start"><div><h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-5">프로젝트 도깨비</h2><p className="text-text-dim leading-relaxed">AI 영상 제작의 공정 설계와 시행착오.<br/>무엇을 썼고, 왜 실패했고, 어떻게 수정했는가.</p></div><div className="text-sm text-text-dim leading-7"><p>기획 → 콘티·레퍼런스 → Blender 블로킹 → 실사 프레임 → Seedance 영상·편집 → 오프라인 보드</p><p className="text-text-muted text-xs mt-4">개인 프로젝트 · 1씬 중심 개발 중 · 2026.11.14 기록</p><Link to="/case-study" className="inline-flex items-center gap-2 mt-6 text-accent">제작 과정 리포트 읽기<ArrowUpRight size={16}/></Link></div></div></div></section>;
}
