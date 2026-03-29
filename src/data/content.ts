export const profile = {
  name: "DAYLIGHT",
  nameKo: "구다영",
  tagline: "AI Content Producer & Cinematic Storyteller",
  bio: "한국예술종합학교 영화 전공 졸업 후, 드라마 기획·제작과 영상 편집을 거쳐 AI 콘텐츠 프로듀서로 활동하고 있습니다. 기술이 사람을 대체하는 것이 아니라, 창작자가 더 나은 판단을 내릴 수 있도록 돕는 제작 환경을 만들어갑니다.",
  email: "daylight0822@naver.com",
};

// ===== AI CINEMA =====
export interface AICinemaItem {
  id: string;
  title: string;
  youtubeUrl: string;
}

export const aiCinema: AICinemaItem[] = [
  {
    id: "ai-1",
    title: "가장 오래된 것",
    youtubeUrl: "https://youtu.be/cNRMXlZoaUQ",
  },
  {
    id: "ai-5",
    title: "배구 드라마 예고편",
    youtubeUrl: "https://youtu.be/pnU5p16Si2Q",
  },
  {
    id: "ai-7",
    title: "아쿠아 디 파르마",
    youtubeUrl: "https://youtu.be/aOjCWI8oVsU",
  },
  {
    id: "ai-6",
    title: "증언",
    youtubeUrl: "https://youtu.be/yAjNAbMRVxs",
  },
  {
    id: "ai-3",
    title: "3인 대화",
    youtubeUrl: "https://youtu.be/kNdT9aeSjVk",
  },
  {
    id: "ai-4",
    title: "인물 팔로우",
    youtubeUrl: "https://youtu.be/oFEeAXWW_60",
  },
  {
    id: "ai-2",
    title: "시선의 이동",
    youtubeUrl: "https://youtu.be/LBI4dSFHVJw",
  },
];

// ===== CAREERS (Main page) =====
export interface CareerItem {
  period: string;
  title: string;
  company: string;
  description: string;
  badge?: { src: string; alt: string };
}

export const careers: CareerItem[] = [
  {
    period: "2023.11 — 2025.02",
    title: "기획 PD",
    company: "스튜디오브이플러스",
    description:
      "드라마 <수상한 그녀> 대본 기획 및 해외 세일즈, <0교시는 인싸타임> 전체 대본 기획·제작·마케팅·유통까지 프로젝트 전 과정을 담당했습니다.",
  },
  {
    period: "2022.03 — 2023.10",
    title: "기획 PD",
    company: "베티앤크리에이터스",
    description:
      "드라마 기획안 작성, 대본 구성 및 지원사업 서류 작성 등을 담당. 한국콘텐츠진흥원 기획안 공모사업에 당선되어 3,000만원 개발비를 확보했습니다.",
    badge: { src: "/gallery/plans/07-선정작.png", alt: "콘텐츠진흥원 기획안 공모사업 선정작 목록" },
  },
  {
    period: "2021.09 — 2021.12",
    title: "편집감독",
    company: "웹드라마 <숨은 그놈 찾기>",
    description:
      "전체 8부 본편 편집, 예고편 편집 및 종편 관리를 담당했습니다.",
  },
  {
    period: "2020.07 — 2020.08",
    title: "편집",
    company: "와이낫미디어 — 웹드라마 <리얼:타임:러브 3>",
    description:
      "본편 가편집 및 1차 편집을 담당했습니다.",
  },
];

// ===== FILMOGRAPHY (Short Films) =====
export interface FilmographyItem {
  year: string;
  title: string;
  director: string;
  role: string;
  note?: string;
}

export const filmography: FilmographyItem[] = [
  {
    year: "2019",
    title: "에이스",
    director: "길이지 감독",
    role: "편집",
    note: "제25회 부천국제판타스틱영화제 단편걸작선 초청",
  },
  {
    year: "2018",
    title: "The Show Must Go On",
    director: "임예성 감독",
    role: "편집",
  },
  {
    year: "2016",
    title: "열쇠",
    director: "구소정 감독",
    role: "스크립터 · CG",
  },
  {
    year: "2016",
    title: "알로하 하와이",
    director: "김다솔 감독",
    role: "제작부",
  },
  {
    year: "2015",
    title: "Road to Road",
    director: "임예성 감독",
    role: "편집감독",
  },
  {
    year: "2015",
    title: "계속, 해보겠습니다.",
    director: "김혜빈 감독",
    role: "연출부",
  },
  {
    year: "2015",
    title: "밥 먹을 때 연락해요",
    director: "허예지 감독",
    role: "연출부",
  },
];

