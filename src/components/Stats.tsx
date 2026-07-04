import { motion } from "motion/react";

interface StatItem {
  value: string;
  label: string;
  description: string;
}

const stats: StatItem[] = [
  {
    value: "B.Tech",
    label: "CSE (AI & ML)",
    description: "Pursuing Bachelor of Technology at CMR Group of Institutions (2024 - 2028), mastering neural networks and deep learning pipelines.",
  },
  {
    value: "10+",
    label: "Deployed Systems",
    description: "Architected high-impact solutions, ranging from mobile invoicing utilities to cloud-storage orchestrators and vision models.",
  },
  {
    value: "100%",
    label: "AI Passion & SWE Fellow",
    description: "Honing full-stack and machine learning practices, integrating robust Retrieval-Augmented Generation models.",
  },
];

export default function Stats() {
  return (
    <section id="stats" className="bg-bg py-20 md:py-28 border-t border-stroke/20">
      <div className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-16">
        <div id="stats-grid" className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              id={`stat-col-${idx}`}
              className="group p-8 md:p-10 rounded-3xl bg-surface/20 border border-stroke/50 hover:bg-surface/40 hover:border-white/20 transition-all duration-300 flex flex-col justify-between space-y-6 relative overflow-hidden"
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, delay: idx * 0.15, ease: "easeOut" }}
            >
              {/* Decorative accent top corner line */}
              <div className="absolute top-0 left-0 w-12 h-[1px] accent-gradient" />
              <div className="absolute top-0 left-0 w-[1px] h-12 accent-gradient" />

              {/* Stat Value */}
              <div>
                <motion.div
                  className="text-6xl md:text-7xl lg:text-8xl font-display text-text-primary group-hover:text-white transition-colors select-none font-normal leading-none"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300, damping: 15 }}
                >
                  {stat.value}
                </motion.div>
              </div>

              {/* Stat Label & Description */}
              <div className="space-y-2 pt-4">
                <h3 className="text-sm md:text-base font-semibold tracking-wide uppercase text-text-primary/90 font-body">
                  {stat.label}
                </h3>
                <p className="text-xs sm:text-sm text-muted leading-relaxed">
                  {stat.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
