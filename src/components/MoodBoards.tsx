import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { moodboards } from "../data/content";

export default function MoodBoards() {
  return (
    <section id="moodboards" className="py-32 px-5 md:px-10">
      <div className="max-w-[1100px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <p className="text-accent text-xs tracking-[3px] uppercase mb-3 font-medium">
            AI MOOD VISUAL
          </p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-text">
            Mood Boards
          </h2>
          <p className="text-text/60 text-sm mt-4 max-w-[640px] leading-relaxed">
            프로젝트 기획 단계의 톤앤매너를 정의하는 시네마틱 무드보드 시리즈.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {moodboards.map((mb, i) => (
            <motion.a
              key={mb.id}
              href={mb.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              whileHover={{ y: -4 }}
              className="group block rounded-2xl overflow-hidden border border-border bg-bg-elevated hover:border-accent/40 transition-all duration-300 no-underline"
            >
              {/* Cover */}
              <div className="relative aspect-video overflow-hidden bg-bg">
                <img
                  src={mb.cover}
                  alt={mb.titleEn}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-bg/90 via-bg/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-5 md:p-6">
                  <div className="flex items-end justify-between gap-3">
                    <div>
                      <h3 className="text-text text-2xl md:text-3xl font-bold tracking-tight leading-tight">
                        {mb.titleKo}
                      </h3>
                      <p className="text-accent text-xs tracking-[0.25em] uppercase mt-1 font-medium">
                        {mb.titleEn}
                      </p>
                    </div>
                    <div className="shrink-0 w-9 h-9 rounded-full bg-bg/70 backdrop-blur-sm border border-border flex items-center justify-center group-hover:border-accent/60 group-hover:bg-accent/10 transition-colors">
                      <ExternalLink size={14} className="text-text-dim group-hover:text-accent transition-colors" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Info */}
              <div className="p-5 md:p-6">
                <p className="text-text/75 text-sm leading-relaxed mb-5 line-clamp-3">
                  {mb.subtitle}
                </p>

                <div className="flex items-center gap-2 flex-wrap mb-5">
                  <span className="text-xs tracking-wider text-accent-dim bg-accent-glow px-2.5 py-1 rounded-full">
                    톤 · {mb.toneAnchor}
                  </span>
                  <span className="text-xs tracking-wider text-text-muted bg-bg-card px-2.5 py-1 rounded-full border border-border">
                    {mb.genre}
                  </span>
                </div>

                {/* Thumb strip */}
                <div className="grid grid-cols-4 gap-1.5">
                  {mb.thumbs.map((t, ti) => (
                    <div
                      key={ti}
                      className="aspect-video rounded overflow-hidden bg-bg"
                    >
                      <img
                        src={t}
                        alt=""
                        loading="lazy"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </motion.a>
          ))}

          {/* Coming soon slot — 자리 잡아두기 */}
          {moodboards.length < 3 && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: moodboards.length * 0.1 }}
              className="rounded-2xl border border-dashed border-border bg-bg-elevated/30 aspect-[16/12] flex items-center justify-center"
            >
              <div className="text-center px-6">
                <p className="text-text-muted text-xs tracking-[0.3em] uppercase mb-2">
                  Coming Soon
                </p>
                <p className="text-text-dim text-sm">다음 무드보드 제작 중</p>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}
