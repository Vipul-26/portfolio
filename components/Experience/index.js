import React, { useState } from 'react';
import styles from './experience.module.css';

const TabList = [
    {
        company: 'Tata Consultancy Services',
        title: 'Web Developer',
        url: 'https://www.tcs.com/',
        range: 'Sept 2k20 - Present',
        html: `<ul>
        <li>Worked on Micro Front End apps in NextJS, TailwindCSS and ContentStack from scratch.</li>
        <li>Worked on different features, stories & enhancements in Bed Bath Beyond, Buy Buy Baby e-Commerce websites.</li>
        <li>Worked on performance improvement of websites.</li>
        <li>Worked on Migrating Bed Bath Beyond, Buy Buy Baby e-Commerce pages from Drupal to ContentStack.</li>
        <li>Built several reusable components in React.</li>
      </ul>`,
    },
];

const Experience = () => {
    const [selectedTab, selectTab] = useState(1);
    const { title, company, url, range, html } = TabList[selectedTab - 1];

    return (
        <section
            id="experience"
            style={{ position: 'relative', maxWidth: '750px' }}
            className={styles.section}
        >
            <h3 className={styles.heading}>
                Where I've Worked
            </h3>
            <div className={styles.jobTabs}>
                <ul className={styles.tablist}>
                    {TabList.map((tab, i) => (
                        <li>
                            <button
                                onClick={() => selectTab(i + 1)}
                                type="button"
                                className={
                                    selectedTab === i + 1 ? styles.buttonActive : undefined
                                }
                            >
                                {tab.company}
                            </button>
                        </li>
                    ))}
                </ul>
                <div className={styles.jobContent}>
                    <div className={styles.jobTabContent}>
                        <h4 className={styles.jobTitle}>
                            <span>{title}</span>
                            <span className={styles.jobCompany}>
                                <span>&nbsp;@</span>
                                <a
                                    href={url}
                                    target="_blank"
                                    rel="nofollow noopener noreferrer"
                                >
                                    {company}
                                </a>
                            </span>
                        </h4>
                        <h5 className={styles.jobDetail}>
                            <span>{range}</span>
                        </h5>
                        <div dangerouslySetInnerHTML={{ __html: html }} />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experience;