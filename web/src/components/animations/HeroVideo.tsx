"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";

const sources = ["/media/brand-film-web.mp4"];
const mobileFallbackImage = "/media/homepage-clean-background-v1.png";

export function HeroVideo() {
  const containerRef = useRef<HTMLDivElement>(null);
  const desktopVideoRef = useRef<HTMLVideoElement>(null);
  const frameRef = useRef<number | null>(null);
  const [isMuted, setIsMuted] = useState(true);
  const [isInView, setIsInView] = useState(true);

  const prepareVideoElement = useCallback((element: HTMLVideoElement | null) => {
    if (element) {
      element.defaultMuted = true;
      element.muted = true;
      element.setAttribute("muted", "");
    }
  }, []);

  const setDesktopVideoElement = useCallback(
    (element: HTMLVideoElement | null) => {
      desktopVideoRef.current = element;
      prepareVideoElement(element);
    },
    [prepareVideoElement],
  );

  useEffect(() => {
    prepareVideoElement(desktopVideoRef.current);
  }, [prepareVideoElement]);

  const fadeVolume = useCallback(
    (target: number, duration: number, onComplete?: () => void) => {
      const video = desktopVideoRef.current;

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
    const video = desktopVideoRef.current;

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
    const video = desktopVideoRef.current;

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
      {/* 桌面端横版视频 */}
      <video
        ref={setDesktopVideoElement}
        autoPlay
        muted={isMuted}
        loop
        playsInline
        preload="metadata"
        poster="/media/brand-film-cover.png"
        className="homepage-hero-video absolute inset-0 hidden h-full w-full object-cover transition-transform duration-700 md:block"
      >
        <source src={sources[0]} type="video/mp4" />
      </video>

      <Image
        src={mobileFallbackImage}
        alt=""
        fill
        priority
        sizes="(max-width: 767px) 100vw, 1px"
        className="homepage-hero-video absolute inset-0 block h-full w-full object-cover opacity-70 transition-transform duration-700 md:hidden"
      />
      <div className="absolute inset-0 block bg-gradient-to-b from-black/45 via-black/60 to-[#0a0a0a]/95 md:hidden" />
      <div className="absolute inset-0 block bg-[radial-gradient(circle_at_50%_35%,transparent_0%,rgba(0,0,0,0.58)_70%)] md:hidden" />

      <button
        type="button"
        onClick={toggleAudio}
        className="liquid-glass-strong absolute bottom-12 right-6 z-20 hidden items-center gap-3 rounded-full border border-[hsl(var(--accent))]/40 bg-[hsl(var(--accent))]/10 px-6 py-3 font-display text-[12px] uppercase tracking-[0.4em] text-[hsl(var(--accent))] shadow-[0_0_30px_rgba(212,175,55,0.15)] transition-all duration-500 hover:bg-[hsl(var(--accent))]/20 hover:text-white focus-visible:outline-none animate-pulse md:bottom-16 md:right-12 md:flex"
        aria-label={isMuted ? "开启视频声音" : "关闭视频声音"}
        aria-pressed={!isMuted}
      >
        [ {isMuted ? "Unmute" : "Mute"} ]
      </button>
    </div>
  );
}
