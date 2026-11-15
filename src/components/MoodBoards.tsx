import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export default function MoodBoards() {
  return <section id="moodboards" className="py-24 px-5 md:px-10">
    <div className="max-w-[1100px] mx-auto">
      <p className="text-accent text-xs tracking-[3px] mb-3">PROJECT DOKKAEBI / PRODUCTION NOTES</p>
      <h2 className="text-4xl md:text-5xl font-bold tracking-tight">도깨비 작업기</h2>
      <p className="text-text-dim text-sm mt-5 mb-8 leading-7 max-w-[740px]">현대 서울을 배경으로 한 판타지 로맨틱 코미디. 기획과 줄콘티를 정리한 뒤, 공간·동선을 블로킹으로 확인하고 실사 참조 이미지와 영상 생성으로 연결. 생성 결과를 검수하면서 컷 구성과 액션을 반복 수정.</p>
      <div className="grid md:grid-cols-2 gap-6">
        <figure><img src="/dokkaebi/ara-night-concept.jpg" alt="도깨비 초기 야간 컨셉 이미지" className="w-full aspect-video object-cover rounded-xl border border-border" loading="lazy"/><figcaption className="text-xs text-text-muted mt-3 leading-6">초기 채택 컨셉. 하회탈·적색 두루마기·트레이닝복의 야간 룩 설정. 백자 문양과 운반 방식은 이후 무문 백자·비단 주머니로 변경.</figcaption></figure>
        <figure><img src="/dokkaebi/index-c10-detail.png" alt="S01C10 이미지와 수정 내용을 관리한 실제 인덱스 화면" className="w-full aspect-video object-contain bg-black rounded-xl border border-border" loading="lazy"/><figcaption className="text-xs text-text-muted mt-3 leading-6">실제 컷 인덱스. 이미지·프롬프트·수정 메모를 컷 번호로 연결해 관리. 생성본과 채택본을 구분하고 이전 버전 보존.</figcaption></figure>
      </div>
      <div className="grid sm:grid-cols-3 gap-5 mt-8 text-sm leading-7">
        <div className="border-t border-border pt-4"><h3 className="text-accent mb-2">기획 · 제작 범위</h3><p className="text-text-dim">전체 회차보다 박물관 1씬을 우선 제작. 인물의 정체를 숨기는 몽타주와 추격 동선을 중심으로 컷 세분화.</p></div>
        <div className="border-t border-border pt-4"><h3 className="text-accent mb-2">프리프로덕션 · 반복 검수</h3><p className="text-text-dim">Blender 블로킹은 구도와 액션 확인용, 실사 콘티는 최종 화면의 질감·조명 참조용으로 분리. 손발 형태, 공간 비례, 시선과 배경 방향을 대조하며 수정.</p></div>
        <div className="border-t border-border pt-4"><h3 className="text-accent mb-2">프로덕션 · 편집</h3><p className="text-text-dim">Seedance 생성본을 컷별로 검수하고 편집으로 연결. 재생성 시 해당 컷을 교체할 수 있도록 컷 번호와 버전 기준 유지.</p></div>
      </div>
      <div className="mt-8 rounded-xl border border-border bg-bg-card p-6 text-sm leading-7">
        <h3 className="font-semibold mb-2">제작 범위 및 남은 컷</h3>
        <p className="text-text-dim">예산 제약으로 계획했던 모든 컷을 생성하지는 못함. 아직 미생성 컷이 남아 있으며, 현재 공개 영상은 확보한 결과물을 바탕으로 편집한 버전. 영상 출력 완료와 당초 콘티 전체 제작 완료는 구분. 남은 컷의 제작·재생성 및 연결 검수는 후속 과제로 정리.</p>
      </div>
      <div className="mt-8 border-t border-border pt-6 text-sm leading-7">
        <h3 className="font-semibold mb-4">생성 과정의 변수와 대응</h3>
        <div className="grid md:grid-cols-2 gap-x-8 gap-y-5 text-text-dim">
          <div><h4 className="text-accent mb-1">크레딧 · 출력 해상도</h4><p>크레딧 소모를 줄이기 위해 제작 중간에 일부 생성을 720p로 전환. 모든 컷을 동일 해상도로 제작한 것은 아니며, 비용과 최종 화면 품질을 함께 고려해 생성 범위 조정. 절감 비율은 별도 측정하지 않음.</p></div>
          <div><h4 className="text-accent mb-1">인물 일관성 · 연기 강도</h4><p>참조 이미지와 다른 얼굴, 전신에서 무너지는 얼굴 비례, 과장된 시선과 고개 동작 발생. 인물 참조를 다시 맞추고 컷별 동작과 타이밍을 구체화. 프롬프트에 지시한 내용과 실제 생성 결과의 일치는 별도 검수.</p></div>
          <div><h4 className="text-accent mb-1">공간 · 신체 · 소품 연속성</h4><p>이동 방향과 배경의 불일치, 건물·문 비례, 손가락과 발 방향, 백자와 받침대가 함께 움직이는 오류 확인. 블로킹과 실사 콘티를 대조해 수정하고 해당 컷 교체. 정지 이미지 수정만으로 영상 전체의 연속성이 해결됐다고 판단하지 않음.</p></div>
          <div><h4 className="text-accent mb-1">자료 전달 · 접근 제한</h4><p>자료 업로드·접근 과정의 403 및 환경별 전송 기능 제한 발생. 생성 실패와 파일 전달 실패를 구분해 기록하고, 접근이 확인된 자료만 사용. 제한된 작업 화면은 캡처 완료로 표시하지 않음.</p></div>
        </div>
      </div>
      <Link to="/case-study" className="inline-flex gap-2 items-center text-accent text-sm mt-8">단계별 제작 과정과 수정 기록<ArrowRight size={16}/></Link>
    </div>
  </section>;
}
