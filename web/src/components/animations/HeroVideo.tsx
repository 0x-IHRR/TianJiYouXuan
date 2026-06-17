"use client";

import { useCallback, useEffect, useRef, useState } from "react";

const sources = ["/media/brand-film-web.mp4"];

export function HeroVideo() {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const frameRef = useRef<number | null>(null);
  const [isMuted, setIsMuted] = useState(true);
  const [isInView, setIsInView] = useState(true);

  const setVideoElement = useCallback((element: HTMLVideoElement | null) => {
    videoRef.current = element;

    if (element) {
      element.defaultMuted = true;
      element.muted = true;
      element.setAttribute("muted", "");
    }
  }, []);

  useEffect(() => {
    const video = videoRef.current;

    if (video) {
      video.defaultMuted = true;
      video.muted = true;
    }
  }, []);

  const fadeVolume = useCallback(
    (target: number, duration: number, onComplete?: () => void) => {
      const video = videoRef.current;

      if (!video) {
        return;
      }

      if (frameRef.current) {
        cancelAnimationFrame(frameRef.current);
      }

      const start = performance.now();
      const startVolume = video.volume;

      const tick = (now: number) => {
        const progress = Math.min((now - start) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        video.volume = startVolume + (target - startVolume) * eased;

        if (progress < 1) {
          frameRef.current = requestAnimationFrame(tick);
        } else {
          frameRef.current = null;
          onComplete?.();
        }
      };

      frameRef.current = requestAnimationFrame(tick);
    },
    [],
  );

  useEffect(() => {
    const element = containerRef.current;

    if (!element) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting && entry.intersectionRatio > 0.2);
      },
      { threshold: [0, 0.2, 0.5, 1] },
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const video = videoRef.current;

    if (!video) {
      return;
    }

    if (!isInView && !isMuted) {
      fadeVolume(0, 500, () => {
        video.muted = true;
        setIsMuted(true);
      });
    }

    if (isInView) {
      void video.play().catch(() => undefined);
    }
  }, [fadeVolume, isInView, isMuted]);

  useEffect(() => {
    return () => {
      if (frameRef.current) {
        cancelAnimationFrame(frameRef.current);
      }
    };
  }, []);

  const toggleAudio = () => {
    const video = videoRef.current;

    if (!video) {
      return;
    }

    if (isMuted) {
      video.muted = false;
      video.volume = 0;
      setIsMuted(false);
      void video.play().catch(() => undefined);
      fadeVolume(1, 360);
      return;
    }

    fadeVolume(0, 300, () => {
      video.muted = true;
      setIsMuted(true);
    });
  };

  return (
    <div ref={containerRef} className="absolute inset-0 z-0">
      <video
        ref={setVideoElement}
        autoPlay
        muted={isMuted}
        loop
        playsInline
        preload="metadata"
        poster="/media/brand-film-cover.png"
        className="homepage-hero-video absolute inset-0 h-full w-full scale-100 transform-gpu object-cover transition-transform duration-[600ms] ease-[cubic-bezier(0.76,0,0.24,1)]"
      >
        {sources.map((src) => (
          <source key={src} src={src} type="video/mp4" />
        ))}
      </video>

      <button
        type="button"
        onClick={toggleAudio}
        className="liquid-glass-strong absolute bottom-12 right-6 z-20 flex items-center gap-3 rounded-full border border-[hsl(var(--accent))]/40 bg-[hsl(var(--accent))]/10 px-6 py-3 font-display text-[12px] uppercase tracking-[0.4em] text-[hsl(var(--accent))] shadow-[0_0_30px_rgba(212,175,55,0.15)] transition-all duration-500 hover:bg-[hsl(var(--accent))]/20 hover:text-white focus-visible:outline-none animate-pulse md:bottom-16 md:right-12"
        aria-label={isMuted ? "开启视频声音" : "关闭视频声音"}
        aria-pressed={!isMuted}
      >
        [ {isMuted ? "Unmute" : "Mute"} ]
      </button>
    </div>
  );
}