// ===== GALLERY (Etc) =====
export interface GalleryGroup {
  id: string;
  title: string;
  description: string;
  images: { src: string; alt: string }[];
}

export const gallery: GalleryGroup[] = [
  {
    id: "plans",
    title: "기획안 포트폴리오",
    description: "드라마 기획 단계에서 작성한 기획안 자료들",
    images: [
      { src: "/gallery/plans/01-승강장.png", alt: "2-3 승강장 기획안" },
      { src: "/gallery/plans/02-경성부녀자.png", alt: "경성부녀자 고민상담소 기획안" },
      { src: "/gallery/plans/03-고구려.png", alt: "고구려 개마무사 기획안" },
      { src: "/gallery/plans/04-antilove.png", alt: "ANTI LOVE LATION 기획안" },
      { src: "/gallery/plans/05-젠틀맨.png", alt: "젠틀맨을 위하여 기획안" },
      { src: "/gallery/plans/06-풀카운트.png", alt: "풀카운트 기획안" },
    ],
  },
  {
    id: "txt",
    title: "개인 취미 작업",
    description: "아이돌 시즌그리팅 컨셉 기획",
    images: [
      { src: "/gallery/txt/01-cover.png", alt: "TXT SPIN OFF: RHAPSODY 커버" },
      { src: "/gallery/txt/02-keypoint.png", alt: "Key Point — 컨셉 확장과 변주" },
      { src: "/gallery/txt/03-story.png", alt: "Story Concept — 나니아 연대기" },
      { src: "/gallery/txt/04-image.png", alt: "Image Concept — 한복과 자개" },
      { src: "/gallery/txt/05-md.png", alt: "MD Concept" },
    ],
  },
];

// ===== WORKS (Main page) =====
export interface WorkDetail {
  heading: string;
  items: string[];
}

export interface WorkItem {
  id: string;
  title: string;
  category: string;
  description: string;
  thumbnail: string;
  tools: string[];
  youtubeUrl?: string;
  details?: WorkDetail[];
}

