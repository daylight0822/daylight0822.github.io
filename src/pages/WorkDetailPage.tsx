import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import { works } from "../data/content";

function getYoutubeEmbedUrl(url: string): string {
  try {
    const u = new URL(url);
    if (u.hostname === "youtu.be") {
      return `https://www.youtube.com/embed/${u.pathname.slice(1)}`;
    }
    if (u.hostname.includes("youtube.com")) {
      const v = u.searchParams.get("v");
      if (v) return `https://www.youtube.com/embed/${v}`;
    }
  } catch {
    // ignore
  }
  return url;
}

export default function WorkDetailPage() {
  const { workId } = useParams<{ workId: string }>();
  const navigate = useNavigate();
  const work = works.find((w) => w.id === workId);

  if (!work) {
    return (
      <>
        <Navigation />
        <div className="min-h-screen flex items-center justify-center">
          <p className="text-text-dim">작품을 찾을 수 없습니다.</p>
        </div>
      </>
    );
  }

  return (
    <>
      <Navigation />
      <main className="pt-28 pb-20 px-5 md:px-10">
        <div className="max-w-[900px] mx-auto">
          {/* Back */}
          <motion.button
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
            onClick={() => navigate("/")}
            className="flex items-center gap-2 text-text-dim hover:text-accent transition-colors mb-10 text-sm tracking-wider"
          >
            <ArrowLeft size={16} />
            BACK
          </motion.button>

          {/* Title */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-3"
          >
            <p className="text-accent text-[10px] tracking-[3px] uppercase mb-3 font-medium">
              {work.category.toUpperCase()}
            </p>
            <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-text">
              {work.title}
            </h1>
          </motion.div>

          {/* Tags */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="flex gap-2 flex-wrap mb-10"
          >
            {work.tools.map((tool) => (
              <span
                key={tool}
                className="text-[10px] tracking-wider text-accent-dim bg-accent-glow px-2.5 py-1 rounded-full"
              >
                {tool}
              </span>
            ))}
          </motion.div>

          {/* YouTube Embed */}
          {work.youtubeUrl && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-14"
            >
              <div className="aspect-video rounded-xl overflow-hidden border border-border bg-bg-elevated">
                <iframe
                  src={getYoutubeEmbedUrl(work.youtubeUrl)}
                  title={work.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  className="w-full h-full"
                />
              </div>
            </motion.div>
          )}

          {/* Details */}
          {work.details && work.details.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="space-y-8"
            >
              {work.details.map((section, i) => (
                <div key={i} className="border-l-2 border-accent/30 pl-6">
                  <h3 className="text-accent text-sm tracking-wider font-medium mb-4">
                    {section.heading}
                  </h3>
                  <ul className="space-y-2">
                    {section.items.map((item, j) => (
                      <li
                        key={j}
                        className="text-text-dim text-sm leading-relaxed flex gap-3"
                      >
                        <span className="text-accent/50 mt-1 shrink-0">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </motion.div>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}
