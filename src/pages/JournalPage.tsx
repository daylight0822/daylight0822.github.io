import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft, Calendar, Tag } from "lucide-react";
import { loadJournalPosts } from "../utils/journal";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

export default function JournalPage() {
  const posts = loadJournalPosts();

  return (
    <>
      <Navigation />
      <div className="min-h-screen pt-28 pb-20 px-5 md:px-10">
        <div className="max-w-[800px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-text-muted hover:text-accent text-sm tracking-wider mb-10 transition-colors"
            >
              <ArrowLeft size={14} /> HOME
            </Link>

            <h1 className="text-3xl md:text-4xl font-bold text-text tracking-tight mb-3">
              Journal
            </h1>
            <p className="text-text-muted text-sm tracking-wider mb-14">
              AI 영상 제작에 대한 생각과 기록
            </p>
          </motion.div>

          <div className="flex flex-col gap-6">
            {posts.length === 0 && (
              <p className="text-text-muted text-center py-20">아직 작성된 글이 없습니다.</p>
            )}
            {posts.map((post, i) => (
              <motion.div
                key={post.slug}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
              >
                <Link
                  to={`/journal/${post.slug}`}
                  className="block p-6 rounded-xl border border-border bg-bg-card hover:border-accent/40 hover:bg-accent/[0.03] transition-all duration-300 group"
                >
                  <div className="flex items-center gap-3 text-text-muted text-xs tracking-wider mb-3">
                    <span className="flex items-center gap-1.5">
                      <Calendar size={12} />
                      {post.date}
                    </span>
                    {post.tags.length > 0 && (
                      <span className="flex items-center gap-1.5">
                        <Tag size={12} />
                        {post.tags.join(", ")}
                      </span>
                    )}
                  </div>
                  <h2 className="text-lg font-semibold text-text group-hover:text-accent transition-colors mb-2">
                    {post.title}
                  </h2>
                  {post.summary && (
                    <p className="text-text-dim text-sm leading-relaxed">
                      {post.summary}
                    </p>
                  )}
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
