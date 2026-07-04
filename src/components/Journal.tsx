import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { JournalEntry } from "../types";

const entries: JournalEntry[] = [
  {
    id: "journal-1",
    title: "Artificial Intelligence (Elsevier) — Flagship Research & Automated Reasoning",
    category: "Elsevier",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=200&q=80",
    readTime: "FLAGSHIP AI",
    date: "Est. 1970",
    link: "https://www.sciencedirect.com/journal/artificial-intelligence",
  },
  {
    id: "journal-2",
    title: "Journal of Artificial Intelligence Research (JAIR) — Peer-Reviewed Open Access",
    category: "JAIR",
    image: "https://images.unsplash.com/photo-1507668077129-56e32842fceb?auto=format&fit=crop&w=200&q=80",
    readTime: "OPEN ACCESS",
    date: "Est. 1993",
    link: "https://www.jair.org/",
  },
  {
    id: "journal-3",
    title: "Journal of Machine Learning Research (JMLR) — Theoretical ML Foundations",
    category: "JMLR",
    image: "https://images.unsplash.com/photo-1527474305487-b87b222841cc?auto=format&fit=crop&w=200&q=80",
    readTime: "THEORY",
    date: "Est. 2000",
    link: "https://www.jmlr.org/",
  },
  {
    id: "journal-4",
    title: "Machine Learning (Springer) — Predictive Analytics & Learning Systems",
    category: "Springer",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=200&q=80",
    readTime: "LEARNING SYS",
    date: "Est. 1986",
    link: "https://www.springer.com/journal/10994",
  },
];

export default function Journal() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="journal" className="bg-bg py-16 md:py-24 border-t border-stroke/20">
      <div className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-16">
        {/* Header Section */}
        <motion.div
          id="journal-header"
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
                Journal
              </span>
            </div>
            {/* Heading */}
            <h2 className="text-3xl md:text-5xl font-light tracking-tight text-text-primary">
              Scientific <span className="font-display italic font-normal text-4xl md:text-6xl text-text-primary">publications</span>
            </h2>
            {/* Subtext */}
            <p className="text-sm md:text-base text-muted leading-relaxed">
              Curated list of authoritative research journals in Artificial Intelligence and Machine Learning that align with my academic domain.
            </p>
          </div>
        </motion.div>

        {/* Horizontal Journal Pills List */}
        <div id="journal-list" className="space-y-4 max-w-4xl mx-auto">
          {entries.map((entry, idx) => (
            <motion.a
              key={entry.id}
              id={`journal-row-${idx}`}
              href={entry.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col sm:flex-row items-center justify-between gap-4 p-4 rounded-[32px] sm:rounded-full bg-surface/30 hover:bg-surface border border-stroke cursor-pointer transition-all duration-300 group shadow-sm hover:shadow-md"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: idx * 0.1, ease: "easeOut" }}
            >
              {/* Left Side: Thumbnail + Title */}
              <div className="flex items-center gap-4 w-full sm:w-auto">
                {/* Small Image */}
                <div className="w-12 h-12 rounded-full overflow-hidden shrink-0 border border-stroke bg-neutral-900">
                  <img
                    src={entry.image}
                    alt={entry.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 select-none"
                    referrerPolicy="no-referrer"
                  />
                </div>

                {/* Title */}
                <div className="flex-1">
                  <h3 className="text-sm sm:text-base font-medium text-text-primary group-hover:text-white transition-colors leading-snug">
                    {entry.title}
                  </h3>
                  <span className="inline-block sm:hidden text-[10px] text-muted font-mono tracking-widest mt-1">
                    {entry.category.toUpperCase()} &bull; {entry.date}
                  </span>
                </div>
              </div>

              {/* Right Side: Read time, category and arrow icon */}
              <div className="flex items-center justify-between sm:justify-end gap-6 w-full sm:w-auto border-t border-stroke/50 pt-3 sm:pt-0 sm:border-0">
                {/* Date / Read time */}
                <div className="hidden sm:flex flex-col text-right items-end justify-center">
                  <span className="text-[10px] text-muted font-mono tracking-widest uppercase">
                    {entry.readTime}
                  </span>
                  <span className="text-xs text-muted font-mono mt-0.5">
                    {entry.date}
                  </span>
                </div>

                {/* Category tag */}
                <span className="text-[10px] font-mono font-medium px-3 py-1.5 rounded-full bg-stroke text-muted uppercase tracking-wider hidden md:block">
                  {entry.category}
                </span>

                {/* Right Arrow Icon */}
                <div className="w-9 h-9 rounded-full border border-stroke flex items-center justify-center text-muted group-hover:text-text-primary group-hover:border-white/30 transition-all duration-300 bg-bg/40 sm:mr-1">
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
