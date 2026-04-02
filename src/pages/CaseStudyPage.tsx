import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft, X, ExternalLink, Calendar, Tag } from "lucide-react";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { caseStudyPosts } from "../data/content";
import { loadProcessPosts, loadThoughtsPosts } from "../utils/journal";
import type { CaseStudyEmbed } from "../data/content";
import type { JournalPost } from "../utils/journal";

type TabType = "process" | "thoughts";

function EmbedCard({ embed }: { embed: CaseStudyEmbed }) {
  const base = import.meta.env.BASE_URL || "/";
  const fullHref = `${base}${embed.href}`;

  return (
    <a
      href={fullHref}
      target="_blank"
      rel="noopener noreferrer"
      onClick={(e) => e.stopPropagation()}
      className="block my-6 rounded-xl border border-border bg-bg-elevated/50 hover:border-accent/40 hover:bg-accent/[0.03] transition-all duration-300 no-underline group"
    >
      <div className="p-5">
        <p className="text-[10px] tracking-[2px] uppercase text-accent/70 mb-2 font-medium">
          {embed.tag}
        </p>
        <div className="flex items-start justify-between gap-3">
          <div>
            <h4 className="text-text text-[15px] font-medium mb-1.5 group-hover:text-accent transition-colors">
              {embed.title}
            </h4>
            <p className="text-text/50 text-[13px] leading-relaxed">
              {embed.description}
            </p>
          </div>
          <ExternalLink
            size={16}
            className="text-text/20 group-hover:text-accent/60 transition-colors mt-1 flex-shrink-0"
          />
        </div>
      </div>
    </a>
  );
}

function renderContent(content: string, embeds?: CaseStudyEmbed[]) {
  if (!embeds || embeds.length === 0) {
    return <span className="whitespace-pre-line">{content}</span>;
  }

  const parts = content.split(/\{\{embed:(\d+)\}\}/);
  return parts.map((part, i) => {
    if (i % 2 === 1) {
      const embedIndex = parseInt(part, 10);
      const embed = embeds[embedIndex];
      if (embed) return <EmbedCard key={`embed-${i}`} embed={embed} />;
      return null;
    }
    return (
      <span key={`text-${i}`} className="whitespace-pre-line">
        {part}
      </span>
    );
  });
}

function TabButton({ active, label, onClick }: { active: boolean; label: string; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className={`relative px-5 py-2.5 text-sm tracking-[0.15em] font-medium transition-colors duration-300 cursor-pointer ${
        active ? "text-accent" : "text-text-muted hover:text-text-dim"
      }`}
    >
      {label}
      {active && (
        <motion.div
          layoutId="tab-underline"
          className="absolute bottom-0 left-0 right-0 h-[2px] bg-accent"
          transition={{ type: "spring", stiffness: 400, damping: 30 }}
        />
      )}
    </button>
  );
}

