export const profile = {
  name: "DAYLIGHT",
  nameKo: "데이라이트",
  tagline: "Cinematic Storyteller & AI Visual Creator",
  bio: "드라마 기획/제작에서 시작해, 영상 편집을 거쳐 AI 영상 제작까지. 이야기를 시각으로 풀어내는 사람입니다.",
  email: "your-email@example.com",
};

// ===== CAREERS (Main page) =====
export interface CareerItem {
  period: string;
  title: string;
  company: string;
  description: string;
}

export const careers: CareerItem[] = [
  {
    period: "2020 — 2023",
    title: "드라마 기획 및 제작",
    company: "소속 회사/프로덕션명",
    description:
      "기획 단계부터 촬영, 후반 작업까지 드라마 제작 전반에 참여. 스토리 구조 설계와 연출 방향 기획을 담당했습니다.",
  },
  {
    period: "2018 — 2020",
    title: "영상 편집",
    company: "소속 회사/스튜디오명",
    description:
      "다큐멘터리, 브랜드 영상, 뮤직비디오 등 다양한 장르의 영상 편집 작업을 수행했습니다.",
  },
  {
    period: "2023 — 현재",
    title: "AI 영상 제작",
    company: "프리랜서 / 개인 프로젝트",
    description:
      "Kling, Runway, Midjourney 등 AI 도구를 활용한 시네마틱 영상 제작. 새로운 영상 제작 워크플로우를 탐구합니다.",
  },
];

// ===== WORKS (Main page) =====
export interface WorkItem {
  id: string;
  title: string;
  category: string;
  description: string;
  thumbnail: string;
  tools: string[];
  caseStudyPath?: string;
}

export const works: WorkItem[] = [
  {
    id: "work-1",
    title: "AI Short Film Production Pipeline",
    category: "AI 시네마틱",
    description: "텍스트 시나리오에서 출발해 AI 도구와 전통 편집을 결합하여 완성한 초단편 영화. 전체 제작 과정 케이스 스터디.",
    thumbnail: "",
    tools: ["Higgsfield Cinema Studio", "Premiere Pro"],
    caseStudyPath: "/case-study",
  },
  {
    id: "work-2",
    title: "작품 제목 2",
    category: "AI 뮤직비디오",
    description: "작품에 대한 간단한 설명이 들어갑니다.",
    thumbnail: "",
    tools: ["Runway", "Stable Diffusion"],
  },
  {
    id: "work-3",
    title: "작품 제목 3",
    category: "AI 단편",
    description: "작품에 대한 간단한 설명이 들어갑니다.",
    thumbnail: "",
    tools: ["Kling AI", "ComfyUI"],
  },
];

// ===== JOURNAL (Main page) =====
export interface JournalEntry {
  id: string;
  date: string;
  title: string;
  excerpt: string;
  content: string;
}

export const journal: JournalEntry[] = [
  {
    id: "journal-1",
    date: "2025.03",
    title: "AI로 시네마틱 영상을 만든다는 것",
    excerpt:
      "처음 AI 영상 도구를 접했을 때의 충격, 그리고 기존 영상 제작과의 차이점에 대한 이야기.",
    content:
      "여기에 전체 글 내용이 들어갑니다.",
  },
  {
    id: "journal-2",
    date: "2025.02",
    title: "Kling AI 워크플로우 정리",
    excerpt:
      "프롬프트 설계부터 최종 편집까지, 내가 사용하는 AI 영상 제작 파이프라인.",
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
