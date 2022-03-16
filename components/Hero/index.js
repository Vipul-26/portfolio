import React, { useEffect } from 'react';
import classnames from 'classnames';
import styles from './hero.module.css';

const Hero = () => {

  useEffect(() => {
    function animateText(words, id, colors) {
      var letterCount = 1;
      var x = 1;
      var waiting = false;
      var target = document.getElementById(id)
      target.setAttribute('style', 'color:' + colors[0])
      window.setInterval(function () {
        if (letterCount === 0 && waiting === false) {
          waiting = true;
          target.innerHTML = words[0].substring(0, letterCount)
          window.setTimeout(function () {
            var usedColor = colors.shift();
            colors.push(usedColor);
            var usedWord = words.shift();
            words.push(usedWord);
            x = 1;
            target.setAttribute('style', 'color:' + colors[0])
            letterCount += x;
            waiting = false;
          }, 1000)
        } else if (letterCount === words[0].length + 1 && waiting === false) {
          waiting = true;
          window.setTimeout(function () {
            x = -1;
            letterCount += x;
            waiting = false;
          }, 1000)
        } else if (waiting === false) {
          target.innerHTML = words[0].substring(0, letterCount);
          letterCount += x;
        }
      }, 120);
    };
    animateText(['Vipul Singh', 'UI Developer', 'Python Developer'], 'text', ['aliceblue', 'ghostwhite', 'lightblue'])
  }, []);

  return (
    <section id="hero" className={styles.section}>
      <h1 className={styles.overline}>
        Hi there, my name is
      </h1>
      <div className={styles.container}>
        <span id='text'></span>
      </div>
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