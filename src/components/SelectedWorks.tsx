import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { Project } from "../types";

const projects: Project[] = [
  {
    id: "project-1",
    title: "UnlimCloud",
    category: "Cloud Storage & RAG App",
    image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=1200&q=80",
    link: "https://github.com/praneethilluru/UnlimCloud",
    spanClass: "md:col-span-7",
    aspectClass: "aspect-video md:aspect-auto md:h-[480px]",
  },
  {
    id: "project-2",
    title: "Billing App using Flutter",
    category: "Mobile Systems & Invoicing",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
    link: "https://github.com/praneethilluru/Billing-App-using-Flutter",
    spanClass: "md:col-span-5",
    aspectClass: "aspect-[4/3] md:aspect-auto md:h-[480px]",
  },
  {
    id: "project-3",
    title: "EV Management App",
    category: "IoT & Fleet Dashboard",
    image: "https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&w=1200&q=80",
    link: "https://github.com/praneethilluru",
    spanClass: "md:col-span-5",
    aspectClass: "aspect-[4/3] md:aspect-auto md:h-[480px]",
  },
  {
    id: "project-4",
    title: "Brain Tumor Detection",
    category: "Deep Learning (Flask)",
    image: "https://images.unsplash.com/photo-1507668077129-56e32842fceb?auto=format&fit=crop&w=1200&q=80",
    link: "https://github.com/praneethilluru",
    spanClass: "md:col-span-7",
    aspectClass: "aspect-video md:aspect-auto md:h-[480px]",
  },
];

export default function SelectedWorks() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="work" className="bg-bg py-16 md:py-24 border-t border-stroke/20">
      <div className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-16">
        {/* Header Section */}
        <motion.div
          id="work-header"
          className="flex flex-col md:flex-row md:items-end justify-between mb-12 md:mb-16 gap-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <div className="space-y-4 max-w-lg">
            {/* Eyebrow */}
            <div className="flex items-center gap-3">
              <span className="w-8 h-[1px] bg-stroke block" />
              <span className="text-xs text-muted uppercase tracking-[0.3em] font-medium font-body">
                Selected Work
              </span>
            </div>
            {/* Heading */}
            <h2 className="text-3xl md:text-5xl font-light tracking-tight text-text-primary">
              Featured <span className="font-display italic font-normal text-4xl md:text-6xl text-text-primary">projects</span>
            </h2>
            {/* Subtext */}
            <p className="text-sm md:text-base text-muted leading-relaxed">
              A collection of production-ready systems, mobile apps, and machine learning solutions.
            </p>
          </div>

          {/* Desktop Only View All Button */}
          <button
            id="work-view-all"
            onClick={() => scrollToSection("arsenal")}
            className="hidden md:inline-flex items-center gap-3 group relative rounded-full text-xs uppercase tracking-wider font-semibold py-3 px-6 transition-all duration-300 hover:scale-105 overflow-hidden"
          >
            <span className="absolute inset-0 rounded-full accent-gradient opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <span className="absolute inset-[1.5px] rounded-full bg-surface" />
            <span className="relative z-10 text-text-primary flex items-center gap-2">
              View tech stack <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </span>
          </button>
        </motion.div>

        {/* Bento Grid */}
        <div id="work-grid" className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8">
          {projects.map((project, idx) => (
            <motion.a
              key={project.id}
              id={`work-card-${idx}`}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`${project.spanClass} group relative rounded-3xl overflow-hidden border border-stroke bg-surface flex flex-col justify-between cursor-pointer`}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: idx * 0.1, ease: [0.25, 0.1, 0.25, 1] }}
            >
              {/* Background Media wrapper */}
              <div className={`relative w-full overflow-hidden ${project.aspectClass}`}>
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out select-none"
                  referrerPolicy="no-referrer"
                />

                {/* Halftone Overlay */}
                <div
                  className="absolute inset-0 opacity-25 mix-blend-multiply pointer-events-none"
                  style={{
                    backgroundImage: "radial-gradient(circle, #000 1.2px, transparent 1.2px)",
                    backgroundSize: "4px 4px",
                  }}
                />

                {/* Hover Details overlay */}
                <div className="absolute inset-0 bg-bg/75 opacity-0 group-hover:opacity-100 transition-all duration-300 backdrop-blur-md flex items-center justify-center p-6">
                  <div className="p-[1.5px] rounded-full accent-gradient animate-gradient-shift shadow-2xl scale-95 group-hover:scale-100 transition-transform duration-300">
                    <div className="bg-white px-6 py-3 rounded-full text-black text-sm font-semibold flex items-center gap-2">
                      <span>View &mdash;</span>
                      <span className="font-display italic text-base font-normal">{project.title}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Static footer details inside Card */}
              <div className="p-6 flex justify-between items-center border-t border-stroke/50 relative z-20 bg-surface/50 backdrop-blur-sm">
                <div>
                  <h3 className="text-text-primary font-medium text-base md:text-lg mb-1">
                    {project.title}
                  </h3>
                  <p className="text-xs text-muted font-body tracking-wider uppercase">
                    {project.category}
                  </p>
                </div>
                <div className="w-8 h-8 rounded-full border border-stroke flex items-center justify-center text-muted group-hover:text-text-primary group-hover:border-white/30 transition-all duration-300 bg-bg/50">
                  <ArrowRight className="w-4 h-4 -rotate-45 group-hover:rotate-0 transition-transform duration-300" />
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
