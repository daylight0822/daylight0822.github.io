import { motion } from "framer-motion";
import { works } from "../data/content";
import { Link } from "react-router-dom";

export default function Works() {
  return (
    <section id="works" className="py-32 px-5 md:px-10">
      <div className="max-w-[1100px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <p className="text-accent text-[10px] tracking-[3px] uppercase mb-3 font-medium">
            PORTFOLIO
          </p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-text">
            Works
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {works.map((work, i) => {
            const inner = (
              <motion.div
                key={work.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group cursor-pointer glass-card rounded-xl overflow-hidden"
              >
                {/* Thumbnail */}
                <div className="aspect-video bg-bg-elevated overflow-hidden relative">
                  {work.thumbnail ? (
                    <img
                      src={work.thumbnail}
                      alt={work.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center">
                      <div className="text-center">
                        <div className="w-10 h-10 mx-auto mb-2 rounded-full border border-accent/20 flex items-center justify-center">
                          <span className="text-accent text-sm">▶</span>
                        </div>
                        <span className="text-text-muted text-xs tracking-wider">
                          THUMBNAIL
                        </span>
                      </div>
                    </div>
                  )}
                  {/* Overlay on hover */}
                  <div className="absolute inset-0 bg-bg/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                    <span className="text-accent text-xs tracking-[0.3em] font-medium">
                      VIEW
                    </span>
                  </div>
                </div>

                {/* Info */}
                <div className="p-5">
                  <p className="text-accent text-[10px] tracking-[2px] mb-2 font-medium">
                    {work.category.toUpperCase()}
                  </p>
                  <h3 className="text-text text-base font-medium mb-2 group-hover:text-accent transition-colors">
                    {work.title}
                  </h3>
                  <p className="text-text-dim text-sm leading-relaxed mb-4">
                    {work.description}
                  </p>
                  <div className="flex gap-2 flex-wrap">
                    {work.tools.map((tool) => (
                      <span
                        key={tool}
                        className="text-[10px] tracking-wider text-accent-dim bg-accent-glow px-2.5 py-1 rounded-full"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );

            // Link to case study page if it has one
            if (work.caseStudyPath) {
              return (
                <Link key={work.id} to={work.caseStudyPath} className="no-underline">
                  {inner}
                </Link>
              );
            }
            return <div key={work.id}>{inner}</div>;
          })}
        </div>
      </div>
    </section>
  );
}
