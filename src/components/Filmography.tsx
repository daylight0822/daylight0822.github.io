import { motion } from "framer-motion";
import { filmography } from "../data/content";

export default function Filmography() {
  return (
    <section id="filmography" className="py-32 px-5 md:px-10">
      <div className="max-w-[1100px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <p className="text-accent text-[10px] tracking-[3px] uppercase mb-3 font-medium">
            SHORT FILMS
          </p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-text">
            Filmography
          </h2>
        </motion.div>

        <div className="space-y-0">
          {filmography.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="group grid grid-cols-[60px_1fr] md:grid-cols-[80px_1fr_auto] gap-4 md:gap-8 py-5 border-b border-border last:border-b-0 items-baseline"
            >
              <p className="text-accent text-sm tracking-wider font-medium">
                {item.year}
              </p>
              <div>
                <h3 className="text-text text-base font-medium inline">
                  {item.title}
                </h3>
                <span className="text-text-muted text-sm ml-3">
                  {item.director}
                </span>
                {item.note && (
                  <p className="text-accent-dim text-xs mt-1.5 tracking-wide">
                    {item.note}
                  </p>
                )}
              </div>
              <p className="text-text-dim text-sm hidden md:block">
                {item.role}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
