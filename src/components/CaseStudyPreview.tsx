import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { caseStudyPosts } from "../data/content";

export default function CaseStudyPreview() {
  const recentPosts = caseStudyPosts.slice(0, 3);

  return (
    <section className="py-32 px-5 md:px-10">
      <div className="max-w-[1100px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-16 flex items-end justify-between"
        >
          <div>
            <p className="text-accent text-xs tracking-[3px] uppercase mb-3 font-medium">
              THOUGHTS & PROCESS
            </p>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-text">
              Case Study
            </h2>
          </div>
          <Link
            to="/case-study"
            className="hidden md:flex items-center gap-2 text-text-dim hover:text-accent transition-colors text-sm no-underline tracking-wider group"
          >
            <span>VIEW ALL</span>
            <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>

        <div className="space-y-0">
          {recentPosts.map((post, i) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <Link
                to="/case-study"
                className="group py-8 border-b border-border last:border-b-0 block no-underline"
              >
                <div className="grid md:grid-cols-[100px_1fr] gap-4 md:gap-8">
                  <p className="text-accent text-sm tracking-wider font-medium">
                    {post.date}
                  </p>
                  <div>
                    <h3 className="text-text text-lg mb-3 font-medium group-hover:text-accent transition-colors duration-300">
                      {post.title}
                    </h3>
                    <p className="text-text-dim text-sm leading-relaxed">
                      {post.excerpt}
                    </p>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-10 md:hidden"
        >
          <Link
            to="/case-study"
            className="flex items-center justify-center gap-2 text-text-dim hover:text-accent transition-colors text-sm no-underline tracking-wider py-4 border border-border rounded-lg hover:border-accent/30"
          >
            <span>VIEW ALL</span>
            <ArrowRight size={14} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
