import Link from "next/link";

import { siteConfig } from "@/lib/site-config";
import styles from "./continuous-homepage.module.css";

const sideNotes = [
  "会员制，不是制造距离，而是减少无效选择。",
  "供应链找来服务的，是生活里的确定性。",
  "申请，是彼此确认是否适合的开始。",
];

const doorClassByIndex = [styles.doorOne, styles.doorTwo, styles.doorThree];

export function ContinuousHomepage() {
  return (
    <main className={styles.shell}>
      <div className={styles.scene} aria-label="天机优选首页">
        <div className={styles.plasterTexture} aria-hidden="true" />
        <div className={styles.lightField} aria-hidden="true" />
        <div className={styles.shadowField} aria-hidden="true" />

        <SiteNav />
        <HeroCopy />
        <StillLife />
        <FilmWindow />
        <SideNotes />
        <DoorwayNav />
        <ClosingNote />
        <TableStillLife />
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
        <small>会员俱乐部</small>
      </Link>

      <nav className={styles.navLinks}>
        {siteConfig.navigation.map((item) => (
          <Link key={item.href} href={item.href}>
            {item.label}
          </Link>
        ))}
        <Link href="/philosophy">关于我们</Link>
      </nav>

      <Link href="/apply" className={styles.applyLink}>
        <span>申请会员</span>
      </Link>
    </header>
  );
}

function HeroCopy() {
  return (
    <section className={styles.hero} aria-labelledby="home-title">
      <p>{siteConfig.hero.eyebrow}</p>
      <h1 id="home-title">{siteConfig.name}</h1>
      <i />
      <span>让每一次消费创造更大的价值</span>
    </section>
  );
}

function StillLife() {
  return (
    <div className={styles.stillLife} aria-hidden="true">
      <div className={styles.frame} />
      <div className={styles.cabinetTop}>
        <div className={styles.books} />
        <div className={styles.vase}>
          <span />
          <span />
          <span />
          <span />
          <span />
        </div>
        <div className={styles.bowl} />
      </div>
      <div className={styles.cabinetBody} />
    </div>
  );
}

function FilmWindow() {
  return (
    <section className={styles.filmZone} aria-label="品牌影片">
      <div className={styles.curvedWall} aria-hidden="true" />
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
          <strong>让每一次消费创造更大的价值</strong>
        </div>
      </Link>
    </section>
  );
}

function SideNotes() {
  return (
    <aside className={styles.sideNotes} aria-label="价值提示">
      {sideNotes.map((note) => (
        <p key={note}>
          <span />
          {note}
        </p>
      ))}
    </aside>
  );
}

function DoorwayNav() {
  return (
    <nav className={styles.doorwayNav} aria-label="首页入口">
      {siteConfig.entrances.map((item, index) => (
        <Link
          key={item.href}
          href={item.href}
          className={`${styles.doorEntry} ${doorClassByIndex[index]}`}
        >
          <span>{item.title}</span>
          <i aria-hidden="true" />
          <small>{item.subtitle}</small>
        </Link>
      ))}

      <div className={`${styles.door} ${styles.physicalDoorOne}`} aria-hidden="true" />
      <div className={`${styles.door} ${styles.physicalDoorTwo}`} aria-hidden="true" />
      <div className={`${styles.door} ${styles.physicalDoorThree}`} aria-hidden="true" />
    </nav>
  );
}

function ClosingNote() {
  return (
    <section className={styles.closing} aria-label="结束语">
      <p>选择，是一种态度；</p>
      <p>连接，是一种力量；</p>
      <p>共益，是一种未来。</p>
      <i />
    </section>
  );
}

function TableStillLife() {
  return (
    <div className={styles.tableStillLife} aria-hidden="true">
      <div className={styles.tableSurface} />
      <div className={styles.inviteLetter}>
        <span>天机优选</span>
        <small>MEMBERS CLUB</small>
      </div>
      <div className={styles.tableBowl} />
      <div className={styles.stone} />
    </div>
  );
}

function HomeFooter() {
  return (
    <footer className={styles.footer} aria-label="页脚">
      <div>
        <p>{siteConfig.name}</p>
        <span>让每一次消费创造更大的价值</span>
      </div>
      <nav>
        <Link href="/membership">会员体系</Link>
        <Link href="/philosophy">理念与价值</Link>
        <Link href="/film">品牌影片</Link>
        <Link href="/apply">关注我们</Link>
      </nav>
    </footer>
  );
}
