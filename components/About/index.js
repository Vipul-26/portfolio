import React from 'react';
import styles from './about.module.css';
import Image from 'next/image';
import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';

const About = () => {
  const skills = [
    'JavaScript',
    'React, Redux',
    'NextJS',
    'TailwindCSS',
    'Bootstrap',
    'Html5',
    'Css3',
    'Content Stack',
  ];
  return (
    <section id="about" style={{ position: 'relative' }} className={styles.section}>
      <Zoom>
        <h3 className={`${styles.heading}`}>
          About Me
        </h3>
      </Zoom>
      <div className={styles.aboutFlexContainer}>
        <Fade left>
          <div className={styles.aboutContent}>
            <p className='mb-3'>
              Hello! I&lsquo;m Vipul, a Front-End developer based in Sasaram,
              India, who is happily writing code for responsive websites since 2020.
            </p>
            <p className='mb-3'>
              After my graduation from
              <a
                href="https://www.trubainstitute.ac.in/truba-college-of-science-technology/"
                target="_blank"
                rel="nofollow noopener noreferrer"
              >
                TCST, Bhopal
              </a>
              , I started my career as a web developer and today, after 2+ years,
              as a front-end developer, I worked on a wide variety of web apps.
            </p>
            <p>
              Currently, I&lsquo;m working with
              <a
                href="https://www.amdocs.com/"
                target="_blank"
                rel="nofollow noopener noreferrer"
              >
                AMDOCS
              </a>
              .
            </p>
            <p>
              Here are a few technologies I&lsquo;ve been working with recently:
            </p>
            <ul>
              {skills.map(skill => (
                <li key={skill}>{skill}</li>
              ))}
            </ul>
            <p className="mt-2">
              Click
              <a href="/Vipul's Resume.pdf" download="VipulResume">
                here
              </a>
              to download my resume.
            </p>
          </div>
        </Fade>
        <Fade right>
          <div className={styles.aboutPic}>
            <a to="/" aria-label="Display Picture">
              <Image
                src="/Vipul.jpg"
                alt="Vipul Kumar Singh"
                width={300}
                height={300}
              />
            </a>
          </div>
        </Fade>
      </div>
    </section>
  );
};

export default About;