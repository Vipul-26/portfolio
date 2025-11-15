import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import styles from "./about.module.css";

const fadeLeft = {
  hidden: { opacity: 0, x: -18 },
  show: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const fadeRight = {
  hidden: { opacity: 0, x: 18 },
  show: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function About() {
  const skills = [
    "JavaScript",
    "TypeScript",
    "React",
    "Redux",
    "Redux-Saga",
    "NextJS",
    "HTML5",
    "CSS3",
    "Bootstrap",
    "TailwindCSS",
    "Contentstack",
    "GraphQL",
  ];

  return (
    <section id="about" className={styles.section}>
      <motion.h3
        className={styles.heading}
        initial={{ opacity: 0, y: 6 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        About Me
      </motion.h3>

      <div className={styles.aboutFlexContainer}>
        <motion.div
          className={styles.aboutContent}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          variants={fadeLeft}
        >
          <p className="mb-3">
            Hello! I&apos;m Vipul, a front-end developer based in Pune, India,
            building responsive, accessible web experiences since 2020.
          </p>

          <p className="mb-3">
            After graduating from{" "}
            <a
              href="https://www.trubainstitute.ac.in/truba-college-of-science-technology/"
              target="_blank"
              rel="nofollow noopener noreferrer"
            >
              TCST, Bhopal
            </a>
            , I started my career in front-end development and over the last few
            years worked on a variety of web applications.
          </p>

          <p className="mb-3">
            Currently, I&apos;m working with{" "}
            <a
              href="https://www.amdocs.com/"
              target="_blank"
              rel="nofollow noopener noreferrer"
            >
              AMDOCS
            </a>
            .
          </p>

          <p>Here are a few technologies I’ve been working with recently:</p>

          <ul className={styles.skillList}>
            {skills.map((s) => (
              <li key={s}>{s}</li>
            ))}
          </ul>

          <p className="mt-4">
            Download my{" "}
            <a href="/VipulResume.pdf" download="VipulResume">
              resume
            </a>
            .
          </p>
        </motion.div>

        <motion.div
          className={styles.aboutPic}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          variants={fadeRight}
        >
          <div className={styles.imageCard} aria-hidden>
            <Image
              src="/Vipul.jpg"
              width={394}
              height={507}
              alt="Vipul Kumar Singh"
              style={{ width: "100%", height: "auto" }}
              priority
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
