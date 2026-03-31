export interface JournalPost {
  slug: string;
  title: string;
  date: string;
  tags: string[];
  summary: string;
  content: string;
}

function parseFrontmatter(raw: string): { meta: Record<string, string>; content: string } {
  const match = raw.match(/^---\s*\n([\s\S]*?)\n---\s*\n([\s\S]*)$/);
  if (!match) return { meta: {}, content: raw };

  const meta: Record<string, string> = {};
  for (const line of match[1].split("\n")) {
    const idx = line.indexOf(":");
    if (idx > 0) {
      const key = line.slice(0, idx).trim();
      let val = line.slice(idx + 1).trim();
      if (val.startsWith("[") && val.endsWith("]")) {
        val = val.slice(1, -1);
      }
      meta[key] = val;
    }
  }
  return { meta, content: match[2] };
}

export function loadJournalPosts(): JournalPost[] {
  const modules = import.meta.glob("/content/journal/*.md", { eager: true, query: "?raw", import: "default" });
  const posts: JournalPost[] = [];

  for (const [path, raw] of Object.entries(modules)) {
    const slug = path.split("/").pop()!.replace(/\.md$/, "");
    const { meta, content } = parseFrontmatter(raw as string);
    posts.push({
      slug,
      title: meta.title || slug,
      date: meta.date || "",
      tags: (meta.tags || "").split(",").map((t: string) => t.trim()).filter(Boolean),
      summary: meta.summary || "",
      content,
    });
  }

  return posts.sort((a, b) => b.date.localeCompare(a.date));
}