export const works: WorkItem[] = [
  {
    id: "insssa-time",
    title: "0교시는 인싸타임",
    category: "드라마",
    description: "전체 1~8부 대본 기획부터 제작, 마케팅, 유통까지 프로젝트 전 과정에 참여.",
    thumbnail: "",
    tools: ["기획·제작", "마케팅", "유통"],
    youtubeUrl: "https://youtu.be/niCpPQ6vMi0?si=Ads19Xp_2lNIONNU",
    details: [
      {
        heading: "대본 기획",
        items: ["전체 1~8부 대본 기획 및 피드백"],
      },
      {
        heading: "제작/포스트",
        items: [
          "로케이션 헌팅 참여, 프로덕션 현장 백업, 합본 영상 편집, CG 체크",
        ],
      },
      {
        heading: "마케팅",
        items: [
          "포스터 촬영 현장 진행 및 디렉션, 포스터 디자인 컴 및 수정, 스틸메이킹 커뮤니케이션 및 영상 관리",
          "티저/예고/하이라이트 등 홍보 소재 직접 제작, 외주 홍보사와 커뮤니케이션",
        ],
      },
      {
        heading: "유통",
        items: [
          "본편 영상 및 홍보 소재 유통사와 해외 플랫폼에 납품",
          "심의 등록 및 영상자료원 제출 진행 백업",
        ],
      },
    ],
  },
  {
    id: "suspicious-her",
    title: "수상한 그녀",
    category: "드라마",
    description: "9~12부 대본 기획 및 피드백 참여. LA WEBFEST 출품 자료 준비, 해외 세일즈 관리.",
    thumbnail: "",
    tools: ["대본 기획", "해외 세일즈", "마케팅"],
    youtubeUrl: "https://youtu.be/O1RHSDucca0?si=vbvra5MV4iH1LL5a",
    details: [
      {
        heading: "대본 기획",
        items: ["입사 후 9~12부 대본 기획 및 피드백, 대본 수정 참여"],
      },
      {
        heading: "유통/마케팅",
        items: [
          "LA WEBFEST 영상 및 스틸 자료 준비, 해외 세일즈용 영자막 제작 외주사 관리 및 커뮤니케이션, 홍보 기사 검수",
        ],
      },
    ],
  },
  {
    id: "branding-seongsu",
    title: "브랜딩 인 성수동",
    category: "드라마",
    description: "편집 피드백 참여 및 기사 검수를 담당했습니다.",
    thumbnail: "",
    tools: ["편집 피드백", "기사 검수"],
    youtubeUrl: "https://youtu.be/Z-dUv2caA4o?si=TcbE5Hy_LAxmKj41",
    details: [
      {
        heading: "담당 업무",
        items: ["편집 피드백 참여, 기사 검수"],
      },
    ],
  },
  {
    id: "hidden-guy",
    title: "숨은 그놈 찾기",
    category: "편집",
    description: "웹드라마 전체 8부 본편 편집, 예고편 편집 및 종편 관리를 담당했습니다.",
    thumbnail: "",
    tools: ["Premiere Pro", "편집감독"],
    youtubeUrl: "https://youtu.be/kmgt51TxE_g?si=ilJ9MxxEhhTnmilx",
    details: [
      {
        heading: "담당 업무",
        items: [
          "EP.01~08부 편집",
          "예고편 편집",
          "종편 관리",
        ],
      },
    ],
  },
  {
    id: "real-time-love",
    title: "리얼:타임:러브 시즌3",
    category: "편집",
    description: "와이낫미디어 기획 웹드라마. 본편 가편집 및 1차 편집을 담당했습니다.",
    thumbnail: "",
    tools: ["Premiere Pro", "가편집"],
    youtubeUrl: "https://youtu.be/-f-dEG4_g80?si=I37ArBcs5kB0zFE7",
    details: [
      {
        heading: "작품 정보",
        items: [
          "방송 일자: 2020년 08월 21일 ~ 10월 9일",
          "기획: 와이낫미디어",
        ],
      },
      {
        heading: "담당 업무",
        items: ["본편 가편집 및 1차 편집"],
      },
    ],
  },
];

// ===== CASE STUDY POSTS =====
export interface CaseStudyPost {
  id: string;
  date: string;
  title: string;
  excerpt: string;
  content: string;
}

