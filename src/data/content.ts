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
      "드라마 <수상한 그녀> 대본 기획 참여, 해외 세일즈 소재 관리, <0교시는 인싸타임> 전체 대본 기획, 제작, 후반, 홍보 및 마케팅, 유통까지 전과정에 참여했습니다.",
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
    title: "캐시",
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
    director: "김다솜 감독",
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
export interface GalleryImage {
  src: string;
  alt: string;
  /** 묶음 이미지: 썸네일 클릭 시 이 배열을 넘겨볼 수 있음 */
  bundle?: { src: string; alt: string }[];
}

export interface GalleryGroup {
  id: string;
  title: string;
  description: string;
  images: GalleryImage[];
}

export const gallery: GalleryGroup[] = [
  {
    id: "portfolio-old",
    title: "이전 포트폴리오",
    description: "드라마 기획·제작·마케팅·편집 경력을 정리한 포트폴리오 (7p)",
    images: [
      {
        src: "/gallery/portfolio-old/01.png",
        alt: "이전 포트폴리오 — 표지",
        bundle: [
          { src: "/gallery/portfolio-old/01.png", alt: "표지 — PORTFOLIO KOO DAYOUNG" },
          { src: "/gallery/portfolio-old/02.png", alt: "Profile — 소개 / 학력 / 스킬 / 경력" },
          { src: "/gallery/portfolio-old/03.png", alt: "드라마 — 교시는 인싸타임 (기획/제작/마케팅)" },
          { src: "/gallery/portfolio-old/04.png", alt: "드라마 — 브랜딩 인생주동 / 수상할 그녀" },
          { src: "/gallery/portfolio-old/05.png", alt: "기획안 — 고구려, ANTI LOVE LATION, 2-3 승강장 등" },
          { src: "/gallery/portfolio-old/06.png", alt: "편집 — 숨은 그놈 찾기 / 리얼타임러브 Part.3" },
          { src: "/gallery/portfolio-old/07.png", alt: "기타 — 콘텐츠 진흥원 지원사업 / MBN 헬로트로트" },
        ],
      },
    ],
  },
  {
    id: "plans",
    title: "PPT 자료들",
    description: "",
    images: [
      { src: "/gallery/plans/01-승강장.png", alt: "2-3 승강장 기획안" },
      { src: "/gallery/plans/02-경성부녀자.png", alt: "경성부녀자 고민상담소 기획안" },
      { src: "/gallery/plans/03-고구려.png", alt: "고구려 개마무사 기획안" },
      { src: "/gallery/plans/04-antilove.png", alt: "ANTI LOVE LATION 기획안" },
      { src: "/gallery/plans/05-젠틀맨.png", alt: "젠틀맨을 위하여 기획안" },
      { src: "/gallery/plans/06-풀카운트.png", alt: "풀카운트 기획안" },
      {
        src: "/gallery/txt/01-cover.png",
        alt: "개인 취미 작업 — 아이돌 시즌그리팅 컨셉 기획",
        bundle: [
          { src: "/gallery/txt/01-cover.png", alt: "TXT SPIN OFF: RHAPSODY 커버" },
          { src: "/gallery/txt/02-keypoint.png", alt: "Key Point — 컨셉 확장과 변주" },
          { src: "/gallery/txt/03-story.png", alt: "Story Concept — 나니아 연대기" },
          { src: "/gallery/txt/04-image.png", alt: "Image Concept — 한복과 자개" },
          { src: "/gallery/txt/05-md.png", alt: "MD Concept" },
        ],
      },
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
    description: "편집 피드백 참여 및 기사 검수를 담당.",
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
    description: "웹드라마 전체 8부 본편 편집, 예고편 편집 및 종편 관리를 담당.",
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
    description: "와이낫미디어 기획 웹드라마. 본편 가편집 및 1차 편집을 담당.",
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
export interface CaseStudyEmbed {
  title: string;
  description: string;
  href: string;
  tag: string;
}

export interface CaseStudyPost {
  id: string;
  date: string;
  title: string;
  excerpt: string;
  content: string;
  embeds?: CaseStudyEmbed[];
}

export const caseStudyPosts: CaseStudyPost[] = [
  // 새 글을 추가하려면 여기에 같은 형식으로 넣으면 됩니다.
  // GitHub 웹에서 이 파일을 편집하고 저장하면 자동 배포됩니다.
  {
    id: "after-sora-shutdown",
    date: "2026.03",
    title: "Sora가 문을 닫은 뒤 — AI 영상 제작자는 어디로 가야 하는가",
    excerpt:
      "Sora의 폐쇄는 기술의 실패가 아니라 비즈니스 모델의 실패였다. 독립 앱 시대가 끝나고 도구가 부품이 되는 시대에, '프롬프터'가 아닌 '디렉터'로 살아남는 법.",
    content: `2026년 3월, OpenAI가 Sora 전용 앱을 닫았다. 출시 직후 다운로드가 75% 급감했고, 막대한 GPU 비용 대비 수익이 나지 않았다. OpenAI는 Sora 연구팀을 로보틱스와 세계 시뮬레이션 쪽으로 돌렸다. IPO를 앞두고 "사이드 퀘스트를 정리한다"는 내부 방침이 나왔고, 영상 생성이 바로 그 사이드 퀘스트로 분류됐다.

Sora의 기술이 나빠서 접은 게 아니다. "프롬프트 → 영상"이라는 소비자 직접 판매 모델의 경제성이 증명되지 않았을 뿐이다.


— "프롬프트 → 영상" B2C가 실패한 세 가지 이유

첫째, 경제성. 영상 하나를 생성하는 데 드는 GPU 비용이 이미지 생성보다 수십 배 비싼데, 사용자가 내는 돈은 비슷하거나 더 낮았다.

둘째, 리텐션. "와, 신기하다" 한 달이면 끝이다. TikTok처럼 매일 열어볼 이유가 없었다. AI가 만든 영상을 모아놓은 피드에 대한 지속적 관심은 생기지 않았다.

셋째, 법적 리스크. 시각 생성물은 저작권, 딥페이크, 초상권 같은 문제를 불러왔다. 코딩이나 문서 작업에 비해 소송 리스크가 훨씬 컸다.


— 기술은 죽지 않는다. 재배치된다

영상 생성 기술 자체는 사라지지 않는다. 다만, 어디에 들어가느냐가 바뀌고 있다.

1) 독립 앱이 아니라 편집 파이프라인의 엔진으로. Kling, Runway, Veo는 살아남고 있지만, 소비자 앱이 아니라 "Premiere에 붙는 플러그인", "기업 광고 파이프라인의 한 단계"로 포지셔닝을 바꾸고 있다. 실전에서는 이미지 생성 → AI 모션 → 후처리 편집을 조합하는 것이 이미 표준이다. 이 워크플로우 자체가 시장이 되는 것이다.

2) 세계 시뮬레이션과 로보틱스의 학습 엔진으로. OpenAI가 직접 밝힌 방향이다. 영상 생성 모델이 예쁜 비디오를 뽑는 게 아니라, 물리 법칙을 이해하는 세계 모델로 쓰이게 된다.

3) 인터랙티브 미디어, 게임 엔진과의 결합. 실시간으로 환경을 생성하는 게임, 인터랙티브 스토리텔링. 아직 초기 단계지만 방향은 확실하다.


— "프롬프터"는 넘쳐난다. "디렉터"는 귀해진다

프롬프트를 잘 쓰는 건 진입장벽이 빠르게 낮아지고 있다. 누구나 "cinematic, golden hour, 8K" 정도는 쓸 수 있게 됐다. 하지만 "c01은 풀샷으로 서류철을 밀고, c02는 미디엄으로 리액션을 잡고, c03은 클로즈업으로 전환, c04는 인서트" — 이런 씬 설계 능력은 프롬프트 최적화와는 완전히 다른 영역이다.

프롬프트는 도구의 언어이고, 씬 설계는 영화의 언어다. 도구의 언어는 도구가 바뀌면 같이 바뀐다. 영화의 언어는 매체가 바뀌어도 남는다.


— 독립 앱 시대가 끝나면 남는 건 워크플로우 설계자

하나의 AI 도구로 영상을 만드는 시대는 끝났다. 이미지 생성(Midjourney, Flux) → 소품 확정(Photoshop) → 모션 생성(Kling, Veo) → 후처리(DaVinci, Premiere) → 사운드(ElevenLabs) — 이 파이프라인을 설계하고 최적화하는 능력이 곧 프로덕션 디렉터의 역할이다.

"나는 Kling 전문가"가 아니라 "나는 AI 영상 프로덕션 설계자인데, 현재 최선의 도구 조합은 이거다"가 맞는 포지셔닝이다. 특정 도구에 올인하면 Sora처럼 하루아침에 사라질 수 있다. 도구에 종속되지 않는 자세가 필요하다.


— B2C에서 B2B로

OpenAI만이 아니다. 시장 전체가 "누구나 프롬프트로 영상을 만든다"에서 "브랜드와 프로덕션이 AI를 파이프라인에 통합한다"로 이동하고 있다.

여기서 필요한 건 프롬프트 스킬이 아니다. 프로덕션 설계, AI 도구의 한계에 대한 이해, 그리고 그 한계 안에서 최대한의 결과를 뽑아내는 워크플로우 경험이다.

씬 유형별로 어떤 도구를 어떤 순서로 조합하면 의도한 결과가 나오는가. 이걸 체계적으로 정리하고, 가르치고, 설계해줄 수 있는 사람. 그게 이 시장에서 살아남는 포지션이라고 생각한다.


— 정리

Sora의 폐쇄를 보며 느낀 건, AI 영상 제작이 끝나가는 게 아니라 한 시대가 끝나고 다음 시대가 시작되고 있다는 것이다. "프롬프트 한 줄로 뚝딱" 시대는 끝났다. 도구를 이해하고, 한계를 알고, 그 안에서 영화의 언어로 설계하는 시대가 시작되고 있다.

전통적인 제작 지식은 쓸모없어지지 않는다. 조명의 원리, 구도의 힘, 편집의 리듬, 씬 설계의 논리 — 이것들은 매체가 바뀌어도 유효하다. 다만 그 지식을 새로운 도구에 맞게 번역할 줄 아는 사람이 필요해졌을 뿐이다.`,
  },
  {
    id: "higgsfield-pipeline-building",
    date: "2026.02",
    title: "Higgsfield Cinema Studio 파이프라인 구축기",
    excerpt:
      "캐릭터 → 로케이션 → 씬 합성 → 영상 생성이라는 워크플로우를 잡아가는 과정. @ 태그로 캐릭터를 불러오는 연출 문법까지 — 처음으로 '파이프라인'이라 부를 수 있는 것이 생긴 시점.",
    content: `Higgsfield Cinema Studio를 처음 열었을 때, 기대가 컸다. 캐릭터를 만들고, 배경을 깔고, 영상을 뽑는 것까지 하나의 도구 안에서 해결된다고 했으니까. 하지만 첫 번째 벽은 금방 찾아왔다.


— 캐릭터: 내가 원하는 얼굴이 안 나온다

Cinema Studio 안에서 캐릭터를 생성해봤다. 결과물이 나쁘지는 않았지만, 내가 머릿속에 그린 인물과는 거리가 있었다. 미세한 인상, 분위기, 피부 질감 — 이런 디테일을 조정하는 데 한계가 있었다.

그래서 우회했다. Nanobanana라는 이미지 생성 도구에서 먼저 캐릭터의 바스트샷(가슴 위로 잘린 상반신 사진) 사이즈 이미지를 뽑았다. 여기서 원하는 얼굴과 분위기가 나올 때까지 조정한 뒤, 멀티샷 기능을 활용해 같은 인물의 정면, 45도, 측면 등 다양한 각도의 이미지를 만들었다.

이 과정이 중요했다. AI 영상에서 캐릭터의 일관성은 '처음에 얼마나 잘 잡느냐'에 달려 있다. 여러 각도의 참조 이미지가 있으면, 나중에 씬을 만들 때 캐릭터가 딴 사람처럼 변하는 문제를 크게 줄일 수 있었다.


— 로케이션: 같은 방법으로 공간을 짓다

로케이션도 비슷한 흐름이었다. Cinema Studio 안에서 바로 생성하는 대신, 외부 도구에서 먼저 원하는 공간의 이미지를 충분히 다듬은 뒤 가져왔다. 조명의 색온도, 벽의 질감, 공간의 깊이감 — 이런 것들을 미리 확정해두니까 이후 작업에서 일관된 분위기를 유지하기가 훨씬 수월했다.


— 씬 합성: 캐릭터와 공간을 합치다

캐릭터 이미지와 로케이션 이미지가 준비되면, 이것들을 Higgsfield Cinema Studio로 가져와서 씬 이미지를 만들었다. 이 사람이 이 공간에 서 있는 한 장의 사진 — 이것이 영상의 출발점이 되는 히어로 프레임이다.

여기서 처음으로 '파이프라인'이라고 부를 수 있는 것이 생겼다. 캐릭터 생성 → 로케이션 생성 → 씬 합성 → 영상 변환. 각 단계의 결과물이 다음 단계의 재료가 되는 구조. 즉흥적으로 이것저것 시도하던 것에서 벗어나, 처음으로 순서가 있는 제작 과정이 만들어진 순간이었다.


— 영상 생성: 인아웃점이라는 발견

씬 이미지를 Cinema Studio와 Kling을 활용해 영상으로 변환했다. 처음에는 그냥 "이 캐릭터가 이런 동작을 한다"는 식으로 프롬프트를 썼다.

문제가 바로 드러났다.

예를 들어 8초짜리 영상을 생성했는데, 내가 의도한 동작은 4초 만에 끝나버렸다. 나머지 4초 동안 AI가 알아서 동작을 추가하거나, 갑자기 카메라 앵글이 바뀌거나, 전혀 다른 씬으로 전환되는 일이 벌어졌다. 내가 통제하지 않은 시간을 AI가 제멋대로 채워버리는 것이다.

실제 촬영에서는 이런 문제가 없다. 감독이 "액션"을 외치고 배우가 연기하고 "컷"을 외치면 끝이다. 하지만 AI 영상은 정해진 길이 안에서 스스로 내용물을 채워야 하니까, 빈 시간이 생기면 예측할 수 없는 것들이 들어온다.

해결책은 시간축을 직접 설계하는 것이었다.

"2초에 오른손을 천천히 올린다. 6초에 손을 내린다. 8초까지 표정을 유지한 채 정지한다."

이렇게 초 단위로 동작의 시작과 끝을 지정하니까, 두 가지가 동시에 해결됐다. 첫째, AI가 빈 시간을 엉뚱한 것으로 채우는 문제가 사라졌다. 둘째, 동작의 앞뒤로 자연스러운 여유가 생겼다. 실제 연기에서 배우가 동작 전후에 보여주는 미세한 호흡 — 손을 올리기 전 잠깐의 망설임, 내린 뒤의 고요함 — 이런 것들이 시간을 지정해줌으로써 오히려 살아났다.

이것이 이 프로젝트에서 얻은 가장 큰 발견이었다. AI 영상에서 '연출'이란, 무엇을 하라고 지시하는 것뿐 아니라 시간을 설계하는 것이라는 점.


— 편집: OK컷과 Fine컷

이렇게 생성한 영상들 중에서 OK컷(쓸 만한 것)과 Fine컷(꽤 괜찮은 것)을 골라 프리미어 프로에서 편집했다.

사운드 디자인도 손을 보고 싶었다. 발소리, 문 여닫는 소리, 공간의 앰비언스 — 이런 것들이 들어가야 영상이 '영화'처럼 느껴진다. 하지만 예산 문제로 이 부분은 타협했다. 모든 것을 한 번에 완성할 수는 없었다.


— 돌아보면

이 프로젝트의 의미는 결과물 자체보다, 과정에서 만들어진 구조에 있다.

캐릭터를 외부에서 먼저 만들어 가져오는 것. 로케이션도 마찬가지로 사전에 확정하는 것. 씬 이미지를 거쳐 영상으로 변환하는 것. 시간축을 설계해서 AI의 자의적 판단을 줄이는 것. 이 모든 단계가 하나의 흐름으로 연결됐다.

"이렇게 하면 된다"는 확신이 아니라, "이 순서로 하면 최소한 통제 가능하다"는 감각. 그것이 이 시점에서 처음 생겼다.


— @ 태그: AI에게 배우를 호출하는 문법

파이프라인이 잡히면서 하나 더 배운 것이 있다. Higgsfield Cinema Studio나 Kling 같은 도구에서는 @캐릭터이름 형태로 미리 만들어둔 캐릭터나 로케이션을 프롬프트 안에서 불러올 수 있다. 일종의 '소환 태그'다.

처음에는 별생각 없이 썼다. "@사무엘 사무엘은 의자에 앉는다"처럼. 그런데 이 습관이 문제를 만들었다. @ 태그는 "이 얼굴, 이 외형을 쓰라"는 비주얼 참조이고, 그 뒤의 텍스트는 "뭘 하라"는 연기 지시다. 이름을 반복하면 AI가 '사무엘'이라는 텍스트를 별도의 요소로 해석할 수 있다.

올바른 구조는 이렇다:

"@사무엘 slowly pulls the chair back, sits down, then picks up the coffee cup."

@ 태그로 누구인지 지정하고, 바로 이어서 행동을 붙인다. 이름 반복 없이. 그리고 행동은 반드시 순차적으로 — "앉으면서 커피를 마시면서 전화를 받는다"가 아니라 "먼저 앉고, 그다음 커피를 들고, 그다음 한 모금 마신다"로 쪼개야 한다.

두 명 이상이 등장할 때는 더 중요하다. "그가 말한다… 그가 대답한다"같은 모호한 대명사는 AI를 혼란시킨다. 각 캐릭터를 @ 태그로 명확히 지정하고, 대사가 있다면 화자를 태깅해야 한다.

작은 차이 같지만, 이 문법을 지키느냐 안 지키느냐에 따라 AI가 엉뚱한 행동을 하는 빈도가 확실히 줄었다. 실제 촬영장에서 감독이 "자, 민수 — 문 열고 들어와"라고 하지, "민수, 민수가 문을 열고 들어간다"라고 하지 않는 것과 같은 이치다.`,
  },
  {
    id: "failed-production-tracking",
    date: "2026.01",
    title: "AI 영상 제작 기록을 남기려다 실패한 이야기",
    excerpt:
      "제작 과정을 체계적으로 기록하고 싶었다. 케이스 스터디 페이지도 설계하고, 자동 트래커도 만들어봤다. 하지만 API는 과금 문제, 수동 기록은 현실성 문제로 둘 다 실패했다.",
    embeds: [
      {
        title: "Case Study 페이지 프로토타입",
        description: "제작 대시보드, 6단계 파이프라인, 모델 비교, 크레딧 분석까지 — 완성된 영화의 메이킹 오브 페이지를 미리 설계해봤다.",
        href: "demos/casestudy-draft.html",
        tag: "PROTOTYPE · CASE STUDY",
      },
      {
        title: "Production Log Tracker 프로토타입",
        description: "클립 생성을 기록하고, 모델별 효율과 크레딧 소모를 자동 분석하는 도구. 체험용 데모까지 포함된 트래커 페이지.",
        href: "demos/tracker-prototype.html",
        tag: "PROTOTYPE · TRACKER TOOL",
      },
    ],
    content: `AI로 영상을 만들기 시작하면서, 제작 과정을 기록으로 남기고 싶다는 생각이 들었다.

영화를 전통적으로 만들 때는 기록이 자연스럽게 쌓인다. 촬영 콜시트, 데일리 리포트, 편집 로그, DI 세션 기록 — 제작 시스템 자체가 기록을 만들어내는 구조다. 하지만 AI 영상 제작은 달랐다. 혼자서 프롬프트를 쓰고, 클립을 생성하고, 마음에 안 들면 다시 돌리고 — 이 과정이 어디에도 남지 않았다.

87개 클립을 생성하면서 어떤 모델을 썼는지, 크레딧을 얼마나 소모했는지, 채택률이 어땠는지. 이런 데이터가 있으면 다음 프로젝트에서 더 효율적으로 작업할 수 있을 텐데.


— 시도 1: 제작 과정을 보여주는 케이스 스터디 페이지

먼저, 완성된 영화의 제작 과정을 한 페이지에 정리하는 케이스 스터디 페이지를 설계했다.

{{embed:0}}

비용 대시보드, 6단계 파이프라인(시나리오 분석 → 캐릭터 디자인 → 로케이션 → 카메라 설계 → 샷 생성 → 후반), 모델 비교, 크레딧 사용 내역까지 — 제작의 전 과정을 투명하게 보여주는 구조였다.

디자인은 마음에 들었다. 문제는 데이터였다. 이 페이지를 채우려면 제작 과정에서 데이터를 수집해야 했다.


— 시도 2: 자동으로 기록하는 트래커

그래서 제작 중에 실시간으로 데이터를 기록하는 트래커를 만들어봤다.

{{embed:1}}

클립을 생성할 때마다 씬/샷 번호, 사용한 모델, 크레딧, 클립 길이, 채택 여부를 기록하고, 통계가 자동으로 계산되는 구조. 방문자가 직접 체험해볼 수 있는 데모까지 넣었다.

여기서 두 가지 방향을 고민했다.


— 방향 A: API로 자동 수집

Higgsfield나 Kling 같은 AI 영상 도구의 API에 연결해서, 클립이 생성될 때마다 자동으로 트래커에 기록되게 하는 것. 이상적이었다. 프롬프트 입력하고 생성 버튼만 누르면 모든 데이터가 알아서 쌓이니까.

하지만 현실은 달랐다. API를 사용하면 별도의 과금이 발생한다. 이미 월 구독료를 내고 있는데, 기록을 남기기 위해 추가 비용을 쓰는 건 배보다 배꼽이 더 큰 상황이었다.


— 방향 B: 수동 기록

그러면 직접 기록하면 되지 않나? 클립을 하나 만들 때마다 트래커를 열고, 모델 이름·크레딧·길이를 입력하면 된다.

며칠 해봤다. 결론부터 말하면, 안 된다.

AI 영상 제작의 리듬은 이렇다: 프롬프트를 쓰고, 결과를 보고, 마음에 안 들면 수정하고, 다시 생성하고, 또 보고, 또 수정하고. 이 반복이 하루에 수십 번 일어난다. 거기서 매번 탭을 전환해서 폼을 채우는 행위는 흐름을 완전히 끊어버렸다.

세 번째 클립쯤에서 "나중에 한꺼번에 입력하지 뭐" 하게 되고, 그날 저녁에 "아 귀찮은데 내일 하자" 하게 되고, 다음 날은 어제 뭘 만들었는지도 기억이 안 난다.

기록이라는 게 그렇다. 만드는 순간에 기록하지 않으면 의미가 없다. 그런데 만드는 순간에 기록하는 게 현실적으로 불가능하다. 모순이었다.


— 결국 배운 것

두 프로토타입 모두 실패했다. 하지만 실패에서 몇 가지를 배웠다.

첫째, AI 영상 제작의 워크플로우는 아직 성숙하지 않았다. 전통 영상 제작에는 수십 년에 걸쳐 정착된 기록 시스템이 있다. AI 제작에는 그런 게 없다. 도구가 먼저 나오고, 프로세스는 아직 따라가지 못하고 있다.

둘째, 기록의 마찰을 0에 가깝게 줄여야 한다. 수동 기록은 마찰이 너무 크다. 자동 기록은 비용이 든다. 이 사이 어딘가에 답이 있을 텐데, 아직 찾지 못했다.

셋째, 이 실패 자체가 기록할 가치가 있다. AI 영상 제작이라는 새로운 분야에서 누구도 아직 "정답"을 가지고 있지 않다. 무엇을 시도했고, 왜 안 됐는지를 솔직하게 남기는 것. 그게 지금 할 수 있는 유일한 기록이다.

프로토타입은 프로토타입으로 남겨둔다. 언젠가 API 비용이 합리적으로 내려가거나, 도구 자체에 기록 기능이 내장되는 날이 오면 — 그때 다시 꺼내볼 생각이다.`,
  },
  {
    id: "why-traditional-cuts-fail-in-ai-video",
    date: "2025.12",
    title: "왜 자꾸 실패할까?",
    excerpt:
      "39컷짜리 추리 스릴러 'Samuel'을 AI로 만들어보며 부딪힌 벽. 소품 통제 불가, 인물 간 시선 불일치 — 설계한 컷이 나오는 게 아니라 주사위를 굴리는 것과 비슷했다.",
    content: `— 실패: 39컷, 4인, 11개 씬

어느정도 말이 되는 컷들을 생산해 내기 시작하면서 우리는 다인 대화를 통해 내러티브가 있는 영상을 만들어보기로 했다.

나는 'Samuel'이라는 추리 스릴러 시나리오를 썼다. 엑셀에 컷 번호, 씬 번호, 샷 사이즈, 카메라 무브먼트, 색감 프롬프트까지 빼곡하게 정리했다.

등장인물은 사무엘, 경찰 사라, 제임스, 형사 데릭. 장소는 숲, 취조실, 화장실, 경찰차, 집안, 뒷마당 등 9곳, 컷은 39컷, 포서스 이동, OS컷 활용 등 하던대로 시나리오를 쓰고 컷을 구성했다.
캐릭터와 로케이션으로 쓸 이미지들을 뽑았고 콘티 이미지들도 준비했다.


> 무엇이 문제였나.

1) 소품이 통제 되지 않았다.
머그샷 사진, 피 묻은 맨투맨, 다이어리, 라이터, 배낭과 같은 소품들은 스토리에서 핵심적인 역할을 했다. 그런데 AI는 '사라가 머그샷이 들어있는 서류철을 사무엘 쪽으로 쓱- 민다.' 까지는 뽑아줬지만, '사무엘이 서류철을 열어 남자의 머그샷을 본다.' 를 제대로 뽑아주지 못했다. 사무엘이 서류처를 기괴하게 넘기자 나는 '사무엘이 서류철의 표지를 책처럼 왼쪽으로 연다.' , '사무엘은 10p정도 두께의 서류철을' 과 같이 디테일하게 묘사했으나 결과는 모두 NG컷.

또한 머그샷 속 남자의 외모 묘사를 픽스해도 매번 머그샷 사진이 달라졌다. 소품의 크기, 위치, 다른 컷에서의 일관성을 보장할 방법이 없었다.

2) 인물 간 상호작용이 너무 복잡했다.
'사라가 몸을 돌려 데릭을 쳐다보곤 고개를 살짝 끄덕인다.', '데릭 역시 그런 사라를 보고 고개를 살짝 끄덕여 동의한다.' 와 같은 컷을 붙이고 보니 두 사람의 시선이 맞지 않았다. 풀샷과 각 캐릭터들의 BS 샷 사이의 괴리도 상당했다. 설계한 컷이 나오는 것이 아니라 주사위를 굴려 숫자 6이 나오기를 기다리는 것과 비슷했다.`,
  },
  {
    id: "no-camera-cinema-lab",
    date: "2025.10",
    title: "No Camera Cinema Lab — 카메라 없이 영상을 만든다는 것",
    excerpt:
      "대학 친구들과 만든 스터디 No Camera Cinema Lab. 영화과 1학년 과제를 AI로 재현해보며 부딪힌 첫 번째 벽과 남은 질문들.",
    content: `대학 친구들과 스터디를 하나 만들었다. 이름은 No Camera Cinema Lab. 카메라 없이 영상을 만들어보자는 취지였다.


— 시작점: 영상과 음향

한예종 영화과 1학년 전필 수업 중 '영상과 음향'이라는 과목이 있다. 특히 1학기에는 구도, 샷 사이즈, 카메라 무브먼트의 기본적인 것들을 과제를 통해 익히는 수업이다.

1학기 수업의 과제는 이런 식으로 되어 있다.

1) 인물이 걸어와 문을 열고 들어간다.
2) 2인 대화
3) 3인 대화

아주 단순한 동작과 구성부터 시작해 점점 복잡해지는 구조다.
우리는 이 커리큘럼을 따라해보기로 했다. 현실에서 카메라를 직접 들지 않고 AI 영상 도구를 통해 이 기초 과제들을 재현해 보는 것이 목표였다. 거창한 단편영화가 아니라, 영화 만들기의 가장 기본적인 단위부터 시작하는 것이었다.


— 첫 번째 벽

당시 우리가 쓴 도구는 Sora2였다. 처음 업그레이드 되었을 때는 꽤나 그럴듯한 컷들이 나왔는데, 시간이 지날 수록 오히려 출력물들의 퀄리티가 눈에 띄게 떨어진다는 느낌을 받았다.

특히, 배우의 동작 자체가 제대로 표현되지 않았다.
'군화를 군인의 발 인서트, 복도 정면을 향해 걸어간다.'와 같은 간단한 컷조차 발이 오징어처럼 꼬이거나, 게걸음을 걷는 등의 문제가 발생했고, 요구하지 않은 객체가 등장하기도 했다.
영화과 1학년이 카메라를 들고 복도에서 5분이면 찍을 수 있는 컷인데... 우리는 아직까진 사람의 노동이 더 경제적이고 정교한 것 같다는 농담을 했다.


— 남은 질문

프롬프트를 어떻게 써야 하는가?에 대한 생각이 깊어졌다. 특히나 영상의 길이가 길어지고 연기가 길고 깊어질 수록 이것을 어떻게 텍스트로 표현해야하는지에 대한 고민을 계속 해야할 것 같다.

우리의 언어와 Sora의 언어 사이에 번역기가 필요한 것 같았다.`,
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
