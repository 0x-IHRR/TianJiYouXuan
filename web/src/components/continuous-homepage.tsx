import Image from "next/image";
import Link from "next/link";

import { siteConfig } from "@/lib/site-config";
import styles from "./continuous-homepage.module.css";

const sideNotes = [
  "真正稀缺的不是更多选择，而是更少后悔。",
  "线下会所感，不靠喧哗建立身份，而靠稳定的体验建立信任。",
  "供应链在背后组织确定性，会员在前台感受生活方式。",
];

const layerAssets = {
  hero: "/media/homepage-layers/hero-still-life.png",
  film: "/media/homepage-layers/film-window-balanced.png",
  doors: "/media/homepage-layers/doorway-band.png",
  table: "/media/homepage-layers/table-invitation.png",
};

export function ContinuousHomepage() {
  return (
    <main className={styles.shell}>
      <div className={styles.scene} aria-label="天机优选首页">
        <div className={styles.plasterBase} aria-hidden="true" />
        <div className={styles.lightSweep} aria-hidden="true" />
        <div className={styles.filmGrain} aria-hidden="true" />

        <SiteNav />
        <HeroSection />
        <FilmSection />
        <DoorwaySection />
        <ClosingSection />
        <HomeFooter />
      </div>
    </main>
  );
}

function SiteNav() {
  return (
    <header className={styles.nav} aria-label="主导航">
      <Link href="/" className={styles.brand}>
        <span>{siteConfig.name}</span>
        <small>Members Salon</small>
      </Link>

      <nav className={styles.navLinks}>
        {siteConfig.navigation.map((item) => (
          <Link key={item.href} href={item.href}>
            {item.label}
          </Link>
        ))}
        <Link href="/apply">申请会员</Link>
      </nav>
    </header>
  );
}

function HeroSection() {
  return (
    <section className={styles.heroSection} aria-labelledby="home-title">
      <div className={styles.heroImageLayer} aria-hidden="true">
        <Image src={layerAssets.hero} alt="" width={1672} height={941} priority />
      </div>

      <div className={styles.heroCopy}>
        <p>{siteConfig.hero.eyebrow}</p>
        <h1 id="home-title">{siteConfig.hero.title}</h1>
        <i aria-hidden="true" />
        <span>{siteConfig.hero.description}</span>
      </div>

      <aside className={styles.heroAside} aria-label="首页判断提示">
        <small>01 / Invitation</small>
        <p>不是催促你立刻购买，而是让你判断：这里是否值得成为长期关系的一部分。</p>
      </aside>
    </section>
  );
}

function FilmSection() {
  return (
    <section className={styles.filmSection} aria-label="品牌影片与价值判断">
      <div className={styles.filmSectionLabel} aria-hidden="true">
        <span>02</span>
        <i />
        <em>Brand Film</em>
      </div>

      <div className={styles.filmWallLayer} aria-hidden="true">
        <Image src={layerAssets.film} alt="" width={1672} height={941} loading="eager" />
      </div>

      <Link href="/film" className={styles.filmWindow} aria-label="进入品牌影片页">
        <video
          className={styles.filmVideo}
          src={siteConfig.film.videoSrc}
          poster={siteConfig.film.posterSrc}
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
        />
        <div className={styles.filmShade} aria-hidden="true" />
        <div className={styles.filmCopy}>
          <p>{siteConfig.film.title}</p>
          <strong>先看见气质，再决定是否靠近。</strong>
        </div>
      </Link>

      <aside className={styles.sideNotes} aria-label="价值提示">
        <strong>先判断气质，后判断关系。</strong>
        {sideNotes.map((note, index) => (
          <p key={note}>
            <small>{String(index + 1).padStart(2, "0")}</small>
            <span>{note}</span>
          </p>
        ))}
      </aside>
    </section>
  );
}

function DoorwaySection() {
  return (
    <section className={styles.doorwaySection} aria-label="首页入口">
      <div className={styles.doorwayImageLayer} aria-hidden="true">
        <Image src={layerAssets.doors} alt="" width={1672} height={941} />
      </div>

      <nav className={styles.entranceNav} aria-label="继续了解">
        {siteConfig.entrances.map((item) => (
          <Link key={item.href} href={item.href} className={styles.entranceLink}>
            <small>{item.index}</small>
            <span>{item.title}</span>
            <i aria-hidden="true" />
            <em>{item.subtitle}</em>
          </Link>
        ))}
      </nav>
    </section>
  );
}

function ClosingSection() {
  return (
    <section className={styles.closingSection} aria-label="首页收尾">
      <div className={styles.closingCopy}>
        <p>选择，是一种态度；</p>
        <p>连接，是一种力量；</p>
        <p>共益，是一种未来。</p>
        <i aria-hidden="true" />
        <span>{siteConfig.closing.note}</span>
      </div>

      <div className={styles.tableImageLayer} aria-hidden="true">
        <Image src={layerAssets.table} alt="" width={1672} height={941} />
      </div>

      <Link href="/apply" className={styles.applyCallout}>
        <small>Membership Application</small>
        <span>留下轻量意向</span>
      </Link>
    </section>
  );
}

function HomeFooter() {
  return (
    <footer className={styles.footer} aria-label="页脚">
      <div>
        <p>{siteConfig.name}</p>
        <span>Logo、社媒链接、联系方式、备案信息待补充。</span>
      </div>
      <nav>
        <Link href="/membership">会员体系</Link>
        <Link href="/philosophy">理念与价值</Link>
        <Link href="/film">品牌影片</Link>
        <Link href="/apply">申请会员</Link>
      </nav>
    </footer>
  );
}
