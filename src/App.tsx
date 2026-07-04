import { useState, useEffect } from "react";
import { AnimatePresence } from "motion/react";
import Lenis from "lenis";
import LoadingScreen from "./components/LoadingScreen";
import Hero from "./components/Hero";
import SelectedWorks from "./components/SelectedWorks";
import Journal from "./components/Journal";
import Explorations from "./components/Explorations";
import Stats from "./components/Stats";
import Footer from "./components/Footer";

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (isLoading) return;

    // Initialize Lenis smooth scroll
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
    });

    (window as any).lenis = lenis;

    let rafId: number;
    function raf(time: number) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }

    rafId = requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
      rafId && cancelAnimationFrame(rafId);
      delete (window as any).lenis;
    };
  }, [isLoading]);

  return (
    <div className="relative min-h-screen bg-bg text-text-primary overflow-x-hidden font-body selection:bg-text-primary selection:text-bg">
      {/* Loading Overlay */}
      <AnimatePresence mode="wait">
        {isLoading && (
          <LoadingScreen onComplete={() => setIsLoading(false)} />
        )}
      </AnimatePresence>

      {/* Main Portfolio Sections */}
      {!isLoading && (
        <div className="relative w-full">
          <Hero />
          <SelectedWorks />
          <Journal />
          <Explorations />
          <Stats />
          <Footer />
        </div>
      )}
    </div>
  );
}

