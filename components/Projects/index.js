import React, { useState } from 'react';
import styles from './projects.module.css';
import Fade from 'react-reveal/Fade';

const Projects = () => {
    const List = [
        {
            name: 'Portfolio',
            description: 'My portfolio website which shows me, my experience, works, and projects.',
            tech: [
                'next-js',
                'tailwindcss',
                'javascript',
                'css3',
                'seo-friendly',
                'animate.css'
            ],
            links: [
                {
                    iconName: 'github',
                    url: 'https://github.com/Vipul-26/portfolio',
                },
                {
                    iconName: 'external',
                    url: 'https://www.vipulsingh.in.net/',
                },
            ],
        },
        {
            name: 'Checkbox Data Filter',
            description: 'A sample product listing page with filter functionality like Flipkart.',
            tech: [
                'react',
                'axios',
                'bootstrap',
                'react-outside-click-handler',
                'seo-friendly',
                'css3',
                'javascript',
                'react-icons',
            ],
            links: [
                {
                    iconName: 'github',
                    url: 'https://github.com/Vipul-26/Checkbox-Data-Filter',
                },
                {
                    iconName: 'external',
                    url: 'https://checkbox-data-filter.vercel.app/',
                },
            ],
        },
        {
            name: 'My Blog',
            description: 'A Blog website created using next-js & next-js api.',
            tech: [
                'react',
                'axios',
                'tailwindcss',
                'nextjs-progressbar',
                'react-markdown',
                'react-mailchimp-subscribe',
            ],
            links: [
                {
                    iconName: 'github',
                    url: 'https://github.com/Vipul-26/My-Blog',
                },
                {
                    iconName: 'external',
                    url: 'https://blog-vipul-26.vercel.app/',
                },
            ],
        },
        {
            name: 'Online Written Ability Test',
            description: 'An online written ability test react app with more than 10 sets & choice of a time limit.',
            tech: [
                'react',
                'react-bootstrap',
                'react-router-dom',
                'javascript',
                'css3',
                'react-avatar',
            ],
            links: [
                {
                    iconName: 'github',
                    url: 'https://github.com/Vipul-26/Written-Ability-Test',
                },
                {
                    iconName: 'external',
                    url: 'https://written-ability-test.vercel.app/',
                },
            ],
        },
        {
            name: 'Sample Blog',
            description: 'A sample blog page using react, redux & firebase.',
            tech: [
                'react',
                'react-redux',
                'redux-thunk',
                'firebase',
                'react-redux-firebase',
                'redux-firestore',
                'moment',
                'materialise-css',
            ],
            links: [
                {
                    iconName: 'github',
                    url: 'https://github.com/Vipul-26/sample-blog',
                },
                {
                    iconName: 'external',
                    url: 'https://sample-blog-36a85.web.app/',
                },
            ],
        },
        {
            name: 'My Expenses',
            description: 'An expense tracker page to track your expenses.',
            tech: [
                'react',
                'react-redux',
                'typescript',
                'react-toastify',
                'react-modal',
                'redux-devtools-extension',
            ],
            links: [
                {
                    iconName: 'github',
                    url: 'https://github.com/Vipul-26/MyExpenses',
                },
                {
                    iconName: 'external',
                    url: 'https://my-expenses-tau.vercel.app/',
                },
            ],
        },
    ];
    const preSetVal = List.length > 6 ? 7 : List.length;
    const [count, toggleShow] = useState(preSetVal);
    const sliceValue = count === preSetVal ? preSetVal : List.length;
    return (
        <section
            id="projects"
            className={styles.section}
        >
            <div className={styles.Project}>
                <Fade left>
                    <h3 className={`${styles.heading}`}>
                        Significant Projects
                    </h3>
                </Fade>
                <div className={styles.grid}>
                    <div className={styles.projects}>
                        {List.slice(0, sliceValue).map(
                            ({ name, description, tech, links }) => (
                                <div className={styles.project} key={name}>
                                    <div className={styles.projectInner}>
                                        <div className={styles.projectHeader}>
                                            <div className={styles.folder}>
                                                <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 60 60">
                                                    <title>Folder</title>
                                                    <path
                                                        d="M57.49,21.5H54v-6.268c0-1.507-1.226-2.732-2.732-2.732H26.515l-5-7H2.732C1.226,5.5,0,6.726,0,8.232v43.687l0.006,0
                                                        c-0.005,0.563,0.17,1.114,0.522,1.575C1.018,54.134,1.76,54.5,2.565,54.5h44.759c1.156,0,2.174-0.779,2.45-1.813L60,24.649v-0.177
                                                        C60,22.75,58.944,21.5,57.49,21.5z M2,8.232C2,7.828,2.329,7.5,2.732,7.5h17.753l5,7h25.782c0.404,0,0.732,0.328,0.732,0.732V21.5
                                                        H12.731c-0.144,0-0.287,0.012-0.426,0.036c-0.973,0.163-1.782,0.873-2.023,1.776L2,45.899V8.232z M47.869,52.083
                                                        c-0.066,0.245-0.291,0.417-0.545,0.417H2.565c-0.243,0-0.385-0.139-0.448-0.222c-0.063-0.082-0.16-0.256-0.123-0.408l10.191-27.953
                                                        c0.066-0.245,0.291-0.417,0.545-0.417H54h3.49c0.38,0,0.477,0.546,0.502,0.819L47.869,52.083z"
                                                    />
                                                </svg>
                                            </div>
                                            <div className={styles.projectLinks}>
                                                {links.map(({ iconName, url }) => (
                                                    <a
                                                        target="_blank"
                                                        rel="nofollow noopener noreferrer"
                                                        aria-label={name}
                                                        key={iconName}
                                                        href={url}
                                                        className={styles.iconLink}
                                                    >
                                                        {iconName === "github" &&
                                                            <svg
                                                                xmlns="http://www.w3.org/2000/svg"
                                                                role="img"
                                                                viewBox="0 0 438.549 438.549"
                                                            >
                                                                <title>GitHub</title>
                                                                <path
                                                                    d="M409.132,114.573c-19.608-33.596-46.205-60.194-79.798-79.8C295.736,15.166,259.057,5.365,219.271,5.365
                                                                c-39.781,0-76.472,9.804-110.063,29.408c-33.596,19.605-60.192,46.204-79.8,79.8C9.803,148.168,0,184.854,0,224.63 c0,47.78,13.94,90.745,41.827,128.906c27.884,38.164,63.906,64.572,108.063,79.227c5.14,0.954,8.945,0.283,11.419-1.996
                                                                c2.475-2.282,3.711-5.14,3.711-8.562c0-0.571-0.049-5.708-0.144-15.417c-0.098-9.709-0.144-18.179-0.144-25.406l-6.567,1.136
                                                                c-4.187,0.767-9.469,1.092-15.846,1c-6.374-0.089-12.991-0.757-19.842-1.999c-6.854-1.231-13.229-4.086-19.13-8.559
                                                                c-5.898-4.473-10.085-10.328-12.56-17.556l-2.855-6.57c-1.903-4.374-4.899-9.233-8.992-14.559
                                                                c-4.093-5.331-8.232-8.945-12.419-10.848l-1.999-1.431c-1.332-0.951-2.568-2.098-3.711-3.429c-1.142-1.331-1.997-2.663-2.568-3.997
                                                                c-0.572-1.335-0.098-2.43,1.427-3.289c1.525-0.859,4.281-1.276,8.28-1.276l5.708,0.853c3.807,0.763,8.516,3.042,14.133,6.851
                                                                c5.614,3.806,10.229,8.754,13.846,14.842c4.38,7.806,9.657,13.754,15.846,17.847c6.184,4.093,12.419,6.136,18.699,6.136
                                                                c6.28,0,11.704-0.476,16.274-1.423c4.565-0.952,8.848-2.383,12.847-4.285c1.713-12.758,6.377-22.559,13.988-29.41
                                                                c-10.848-1.14-20.601-2.857-29.264-5.14c-8.658-2.286-17.605-5.996-26.835-11.14c-9.235-5.137-16.896-11.516-22.985-19.126
                                                                c-6.09-7.614-11.088-17.61-14.987-29.979c-3.901-12.374-5.852-26.648-5.852-42.826c0-23.035,7.52-42.637,22.557-58.817
                                                                c-7.044-17.318-6.379-36.732,1.997-58.24c5.52-1.715,13.706-0.428,24.554,3.853c10.85,4.283,18.794,7.952,23.84,10.994
                                                                c5.046,3.041,9.089,5.618,12.135,7.708c17.705-4.947,35.976-7.421,54.818-7.421s37.117,2.474,54.823,7.421l10.849-6.849
                                                                c7.419-4.57,16.18-8.758,26.262-12.565c10.088-3.805,17.802-4.853,23.134-3.138c8.562,21.509,9.325,40.922,2.279,58.24
                                                                c15.036,16.18,22.559,35.787,22.559,58.817c0,16.178-1.958,30.497-5.853,42.966c-3.9,12.471-8.941,22.457-15.125,29.979
                                                                c-6.191,7.521-13.901,13.85-23.131,18.986c-9.232,5.14-18.182,8.85-26.84,11.136c-8.662,2.286-18.415,4.004-29.263,5.146
                                                                c9.894,8.562,14.842,22.077,14.842,40.539v60.237c0,3.422,1.19,6.279,3.572,8.562c2.379,2.279,6.136,2.95,11.276,1.995
                                                                c44.163-14.653,80.185-41.062,108.068-79.226c27.88-38.161,41.825-81.126,41.825-128.906
                                                                C438.536,184.851,428.728,148.168,409.132,114.573z"
                                                                />
                                                            </svg>
                                                        }
                                                        {iconName === "external" &&
                                                            <svg
                                                                xmlns="http://www.w3.org/2000/svg"
                                                                role="img"
                                                                viewBox="0 0 194.818 194.818"
                                                            >
                                                                <title>External</title>
                                                                <g>
                                                                    <path
                                                                        d="M185.818,2.161h-57.04c-4.971,0-9,4.029-9,9s4.029,9,9,9h35.312l-86.3,86.3c-3.515,3.515-3.515,9.213,0,12.728
                                                                    c1.758,1.757,4.061,2.636,6.364,2.636s4.606-0.879,6.364-2.636l86.3-86.3v35.313c0,4.971,4.029,9,9,9s9-4.029,9-9v-57.04
                                                                    C194.818,6.19,190.789,2.161,185.818,2.161z"
                                                                    />
                                                                    <path
                                                                        d="M149,77.201c-4.971,0-9,4.029-9,9v88.456H18v-122h93.778c4.971,0,9-4.029,9-9s-4.029-9-9-9H9c-4.971,0-9,4.029-9,9v140
                                                                    c0,4.971,4.029,9,9,9h140c4.971,0,9-4.029,9-9V86.201C158,81.23,153.971,77.201,149,77.201z"
                                                                    />
                                                                </g>
                                                            </svg>
                                                        }
                                                    </a>
                                                ))}
                                            </div>
                                        </div>
                                        <h4 className={styles.projectName}>{name}</h4>
                                        <div className={styles.projectDescription}>
                                            {description}
                                        </div>
                                        <ul className={styles.techList}>
                                            {tech.map(t => (
                                                <li key={t}>{t}</li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            )
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Projects;