export const caseStudyPosts: CaseStudyPost[] = [
  // 새 글을 추가하려면 여기에 같은 형식으로 넣으면 됩니다.
  // GitHub 웹에서 이 파일을 편집하고 저장하면 자동 배포됩니다.
  {
    id: "why-traditional-cuts-fail-in-ai-video",
    date: "2026.03",
    title: "전통적인 컷 구성이 AI 영상에서 실패하는 이유",
    excerpt:
      "39컷짜리 촬영 대본은 실패하고, 11컷짜리 가이드는 성공했다. 영화과 출신이 AI 영상 제작에서 배운 것 — 기존 촬영 문법을 버려야 하는 순간에 대해.",
    content: `실패한 프로젝트와 성공한 프로젝트가 있다. 같은 사람이, 같은 도구로, 비슷한 장르의 영상을 만들었는데 결과가 완전히 달랐다. 그 차이를 정리해본다.


— 실패: 39컷, 4명, 11개 씬

첫 번째 프로젝트는 'Samuel'이라는 추리 스릴러였다. 전통적인 촬영 대본 방식으로 접근했다. 엑셀에 컷 번호, 씬 번호, 샷 사이즈(CU/BS/MS/FS), 카메라 무브먼트, 색감, 네거티브 프롬프트까지 빼곡하게 정리했다.

등장인물은 4명 — 사무엘, 경찰관 사라, 제임스, 형사 데릭. 장소는 숲, 취조실, 복도, 화장실, 경찰차, 집 안, 뒷마당 등 9곳. 컷은 총 39개. 정역샷(shot-reverse-shot), 포커스 이동, 오버더숄더 같은 촬영 문법을 충실히 따랐다.

캐릭터와 로케이션을 Higgsfield Cinema Studio에 연결하는 것까지는 해냈다. 하지만 거기서 막혔다.


— 어디서 무너졌나

1) 소품이 통제되지 않았다
머그샷 사진, 피 묻은 맨투맨, 다이어리, 라이터, 배낭 — 이런 소품들이 스토리에 핵심적인 역할을 했다. 그런데 AI는 '머그샷 사진을 테이블 위에 내밀어라'는 지시를 안정적으로 수행하지 못한다. 소품의 크기, 위치, 다른 컷에서의 일관성을 보장할 방법이 없었다.

2) 인물 간 상호작용이 너무 복잡했다
"사라가 제임스와 눈을 마주친다 → 리버스: 제임스가 고개를 끄덕인다." 실제 촬영에서는 자연스러운 구성이지만, AI 영상에서는 두 사람의 시선 방향, 위치, 표정을 컷마다 맞추는 것이 어려웠다. 주사위를 굴려 숫자 6이 나오기를 기도하는 것과 비슷했다.

3) 컷 수가 너무 많았다
39컷이면 일관성을 유지해야 할 변수가 기하급수적으로 늘어난다. 캐릭터 외모, 의상, 조명, 공간의 소품 배치 — 이 모든 것이 컷마다 조금씩 달라지면 편집 단계에서 이어붙이기가 불가능해진다.

4) 장소 전환이 많았다
9개 장소를 오가면 각 장소의 시각적 톤을 일관되게 유지하면서 캐릭터까지 동일하게 보이게 하는 것은 현재 AI 도구의 능력을 넘어선다.


— 성공: 11컷, 2명, 1개 장소

두 번째 프로젝트는 '가장 오래된 주문'이라는 한국형 미스터리 호러였다. 접근 방식이 완전히 달랐다.

등장인물은 딱 2명 — 국밥집 주인 만석과 검은 정장의 손님. 장소는 1곳 — 심야 국밥집 (같은 공간의 변형 3가지: 평상시, 플래시백 도로, 어둠의 식당). 컷은 총 11개. 소품은 벽시계, 검은 수첩, 낡은 차 키 정도로 최소화.

그리고 가장 결정적인 차이: 매 컷마다 캐릭터의 외모를 처음부터 다시 묘사했다. "60대 한국 남성, 깊은 주름, 움푹 꺼진 볼, 남색 작업복, 어깨에 걸린 행주" — 이 설명이 11개 컷 전부에 반복됐다.


— 왜 이 방식이 먹혔나

1) AI는 컷 간 기억이 없다
가장 근본적인 차이다. 실제 촬영에서는 같은 배우가 같은 옷을 입고 같은 세트에 서 있다. 하지만 AI 영상 생성 도구는 매번 완전히 새로운 이미지를 만든다. 이전 컷의 정보를 전혀 기억하지 못한다.

전통적인 촬영 대본은 '이미 존재하는 것들을 촬영하는' 전제 위에 만들어진 문서다. AI 영상은 '존재하지 않는 것을 매번 새로 만드는' 과정이다. 이 근본적인 차이를 무시하면 실패한다.

2) 변수가 적을수록 일관성이 높다
2명의 인물, 1개의 공간, 최소한의 소품. 통제해야 할 변수가 적으니까 컷 간 일관성이 자연스럽게 올라갔다. 39컷에서 4명이 9개 장소를 돌아다니는 것과는 복잡도 자체가 다르다.


— 정리: AI 영상을 위한 시나리오는 다르게 써야 한다

실패에서 배운 규칙들:

• 소품에 의존하는 설명을 피한다 — 소품은 통제하기 가장 어렵다
• 인물 간 복잡한 상호작용(시선 교환 등)을 최소화한다
• 카메라 렌즈(mm), 앵글, 조명을 매 컷마다 명시한다
• 감정은 추상어 대신 물리적 묘사로 표현한다 ("두려움" → "관자놀이에서 땀방울이 흐른다")
• 컷 하나에 동작 하나. 장면 전환을 한 프롬프트에 넣지 않는다

영 문법은 '카메라와 배우가 실제로 존재하는 현장'을 전제로 한다. AI 영상은 그 전제가 없다. 전통적인 제작 지식이 쓸모없다는 뜻이 아니라 — 조명의 원리, 구도의 힘, 편집의 리듬은 여전히 유효하다 — 그 지식을 AI라는 새로운 매체에 맞게 번역해야 한다는 뜻이다.`,
  },
  {
    id: "no-camera-cinema-lab",
    date: "2025.10",
    title: "No Camera Cinema Lab — 카메라 없이 영상을 만든다는 것",
    excerpt:
      "영화과 1학년 과제를 AI로 재현해보자는 실험에서 시작된 스터디. Sora 2로 기본 샷을 만들어보며 부딪힌 첫 번째 벽에 대해.",
    content: `영화과 동기들과 스터디를 하나 만들었다. 이름은 No Camera Cinema Lab. 카메라 없이 영상을 만들 수 있는지 직접 해보자는 취지였다.


— 출발점: 영화과 1학년 과제

한예종 영화과 1학년 전필 수업 중에 '영상과 음향'이라는 과목이 있다. 카메라를 처음 잡는 학생들이 가장 먼저 배우는 것들 — 구도, 샷 사이즈, 카메라 무브먼트 — 을 과제로 익히는 수업이다.

1학기 과제는 이런 식으로 짜여 있다:

1) 걸어와 문을 열고 들어간다
2) 2인 대화
3) 3인 대화

아주 단순한 동작과 구성부터 시작해서 점점 복잡해지는 구조다. 우리는 이걸 그대로 가져왔다. AI 영상 도구로 이 기초 과제들을 재현해보자. 거창한 단편영화가 아니라, 영화 만들기의 가장 기본적인 단위부터 시작하자는 거였다.


— Sora 2로 부딪힌 첫 번째 벽

당시 우리가 쓴 도구는 Sora 2였다. 가장 기본적인 과제 — "걸어와 문을 열고 들어간다" — 부터 시도했다.

결과는 실패였다.

카메라 위치를 잡는 것도 어려웠지만, 그보다 더 근본적인 문제가 있었다. 배우의 동작 자체가 제대로 표현되지 않았다. '복도를 걷는 군화를 신은 발'이라는, 이보다 더 단순할 수 없는 컷에서도 발이 오징어처럼 꼬이고, 걸음의 리듬이 뒤틀리고, 군화의 형태가 프레임마다 달라졌다.

영화과 1학년이 카메라를 들고 복도에서 5분이면 찍을 수 있는 컷을, AI는 안정적으로 만들어내지 못했다.


— 남은 질문

실패했지만 방향은 보였다. 문제는 "AI가 영상을 못 만든다"가 아니라 "어떤 방식으로 지시해야 하는가"였다. 같은 도구를 써도 프롬프트를 어떻게 구성하느냐에 따라 결과물의 품질이 완전히 달라졌다.

영화를 만드는 사람의 언어와 AI가 알아듣는 언어 사이에 번역이 필요하다는 것. 그 번역법을 찾아가는 것이 이 스터디의 다음 과제가 됐다.`,
  },
  {
    id: "from-pd-to-ai-producer",
    date: "2025.02",
    title: "기획 PD에서 AI 프로듀서로 — 콘텐츠 제작의 변화",
    excerpt:
      "3년간의 드라마 기획·제작 경험을 바탕으로, AI를 현장의 문제를 해결하는 실질적 도구로 활용하는 프로듀서가 되기까지의 여정.",
    content:
      "여기에 전체 글 내용이 들어갑니다.",
  },
];

