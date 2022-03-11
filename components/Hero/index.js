import React from 'react';
import classnames from 'classnames';
import styles from './hero.module.css';

const Hero = () => {
  return (
    <section id="hero" className={styles.section}>
      <h1 className={styles.overline}>
        Hi there, my name is
      </h1>
      <h2 className={styles.title}>
        Vipul Singh.
      </h2>
      <h3 className={classnames(styles.subtitle, 'mt-3')}>
        I write code for responsive websites.
      </h3>
      <div className={classnames(styles.description, 'mt-6')}>
        <p>
          I&lsquo;m a Front-End  developer based in Sasaram, India,
          specializing in developing high-quality websites with latest
          technologies & best practices.
        </p>
      </div>
      <div>
        <a
          className={classnames(styles.getIntouch, 'mt-6')}
          href="mailto:vipulsinghssm1@gmail.com?subject=Get In Touch&body=Hello Vipul,"
        >
          Get In Touch
        </a>
      </div>
    </section>
  );
};

export default Hero;