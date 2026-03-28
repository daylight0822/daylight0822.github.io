import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft, X } from "lucide-react";
import { caseStudyPosts } from "../data/content";

export default function CaseStudyPage() {
  const [activeId, setActiveId] = useState<string | null>(null);
  const activePost = caseStudyPosts.find((p) => p.id === activeId);

  return (
    <div className="min-h-screen bg-bg">
      {/* Nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-bg/80 backdrop-blur-xl border-b border-border">
        <div className="max-w-[1100px] mx-auto px-5 md:px-10 py-5 flex items-center justify-between">
          <Link
            to="/"
            className="flex items-center gap-2 text-text-dim hover:text-accent transition-colors text-sm no-underline"
          >
            <ArrowLeft size={16} />
            <span className="tracking-[0.15em]">BACK</span>
          </Link>
          <Link
            to="/"
            className="text-lg font-semibold tracking-[0.2em] text-text hover:text-accent transition-colors no-underline"
          >
            DAYLIGHT
          </Link>
        </div>
      </nav>

      {/* Header */}
      <main className="pt-32 pb-20 px-5 md:px-10">
        <div className="max-w-[800px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <p className="text-accent text-[10px] tracking-[3px] uppercase mb-3 font-medium">
              THOUGHTS & PROCESS
            </p>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-text mb-4">
              Case Study
            </h1>
            <p className="text-text-dim text-base">
              AI 영상 제작에 대한 생각, 과정, 그리고 기록
            </p>
          </motion.div>

          {/* Post list */}
          <div className="space-y-0">
            {caseStudyPosts.length === 0 ? (
              <p className="text-text-muted text-sm py-12 text-center">
                아직 작성된 글이 없습니다.
              </p>
            ) : (
              caseStudyPosts.map((post, i) => (
                <motion.article
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  onClick={() => setActiveId(post.id)}
                  className="group py-8 border-b border-border last:border-b-0 cursor-pointer"
                >
                  <div className="grid md:grid-cols-[100px_1fr] gap-4 md:gap-8">
                    <p className="text-accent text-sm tracking-wider font-medium">
                      {post.date}
                    </p>
                    <div>
                      <h2 className="text-white text-lg mb-3 font-medium group-hover:text-accent transition-colors duration-300">
                        {post.title}
                      </h2>
                      <p className="text-text-dim text-sm leading-relaxed">
                        {post.excerpt}
                      </p>
                    </div>
                  </div>
                </motion.article>
              ))
            )}
          </div>
        </div>
      </main>

      {/* Post Detail Modal */}
      <AnimatePresence>
        {activePost && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[100] overflow-y-auto"
            onClick={() => setActiveId(null)}
          >
            <div className="fixed inset-0 bg-bg/90 backdrop-blur-sm" />

            <div className="relative min-h-full flex items-start justify-center py-12 px-4">
              <motion.div
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.95, opacity: 0 }}
                transition={{ duration: 0.25 }}
                className="relative w-full max-w-[700px]"
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  onClick={() => setActiveId(null)}
                  className="absolute -top-10 right-0 text-text-dim hover:text-white transition-colors"
                >
                  <X size={24} />
                </button>

                <div className="mb-6">
                  <p className="text-accent text-sm tracking-wider font-medium mb-3">
                    {activePost.date}
                  </p>
                  <h2 className="text-white text-2xl md:text-3xl font-bold tracking-tight">
                    {activePost.title}
                  </h2>
                </div>

                <div className="text-white/80 text-sm leading-[1.9] whitespace-pre-line">
                  {activePost.content}
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
