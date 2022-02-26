import React from 'react';
import styles from './about.module.css';
import Image from 'next/image';

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
      <h3 className={styles.heading}>About Me</h3>
      <div className={styles.aboutFlexContainer}>
        <div className={styles.aboutContent}>
          <p className='mb-3'>
            Hello! I&lsquo;m Vipul, a Frontend developer based in Sasaram,
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
            , I started my career as a web developer and today, after 1.5+ years,
            as a front-end developer, I worked on a wide variety of web apps.
          </p>
          <p>
            Currently, I&lsquo;m working with
            <a
              href="https://www.tcs.com/"
              target="_blank"
              rel="nofollow noopener noreferrer"
            >
              Tata Consultancy Services
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
            <a href='/' download="VipulResume">
               here
            </a>
            to download my resume.
          </p>
        </div>
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
      </div>
    </section>
  );
};

export default About;