import About from 'components/About';
import Contact from 'components/Contact';
import Hero from 'components/Hero';
import React, { useEffect } from 'react';
import styles from './main.module.css';

const Main = () => {

  return (
    <div id="home" className={styles.home}>
      <Hero />
      <About />
      <Contact />
    </div>
  );
};

export default Main;