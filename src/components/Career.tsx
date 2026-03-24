import { motion } from "framer-motion";
import { careers } from "../data/content";

export default function Career() {
  return (
    <section id="career" className="py-32 px-5 md:px-10">
      <div className="max-w-[1100px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <p className="text-accent text-[10px] tracking-[3px] uppercase mb-3 font-medium">
            EXPERIENCE
          </p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-text">
            Career
          </h2>
        </motion.div>

        <div className="space-y-0">
          {careers.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group relative grid md:grid-cols-[180px_1fr] gap-4 md:gap-12 py-8 border-b border-border last:border-b-0"
            >
              <div>
                <p className="text-accent text-sm tracking-wider font-medium">
                  {item.period}
                </p>
              </div>
              <div>
                <h3 className="text-text text-lg mb-1 font-medium">
                  {item.title}
                </h3>
                <p className="text-accent-dim text-sm mb-3">{item.company}</p>
                <p className="text-text-dim text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