// ===== CASE STUDY HERO =====
export const heroData = {
  label: "AI Film Production — Case Study",
  title: "MAKING OF:",
  titleAccent: "프로젝트 제목",
  description:
    "텍스트 시나리오 하나에서 출발해, AI 생성 도구와 전통 편집을 결합하여 완성한 초단편 영화의 전체 제작 과정을 기록합니다.",
  meta: [
    { label: "Runtime", value: "약 4분 30초" },
    { label: "Genre", value: "Suspense / Drama" },
    { label: "Tools", value: "Higgsfield Cinema Studio · Premiere Pro" },
    { label: "Production", value: "Solo — AI + Manual Edit" },
  ],
};

// ===== STATS =====
export interface StatItem {
  label: string;
  value: string;
  unit?: string;
  sub: string;
  highlight?: boolean;
}

export const stats: StatItem[] = [
  {
    label: "Total Cost",
    value: "$49",
    sub: "Higgsfield Plus 1개월",
    highlight: true,
  },
  {
    label: "Production Days",
    value: "12",
    unit: "일",
    sub: "퇴근 후 + 주말 작업 기준",
  },
  {
    label: "Clips Generated",
    value: "87",
    unit: "개",
    sub: "최종 사용: 28개",
  },
  {
    label: "Success Rate",
    value: "32",
    unit: "%",
    sub: "1차 생성 기준 채택률",
  },
  {
    label: "Credits Used",
    value: "940",
    unit: "/1K",
    sub: "무제한 모델 활용으로 절감",
  },
  {
    label: "Locations",
    value: "9",
    unit: "곳",
    sub: "경찰서 4 · 가정집 5",
  },
];

