// components/Projects/index.js
import React, { useState } from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { motion } from "framer-motion";
import styles from "./projects.module.css";

const ProjectCard = ({ project }) => {
  return (
    <article className={styles.project}>
      <div className={styles.projectInner}>
        <div className={styles.projectHeader}>
          <div className={styles.folder} aria-hidden>
            {/* folder icon (simple SVG kept small) */}
            <svg
              viewBox="0 0 60 60"
              width="36"
              height="36"
              fill="currentColor"
              aria-hidden
            >
              <path d="M57.49,21.5H54v-6.268c0-1.507-1.226-2.732-2.732-2.732H26.515l-5-7H2.732C1.226,5.5,0,6.726,0,8.232v43.687l0.006,0c-0.005,0.563,0.17,1.114,0.522,1.575C1.018,54.134,1.76,54.5,2.565,54.5h44.759c1.156,0,2.174-0.779,2.45-1.813L60,24.649v-0.177C60,22.75,58.944,21.5,57.49,21.5zM2,8.232C2,7.828,2.329,7.5,2.732,7.5h17.753l5,7h25.782c0.404,0,0.732,0.328,0.732,0.732V21.5H12.731c-0.144,0-0.287,0.012-0.426,0.036c-0.973,0.163-1.782,0.873-2.023,1.776L2,45.899V8.232z" />
            </svg>
          </div>

          <div className={styles.projectLinks}>
            {project.links.map((l) => (
              <a
                key={l.url}
                href={l.url}
                target="_blank"
                rel="nofollow noopener noreferrer"
                aria-label={`${project.name} external link`}
                className={styles.iconLink}
              >
                {l.iconName === "github" ? (
                  <FaGithub className={styles.icon} />
                ) : (
                  <FaExternalLinkAlt className={styles.icon} />
                )}
              </a>
            ))}
          </div>
        </div>

        <h4 className={styles.projectName}>{project.name}</h4>
        <div className={styles.projectDescription}>{project.description}</div>

        <ul className={styles.techList}>
          {project.tech?.map((t) => (
            <li key={t} className={styles.techTag}>
              {t}
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
};

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.06,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 8 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" } },
};

export default function Projects() {
  const List = [
    {
      name: "Portfolio",
      description:
        "My portfolio website which shows me, my experience, works, and projects.",
      tech: ["next-js", "tailwindcss", "javascript", "css3", "seo-friendly"],
      links: [
        { iconName: "github", url: "https://github.com/Vipul-26/portfolio" },
        { iconName: "external", url: "https://www.vipulsingh.in.net/" },
      ],
    },
    {
      name: "Checkbox Data Filter",
      description:
        "A sample product listing page with filter functionality like Flipkart.",
      tech: [
        "react",
        "axios",
        "bootstrap",
        "react-outside-click-handler",
        "seo-friendly",
      ],
      links: [
        {
          iconName: "github",
          url: "https://github.com/Vipul-26/Checkbox-Data-Filter",
        },
        {
          iconName: "external",
          url: "https://checkbox-data-filter.vercel.app/",
        },
      ],
    },
    {
      name: "My Blog",
      description: "A Blog website created using next-js & next-js api.",
      tech: ["react", "axios", "tailwindcss", "react-markdown"],
      links: [
        { iconName: "github", url: "https://github.com/Vipul-26/My-Blog" },
        { iconName: "external", url: "https://blog-vipul-26.vercel.app/" },
      ],
    },
    {
      name: "Online Written Ability Test",
      description:
        "An online written ability test react app with more than 10 sets & choice of a time limit.",
      tech: ["react", "react-bootstrap", "react-router-dom", "javascript"],
      links: [
        {
          iconName: "github",
          url: "https://github.com/Vipul-26/Written-Ability-Test",
        },
        {
          iconName: "external",
          url: "https://written-ability-test.vercel.app/",
        },
      ],
    },
    {
      name: "Sample Blog",
      description: "A sample blog page using react, redux & firebase.",
      tech: ["react", "redux", "firebase", "materialise-css"],
      links: [
        { iconName: "github", url: "https://github.com/Vipul-26/sample-blog" },
        {
          iconName: "external",
          url: "https://sample-blog-36a85.firebaseapp.com/",
        },
      ],
    },
    {
      name: "My Expenses",
      description: "An expense tracker page to track your expenses.",
      tech: ["react", "redux", "typescript", "react-toastify"],
      links: [
        { iconName: "github", url: "https://github.com/Vipul-26/MyExpenses" },
        { iconName: "external", url: "https://my-expenses-tau.vercel.app/" },
      ],
    },
  ];

  const preSetVal = List.length > 6 ? 7 : List.length;
  const [count, toggleShow] = useState(preSetVal);
  const sliceValue = count === preSetVal ? preSetVal : List.length;

  return (
    <section id="projects" className={styles.section}>
      <div className={styles.Project}>
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.12 }}
          variants={containerVariants}
        >
          <motion.h3 className={styles.heading} variants={itemVariants}>
            Significant Projects
          </motion.h3>

          <div className={styles.grid}>
            <motion.div className={styles.projects} variants={itemVariants}>
              <motion.div
                className={styles.projectsGrid}
                variants={containerVariants}
                initial="hidden"
                animate="show"
              >
                {List.slice(0, sliceValue).map((proj) => (
                  <motion.div key={proj.name} variants={itemVariants}>
                    <ProjectCard project={proj} />
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>

          {sliceValue < List.length && (
            <div className={styles.moreWrap}>
              <button
                className={styles.moreButton}
                onClick={() => toggleShow(List.length)}
              >
                Show more
              </button>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
