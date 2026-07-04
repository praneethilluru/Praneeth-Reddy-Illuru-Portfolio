import { useState } from "react";
import { AnimatePresence } from "motion/react";
import LoadingScreen from "./components/LoadingScreen";
import Hero from "./components/Hero";
import SelectedWorks from "./components/SelectedWorks";
import Journal from "./components/Journal";
import Explorations from "./components/Explorations";
import Stats from "./components/Stats";
import Footer from "./components/Footer";

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

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