export default function CaseStudyPage() {
  const [activeTab, setActiveTab] = useState<TabType>("process");
  const [activePostId, setActivePostId] = useState<string | null>(null);
  const [activeMarkdownPost, setActiveMarkdownPost] = useState<JournalPost | null>(null);

  const processMdPosts = loadProcessPosts();
  const thoughtsMdPosts = loadThoughtsPosts();

  const activeCodePost = caseStudyPosts.find((p) => p.id === activePostId);

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
            className="mb-10"
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

          {/* Tabs */}
          <div className="flex gap-1 border-b border-border mb-10">
            <TabButton
              active={activeTab === "process"}
              label="PROCESS"
              onClick={() => setActiveTab("process")}
            />
            <TabButton
              active={activeTab === "thoughts"}
              label="THOUGHTS"
              onClick={() => setActiveTab("thoughts")}
            />
          </div>

          {/* Tab Content */}
          <AnimatePresence mode="wait">
            {activeTab === "process" && (
              <motion.div
                key="process"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.3 }}
              >
                {/* Code-based posts */}
                <div className="space-y-0">
                  {caseStudyPosts.map((post, i) => (
                    <motion.article
                      key={post.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: i * 0.08 }}
                      onClick={() => setActivePostId(post.id)}
                      className="group py-8 border-b border-border last:border-b-0 cursor-pointer"
                    >
                      <div className="grid md:grid-cols-[100px_1fr] gap-4 md:gap-8">
                        <p className="text-accent text-sm tracking-wider font-medium">
                          {post.date}
                        </p>
                        <div>
                          <h2 className="text-text text-lg mb-3 font-medium group-hover:text-accent transition-colors duration-300">
                            {post.title}
                          </h2>
                          <p className="text-text-dim text-sm leading-relaxed">
                            {post.excerpt}
                          </p>
                        </div>
                      </div>
                    </motion.article>
                  ))}

                  {/* Markdown-based process posts */}
                  {processMdPosts.map((post, i) => (
                    <motion.article
                      key={post.slug}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: (caseStudyPosts.length + i) * 0.08 }}
                      onClick={() => setActiveMarkdownPost(post)}
                      className="group py-8 border-b border-border last:border-b-0 cursor-pointer"
                    >
                      <div className="grid md:grid-cols-[100px_1fr] gap-4 md:gap-8">
                        <p className="text-accent text-sm tracking-wider font-medium">
                          {post.date}
                        </p>
                        <div>
                          <h2 className="text-text text-lg mb-3 font-medium group-hover:text-accent transition-colors duration-300">
                            {post.title}
                          </h2>
                          {post.summary && (
                            <p className="text-text-dim text-sm leading-relaxed">
                              {post.summary}
                            </p>
                          )}
                          {post.tags.length > 0 && (
                            <div className="flex items-center gap-2 mt-2 text-text-muted text-xs">
                              <Tag size={11} />
                              {post.tags.join(", ")}
                            </div>
                          )}
                        </div>
                      </div>
                    </motion.article>
                  ))}
                </div>

                {caseStudyPosts.length === 0 && processMdPosts.length === 0 && (
                  <p className="text-text-muted text-sm py-12 text-center">
                    아직 작성된 글이 없습니다.
                  </p>
                )}
              </motion.div>
            )}

            {activeTab === "thoughts" && (
              <motion.div
                key="thoughts"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.3 }}
              >
                <div className="space-y-0">
                  {thoughtsMdPosts.map((post, i) => (
                    <motion.article
                      key={post.slug}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: i * 0.08 }}
                      onClick={() => setActiveMarkdownPost(post)}
                      className="group py-8 border-b border-border last:border-b-0 cursor-pointer"
                    >
                      <div className="grid md:grid-cols-[100px_1fr] gap-4 md:gap-8">
                        <p className="text-accent text-sm tracking-wider font-medium">
                          {post.date}
                        </p>
                        <div>
                          <h2 className="text-text text-lg mb-3 font-medium group-hover:text-accent transition-colors duration-300">
                            {post.title}
                          </h2>
                          {post.summary && (
                            <p className="text-text-dim text-sm leading-relaxed">
                              {post.summary}
                            </p>
                          )}
                          {post.tags.length > 0 && (
                            <div className="flex items-center gap-2 mt-2 text-text-muted text-xs">
                              <Tag size={11} />
                              {post.tags.join(", ")}
                            </div>
                          )}
                        </div>
                      </div>
                    </motion.article>
                  ))}
                </div>

                {thoughtsMdPosts.length === 0 && (
                  <p className="text-text-muted text-sm py-12 text-center">
                    아직 작성된 글이 없습니다.
                  </p>
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </main>

      {/* Code-based Post Modal */}
      <AnimatePresence>
        {activeCodePost && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[100] overflow-y-auto"
            onClick={() => setActivePostId(null)}
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
                  onClick={() => setActivePostId(null)}
                  className="absolute -top-10 right-0 text-text-dim hover:text-text transition-colors"
                >
                  <X size={24} />
                </button>
                <div className="mb-6">
                  <p className="text-accent text-sm tracking-wider font-medium mb-3">
                    {activeCodePost.date}
                  </p>
                  <h2 className="text-text text-2xl md:text-3xl font-bold tracking-tight">
                    {activeCodePost.title}
                  </h2>
                </div>
                <div className="text-text/80 text-sm leading-[1.9]">
                  {renderContent(activeCodePost.content, activeCodePost.embeds)}
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Markdown Post Modal */}
      <AnimatePresence>
        {activeMarkdownPost && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[100] overflow-y-auto"
            onClick={() => setActiveMarkdownPost(null)}
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
                  onClick={() => setActiveMarkdownPost(null)}
                  className="absolute -top-10 right-0 text-text-dim hover:text-text transition-colors"
                >
                  <X size={24} />
                </button>
                <div className="mb-6">
                  <div className="flex items-center gap-3 text-text-muted text-xs tracking-wider mb-3">
                    <span className="flex items-center gap-1.5">
                      <Calendar size={12} />
                      {activeMarkdownPost.date}
                    </span>
                    {activeMarkdownPost.tags.length > 0 && (
                      <span className="flex items-center gap-1.5">
                        <Tag size={12} />
                        {activeMarkdownPost.tags.join(", ")}
                      </span>
                    )}
                  </div>
                  <h2 className="text-text text-2xl md:text-3xl font-bold tracking-tight">
                    {activeMarkdownPost.title}
                  </h2>
                </div>
                <article className="journal-content text-text/80 text-sm leading-[1.9]">
                  <Markdown
                    remarkPlugins={[remarkGfm]}
                    components={{
                      a: ({ href, children }) => {
                        const base = import.meta.env.BASE_URL || "/";
                        const isExternal = href?.startsWith("http");
                        const resolvedHref = isExternal ? href : `${base}${href}`;
                        return (
                          <a
                            href={resolvedHref}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            className="inline-flex items-center gap-1.5 px-4 py-2.5 my-3 rounded-lg border border-accent/30 bg-accent/[0.05] text-accent hover:bg-accent/[0.12] hover:border-accent/50 transition-all duration-300 no-underline text-[13px] font-medium tracking-wide"
                          >
                            {children}
                            <ExternalLink size={13} className="opacity-60" />
                          </a>
                        );
                      },
                    }}
                  >
                    {activeMarkdownPost.content}
                  </Markdown>
                </article>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
