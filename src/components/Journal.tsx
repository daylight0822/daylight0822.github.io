import { motion } from "framer-motion";
import { journal } from "../data/content";

export default function Journal() {
  return (
    <section id="journal" className="py-32 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <p className="text-cinema-accent text-xs tracking-[0.3em] mb-3">
            WRITING
          </p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-cinema-white">
            Journal
          </h2>
          <p className="text-cinema-muted text-sm mt-4">
            AI 영상 제작 과정과 생각을 기록합니다
          </p>
        </motion.div>

        <div className="space-y-0">
          {journal.map((entry, i) => (
            <motion.article
              key={entry.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group py-8 border-b border-white/5 last:border-b-0 cursor-pointer"
            >
              <div className="grid md:grid-cols-[100px_1fr] gap-4 md:gap-8">
                <p className="text-cinema-accent text-sm tracking-wider font-medium">
                  {entry.date}
                </p>
                <div>
                  <h3 className="text-cinema-white text-lg mb-3 font-medium group-hover:text-cinema-accent transition-colors duration-300">
                    {entry.title}
                  </h3>
                  <p className="text-cinema-muted text-sm leading-relaxed">
                    {entry.excerpt}
                  </p>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
