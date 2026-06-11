import Link from "next/link";

import { siteConfig } from "@/lib/site-config";

const sideNotes = [
  "把品质选择压缩成更少试错。",
  "把线下关系沉淀成长期信任。",
  "把会员身份留给真正愿意靠近的人。",
];

export function ContinuousHomepage() {
  return (
    <main className="continuous-home-shell">
      <style dangerouslySetInnerHTML={{ __html: continuousHomeCriticalCss }} />
      <div className="continuous-home-canvas" aria-label="天机优选首页">
        <div className="home-light-field" aria-hidden="true" />
        <div className="home-depth-field" aria-hidden="true" />

        <header className="home-nav" aria-label="主导航">
          <Link href="/" className="home-brand">
            <span>{siteConfig.name}</span>
            <small>{siteConfig.englishName}</small>
          </Link>

          <nav className="home-nav-links">
            {siteConfig.navigation.map((item) => (
              <Link key={item.href} href={item.href}>
                {item.label}
              </Link>
            ))}
          </nav>

          <Link href="/apply" className="home-apply-link">
            申请会员
          </Link>
        </header>

        <section className="home-hero-copy" aria-labelledby="home-title">
          <p>{siteConfig.hero.eyebrow}</p>
          <h1 id="home-title">{siteConfig.hero.title}</h1>
          <span>{siteConfig.hero.description}</span>
        </section>

        <div className="home-scroll-cue" aria-hidden="true">
          <span />
        </div>

        <Link href="/film" className="home-film-window" aria-label="进入品牌影片页">
          <video
            className="home-film-video"
            src={siteConfig.film.videoSrc}
            poster={siteConfig.film.posterSrc}
            autoPlay
            loop
            muted
            playsInline
            preload="metadata"
          />
          <div className="home-film-shadow" aria-hidden="true" />
          <div className="home-film-copy">
            <p>{siteConfig.film.title}</p>
            <span>{siteConfig.film.description}</span>
          </div>
        </Link>

        <aside className="home-side-notes" aria-label="价值提示">
          {sideNotes.map((note, index) => (
            <p key={note}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              {note}
            </p>
          ))}
        </aside>

        <nav className="home-door-entries" aria-label="首页入口">
          {siteConfig.entrances.map((item) => (
            <Link key={item.href} href={item.href} className={`home-door-entry entry-${item.index}`}>
              <span>{item.index}</span>
              <strong>{item.title}</strong>
              <small>{item.subtitle}</small>
            </Link>
          ))}
        </nav>

        <section className="home-closing-note" aria-label="结束语">
          <p>{siteConfig.closing.quote}</p>
          <span>{siteConfig.closing.note}</span>
        </section>

        <footer className="home-footer" aria-label="页脚">
          <div>
            <p>{siteConfig.name}</p>
            <span>{siteConfig.description}</span>
          </div>
          <nav>
            <Link href="/film">品牌影片</Link>
            <Link href="/membership">会员体系</Link>
            <Link href="/philosophy">理念与价值</Link>
            <Link href="/apply">申请会员</Link>
          </nav>
        </footer>
      </div>
    </main>
  );
}

