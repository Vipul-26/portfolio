import React, { useState, useEffect, useRef } from 'react';
import styles from './experience.module.css';
import Fade from 'react-reveal/Fade';

const TabList = [
    {
        company: 'Tata Consultancy Services',
        title: 'Web Developer',
        url: 'https://www.tcs.com/',
        range: 'Sept 2k20 - Present',
    },
];

const list = [
    'Worked on Micro Front End apps in NextJS, TailwindCSS and ContentStack from scratch.',
    'Worked on different features, stories & enhancements in Bed Bath Beyond, Buy Buy Baby e-Commerce websites.',
    'Worked on performance improvement of websites.',
    'Worked on Migrating Bed Bath Beyond, Buy Buy Baby e-Commerce pages from Drupal to ContentStack.',
    'Built several reusable components in React.'
];

const Experience = () => {

    const [finalData, setFinal] = useState([]);
    const [count, setCount] = useState(0);
    let timer = useRef();

    useEffect(() => {
        timer.current = setInterval(() => setCount((prev) => prev + 1), 1000);
    }, []);

    useEffect(() => {
        list.forEach((item, index) => {
            index === count - 1 && setFinal([...finalData, <li key={index}>{item}</li>]);
        });
        if (count > list.length) {
            clearInterval(timer.current);
        }
    }, [count]);

    const [selectedTab, selectTab] = useState(1);
    const { title, company, url, range } = TabList[selectedTab - 1];

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
                        <div>
                            <ul>
                                {finalData.map((item) => (
                                    <>{item}</>
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