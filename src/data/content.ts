export const profile = {
  name: "DAYLIGHT",
  nameKo: "데이라이트",
  tagline: "Cinematic Storyteller & AI Visual Creator",
  bio: "드라마 기획/제작에서 시작해, 영상 편집을 거쳐 AI 영상 제작까지. 이야기를 시각으로 풀어내는 사람입니다.",
  email: "your-email@example.com",
};

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

export interface WorkItem {
  id: string;
  title: string;
  category: string;
  description: string;
  thumbnail: string;
  tools: string[];
}

export const works: WorkItem[] = [
  {
    id: "work-1",
    title: "작품 제목 1",
    category: "AI 시네마틱",
    description: "작품에 대한 간단한 설명이 들어갑니다. 어떤 컨셉으로 만들었는지, 어떤 분위기를 담았는지.",
    thumbnail: "",
    tools: ["Kling AI", "Midjourney"],
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
      "여기에 전체 글 내용이 들어갑니다. 마크다운이나 긴 텍스트를 넣을 수 있습니다. AI 영상 제작을 시작하게 된 계기, 첫 작업의 경험, 기존 편집 워크플로우와의 비교 등을 자유롭게 작성해주세요.",
  },
  {
    id: "journal-2",
    date: "2025.02",
    title: "Kling AI 워크플로우 정리",
    excerpt:
      "프롬프트 설계부터 최종 편집까지, 내가 사용하는 AI 영상 제작 파이프라인.",
    content:
      "여기에 전체 글 내용이 들어갑니다. 구체적인 워크플로우, 도구 사용 팁, 프롬프트 작성법 등을 정리해주세요.",
  },
];
