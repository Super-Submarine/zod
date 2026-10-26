import type { Metadata } from "next";
import Link from "next/link";

import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Hello, World!",
  description: "A bright little welcome to the web.",
};

const highlights = [
  {
    number: "01",
    title: "Dream it",
    description: "Every great idea starts with a simple hello.",
  },
  {
    number: "02",
    title: "Build it",
    description: "Shape that spark into something people can use.",
  },
  {
    number: "03",
    title: "Share it",
    description: "Send it out into the world and see what happens.",
  },
];

export default function HelloPage() {
  return (
    <main className={styles.page}>
      <div className={styles.glowTop} />
      <div className={styles.glowBottom} />

      <nav className={styles.nav} aria-label="Main navigation">
        <Link className={styles.brand} href="/hello">
          <span className={styles.brandMark} aria-hidden="true">
            H
          </span>
          hello.
        </Link>
        <a className={styles.navLink} href="#begin">
          Start here
          <span aria-hidden="true">↗</span>
        </a>
      </nav>

      <section className={styles.hero}>
        <div className={styles.eyebrow}>
          <span className={styles.statusDot} />A tiny corner of the internet
        </div>

        <h1>
          Hello,
          <br />
          <span>beautiful world.</span>
        </h1>

        <p className={styles.intro}>
          This is where ideas wake up, pixels find their place, and something new begins with two simple words.
        </p>

        <div className={styles.actions}>
          <a className={styles.primaryButton} href="#begin">
            Say hello
            <span aria-hidden="true">→</span>
          </a>
          <a className={styles.secondaryButton} href="https://zod.dev">
            Explore Zod
          </a>
        </div>

        <div className={styles.orbit} aria-hidden="true">
          <div className={styles.orbitRing} />
          <div className={styles.orbitCore}>✦</div>
          <div className={styles.orbitDot} />
        </div>
      </section>

      <section className={styles.highlights} id="begin" aria-label="How ideas come to life">
        {highlights.map((highlight) => (
          <article className={styles.card} key={highlight.number}>
            <span className={styles.cardNumber}>{highlight.number}</span>
            <div>
              <h2>{highlight.title}</h2>
              <p>{highlight.description}</p>
            </div>
          </article>
        ))}
      </section>

      <footer className={styles.footer}>
        <p>Made with curiosity and a little bit of code.</p>
        <span>© {new Date().getFullYear()}</span>
      </footer>
    </main>
  );
}
