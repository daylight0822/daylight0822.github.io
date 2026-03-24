import { motion } from "framer-motion";
import { journal } from "../data/content";

export default function Journal() {
  return (
    <section id="journal" className="py-32 px-5 md:px-10">
      <div className="max-w-[1100px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <p className="text-accent text-[10px] tracking-[3px] uppercase mb-3 font-medium">
            WRITING
          </p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-text">
            Journal
          </h2>
          <p className="text-text-dim text-sm mt-4">
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
              className="group py-8 border-b border-border last:border-b-0 cursor-pointer"
            >
              <div className="grid md:grid-cols-[100px_1fr] gap-4 md:gap-8">
                <p className="text-accent text-sm tracking-wider font-medium">
                  {entry.date}
                </p>
                <div>
                  <h3 className="text-text text-lg mb-3 font-medium group-hover:text-accent transition-colors duration-300">
                    {entry.title}
                  </h3>
                  <p className="text-text-dim text-sm leading-relaxed">
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
