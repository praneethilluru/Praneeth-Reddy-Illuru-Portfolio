import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import Hls from "hls.js";

interface HeroProps {
  onSeeWorkClick?: () => void;
  onContactClick?: () => void;
}

const roles = ["AIML Student", "Fullstack Dev", "SWE Fellow", "CSE Innovator"];

export default function Hero({ onSeeWorkClick, onContactClick }: HeroProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  const [roleIndex, setRoleIndex] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);

  // Load HLS Video
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const m3u8Url = "https://stream.mux.com/Aa02T7oM1wH5Mk5EEVDYhbZ1ChcdhRsS2m1NYyx4Ua1g.m3u8";

    let hls: Hls | null = null;

    if (Hls.isSupported()) {
      hls = new Hls({
        maxMaxBufferLength: 10,
        enableWorker: true,
      });
      hls.loadSource(m3u8Url);
      hls.attachMedia(video);
      hls.on(Hls.Events.MANIFEST_PARSED, () => {
        video.play().catch((err) => console.log("HLS play failed:", err));
      });
    } else if (video.canPlayType("application/vnd.apple.mpegurl")) {
      video.src = m3u8Url;
      video.addEventListener("loadedmetadata", () => {
        video.play().catch((err) => console.log("Native HLS play failed:", err));
      });
    }

    return () => {
      if (hls) {
        hls.destroy();
      }
    };
  }, []);

  // Scroll handler for navbar elevation
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Cycle role text every 2s
  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  // GSAP Entrance Animation
  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.fromTo(
        ".name-reveal",
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1.2 },
        0.1
      );

      tl.fromTo(
        ".blur-in",
        { opacity: 0, y: 20, filter: "blur(10px)" },
        { opacity: 1, y: 0, filter: "blur(0px)", duration: 1, stagger: 0.1 },
        0.3
      );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  const scrollToSection = (id: string) => {
    const lenis = (window as any).lenis;
    if (lenis) {
      lenis.scrollTo(`#${id}`);
    } else {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <section
      id="home"
      ref={heroRef}
      className="relative w-full h-screen flex flex-col justify-between overflow-hidden bg-bg"
    >
      {/* Background HLS Video container */}
      <div id="hero-video-container" className="absolute inset-0 w-full h-full overflow-hidden z-0">
        <video
          ref={videoRef}
          className="absolute top-1/2 left-1/2 min-w-full min-h-full w-auto h-auto object-cover -translate-x-1/2 -translate-y-1/2 select-none pointer-events-none"
          autoPlay
          muted
          loop
          playsInline
        />
        {/* Overlays */}
        <div id="hero-dark-overlay" className="absolute inset-0 bg-black/20 z-10" />
        <div id="hero-video-overlay" className="absolute inset-0 video-overlay z-12" />
        <div
          id="hero-bottom-fade"
          className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-[#0a0a0a] to-transparent z-15"
        />
      </div>

      {/* Vertical Rail Text */}
      <div id="vertical-rail" className="absolute left-8 top-1/2 -translate-y-1/2 hidden xl:flex flex-col gap-20 z-20 pointer-events-none">
        <div className="rotate-90 origin-left text-[9px] text-[#1f1f1f] uppercase tracking-[0.8em] font-bold whitespace-nowrap">
          BUILDING THE FUTURE
        </div>
      </div>

      {/* Navbar Section */}
      <nav
        id="navbar"
        className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-4 md:pt-6 px-4"
      >
        <div
          id="navbar-pill"
          className={`inline-flex items-center rounded-full backdrop-blur-md border border-white/10 bg-[#141414]/80 px-4 py-2 transition-all duration-300 ${
            isScrolled ? "shadow-lg shadow-black/30 bg-[#141414]/90 border-white/15 scale-95" : ""
          }`}
        >
          {/* Logo */}
          <div
            id="navbar-logo"
            onClick={() => scrollToSection("home")}
            className="group relative flex items-center justify-center w-9 h-9 rounded-full cursor-pointer hover:scale-110 transition-transform duration-300"
          >
            <div className="absolute inset-0 rounded-full accent-gradient transition-transform duration-500 group-hover:rotate-180" />
            <div className="absolute inset-[1.5px] rounded-full bg-[#0a0a0a] flex items-center justify-center">
              <span className="font-display italic text-[13px] text-[#f5f5f5] font-bold">PR</span>
            </div>
          </div>

          {/* Divider */}
          <div className="w-px h-5 bg-[#1f1f1f] mx-3 hidden sm:block" />

          {/* Nav Links */}
          <div className="flex items-center gap-1">
            <button
              onClick={() => scrollToSection("home")}
              className="text-xs sm:text-sm font-medium rounded-full px-3 py-1.5 transition-all duration-200 text-[#878787] hover:text-white hover:bg-[#1f1f1f]"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("work")}
              className="text-xs sm:text-sm font-medium rounded-full px-3 py-1.5 transition-all duration-200 text-[#878787] hover:text-white hover:bg-[#1f1f1f]"
            >
              Work
            </button>
            <button
              onClick={() => scrollToSection("journal")}
              className="text-xs sm:text-sm font-medium rounded-full px-3 py-1.5 transition-all duration-200 text-[#878787] hover:text-white hover:bg-[#1f1f1f]"
            >
              Publications
            </button>
            <button
              onClick={() => scrollToSection("arsenal")}
              className="text-xs sm:text-sm font-medium rounded-full px-3 py-1.5 transition-all duration-200 text-[#878787] hover:text-white hover:bg-[#1f1f1f]"
            >
              Arsenal
            </button>
          </div>

          {/* Divider */}
          <div className="w-px h-5 bg-[#1f1f1f] mx-3 hidden sm:block" />

          {/* Say Hi Button */}
          <button
            id="navbar-say-hi-btn"
            onClick={() => scrollToSection("contact")}
            className="relative group rounded-full text-xs sm:text-sm font-medium transition-all duration-300 ml-1"
          >
            <span className="absolute inset-[-1.5px] rounded-full accent-gradient opacity-0 group-hover:opacity-100 blur-[1px] transition-opacity duration-300" />
            <span className="relative block px-4 py-1.5 bg-[#141414] text-[#f5f5f5] rounded-full border border-white/5 backdrop-blur-md">
              Say hi{" "}
              <span className="inline-block transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                ↗
              </span>
            </span>
          </button>
        </div>
      </nav>

      {/* Hero Content Section */}
      <div
        id="hero-content-wrapper"
        className="flex-1 flex flex-col justify-center items-center text-center px-6 relative z-20 max-w-4xl mx-auto pt-24"
      >
        {/* Eyebrow */}
        <div
          id="hero-eyebrow"
          className="blur-in text-[10px] text-[#878787] uppercase tracking-[0.4em] mb-10 block font-body font-semibold"
        >
          AIML PORTFOLIO '26
        </div>

        {/* Name */}
        <h1
          id="hero-name"
          className="name-reveal text-6xl md:text-8xl lg:text-[110px] xl:text-[130px] font-display italic leading-[0.8] tracking-tight text-[#f5f5f5] mb-8 select-none font-normal"
        >
          Praneeth Reddy Illuru
        </h1>

        {/* Role line */}
        <div
          id="hero-role-line"
          className="blur-in text-base md:text-lg text-[#878787] font-light mb-8 flex items-center justify-center gap-1"
        >
          <span>A</span>
          <span
            key={roleIndex}
            className="font-display italic text-[#f5f5f5] font-normal text-xl md:text-2xl animate-role-fade-in inline-block min-w-[130px] md:min-w-[170px] border-b border-[#1f1f1f] pb-0.5"
          >
            {roles[roleIndex]}
          </span>
          <span>based in Hyderabad, India.</span>
        </div>

        {/* Description */}
        <p
          id="hero-description"
          className="blur-in text-sm text-[#878787] max-w-sm leading-relaxed mb-12 font-body"
        >
          Designing seamless digital interactions by focusing on the unique nuances which bring systems to life.
        </p>

        {/* CTA Buttons */}
        <div id="hero-cta-group" className="blur-in flex flex-row gap-5 items-center justify-center">
          {/* See Works */}
          <button
            id="hero-cta-works"
            onClick={onSeeWorkClick || (() => scrollToSection("work"))}
            className="relative group rounded-full text-xs uppercase tracking-widest font-semibold px-9 py-4 hover:scale-105 transition-all duration-300 overflow-hidden bg-[#f5f5f5] text-[#0a0a0a]"
          >
            <span className="absolute inset-0 rounded-full accent-gradient opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <span className="absolute inset-[1.5px] rounded-full bg-bg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <span className="relative z-10 group-hover:text-text-primary text-[#0a0a0a] transition-colors duration-300">
              See Works
            </span>
          </button>

          {/* Reach Out */}
          <button
            id="hero-cta-reachout"
            onClick={onContactClick || (() => scrollToSection("contact"))}
            className="relative group rounded-full text-xs uppercase tracking-widest font-semibold px-9 py-4 hover:scale-105 transition-all duration-300 bg-[#0a0a0a]/50 text-[#f5f5f5] border border-[#1f1f1f] hover:border-transparent overflow-hidden"
          >
            <span className="absolute inset-0 rounded-full accent-gradient opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <span className="absolute inset-[1.5px] rounded-full bg-bg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <span className="relative z-10 transition-colors duration-300">
              Reach out...
            </span>
          </button>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div
        id="hero-scroll-indicator"
        className="flex flex-col items-center gap-2 pb-8 md:pb-12 relative z-20 cursor-pointer"
        onClick={() => scrollToSection("work")}
      >
        <span className="text-[10px] text-muted uppercase tracking-[0.2em]">SCROLL</span>
        <div className="relative w-[1px] h-10 bg-stroke overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-4 bg-text-primary/70 rounded-full animate-scroll-down" />
        </div>
      </div>
    </section>
  );
}
