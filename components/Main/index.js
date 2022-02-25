import Hero from 'components/Hero';
import React, { useEffect } from 'react';
import styles from './main.module.css';

const Main = () => {

  return (
    <div id="home" className={styles.home}>
      <Hero />
    </div>
  );
};

export default Main;