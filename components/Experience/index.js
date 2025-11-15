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
    // find currently focused tab index (prefer actual selectedIdx)
    const focusedIndex = tabsRef.current.findIndex(
      (el) => el === document.activeElement
    );
    const baseIndex = focusedIndex >= 0 ? focusedIndex : selectedIdx;

    if (["ArrowLeft", "ArrowUp"].includes(e.key)) {
      e.preventDefault();
      const next = baseIndex - 1 < 0 ? max : baseIndex - 1;
      setSelectedIdx(next);
      // focus after state change (use setTimeout to ensure element exists)
      setTimeout(() => tabsRef.current[next]?.focus(), 0);
    } else if (["ArrowRight", "ArrowDown"].includes(e.key)) {
      e.preventDefault();
      const next = baseIndex + 1 > max ? 0 : baseIndex + 1;
      setSelectedIdx(next);
      setTimeout(() => tabsRef.current[next]?.focus(), 0);
    } else if (e.key === "Home") {
      e.preventDefault();
      setSelectedIdx(0);
      setTimeout(() => tabsRef.current[0]?.focus(), 0);
    } else if (e.key === "End") {
      e.preventDefault();
      setSelectedIdx(max);
      setTimeout(() => tabsRef.current[max]?.focus(), 0);
    } else if (e.key === "Enter" || e.key === " ") {
      // Enter/Space: the focused tab button is already a button (click is not necessary),
      // but we prevent default to avoid page scroll on Space.
      e.preventDefault();
      // ensure the focused button becomes selected (use its index)
      if (focusedIndex >= 0) setSelectedIdx(focusedIndex);
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
        {/* Single tablist element (ul) with role="tablist" */}
        <ul
          className={styles.tablist}
          role="tablist"
          aria-label="Work experience"
          onKeyDown={onKeyDown}
        >
          {TabList.map((tab, i) => {
            const tabId = `tab-${tab.id}`;
            const panelId = `panel-${tab.id}`;
            const selected = selectedIdx === i;

            return (
              // role="presentation" so the li doesn't interfere with accessibility tree for tablist
              <li key={tab.id} role="presentation">
                <button
                  id={tabId}
                  ref={(el) => (tabsRef.current[i] = el)}
                  role="tab"
                  aria-selected={selected}
                  aria-controls={panelId}
                  tabIndex={selected ? 0 : -1}
                  className={selected ? styles.buttonActive : ""}
                  onClick={() => setSelectedIdx(i)}
                  // keep native focus styles; you can enhance visually in CSS
                >
                  {tab.company}
                </button>
              </li>
            );
          })}
        </ul>

        <div className={styles.jobContent}>
          {TabList.map((tab, i) => {
            const panelId = `panel-${tab.id}`;
            const tabId = `tab-${tab.id}`;
            const selected = selectedIdx === i;

            return (
              <motion.div
                key={tab.id}
                role="tabpanel"
                id={panelId}
                aria-labelledby={tabId}
                className={styles.jobTabContent}
                initial="hidden"
                animate="show"
                variants={containerVariants}
                // keep panel out of accessibility tree when not selected:
                hidden={!selected}
              >
                {/* Render content only for selected panel (optional) */}
                {selected && (
                  <>
                    <h4 className={styles.jobTitle}>
                      <span>{tab.title}</span>
                    </h4>

                    <h5 className={styles.jobDetail}>
                      <span>{tab.range}</span>
                    </h5>

                    <div className={styles.jobDescription}>
                      <ul>
                        {(descriptions[tab.id] || []).map((it) => (
                          <li key={it}>{it}</li>
                        ))}
                      </ul>
                    </div>
                  </>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
