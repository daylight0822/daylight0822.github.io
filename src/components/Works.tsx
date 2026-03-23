import { motion } from "framer-motion";
import { works } from "../data/content";

export default function Works() {
  return (
    <section id="works" className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <p className="text-cinema-accent text-xs tracking-[0.3em] mb-3">
            PORTFOLIO
          </p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-cinema-white">
            Works
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {works.map((work, i) => (
            <motion.div
              key={work.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group cursor-pointer glass-card rounded-xl overflow-hidden hover:border-cinema-accent/20 transition-all duration-500"
            >
              {/* Thumbnail */}
              <div className="aspect-video bg-cinema-gray overflow-hidden relative">
                {work.thumbnail ? (
                  <img
                    src={work.thumbnail}
                    alt={work.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-10 h-10 mx-auto mb-2 rounded-full border border-cinema-accent/20 flex items-center justify-center">
                        <span className="text-cinema-accent text-sm">▶</span>
                      </div>
                      <span className="text-cinema-muted text-xs tracking-wider">
                        THUMBNAIL
                      </span>
                    </div>
                  </div>
                )}
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-cinema-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                  <span className="text-cinema-accent text-xs tracking-[0.3em] font-medium">
                    VIEW
                  </span>
                </div>
              </div>

              {/* Info */}
              <div className="p-5">
                <p className="text-cinema-accent text-[10px] tracking-[0.2em] mb-2 font-medium">
                  {work.category.toUpperCase()}
                </p>
                <h3 className="text-cinema-white text-base font-medium mb-2 group-hover:text-cinema-accent transition-colors">
                  {work.title}
                </h3>
                <p className="text-cinema-muted text-sm leading-relaxed mb-4">
                  {work.description}
                </p>
                <div className="flex gap-2 flex-wrap">
                  {work.tools.map((tool) => (
                    <span
                      key={tool}
                      className="text-[10px] tracking-wider text-cinema-accent-dim bg-cinema-accent-glow px-2.5 py-1 rounded-full"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
