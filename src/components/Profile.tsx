import { motion } from "framer-motion";
import { profile } from "../data/content";

export default function Profile() {
  return (
    <section id="profile" className="py-32 px-5 md:px-10">
      <div className="max-w-[1100px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <p className="text-accent text-[10px] tracking-[3px] uppercase mb-3 font-medium">
            ABOUT
          </p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-text">
            Profile
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid md:grid-cols-[1fr_2fr] gap-12 items-start"
        >
          {/* Profile image placeholder */}
          <div className="aspect-[3/4] rounded-2xl bg-bg-elevated border border-border flex items-center justify-center hover:border-accent-dim transition-colors duration-300">
            <span className="text-text-muted text-sm tracking-wider">
              PHOTO
            </span>
          </div>

          <div className="space-y-6">
            <h3 className="text-2xl text-text font-medium">
              {profile.nameKo}
            </h3>
            <p className="text-text-dim leading-relaxed text-base">
              {profile.bio}
            </p>

            <div className="divider-line my-8" />

            <div className="grid grid-cols-2 gap-6">
              {[
                { label: "FOCUS", value: "AI 시네마틱 영상 제작" },
                { label: "TOOLS", value: "Kling AI, Runway, Midjourney" },
                { label: "BACKGROUND", value: "드라마 기획/제작, 영상 편집" },
                { label: "CONTACT", value: profile.email },
              ].map((item) => (
                <div key={item.label}>
                  <p className="text-accent text-[10px] tracking-[2px] mb-2 font-medium">
                    {item.label}
                  </p>
                  <p className="text-text-dim text-sm">{item.value}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
