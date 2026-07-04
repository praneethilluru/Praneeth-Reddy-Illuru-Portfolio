import { useState, ReactNode } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  Terminal, 
  Database, 
  Cpu, 
  GitBranch, 
  Info, 
  Sparkles,
  ArrowRight,
  BookOpen,
  Layout,
  Globe
} from "lucide-react";

interface TechBadge {
  name: string;
  color: string;      // Background solid color hex/tailwind
  textColor: string;  // Text color hex/tailwind
  desc: string;       // Dynamic explanation
  logoChar?: string;  // Abstract logo character or symbol
}

interface Category {
  id: string;
  title: string;
  icon: ReactNode;
  subtitle: string;
  techs: TechBadge[];
}

export default function Explorations() {
  const [selectedTech, setSelectedTech] = useState<TechBadge | null>({
    name: "MULTI-AGENT AI",
    color: "bg-[#005952]",
    textColor: "text-white",
    desc: "Developing autonomous, agentic systems using large language models, retrieval-augmented generation (RAG), and Model Context Protocol (MCP) servers.",
    logoChar: "🤖"
  });

  const categories: Category[] = [
    {
      id: "languages",
      title: "Languages",
      icon: <Terminal className="w-5 h-5 text-sky-400" />,
      subtitle: "Syntax & Core Foundations",
      techs: [
        { name: "PYTHON", color: "bg-[#306998]", textColor: "text-white", logoChar: "🐍", desc: "Primary language for AI/ML development, building Flask APIs, data processing pipelines, and deep learning models." },
        { name: "JAVA", color: "bg-[#007396]", textColor: "text-white", logoChar: "☕", desc: "Object-oriented programming, enterprise-grade application structure, and robust backend engineering." },
        { name: "C++", color: "bg-[#00599c]", textColor: "text-white", logoChar: "⚙️", desc: "Used extensively for competitive programming, solving complex algorithmic problems with optimal time complexity." },
        { name: "RUST", color: "bg-[#1f1f1f] border border-stone-800", textColor: "text-white", logoChar: "🦀", desc: "Systems programming with focus on memory safety, concurrency, and high-performance utilities." },
        { name: "JAVASCRIPT", color: "bg-[#f7df1e]", textColor: "text-black font-semibold", logoChar: "JS", desc: "Frontend dynamics, interactive UI patterns, state synchronization, and reactive layouts." },
        { name: "HTML5", color: "bg-[#e34f26]", textColor: "text-white", logoChar: "H5", desc: "Semantic structural patterns for modern, accessible, and responsive layouts." },
        { name: "CSS3", color: "bg-[#1572b6]", textColor: "text-white", logoChar: "C3", desc: "Tailwind architecture, fluid animations, screen layouts, and bespoke dark-theme typography." }
      ]
    },
    {
      id: "frameworks",
      title: "Frameworks & Backend",
      icon: <Cpu className="w-5 h-5 text-emerald-400" />,
      subtitle: "Architectures & Pipelines",
      techs: [
        { name: "FLASK", color: "bg-[#111111]", textColor: "text-white", logoChar: "⚗️", desc: "Microservices backend structure to deploy machine learning classifiers and lightweight Python tools." },
        { name: "SPRING BOOT", color: "bg-[#6db33f]", textColor: "text-white", logoChar: "🍃", desc: "Java enterprise applications with seamless database transactions, automated dependency injection, and REST services." },
        { name: "MULTI-AGENT AI", color: "bg-[#005952]", textColor: "text-white", logoChar: "🤖", desc: "Developing autonomous, agentic systems using large language models, retrieval-augmented generation (RAG), and Model Context Protocol (MCP) servers." },
        { name: "REST APIS", color: "bg-[#ff6c37]", textColor: "text-white", logoChar: "🔌", desc: "Designing structured and highly-optimized RESTful endpoints to coordinate services across web applications." }
      ]
    },
    {
      id: "databases",
      title: "Databases & Data",
      icon: <Database className="w-5 h-5 text-indigo-400" />,
      subtitle: "Analytical Engines & Storage",
      techs: [
        { name: "SQLITE", color: "bg-[#003b57]", textColor: "text-white", logoChar: "🗄️", desc: "Lightweight and efficient relational storage for local apps, testing, and Flutter database persistence." },
        { name: "SQL", color: "bg-[#4479a1]", textColor: "text-white", logoChar: "📊", desc: "Writing optimized queries, managing indices, relational schema design, and analyzing tabular datasets." },
        { name: "JUPYTER", color: "bg-[#f37626]", textColor: "text-white", logoChar: "🪐", desc: "Interactive modeling environment to explore training datasets, clean telemetry inputs, and visualize AI/ML outputs." },
        { name: "DSA", color: "bg-[#4caf50]", textColor: "text-white", logoChar: "🧠", desc: "Solid grasp of advanced data structures and algorithms—practicing regularly on competitive coding platforms." }
      ]
    },
    {
      id: "tools",
      title: "Developer Tools",
      icon: <GitBranch className="w-5 h-5 text-rose-400" />,
      subtitle: "Workflows & Environments",
      techs: [
        { name: "GIT", color: "bg-[#f05032]", textColor: "text-white", logoChar: "🌿", desc: "Strict version control, collaborative branch merging, and atomic commits tracking." },
        { name: "GITHUB", color: "bg-[#181717] border border-stone-800", textColor: "text-white", logoChar: "🐙", desc: "Code hosting, documentation wikis, actions orchestration, and hosting robust open-source repositories." },
        { name: "LINUX", color: "bg-[#fcc624]", textColor: "text-black font-semibold", logoChar: "🐧", desc: "Terminal automation, shell scripting, environment configuration, and handling remote SSH server hosts." },
        { name: "MAVEN", color: "bg-[#c71a36]", textColor: "text-white", logoChar: "📦", desc: "Automating dependency resolution and production packaging inside the Java and Spring Boot lifecycle." },
        { name: "MARKDOWN", color: "bg-[#000000] border border-stone-800", textColor: "text-white", logoChar: "📝", desc: "Writing highly detailed technical documentation, specifications, API routes, and clean project guides." }
      ]
    }
  ];

  return (
    <section id="arsenal" className="bg-[#0a0a0a] py-20 md:py-28 border-t border-stroke/20 relative overflow-hidden">
      {/* Background visual accents */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#111111_1px,transparent_1px),linear-gradient(to_bottom,#111111_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-30 pointer-events-none" />
      <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-emerald-500/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-16 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="space-y-4 max-w-xl">
            <div className="flex items-center gap-3">
              <span className="w-8 h-[1px] bg-emerald-500/40 block" />
              <span className="text-xs text-emerald-400 font-mono uppercase tracking-[0.3em] font-semibold">
                Tech Stack
              </span>
            </div>
            <h2 className="text-3xl md:text-5xl font-light tracking-tight text-[#f5f5f5]">
              Tech <span className="font-display italic font-normal text-4xl md:text-6xl text-[#f5f5f5]">Arsenal</span>
            </h2>
            <p className="text-sm md:text-base text-[#878787] leading-relaxed">
              The systems, programming languages, neural architectures, and environments I use to design and deploy AI-driven software.
            </p>
          </div>

          <div className="hidden lg:flex items-center gap-3 text-[10px] text-stone-500 font-mono tracking-widest uppercase">
            <Sparkles className="w-4 h-4 text-emerald-400 animate-pulse" /> Click any tool for insight
          </div>
        </div>

        {/* Arsenal Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Grid: Categories (8 columns) */}
          <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-6">
            {categories.map((category, catIdx) => (
              <motion.div
                key={category.id}
                className="bg-[#111111]/90 border border-stone-800/80 rounded-2xl p-6 hover:border-stone-700/80 transition-all duration-300 shadow-xl relative group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: catIdx * 0.1 }}
              >
                {/* Accent Corner Light */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-white/[0.02] to-transparent rounded-tr-2xl pointer-events-none" />

                <div className="flex items-center gap-3 mb-5">
                  <div className="p-2.5 rounded-xl bg-stone-900/80 border border-stone-800 text-stone-300">
                    {category.icon}
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold tracking-wider uppercase text-[#f5f5f5]">
                      {category.title}
                    </h3>
                    <p className="text-[10px] text-stone-500 font-mono">
                      {category.subtitle}
                    </p>
                  </div>
                </div>

                {/* Badge Container */}
                <div className="flex flex-wrap gap-2.5">
                  {category.techs.map((tech) => {
                    const isSelected = selectedTech?.name === tech.name;
                    return (
                      <button
                        key={tech.name}
                        onClick={() => setSelectedTech(tech)}
                        className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-md text-[10px] md:text-xs font-mono uppercase tracking-wider transition-all duration-300 transform active:scale-95 cursor-pointer relative overflow-hidden ${tech.color} ${tech.textColor} ${
                          isSelected 
                            ? "ring-2 ring-emerald-500 ring-offset-2 ring-offset-black scale-105 shadow-lg" 
                            : "opacity-85 hover:opacity-100 hover:scale-102 hover:shadow-md"
                        }`}
                      >
                        {tech.logoChar && (
                          <span className="text-xs filter saturate-100 opacity-90">
                            {tech.logoChar}
                          </span>
                        )}
                        <span>{tech.name}</span>
                        {isSelected && (
                          <span className="absolute bottom-0 right-0 w-1 h-1 bg-emerald-400 rounded-full m-0.5 animate-ping" />
                        )}
                      </button>
                    );
                  })}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Right Grid: Interactive Console (4 columns) */}
          <div className="lg:col-span-4 lg:sticky lg:top-24">
            <motion.div
              className="bg-[#0f0f0f] border border-emerald-950/40 rounded-2xl overflow-hidden shadow-2xl relative"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              {/* Terminal Window Header */}
              <div className="bg-[#141414] border-b border-stone-900 px-4 py-3 flex items-center justify-between">
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                </div>
                <div className="text-[10px] text-stone-500 font-mono tracking-widest uppercase">
                  tech-insights.sh
                </div>
                <Info className="w-3.5 h-3.5 text-stone-500" />
              </div>

              {/* Terminal Body */}
              <div className="p-6 font-mono text-xs space-y-4 min-h-[220px] flex flex-col justify-between">
                <AnimatePresence mode="wait">
                  {selectedTech ? (
                    <motion.div
                      key={selectedTech.name}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.3 }}
                      className="space-y-4"
                    >
                      {/* Active Indicator */}
                      <div className="flex items-center gap-2">
                        <span className="text-emerald-500 font-bold">$</span>
                        <span className="text-[#878787]">inspect --tool</span>
                        <span className="px-2 py-0.5 rounded bg-emerald-950/40 border border-emerald-800/40 text-emerald-400 font-bold uppercase text-[10px]">
                          {selectedTech.name}
                        </span>
                      </div>

                      {/* Decoded Details */}
                      <div className="text-stone-300 leading-relaxed text-sm p-4 rounded-lg bg-[#141414]/60 border border-stone-900">
                        {selectedTech.desc}
                      </div>

                      {/* Log Timestamp */}
                      <div className="text-[10px] text-stone-600 flex items-center gap-1">
                        <span className="w-1 h-1 bg-emerald-500 rounded-full animate-pulse" />
                        <span>Insights compiled for Praneeth Reddy Illuru</span>
                      </div>
                    </motion.div>
                  ) : (
                    <div className="text-stone-500 flex flex-col items-center justify-center h-48 text-center space-y-2">
                      <Terminal className="w-8 h-8 text-stone-700 animate-pulse" />
                      <span>Select a language or developer tool on the left to output technical logs and experience insights.</span>
                    </div>
                  )}
                </AnimatePresence>

                {/* Micro CV Link */}
                <div className="border-t border-stone-900/60 pt-4 mt-2 flex items-center justify-between text-[10px] text-stone-500">
                  <div className="flex items-center gap-1.5">
                    <BookOpen className="w-3 h-3 text-emerald-500/60" />
                    <span>B.Tech CSE AIML (2024 - 2028)</span>
                  </div>
                  <span className="text-emerald-500/70">CMRGI</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