// ===== PIPELINE =====
export interface PhaseGalleryItem {
  label: string;
  sublabel: string;
  wide?: boolean;
}

export interface ModelCard {
  name: string;
  meta: string;
  selected: boolean;
  verdict: string;
}

export interface CameraRow {
  label: string;
  value: string;
}

export interface CameraSetup {
  title: string;
  rows: CameraRow[];
}

export interface Phase {
  number: string;
  name: string;
  tags: { label: string; type: "default" | "tool" | "credit" }[];
  body: string;
  gallery?: PhaseGalleryItem[];
  models?: ModelCard[];
  cameras?: CameraSetup[];
}

export const phases: Phase[] = [
  {
    number: "01",
    name: "SCRIPT BREAKDOWN",
    tags: [{ label: "PRE-PRODUCTION", type: "default" }],
    body: "시나리오를 씬 단위로 분할하고, 각 씬에 필요한 로케이션·캐릭터·샷 타입을 정리했습니다. 9개 로케이션, 3명의 고정 캐릭터, 약 28개의 샷으로 구성된 샷 리스트를 제작했습니다.",
    gallery: [
      { label: "Shot List 스프레드시트", sublabel: "28 shots planned" },
      { label: "씬 분할 문서", sublabel: "9 locations mapped" },
    ],
  },
  {
    number: "02",
    name: "CHARACTER DESIGN",
    tags: [
      { label: "Soul Cast", type: "tool" },
      { label: "~120 credits", type: "credit" },
    ],
    body: "Soul Cast를 활용해 3명의 캐릭터를 생성하고, 다각도(정면/45°/측면)에서 일관성을 확인한 후 Elements로 저장했습니다. 각 캐릭터의 표정·감정 변화도 사전 테스트했습니다.",
    gallery: [
      { label: "캐릭터 A — 정면", sublabel: "protagonist" },
      { label: "캐릭터 A — 45°", sublabel: "3/4 view" },
      { label: "캐릭터 B — 정면", sublabel: "antagonist" },
      { label: "캐릭터 C — 정면", sublabel: "supporting" },
    ],
  },
  {
    number: "03",
    name: "LOCATION BUILDING",
    tags: [
      { label: "Cinema Studio", type: "tool" },
      { label: "~100 credits", type: "credit" },
    ],
    body: "9개 로케이션의 마스터 이미지를 Cinema Studio Photography Mode로 생성했습니다. 경찰서 씬은 차가운 형광등 톤, 가정집 씬은 따뜻한 자연광 톤으로 분리했습니다.",
    gallery: [
      { label: "취조실", sublabel: "cold blue" },
      { label: "경찰서 복도", sublabel: "fluorescent" },
      { label: "경찰차 안", sublabel: "night ext." },
      { label: "가정집 대문", sublabel: "suburban" },
      { label: "고딩 방", sublabel: "warm mess" },
      { label: "뒷마당", sublabel: "golden hour" },
    ],
  },
  {
    number: "04",
    name: "CAMERA DESIGN",
    tags: [{ label: "Optical Physics Engine", type: "tool" }],
    body: "전체 영화의 시각적 톤을 통일하기 위해 카메라 바디·렌즈·장르를 사전 설계했습니다. 경찰서와 가정집의 톤을 분리하면서도 같은 카메라 시스템으로 일관성을 유지했습니다.",
    cameras: [
      {
        title: "경찰서 씬",
        rows: [
          { label: "Camera", value: "ARRI Alexa 35" },
          { label: "Lens", value: "Spherical 35mm" },
          { label: "Tone", value: "Cold / Desaturated" },
          { label: "Genre", value: "Suspense" },
          { label: "Lighting", value: "Harsh Fluorescent" },
        ],
      },
      {
        title: "가정집 씬",
        rows: [
          { label: "Camera", value: "ARRI Alexa 35" },
          { label: "Lens", value: "Spherical 50mm" },
          { label: "Tone", value: "Warm / Uneasy" },
          { label: "Genre", value: "Suspense" },
          { label: "Lighting", value: "Ambient / Golden" },
        ],
      },
    ],
  },
  {
    number: "05",
    name: "SHOT GENERATION",
    tags: [
      { label: "Multi-Model", type: "tool" },
      { label: "~580 credits", type: "credit" },
    ],
    body: "각 샷에 최적의 모델을 선택해 Hero Frame → Video 변환을 진행했습니다. 같은 씬을 여러 모델로 테스트하고, 가장 적합한 결과물을 채택했습니다.",
    models: [
      {
        name: "Cinema Studio DOP",
        meta: "카메라 무브 정밀 · 60 credits",
        selected: true,
        verdict: "채택 — 카메라 제어 최적",
      },
      {
        name: "Kling 3.0",
        meta: "15초 긴 테이크 · 6 credits",
        selected: false,
        verdict: "미채택 — 표정 디테일 부족",
      },
      {
        name: "Sora 2",
        meta: "사실적 모션 · 40 credits",
        selected: false,
        verdict: "미채택 — 일관성 불안정",
      },
    ],
  },
  {
    number: "06",
    name: "EDIT & POST",
    tags: [{ label: "Premiere Pro", type: "tool" }],
    body: "생성된 28개 클립을 프리미어 프로에서 어셈블리 → 정밀 편집 → 사운드 디자인 → 컬러 그레이딩 순서로 후반 작업을 진행했습니다.",
    gallery: [
      {
        label: "Premiere Pro 타임라인 스크린샷",
        sublabel: "V1~V3 / A1~A4",
        wide: true,
      },
      { label: "컬러 그레이딩 Before", sublabel: "before" },
      { label: "컬러 그레이딩 After", sublabel: "after" },
    ],
  },
];

