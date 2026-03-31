import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Calendar, Tag } from "lucide-react";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { loadJournalPosts } from "../utils/journal";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

export default function JournalPostPage() {
  const { slug } = useParams<{ slug: string }>();
  const posts = loadJournalPosts();
  const post = posts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <>
        <Navigation />
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <p className="text-text-muted mb-4">글을 찾을 수 없습니다.</p>
            <Link to="/journal" className="text-accent hover:underline">
              ← 저널 목록으로
            </Link>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <Navigation />
      <div className="min-h-screen pt-28 pb-20 px-5 md:px-10">
        <div className="max-w-[720px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Link
              to="/journal"
              className="inline-flex items-center gap-2 text-text-muted hover:text-accent text-sm tracking-wider mb-10 transition-colors"
            >
              <ArrowLeft size={14} /> JOURNAL
            </Link>

            <div className="flex items-center gap-3 text-text-muted text-xs tracking-wider mb-4">
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

            <h1 className="text-3xl md:text-4xl font-bold text-text tracking-tight mb-10">
              {post.title}
            </h1>

            <article className="journal-content text-text-dim leading-[1.85] text-[15px]">
              <Markdown remarkPlugins={[remarkGfm]}>{post.content}</Markdown>
            </article>
          </motion.div>
        </div>
      </div>
      <Footer />
    </>
  );
}
