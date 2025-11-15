// components/Experience/index.js
import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import styles from "./experience.module.css";

const TabList = [
  {
    id: "amdocs",
    company: "AMDOCS",
    title: "Software Developer",
    url: "https://www.amdocs.com/",
    range: "July 2022 - Present",
  },
  {
    id: "tcs",
    company: "TCS",
    title: "Web Developer",
    url: "https://www.tcs.com/",
    range: "Sept 2020 - July 2022",
  },
];

const descriptions = {
  amdocs: [
    "Working as a Front End Developer developing modules & storybook using React, Redux & Material UI.",
    "Integrating frontend with APIs by creating queries & mutations using GraphQL.",
    "Resolving queries & mutations on server side using GraphQL, Apollo, Node.js and Express.",
  ],
  tcs: [
    "Worked on Micro Front End apps in NextJS, TailwindCSS and Contentstack from scratch.",
    "Built features, stories & enhancements for a US-based retail e-commerce website.",
    "Worked on performance improvements and migration from Drupal to Contentstack.",
    "Built several reusable components in React.",
  ],
};

const containerVariants = {
  hidden: { opacity: 0, y: 8 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
};

export default function Experience() {
  const [selectedIdx, setSelectedIdx] = useState(0);
  const current = TabList[selectedIdx];
  const [items, setItems] = useState(descriptions[current?.id] || []);
  const tabsRef = useRef([]);

  useEffect(() => {
    setItems(descriptions[current?.id] || []);
  }, [current]);

  // keyboard navigation for tabs
  function onKeyDown(e) {
    const max = TabList.length - 1;
    if (["ArrowLeft", "ArrowUp"].includes(e.key)) {
      e.preventDefault();
      setSelectedIdx((i) => (i - 1 < 0 ? max : i - 1));
      tabsRef.current[
        (selectedIdx - 1 + TabList.length) % TabList.length
      ]?.focus();
    } else if (["ArrowRight", "ArrowDown"].includes(e.key)) {
      e.preventDefault();
      setSelectedIdx((i) => (i + 1 > max ? 0 : i + 1));
      tabsRef.current[(selectedIdx + 1) % TabList.length]?.focus();
    } else if (e.key === "Home") {
      e.preventDefault();
      setSelectedIdx(0);
      tabsRef.current[0]?.focus();
    } else if (e.key === "End") {
      e.preventDefault();
      setSelectedIdx(max);
      tabsRef.current[max]?.focus();
    } else if (e.key === "Enter" || e.key === " ") {
      // Enter/Space behavior is handled by button onClick, but ensure not to double-run
      e.preventDefault();
      // no-op — button click already sets selected index when focused + pressed
    }
  }

  return (
    <section id="experience" className={styles.section}>
      <motion.h3
        className={styles.heading}
        initial="hidden"
        animate="show"
        variants={containerVariants}
      >
        Where I've Worked
      </motion.h3>

      <div className={styles.jobTabs}>
        {/* Accessible tablist */}
        <div
          role="tablist"
          aria-label="Work experience"
          className={styles.tablistWrapper}
          onKeyDown={onKeyDown}
        >
          <ul
            className={styles.tablist}
            role="tablist"
            aria-label="Work experience"
          >
            {TabList.map((tab, i) => {
              const tabId = `tab-${i}`;
              const panelId = `panel-${i}`;
              const selected = selectedIdx === i;
              return (
                <li key={i}>
                  <button
                    id={tabId}
                    role="tab"
                    aria-selected={selected}
                    aria-controls={panelId}
                    className={selected ? styles.buttonActive : ""}
                    onClick={() => setSelectedIdx(i)}
                  >
                    {tab.company}
                  </button>
                </li>
              );
            })}
          </ul>
        </div>

        <div className={styles.jobContent}>
          <motion.div
            role="tabpanel"
            id={`panel-${current?.id}`}
            aria-labelledby={`tab-${current?.id}`}
            className={styles.jobTabContent}
            key={current?.id}
            initial="hidden"
            animate="show"
            variants={containerVariants}
          >
            <h4 className={styles.jobTitle}>
              <span>{current?.title}</span>
              <span className={styles.jobCompany}>
                <span>&nbsp;@&nbsp;</span>
                <a
                  href={current?.url}
                  target="_blank"
                  rel="nofollow noopener noreferrer"
                >
                  {current?.company}
                </a>
              </span>
            </h4>

            <h5 className={styles.jobDetail}>
              <span>{current?.range}</span>
            </h5>

            <div className={styles.jobDescription}>
              <ul>
                {items.map((it) => (
                  <li key={it}>{it}</li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
