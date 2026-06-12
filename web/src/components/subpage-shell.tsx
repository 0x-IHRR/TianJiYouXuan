import type { ReactNode } from "react";

import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import styles from "@/components/subpage-design.module.css";

type SubpageShellProps = {
  eyebrow: string;
  title: string;
  description: string;
  visualSrc?: string;
  visualAlt?: string;
  visualLabel?: string;
  children: ReactNode;
};

export function SubpageShell({
  eyebrow,
  title,
  description,
  children,
}: SubpageShellProps) {
  return (
    <div className={styles.shell}>
      <SiteHeader />
      <main className={styles.main}>
        <section className={styles.hero}>
          <div className={styles.heroCopy}>
            <p className={styles.eyebrow}>{eyebrow}</p>
            <h1 className={styles.title}>{title}</h1>
            <span className={styles.hairline} />
            <p className={styles.description}>{description}</p>
          </div>
        </section>
        {children}
      </main>
      <SiteFooter />
    </div>
  );
}
