import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

export default function MoodBoards() {
  return <section id="moodboards" className="py-24 px-5 md:px-10">
    <div className="max-w-[1100px] mx-auto">
      <p className="text-accent text-xs tracking-[3px] mb-3">PROJECT DOKKAEBI / MOOD BOARD</p>
      <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-7">도깨비</h2>
      <Link to="/case-study" aria-label="도깨비 무드보드 · 제작 과정 상세 보기" className="group block rounded-2xl overflow-hidden border border-border hover:border-accent/60 focus-visible:outline-2 focus-visible:outline-accent transition-colors">
        <img src="/dokkaebi/ara-night-concept.jpg" alt="현대 서울의 밤, 하회탈과 적색 두루마기를 입은 아라의 초기 컨셉" className="w-full aspect-video object-cover" loading="lazy"/>
        <div className="p-5 md:p-7 flex items-center justify-between gap-5 bg-bg-card">
          <div><p className="text-sm text-text-dim leading-7">가상의 도시 · 한국 전통 복식 · 실사 판타지 로코</p><p className="text-xs text-text-muted mt-1">초기 컨셉 이미지 · 클릭하면 실제 보드와 수정 기록을 볼 수 있습니다.</p></div>
          <span className="flex shrink-0 items-center gap-2 text-accent text-sm">작업기 보기 <ArrowUpRight size={18}/></span>
        </div>
      </Link>
    </div>
  </section>;
}