// ===== CREDITS =====
export const creditSegments = [
  { label: "CHR", color: "var(--color-blue)", width: "12%", legend: "캐릭터 생성 — 120" },
  { label: "LOC", color: "var(--color-purple)", width: "10%", legend: "로케이션 — 100" },
  { label: "SB", color: "var(--color-green)", width: "18%", legend: "스토리보드 — 140" },
  { label: "VIDEO", color: "var(--color-accent)", width: "45%", legend: "비디오 클립 — 580" },
  { label: "RSV", color: "var(--color-text-muted)", width: "15%", legend: "여유분(미사용) — 60" },
];

// ===== INSIGHTS =====
export interface InsightItem {
  title: string;
  body: string;
  type: "learned" | "improved";
}

export const insights: InsightItem[] = [
  {
    title: "배운 점",
    body: "Soul Cast로 캐릭터를 사전 고정하면 씬 간 일관성이 극적으로 향상된다. Hero Frame을 충분히 다듬은 후 비디오로 전환하는 것이 크레딧 효율의 핵심이었다.",
    type: "learned",
  },
  {
    title: "모델 선택 전략",
    body: "만능 모델은 없다. 카메라 무브가 중요한 샷은 Cinema Studio, 긴 대화 씬은 Kling 3.0, 립싱크가 필요한 샷은 WAN 2.5로 분배하는 것이 최적이었다.",
    type: "learned",
  },
  {
    title: "개선할 점",
    body: "초반 캐릭터 디자인 단계에서 프롬프트 실험에 크레딧을 많이 소모했다. 다음 프로젝트에서는 무제한 모델로 프롬프트를 먼저 검증한 후 유료 모델에 투입할 예정.",
    type: "improved",
  },
  {
    title: "다음 프로젝트 계획",
    body: "숏폼(60초) 버전을 별도 편집하여 플랫폼별 최적화 경험을 쌓고, 페이스 스왑·디지털 휴먼 기술도 파이프라인에 통합할 예정.",
    type: "improved",
  },
];
