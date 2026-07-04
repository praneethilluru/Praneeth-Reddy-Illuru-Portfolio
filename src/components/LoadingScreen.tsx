import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

interface LoadingScreenProps {
  onComplete: () => void;
}

const words = ["Design", "Create", "Inspire"];

export default function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const [count, setCount] = useState(0);
  const [wordIndex, setWordIndex] = useState(0);

  useEffect(() => {
    let startTimestamp: number | null = null;
    const duration = 2700; // 2700ms total duration

    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const elapsed = timestamp - startTimestamp;
      const progress = Math.min(elapsed / duration, 1);
      const currentCount = Math.floor(progress * 100);
      setCount(currentCount);

      if (progress < 1) {
        requestAnimationFrame(step);
      } else {
        const timer = setTimeout(() => {
          onComplete();
        }, 400);
        return () => clearTimeout(timer);
      }
    };

    const animId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(animId);
  }, [onComplete]);

  // Words cycle every 900ms
  useEffect(() => {
    const wordInterval = setInterval(() => {
      setWordIndex((prev) => (prev + 1) % words.length);
    }, 900);
    return () => clearInterval(wordInterval);
  }, []);

  return (
    <motion.div
      id="loading-screen"
      className="fixed inset-0 z-[9999] bg-bg flex flex-col justify-between p-6 md:p-12 overflow-hidden"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
    >
      {/* Top Left: Portfolio label */}
      <div className="flex justify-between items-start">
        <motion.div
          id="loading-portfolio-label"
          className="text-xs text-muted uppercase tracking-[0.3em]"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          Portfolio
        </motion.div>
        <div id="loading-collection-label" className="text-xs text-muted/50 font-mono">
          COLLECTION '26
        </div>
      </div>

      {/* Center: Rotating Words */}
      <div className="flex-1 flex items-center justify-center">
        <div className="h-24 flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={wordIndex}
              id={`loading-word-${wordIndex}`}
              className="text-4xl md:text-6xl lg:text-7xl font-display italic text-text-primary/80 text-center"
              initial={{ y: 20, opacity: 0, filter: "blur(4px)" }}
              animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
              exit={{ y: -20, opacity: 0, filter: "blur(4px)" }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
            >
              {words[wordIndex]}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Bottom area: Counter + Progress bar */}
      <div className="space-y-6">
        <div className="flex justify-end items-baseline">
          <motion.div
            id="loading-counter"
            className="text-6xl md:text-8xl lg:text-9xl font-display text-text-primary tabular-nums select-none"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            {String(count).padStart(3, "0")}
          </motion.div>
        </div>

        {/* Progress bar */}
        <div id="loading-progress-bar-container" className="relative w-full h-[3px] bg-stroke/50 rounded-full overflow-hidden">
          <div
            id="loading-progress-bar-inner"
            className="accent-gradient h-full rounded-full transition-transform duration-100 ease-out origin-left"
            style={{
              transform: `scaleX(${count / 100})`,
              boxShadow: '0 0 12px rgba(137, 170, 204, 0.45)',
            }}
          />
        </div>
      </div>
    </motion.div>
  );
}
