import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import Hls from "hls.js";
import { Github, Linkedin, Twitter, Instagram } from "lucide-react";

export default function Footer() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const marqueeRef = useRef<HTMLDivElement>(null);

  // Load HLS Video (flipped vertically)
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
        video.play().catch((err) => console.log("HLS footer play failed:", err));
      });
    } else if (video.canPlayType("application/vnd.apple.mpegurl")) {
      video.src = m3u8Url;
      video.addEventListener("loadedmetadata", () => {
        video.play().catch((err) => console.log("Native HLS footer play failed:", err));
      });
    }

    return () => {
      if (hls) {
        hls.destroy();
      }
    };
  }, []);

  // GSAP Marquee scroll
  useEffect(() => {
    const el = marqueeRef.current;
    if (!el) return;

    const anim = gsap.to(el, {
      xPercent: -50,
      ease: "none",
      duration: 35,
      repeat: -1,
    });

    return () => {
      anim.kill();
    };
  }, []);

  return (
    <footer
      id="contact"
      className="relative bg-bg pt-20 md:pt-28 pb-8 md:pb-12 overflow-hidden border-t border-stroke/20"
    >
      {/* Background HLS Video container (Flipped Vertically) */}
      <div id="footer-video-container" className="absolute inset-0 w-full h-full overflow-hidden z-0">
        <video
          ref={videoRef}
          className="absolute top-1/2 left-1/2 min-w-full min-h-full w-auto h-auto object-cover -translate-x-1/2 -translate-y-1/2 select-none pointer-events-none scale-y-[-1]"
          autoPlay
          muted
          loop
          playsInline
        />
        {/* Heavier Overlays */}
        <div id="footer-dark-overlay" className="absolute inset-0 bg-black/60 z-10" />
        <div
          id="footer-top-fade"
          className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-bg to-transparent z-15"
        />
      </div>

      {/* Main CTA & Email Contact */}
      <div className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-16 relative z-20 text-center space-y-8 mb-20 md:mb-24">
        <div className="space-y-4">
          <span className="text-xs text-muted uppercase tracking-[0.3em] font-medium font-body block">
            Let's work together
          </span>
          <h2 className="text-4xl md:text-6xl font-light tracking-tight text-text-primary leading-tight max-w-2xl mx-auto">
            Let's create something <br />
            <span className="font-display italic text-5xl md:text-7xl text-text-primary">
              remarkable.
            </span>
          </h2>
        </div>

        {/* Email Pill Button */}
        <div className="pt-4">
          <a
            href="mailto:praneethilluru@gmail.com"
            id="footer-email-btn"
            className="relative group rounded-full text-base sm:text-lg font-medium px-8 py-4 bg-surface text-text-primary border border-stroke/50 hover:border-transparent inline-flex items-center gap-3 hover:scale-105 transition-all duration-300"
          >
            {/* Border ring on hover */}
            <span className="absolute inset-0 rounded-full accent-gradient opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <span className="absolute inset-[1.5px] rounded-full bg-bg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <span className="relative z-10 flex items-center gap-2">
              praneethilluru@gmail.com{" "}
              <span className="inline-block transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                ↗
              </span>
            </span>
          </a>
        </div>
      </div>

      {/* GSAP Marquee (BUILDING THE FUTURE • repeated) */}
      <div
        id="footer-marquee-container"
        className="w-full overflow-hidden border-t border-b border-stroke/50 py-5 md:py-7 bg-surface/20 backdrop-blur-sm relative z-20 mb-16 md:mb-20"
      >
        <div className="flex whitespace-nowrap">
          <div
            ref={marqueeRef}
            className="flex gap-4 text-5xl md:text-7xl lg:text-8xl font-display italic uppercase tracking-tighter text-text-primary/10 select-none"
            style={{ width: "fit-content" }}
          >
            {Array(10)
              .fill(null)
              .map((_, i) => (
                <span key={i} className="flex-shrink-0">
                  BUILDING THE FUTURE &bull;&nbsp;
                </span>
              ))}
          </div>
        </div>
      </div>

      {/* Footer Bottom Bar */}
      <div className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-16 relative z-20 flex flex-col md:flex-row items-center justify-between gap-6 pt-6 border-t border-stroke/30">
        {/* Availability Dot status */}
        <div id="footer-availability">
          <div className="flex items-center gap-2.5 bg-stroke/30 border border-stroke/50 px-3.5 py-1.5 rounded-full backdrop-blur-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="text-[10px] font-mono uppercase tracking-widest text-emerald-400 font-semibold select-none">
              Available for projects
            </span>
          </div>
        </div>

        {/* Social Links */}
        <div id="footer-socials" className="flex items-center gap-4">
          <a
            href="https://github.com/praneethilluru"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full border border-stroke bg-surface/30 flex items-center justify-center text-muted hover:text-text-primary hover:border-white/30 transition-all duration-300"
            title="GitHub"
          >
            <Github className="w-4 h-4" />
          </a>
          <a
            href="https://www.linkedin.com/in/praneethreddyilluru/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full border border-stroke bg-surface/30 flex items-center justify-center text-muted hover:text-text-primary hover:border-white/30 transition-all duration-300"
            title="LinkedIn"
          >
            <Linkedin className="w-4 h-4" />
          </a>
          <a
            href="https://x.com/PraneethIlluru"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full border border-stroke bg-surface/30 flex items-center justify-center text-muted hover:text-text-primary hover:border-white/30 transition-all duration-300"
            title="X (Twitter)"
          >
            <Twitter className="w-4 h-4" />
          </a>
          <a
            href="https://instagram.com/praneethilluru"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full border border-stroke bg-surface/30 flex items-center justify-center text-muted hover:text-text-primary hover:border-white/30 transition-all duration-300"
            title="Instagram"
          >
            <Instagram className="w-4 h-4" />
          </a>
        </div>

        {/* Copyright */}
        <div className="text-xs text-muted/60 font-mono select-none">
          &copy; {new Date().getFullYear()} Praneeth Reddy Illuru. Built with precision.
        </div>
      </div>
    </footer>
  );
}