const continuousHomeCriticalCss = `
.continuous-home-shell {
  min-height: 100vh;
  background:
    linear-gradient(90deg, rgba(247, 239, 225, 0.94), rgba(251, 246, 236, 1) 18%, rgba(251, 246, 236, 1) 82%, rgba(237, 226, 209, 0.94)),
    var(--background);
  color: #2e241b;
}

.continuous-home-canvas {
  position: relative;
  isolation: isolate;
  width: min(100vw, 960px);
  min-width: 320px;
  aspect-ratio: 864 / 1821;
  margin-inline: auto;
  overflow: hidden;
  background-image: url("/media/homepage-clean-background-v1.png");
  background-size: 100% 100%;
  background-position: center top;
  box-shadow:
    0 0 0 1px rgba(102, 76, 44, 0.07),
    0 24px 100px rgba(86, 61, 32, 0.11);
}

.home-light-field,
.home-depth-field {
  pointer-events: none;
  position: absolute;
  inset: 0;
  z-index: 1;
}

.home-light-field {
  background:
    radial-gradient(circle at 19% 50%, rgba(255, 244, 220, 0.18), transparent 18%),
    radial-gradient(circle at 66% 39%, rgba(250, 218, 160, 0.12), transparent 16%),
    linear-gradient(112deg, transparent 0 42%, rgba(255, 242, 211, 0.12) 49%, transparent 58%);
  mix-blend-mode: screen;
  animation: home-light-drift 28s ease-in-out infinite alternate;
}

.home-depth-field {
  background:
    linear-gradient(180deg, rgba(28, 18, 10, 0.04), transparent 18%, transparent 78%, rgba(37, 24, 12, 0.08)),
    radial-gradient(circle at 84% 88%, rgba(30, 18, 8, 0.18), transparent 28%);
}

.home-nav,
.home-hero-copy,
.home-scroll-cue,
.home-film-window,
.home-side-notes,
.home-door-entries,
.home-closing-note,
.home-footer {
  position: absolute;
  z-index: 3;
}

.home-nav {
  left: 4.4%;
  top: 1.5%;
  width: 91%;
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  align-items: center;
  gap: 1rem;
  border: 1px solid rgba(255, 255, 255, 0.42);
  border-radius: 999px;
  background: rgba(255, 249, 237, 0.58);
  padding: 0.55rem 1.05rem;
  backdrop-filter: blur(16px);
  box-shadow: 0 18px 60px rgba(75, 54, 28, 0.07);
}

.home-brand,
.home-nav-links a,
.home-apply-link,
.home-footer a,
.home-film-window,
.home-door-entry {
  color: inherit;
  text-decoration: none;
}

.home-brand span {
  display: block;
  font-family: var(--font-serif-sc);
  font-size: clamp(0.82rem, 1.15vw, 1rem);
  font-weight: 600;
  line-height: 1.05;
}

.home-brand small {
  display: block;
  margin-top: 0.18rem;
  color: rgba(60, 45, 29, 0.58);
  font-size: clamp(0.45rem, 0.66vw, 0.58rem);
  line-height: 1;
}

.home-nav-links {
  display: flex;
  justify-content: center;
  gap: clamp(0.8rem, 2vw, 2.1rem);
  white-space: nowrap;
}

.home-nav-links a,
.home-apply-link,
.home-footer a {
  color: rgba(56, 42, 27, 0.62);
  font-size: clamp(0.58rem, 0.82vw, 0.78rem);
  transition: color 220ms ease;
}

.home-nav-links a:hover,
.home-apply-link:hover,
.home-footer a:hover {
  color: #2e241b;
}

.home-apply-link {
  justify-self: end;
}

.home-hero-copy {
  left: 10.75%;
  top: 16.55%;
  width: 39.35%;
  animation: home-copy-in 1100ms cubic-bezier(0.2, 0.8, 0.2, 1) both;
}

.home-hero-copy p {
  margin: 0 0 1rem;
  color: rgba(70, 52, 32, 0.58);
  font-size: clamp(0.55rem, 0.82vw, 0.75rem);
  letter-spacing: 0.14em;
  text-transform: uppercase;
}

.home-hero-copy h1 {
  margin: 0;
  font-family: var(--font-serif-sc);
  font-size: clamp(1.72rem, 4.15vw, 3.35rem);
  font-weight: 600;
  line-height: 1.18;
  text-wrap: pretty;
}

.home-hero-copy span {
  display: block;
  margin-top: 1rem;
  color: rgba(52, 39, 25, 0.62);
  font-family: var(--font-serif-sc);
  font-size: clamp(0.68rem, 1.05vw, 0.92rem);
  line-height: 1.9;
  text-wrap: pretty;
}

.home-scroll-cue {
  left: 24.8%;
  top: 31.75%;
  width: 3.25%;
  aspect-ratio: 1;
  border: 1px solid rgba(86, 63, 38, 0.28);
  border-radius: 999px;
  background: rgba(255, 247, 231, 0.35);
}

.home-scroll-cue span {
  position: absolute;
  left: 50%;
  top: 42%;
  width: 1px;
  height: 44%;
  transform: translateX(-50%);
  background: rgba(75, 54, 31, 0.42);
  animation: home-cue 1600ms ease-in-out infinite;
}

.home-film-window {
  left: 12.8%;
  top: 36.1%;
  width: 57.3%;
  height: 18.9%;
  display: block;
  overflow: hidden;
  color: #fff8eb;
  border-radius: 3.5rem;
  clip-path: polygon(7% 17%, 15% 5%, 86% 4%, 97% 12%, 98% 74%, 91% 90%, 70% 96%, 27% 96%, 7% 84%, 4% 31%);
  transform: translateZ(0);
}

.home-film-video {
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: saturate(0.82) contrast(1.12) brightness(0.72);
  transform: scale(1.04);
  animation: home-film-breathe 9s ease-in-out infinite alternate;
}

.home-film-shadow {
  position: absolute;
  inset: 0;
  background:
    radial-gradient(circle at 28% 62%, rgba(218, 162, 84, 0.24), transparent 26%),
    linear-gradient(180deg, rgba(0, 0, 0, 0.54) 0%, transparent 36%, rgba(0, 0, 0, 0.34) 100%),
    radial-gradient(ellipse at center, transparent 38%, rgba(0, 0, 0, 0.42) 100%);
  box-shadow: inset 0 18px 40px rgba(0, 0, 0, 0.5);
}

.home-film-copy {
  position: absolute;
  left: 32%;
  top: 39%;
  width: 38%;
  min-height: 4rem;
  border: 1px solid rgba(255, 247, 225, 0.36);
  border-radius: 0.55rem;
  background: rgba(20, 13, 7, 0.2);
  padding: 0.75rem 0.9rem;
  text-align: center;
  backdrop-filter: blur(5px);
}

.home-film-copy p {
  margin: 0;
  font-size: clamp(0.58rem, 0.92vw, 0.75rem);
  font-weight: 500;
}

.home-film-copy span {
  display: block;
  margin-top: 0.35rem;
  color: rgba(255, 248, 235, 0.68);
  font-size: clamp(0.5rem, 0.7vw, 0.62rem);
  line-height: 1.55;
}

.home-side-notes {
  left: 77.1%;
  top: 39.1%;
  width: 17.6%;
  display: grid;
  gap: clamp(0.55rem, 1.4vw, 1rem);
}

.home-side-notes p {
  margin: 0;
  border-top: 1px solid rgba(122, 85, 47, 0.18);
  padding-top: 0.45rem;
  color: rgba(58, 43, 26, 0.64);
  font-family: var(--font-serif-sc);
  font-size: clamp(0.56rem, 0.92vw, 0.78rem);
  line-height: 1.75;
}

.home-side-notes span {
  display: block;
  margin-bottom: 0.15rem;
  color: rgba(128, 91, 48, 0.5);
  font-family: var(--font-sans-sc);
  font-size: 0.62em;
}

.home-door-entries {
  inset: 0;
  pointer-events: none;
}

.home-door-entry {
  position: absolute;
  width: 13.5%;
  min-width: 5.7rem;
  color: #322518;
  pointer-events: auto;
}

.home-door-entry span {
  display: inline-flex;
  margin-bottom: 0.35rem;
  color: rgba(90, 63, 35, 0.5);
  font-size: clamp(0.48rem, 0.7vw, 0.62rem);
}

.home-door-entry strong {
  display: block;
  font-family: var(--font-serif-sc);
  font-size: clamp(0.82rem, 1.35vw, 1.12rem);
  font-weight: 600;
  line-height: 1.2;
}

.home-door-entry small {
  display: block;
  margin-top: 0.35rem;
  color: rgba(52, 39, 25, 0.56);
  font-size: clamp(0.52rem, 0.78vw, 0.68rem);
  line-height: 1.55;
}

.home-door-entry::after {
  content: "";
  position: absolute;
  left: 0;
  bottom: -0.42rem;
  width: 44%;
  height: 1px;
  background: rgba(151, 103, 48, 0.38);
  transform-origin: left;
  transition: transform 240ms ease;
}

.home-door-entry:hover::after {
  transform: scaleX(1.65);
}

.entry-01 { left: 17.8%; top: 66.15%; }
.entry-02 { left: 42.6%; top: 66.1%; }
.entry-03 { left: 70.2%; top: 66.25%; }

.home-closing-note {
  left: 10.1%;
  top: 82%;
  width: 31.5%;
}

.home-closing-note p {
  margin: 0;
  font-family: var(--font-serif-sc);
  font-size: clamp(1.05rem, 2.2vw, 1.85rem);
  font-weight: 600;
  line-height: 1.45;
  text-wrap: pretty;
}

.home-closing-note span {
  display: block;
  margin-top: 0.8rem;
  color: rgba(52, 39, 25, 0.58);
  font-size: clamp(0.58rem, 0.9vw, 0.78rem);
  line-height: 1.8;
}

.home-footer {
  left: 6.35%;
  top: 93.55%;
  width: 87%;
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  align-items: end;
  gap: 1rem;
  color: rgba(52, 39, 25, 0.62);
}

.home-footer p {
  margin: 0;
  font-family: var(--font-serif-sc);
  font-size: clamp(0.9rem, 1.5vw, 1.25rem);
  font-weight: 600;
}

.home-footer span {
  display: block;
  margin-top: 0.35rem;
  max-width: 20rem;
  font-size: clamp(0.52rem, 0.82vw, 0.68rem);
  line-height: 1.6;
}

.home-footer nav {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-end;
  gap: 0.55rem 1.1rem;
}

@keyframes home-light-drift {
  from { opacity: 0.55; transform: translate3d(-1.2%, -0.4%, 0) scale(1); }
  to { opacity: 0.9; transform: translate3d(1.2%, 0.7%, 0) scale(1.025); }
}

@keyframes home-copy-in {
  from { opacity: 0; filter: blur(8px); transform: translateY(10px); }
  to { opacity: 1; filter: blur(0); transform: translateY(0); }
}

@keyframes home-cue {
  0%, 100% { transform: translate(-50%, -12%); opacity: 0.35; }
  50% { transform: translate(-50%, 18%); opacity: 0.85; }
}

@keyframes home-film-breathe {
  from { filter: saturate(0.78) contrast(1.08) brightness(0.66); transform: scale(1.04); }
  to { filter: saturate(0.9) contrast(1.16) brightness(0.8); transform: scale(1.075); }
}

@media (max-width: 720px) {
  .continuous-home-canvas { width: 100vw; min-height: 100svh; aspect-ratio: 864 / 1821; }
  .home-nav { top: 1.2%; grid-template-columns: 1fr auto; height: auto; }
  .home-nav-links { display: none; }
  .home-hero-copy { left: 8%; top: 12.2%; width: 74%; }
  .home-film-window { left: 8.6%; top: 34.6%; width: 68.5%; height: 18.4%; }
  .home-film-copy { left: 23%; top: 38%; width: 54%; }
  .home-side-notes { display: none; }
  .entry-01 { left: 13.2%; }
  .entry-02 { left: 40.2%; }
  .entry-03 { left: 67.4%; }
  .home-door-entry small { display: none; }
  .home-closing-note { left: 8%; width: 50%; }
  .home-footer { left: 6%; width: 88%; grid-template-columns: 1fr; }
  .home-footer span,
  .home-footer nav { display: none; }
  .home-footer nav { justify-content: flex-start; }
}

@media (prefers-reduced-motion: reduce) {
  .home-light-field,
  .home-film-video,
  .home-scroll-cue span,
  .home-hero-copy {
    animation: none;
  }
}
`;
