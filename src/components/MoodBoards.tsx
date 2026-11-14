import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export default function MoodBoards() {
  return <section id="moodboards" className="py-24 px-5 md:px-10">
    <div className="max-w-[1100px] mx-auto">
      <p className="text-accent text-xs tracking-[3px] mb-3">PROJECT DOKKAEBI / MOOD BOARD</p>
      <h2 className="text-4xl md:text-5xl font-bold tracking-tight">프로젝트 도깨비</h2>
      <p className="text-text-dim text-sm mt-5 mb-8 leading-7 max-w-[740px]">현대 서울의 밤과 한국적인 복식이 공존하는 판타지 로맨틱 코미디. 고궁·박물관·도시 건축을 배경으로, 하회탈과 열린 남자 두루마기 아래 트레이닝복을 입은 아라의 야간 룩 설정.</p>
      <figure><img src="/dokkaebi/ara-night-concept.jpg" alt="박물관 모서리에 웅크린 아라. 하회탈과 어두운 적색 두루마기, 트레이닝복을 착용한 야간 컨셉 이미지" className="w-full h-auto rounded-xl border border-border" loading="lazy"/><figcaption className="text-xs text-text-muted mt-3 leading-6">초기 오프라인 보드에서 채택한 컨셉 이미지. 완성 영상의 스틸이 아님. 이미지 속 백자 문양과 운반 방식은 이후 무문 백자·비단 주머니 수납으로 변경됨.</figcaption></figure>
      <div className="grid sm:grid-cols-3 gap-5 mt-8 text-sm leading-7">
        <div className="border-t border-border pt-4"><h3 className="text-accent mb-2">공간</h3><p className="text-text-dim">고궁과 현대 건물이 가까이 있는 가상의 서울. 인적이 드문 박물관과 좁은 동선의 대비.</p></div>
        <div className="border-t border-border pt-4"><h3 className="text-accent mb-2">복식 및 인물</h3><p className="text-text-dim">한국 하회탈, 흰 동정, 열린 적색 두루마기. 일상적인 트레이닝복과 전통 복식의 결합.</p></div>
        <div className="border-t border-border pt-4"><h3 className="text-accent mb-2">질감 및 조명</h3><p className="text-text-dim">어두운 청색 밤과 낮은 실내 조도. 실사 촬영처럼 보이는 재질·피부·공간 비례를 목표로 후속 콘티에서 검수.</p></div>
      </div>
      <Link to="/case-study?menu=02" className="inline-flex gap-2 items-center text-accent text-sm mt-8">레퍼런스 정리 및 수정 기록<ArrowRight size={16}/></Link>
    </div>
  </section>;
}
