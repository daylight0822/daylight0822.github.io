import { Link, useSearchParams } from "react-router-dom";
import { ArrowLeft, ArrowUpRight, Check, Clock3 } from "lucide-react";

const boardShots: Record<string, { src: string; caption: string }> = {
  "01": { src: "board-planning-20261108.jpg", caption: "초기 오프라인 보드 v1 · 기획 및 설정 화면. 실제 보관본을 실행해 캡처. 메뉴 분류와 수정·저장 위치 확인용이며, 현재 시나리오와는 차이가 있음." },
  "02": { src: "ara-night-concept.jpg", caption: "초기 보드에서 채택된 아라 야간 컨셉. 하회탈·열린 적색 두루마기·트레이닝복·현대 서울 야간 룩 검토용. 최종 영상 프레임이 아니며, 백자 문양과 수납 연출은 이후 수정됨." },
  "06": { src: "board-storyboard-early.jpg", caption: "초기 오프라인 보드 v1 · 콘티 이미지 화면. 콘티 시트와 미검수·불일치 메모를 함께 배치한 실제 화면. 최신 인덱스 3 화면이 아님." },
};
const stages = [
  { n: "01", title: "1씬 구성 및 컷 세분화", tool: "ChatGPT · 컷 단위 대본", body: "가상의 서울을 배경으로 한 한국형 판타지 로맨틱 코미디로 기획. 전체 에피소드 제작에 앞서, 아라의 박물관 잠입과 진영의 도착을 교차하는 1씬을 우선 제작 범위로 설정함.", decision: "박물관 외경 → 경비초소 → 순찰 복도 → 점멸 보안장치 → 수장고 문 순으로 컷을 세분화해 보안이 철저한 공간으로 들어가는 흐름 구성. 아라는 발 → 선반 틈의 옷자락 → 코너를 도는 소매 순으로 보여주고, 초반에는 얼굴이 노출되지 않도록 설정함.", output: "S01C01 형식의 컷 번호 · 행동/화각/길이 · 컷 병합·삭제 기록" },
  { n: "02", title: "인물·공간·소품 레퍼런스 정리", tool: "캐릭터 시트 · 공간/소품 참조 · 이미지 생성", body: "인물·의상·공간·소품 레퍼런스를 분리해 관리. 아라의 출근 복장과 도깨비 활동 복장을 구분하고, 도깨비 복장은 한국 하회탈·남자 두루마기·흰 동정을 기준으로 정리함.", decision: "전신 이미지의 얼굴 불일치, 긴 목과 상체, 피부 톤, 손가락 및 좌우 발 오류를 항목별로 검수하고 수정 요청. 박물관 후문·초소·쪽문 배치를 정리하고, 성인 남성이 서 있는 상태를 기준으로 초소 높이와 건물 비례를 재설정함.", output: "인물 동일성 기준 · 공간 배치 기준 · 백자와 수장고 문 참조" },
  { n: "03", title: "Blender 공간 설계 및 동선 검토", tool: "Blender · 3D 블록아웃/프리비즈", body: "더미 인물과 간단한 건축 모델로 카메라 위치·렌즈·시선·이동 경로 검토. 블로킹은 최종 룩 제작이 아닌, 실제 공간 안에서 동선과 구도가 성립하는지 확인하는 용도로 사용함.", decision: "인물이 벽을 통과하는 동선, 낮은 문과 초소, 웅크린 보행, 도자기와 받침대가 함께 들리는 오류 확인. 항목별 수정 요청을 분리하고, 손 빅 클로즈업은 손가락 구분·관절 움직임·손목 방향까지 확인하도록 상세화함.", output: "동선용 영상 · 카메라/렌즈 설명 · 모델과 소품의 분리 기준" },
  { n: "04", title: "실사 콘티 룩 및 공간 정합 수정", tool: "이미지 생성 · 질감/조명/원근 검수", body: "블로킹 화면을 참조한 생성 영상에서 애니메이션 질감이 남는 문제 확인. 프롬프트에 ‘실사’를 추가하는 것만으로는 개선이 충분하지 않아, 움직임 참조와 룩 참조를 분리하는 방향으로 변경함.", decision: "구도·액션은 블로킹, 인물·재질·라이팅은 별도의 실사 콘티를 기준으로 설정. 건물과 배경이 섞이는 부분, 미니어처처럼 보이는 비례, 인물의 시선 및 이동 방향과 맞지 않는 배경을 재검수하고 해당 컷 수정 진행.", output: "실사 콘티 후보 · 수정 전후 기록 · 채택/재검수 구분" },
  { n: "05", title: "Seedance 영상 생성 및 컷별 편집", tool: "Higgsfield · Seedance 2.5 · Blender VSE", body: "컷별 레퍼런스와 동작 타이밍을 지정해 영상 생성 테스트 진행. 수정이 필요한 컷만 재생성·교체할 수 있도록 원본 클립을 보존하고, 별도의 순편 프로젝트에서 연결함.", decision: "고개를 드는 시점·각도와 전화기를 주머니에 넣는 타이밍이 지시와 다르게 생성되는 사례 확인. 생성 완료와 연기·연속성 검수 통과를 구분해 관리. 음성·효과음은 직접 청취 전까지 미검증 상태로 유지함.", output: "영상 후보 · 시간별 프레임 검수 · 재생성 사유 · 순편 프로젝트" },
  { n: "06", title: "오프라인 보드 구성 및 버전 관리", tool: "로컬 HTML/JavaScript · JSON · 미디어 인덱스", body: "기획·시나리오·캐릭터·콘티·블로킹 자료를 카테고리별로 확인할 수 있도록 보드 구성. 메뉴 구조와 수정/저장 방식은 직접 정의하고, 구현 및 자료 등록은 AI와 협업해 진행함.", decision: "원본과 경량 미리보기를 분리하고 컷 번호별로 이미지·영상·수정 메모 연결. 기존 버전에 잘못 반영되는 문제를 줄이기 위해 동일 검토 인덱스의 버전을 갱신하는 방식으로 관리함.", output: "카테고리별 탐색 · 버전 이력 · 원본 보존 · 컷별 검수 메모" },
];
const issues = [
  ["실사 영상의 애니메이션 질감", "낮은 디테일의 3D 화면이 최종 외형 참조까지 맡음", "동선/카메라용 블로킹과 실사 룩용 콘티를 분리", "개선 방향 채택 · 컷별 질감 검수 계속"],
  ["진영 이동 컷의 배경 불일치", "시선 방향과 카메라 위치가 뒤섞인 콘티", "이동 경로·정면/역방향을 먼저 확인하고 해당 컷 수정", "수정 반복 · 전 컷 연속성 최종 검수 전"],
  ["도자기·받침대 동시 이동 오류", "소품의 움직임과 고정 구조물이 분리되지 않음", "받침대 고정과 소품 분리. 이후 비단 주머니 수납으로 연출 변경", "기술 수정과 시나리오 변경을 별도 기록"],
  ["손·발 및 신체 비례 오류", "전신/클로즈업에서 일관되지 않은 해부학적 표현", "손가락 5개, 좌우 발, 손목 방향, 목/상체 비율을 항목별 확인", "완전 해결로 간주하지 않고 매 컷 재검수"],
  ["고개 움직임 타이밍 불일치", "텍스트 타이밍 지시와 실제 생성 행동의 차이", "유지 → 시선 이동 → 통화 종료를 구간화해 재시험", "정밀 타이밍은 여전히 검수·편집 과제"],
];
export default function CaseStudyPage() {
  const [params] = useSearchParams();
  const menus = [{ id: "overview", title: "프로젝트 개요" }, ...stages.map(s => ({ id: s.n, title: `${s.n} ${s.title}` })), { id: "issues", title: "오류 및 수정사항" }, { id: "status", title: "진행 현황" }];
  const selected = params.get("menu") || "overview";
  const active = menus.some(m => m.id === selected) ? selected : "overview";
  return <div className="min-h-screen bg-bg text-text">
    <nav className="border-b border-border"><div className="max-w-[1120px] mx-auto px-5 md:px-10 py-6 flex items-center justify-between"><Link to="/" className="flex items-center gap-2 text-sm text-text-dim hover:text-accent"><ArrowLeft size={16}/> PORTFOLIO</Link><Link to="/" className="tracking-[.2em] font-semibold">DAYLIGHT</Link></div></nav>
    <main className="max-w-[1120px] mx-auto px-5 md:px-10 pb-24">
      <header className="pt-10 pb-8 border-b border-border">
        <div className="flex flex-wrap gap-3 text-xs tracking-wider text-accent mb-8"><span>PRODUCTION REPORT / 2026.11.14</span><span className="text-text-muted">개인 프로젝트 · 제작 진행 중</span></div>
        <h1 className="text-3xl md:text-4xl font-bold leading-tight tracking-tight mb-7">프로젝트 도깨비<br/><span className="text-text-dim">제작 공정 및 수정 기록</span></h1>
        {active === "overview" && <>
        <p className="max-w-[750px] text-base md:text-lg text-text-dim leading-relaxed">1씬 제작에 사용한 도구, 공정별 진행 내용 및 검수사항 정리.<br className="hidden md:block"/> 기획·블로킹·실사 콘티·영상 생성·편집·보드 운영 순으로 작업 내용과 수정 결과 기록.</p>
        <div className="grid sm:grid-cols-3 gap-6 mt-10 text-sm"><div><p className="text-text-muted text-xs mb-2">CREATIVE DIRECTION</p><p>구다영 · 기획 / 연출 / 검수</p></div><div><p className="text-text-muted text-xs mb-2">FORMAT & SCOPE</p><p>16:9 · 판타지 로코 · 1씬 중심</p></div><div><p className="text-text-muted text-xs mb-2">METHOD</p><p>AI 협업 · 3D 프리비즈 · 컷별 반복</p></div></div>
        </>}
      </header>
      <nav aria-label="제작 공정 메뉴" className="grid grid-cols-2 md:grid-cols-3 gap-2 my-8">{menus.map(m => <Link key={m.id} to={`?menu=${m.id}`} aria-current={active === m.id ? "page" : undefined} className={`border rounded-lg p-3 text-sm transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent ${active === m.id ? "border-accent text-accent bg-accent/5" : "border-border text-text-dim hover:border-accent"}`}>{m.title}</Link>)}</nav>
      <div key={active}>      {active === "overview" && <>
      <section className="py-10 grid md:grid-cols-[220px_1fr] gap-6 md:gap-12 border-b border-border">
        <h2 className="text-xl font-semibold">작품 기획</h2>
        <div className="space-y-5 text-sm leading-7 text-text-dim">
          <p className="text-lg leading-8 text-text">낮에는 평범한 공무원, 밤에는 도깨비로 활동하는 아라와 그녀를 쫓는 직감형 형사 진영의 판타지 로맨틱 코미디.</p>
          <p><strong className="text-text">배경 및 세계관.</strong> 고궁·박물관·현대 건물이 공존하는 가상의 서울로 설정. 도깨비는 봉인된 존재가 아니라, 오래된 물건에 깃들어 잠들어 있다가 아라가 깨우면 나타나는 엉뚱하고 귀여운 존재로 정리함.</p>
          <p><strong className="text-text">인물 및 관계.</strong> 아라는 반은 사람, 반은 도깨비인 공무원. 평소에는 말이 많지만 정체를 들킬까 봐 진영 앞에서는 말을 아낌. 진영은 이를 자신을 좋아해서라고 오해함. 밤의 추격과 낮의 도깨비 검거 TF 업무가 겹치면서 정체를 숨기는 긴장과 로맨틱 코미디가 함께 진행되는 구조.</p>
          <p><strong className="text-text">시각 방향.</strong> 현대 서울의 밤에 한국 하회탈·남자 두루마기·흰 동정을 결합. 아라의 일상 복장과 도깨비 활동 시의 트레이닝복·열린 두루마기를 분리하고, 한국적인 복식과 건축 요소가 유지되도록 검수함.</p>
          <p><strong className="text-text">우선 제작 범위.</strong> 16:9 숏드라마로 기획하되 전체 회차보다 박물관 잠입과 추격이 있는 1씬을 먼저 제작. 경비초소, 수장고, 인물 동선과 소품 동작을 통해 실사 룩·행동 제어·컷 간 연속성을 단계별로 확인함.</p>
          <p className="text-xs text-text-muted">초기 오프라인 보드의 기획·설정·전체 줄거리와 이후 확정된 제작 방향을 함께 정리. 아라의 정확한 소속·직함, 유물을 모아야 하는 필연적 이유, 시즌 결말은 보관본 기준 미정으로 남겨둠.</p>
        </div>
      </section>
      <section className="py-10 grid md:grid-cols-[220px_1fr] gap-6 md:gap-12 border-b border-border">
        <h2 className="text-xl font-semibold">AI 드라마 제작<br/>고려사항 및 준비</h2>
        <div className="space-y-5 text-sm leading-7 text-text-dim">
          <p><strong className="text-text">컷 단위 제작 설계.</strong> 시나리오를 행동·화각·렌즈·길이·소리 단위로 나누고 S01C01 형식의 번호 부여. 컷을 병합하거나 삭제할 때 기존 번호와 수정 이력을 함께 관리해 편집 시 혼선 방지.</p>
          <p><strong className="text-text">참조 자료 분리.</strong> 인물의 정면·측면·전신, 의상, 공간, 소품을 별도로 준비. 블로킹은 구도·동선·액션, 실사 콘티는 인물·재질·라이팅을 전달하도록 역할을 구분함. 낮은 디테일의 3D 질감이 최종 영상에 남는 문제를 줄이기 위한 기준.</p>
          <p><strong className="text-text">공간 및 동작 검증.</strong> 인물 크기와 층고, 문·선반·출입구 배치, 시선과 이동 방향을 먼저 확인. 손 클로즈업은 손가락·관절·손목 방향까지 검토하고, 고정 구조물과 움직이는 소품을 분리해 벽 관통·받침대 동시 이동 등의 오류 점검.</p>
          <p><strong className="text-text">생성 및 편집 준비.</strong> 복잡한 행동을 시간 구간으로 나누어 프롬프트 작성. 생성 결과가 지시한 타이밍과 일치하는지 프레임별로 확인하고, 수정할 컷만 교체할 수 있도록 원본 클립과 순편 프로젝트를 분리함. 음성·효과음·앰비언스는 직접 청취 후 검수.</p>
          <p><strong className="text-text">자료 관리 및 채택 기준.</strong> 보드에서 컷별 이미지·영상·수정 메모를 연결하고 생성·검수·채택·반영 상태를 구분. 모델링·코딩을 포함한 AI 협업 범위와 실제 사용 도구를 기록하며, 파일 생성만으로 완성 처리하지 않음.</p>
        </div>
      </section>
      <aside className="my-10 border-l-2 border-accent pl-6"><p className="text-xl md:text-2xl leading-relaxed font-medium">블로킹: 구도·액션·동선 확인용.<br/>실사 콘티: 인물·재질·라이팅 참조용.</p><p className="mt-3 text-sm text-text-muted">영상 생성 테스트 후 참조 자료의 용도를 분리하기로 정리함.</p></aside>
</>}
      <section aria-label="공정별 제작 기록">{stages.filter(s => s.n === active).map(s=><article id={`stage-${s.n}`} key={s.n} className="scroll-mt-6 py-12 border-t border-border grid md:grid-cols-[220px_1fr] gap-6 md:gap-12"><div><span className="text-4xl text-accent font-light">{s.n}</span><p className="mt-4 text-xs text-text-muted leading-6">{s.tool}</p></div><div><h2 className="text-2xl font-semibold mb-5">{s.title}</h2><p className="text-text-dim text-sm leading-7">{s.body}</p><details className="mt-4 rounded-lg border border-border p-4"><summary className="cursor-pointer text-sm text-accent">세부 조치 및 산출물</summary><p className="text-text-dim text-sm leading-7 mt-4">{s.decision}</p><p className="mt-4 text-sm text-text-dim"><span className="text-accent text-xs block mb-2">작업 산출물</span>{s.output}</p></details>{boardShots[s.n] && <figure className="mt-7"><img src={`dokkaebi/${boardShots[s.n].src}`} alt={boardShots[s.n].caption} loading="lazy" className="w-full h-auto rounded-lg border border-border"/><figcaption className="text-xs text-text-muted leading-6 mt-3">{boardShots[s.n].caption}</figcaption></figure>}</div></article>)}</section>
      {active === "03" && (<section className="py-12 border-t border-border"><p className="text-xs text-accent tracking-wider mb-3">PROCESS EVIDENCE / EARLY DEVELOPMENT</p><h2 className="text-2xl font-semibold mb-6">초기 콘티 및 블로킹 자료</h2><div className="grid md:grid-cols-2 gap-6"><figure><img src="dokkaebi/storyboard-early.jpg" alt="수장고 선반 사이를 걷는 아라의 하체와 백자를 그린 초기 스케치 콘티" loading="lazy" className="w-full aspect-video object-cover rounded-lg border border-border"/><figcaption className="text-xs text-text-muted leading-6 mt-3">초기 스케치 콘티 원본 발췌. 선반·의상·소품 배치 검토용 자료이며, 현재 컷 번호 및 최종 실사 룩과 구분 필요.</figcaption></figure><figure><video controls preload="none" poster="dokkaebi/blocking-study.jpg" className="w-full aspect-video bg-black rounded-lg border border-border"><source src="dokkaebi/blocking-study-v2.mp4" type="video/mp4"/>이 브라우저는 동영상 재생을 지원하지 않습니다.</video><figcaption className="text-xs text-text-muted leading-6 mt-3">2026.11.09 초기 Blender 블로킹 v2. 공간·포즈·시점 검토용 자료. 이후 수정 전 버전으로, 최신 S01 동선 및 완성 영상과 구분 필요.</figcaption></figure></div></section>)}
      {active === "issues" && (<section className="py-12 border-t border-border"><p className="text-xs text-accent tracking-wider mb-3">ITERATION LOG</p><h2 className="text-2xl font-semibold mb-8">주요 오류 및 수정사항</h2><div className="space-y-4">{issues.map(([problem,cause,fix,status],i)=><article key={problem} className="rounded-xl border border-border p-5 md:p-7"><h3 className="font-semibold mb-4"><span className="text-accent mr-3">0{i+1}</span>{problem}</h3><div className="grid md:grid-cols-3 gap-5 text-sm leading-6"><div><span className="text-text-muted text-xs block mb-2">확인 내용 / 원인 판단</span>{cause}</div><div><span className="text-text-muted text-xs block mb-2">조치 내용</span>{fix}</div><div><span className="text-text-muted text-xs block mb-2">결과 / 후속 확인</span>{status}</div></div></article>)}</div></section>)}
      {active === "06" && (<section className="py-12 border-t border-border"><p className="text-xs text-accent tracking-wider mb-3">PRODUCTION OPERATIONS</p><h2 className="text-2xl font-semibold mb-5">오프라인 보드 운영 방식</h2><p className="text-text-dim text-sm leading-7 max-w-[800px]">화이트·네이비의 로컬 보드에 기획 및 설정, 무드, 캐릭터, 시나리오, 콘티·블로킹 메뉴를 분리해 구성. 시나리오 하위 항목은 전체/회별 줄거리, 회별 대본, 인물 관계도로 정리함. 온라인 보드 활용 이후 오프라인 자료 관리로 확장했으며, 온라인·오프라인 간 실시간 자동 동기화는 구현 범위에 포함되지 않음.</p><div className="grid sm:grid-cols-4 gap-3 mt-7">{["컷 ID", "원본 / 미리보기", "수정 이유 / 버전", "검수 / 채택 상태"].map((v,i)=><div key={v} className="p-5 border border-border rounded-lg"><span className="text-accent text-xs">0{i+1}</span><p className="mt-3 text-sm">{v}</p></div>)}</div><p className="text-text-muted text-xs mt-3">보드 관리 항목 요약. 위 공정 01·06의 이미지는 실제 초기 보드 캡처이며, 이 항목 표시는 설명용임.</p><div className="mt-7 text-sm text-text-dim leading-7"><p>• 생성·검수·채택·보드 반영 상태를 각각 구분. 파일 생성 여부만으로 제작 승인 처리하지 않음.</p><p>• 동일 인덱스를 갱신하며 기존 컷 매핑과 삭제·병합 이력 기록. 수정 대상과 반영 버전 추적.</p><p>• 다운로드한 파일은 자동 갱신되지 않으므로 최신 검토본과 로컬 원본의 버전 대조 필요.</p></div></section>)}
      {active === "status" && (<section className="py-12 border-t border-border"><h2 className="text-2xl font-semibold mb-7">진행 현황 및 후속 작업</h2><div className="grid md:grid-cols-2 gap-6"><div className="p-6 border border-border rounded-xl"><h3 className="flex gap-2 items-center mb-4 text-accent"><Check size={18}/>진행 내용</h3><ul className="text-sm text-text-dim leading-7 space-y-2"><li>1씬 기준 컷 설계, 캐릭터·공간·소품 참조 및 블로킹 개발 진행.</li><li>실사 콘티 및 Seedance 영상 후보 생성. 컷별 검수 의견 기록.</li><li>Blender VSE로 18개 클립·82초 순편 검토본 구성 기록 확인. 이후 컷 수정이 진행되어 최신 완성 편집본과 구분 필요.</li><li>11월 14일 영상 후보 7개 추가 생성. 인덱스 v13에 검수사항 반영.</li></ul></div><div className="p-6 border border-border rounded-xl"><h3 className="flex gap-2 items-center mb-4 text-text"><Clock3 size={18}/>후속 확인사항</h3><ul className="text-sm text-text-dim leading-7 space-y-2"><li>행동 타이밍, 손·발, 옷자락과 인물 동일성의 컷 간 연속성.</li><li>음향 직접 청취 및 대사·효과음·앰비언스 최종 편집.</li><li>42컷 참조 미완, 추가 17컷 영상 미생성. 48컷의 이미지와 4층 높이 설정 정합 확인.</li><li>1씬 전체 최종 편집·검수 필요. 현재 개인 제작 프로젝트 진행 중이며, 완성 에피소드 및 상업 제작 실적에 해당하지 않음.</li></ul></div></div><p className="text-xs text-text-muted leading-6 mt-5">기준일 2026.11.14. 제작 대화·보드 자료·생성 및 편집 작업 기록 기준으로 정리. 최신 영상 전체 재생 및 음향 직접 청취 검수는 미완료.</p></section>)}
      </div>
      <footer className="border-t border-border pt-12"><p className="text-xl md:text-2xl font-medium leading-relaxed max-w-[800px]">다음 작업<br/>컷별 연속성 검수 및 1씬 최종 편집 진행.</p><Link to="/" className="inline-flex items-center gap-2 mt-8 text-accent text-sm">다른 포트폴리오 보기<ArrowUpRight size={16}/></Link></footer>
    </main>
  </div>;
}
