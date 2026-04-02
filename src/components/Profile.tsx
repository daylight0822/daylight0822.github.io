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
        >
          <div className="space-y-6 max-w-2xl">
            <h3 className="text-2xl text-text font-medium">
              {profile.nameKo}
            </h3>
            <p className="text-text-dim leading-relaxed text-base">
              한국예술종합학교 영상원 영화과 졸업 후 프리랜서 편집자를 거쳐 드라마 기획PD로 일했습니다.
              <br />
              <span className="text-text font-semibold">크리에이터의 감각으로 풀어내고 프로듀서의 시선으로 사람을 연결하는 프로듀서입니다.</span>
            </p>

            <div className="divider-line my-8" />

            <div className="grid grid-cols-2 gap-6">
              {[
                { label: "MAJOR", value: "영화 (편집전공)" },
                { label: "TOOLS", value: "Premiere Pro, After Effects, Figma, Photoshop, Higgsfield, Kling, Nano Banana, Claude Code" },
                { label: "BACKGROUND", value: "드라마 기획PD 4년" },
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
