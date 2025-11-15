import React, { useEffect } from "react";
import Typed from "typed.js";
import styles from "./hero.module.css";

const Hero = () => {
  useEffect(() => {
    const typed = new Typed("#typedRoles", {
      strings: [
        "I build modern, fast & accessible interfaces.",
        "I craft scalable UI systems.",
        "I design performant frontend architectures.",
      ],
      typeSpeed: 80,
      backSpeed: 60,
      backDelay: 1000,
      loop: true,
      smartBackspace: true,
      cursorChar: "▎",
    });

    return () => typed.destroy();
  }, []);

  return (
    <section id="hero" className={styles.section}>
      <div>
        <h1 className={styles.overline}>Hi there, my name is</h1>
        <h2 className={styles.name}>Vipul Singh</h2>
        <div className={styles.typingWrapper}>
          <span id="typedRoles" className={styles.typedText}></span>
        </div>
      </div>
      <div className="hidden">
        <p className={styles.description}>
          I’m a Front-End Developer based in Pune, building clean, fast,
          responsive websites with modern technologies.
        </p>
      </div>
      <div>
        <p className={styles.description}>
          I’m a Front-End Developer based in Pune, building clean, fast,
          responsive websites with modern technologies.
        </p>
        <a
          className={styles.getIntouch}
          href="mailto:vipulsinghssm1@gmail.com?subject=Get%20In%20Touch"
        >
          Get In Touch
        </a>
      </div>
    </section>
  );
};

export default Hero;
