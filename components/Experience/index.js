import React, { useState, useEffect, useRef } from 'react';
import styles from './experience.module.css';
import Fade from 'react-reveal/Fade';

const TabList = [
    {
        company: 'AMDOCS',
        title: 'Software Developer',
        url: 'https://www.amdocs.com/',
        range: 'July 2k22 - Present',
    },
    {
        company: 'Tata Consultancy Services',
        title: 'Web Developer',
        url: 'https://www.tcs.com/',
        range: 'Sept 2k20 - July 2k22',
    },
];

const list = [
    [
        "Working as a Front End Developer."
    ],
    [
        "Worked on Micro Front End apps in NextJS, TailwindCSS and ContentStack from scratch.",
        "Worked on different features, stories & enhancements for a US based client's retail e-Commerce websites.",
        "Worked on performance improvement of websites.",
        "Worked on Migrating the same retail websites from Drupal to ContentStack.",
        "Built several reusable components in React."
    ]
];

const Experience = () => {

    const [finalData, setFinal] = useState([]);
    const [selectedTab, selectTab] = useState(1);
    const { title, company, url, range } = TabList[selectedTab - 1];

    useEffect(() => {
        const selectedList = selectedTab === 1 ? list[0] : list[1];
        setFinal(selectedList);
    }, [selectedTab]);

    return (
        <section
            id="experience"
            style={{ position: 'relative', maxWidth: '750px' }}
            className={styles.section}
        >
            <Fade right>
                <h3 className={`${styles.heading}`}>
                    Where I've Worked
                </h3>
            </Fade>
            <div className={styles.jobTabs}>
                <ul className={styles.tablist}>
                    {TabList.map((tab, i) => (
                        <li key={i}>
                            <button
                                onClick={() => selectTab(i + 1)}
                                type="button"
                                className={
                                    selectedTab === i + 1 ? styles.buttonActive : ''
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
                        <div>
                            <ul>
                                {finalData.map((item) => (
                                    <li key={item}>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experience;