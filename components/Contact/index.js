import React from 'react';
import styles from './contact.module.css';
import RubberBand from 'react-reveal/RubberBand';
import Fade from 'react-reveal/Fade';

const Contact = () => {
    return (
        <section id="contact" className={styles.section}>
            <div className={styles.contact}>
                <RubberBand>
                    <h3 className={styles.headingCenter}>
                        What's Next?
                    </h3>
                </RubberBand>
                <Fade left>
                    <h4 className={styles.title}>
                        Get In Touch
                    </h4>
                </Fade>
                <Fade right>
                    <p className={styles.para}>
                        Although I&lsquo;m not currently looking for freelance opportunities,
                        my inbox is always open. Whether for a potential project or just to
                        say hi, I&lsquo;ll try my best to answer your email!
                    </p>
                </Fade>
                <Fade bottom>
                    <div>
                        <a
                            href="mailto:vipulsinghssm1@gmail.com?subject=Get In Touch&body=Hello Vipul,"
                            className={`${styles.bigButton} ${styles.sayHello}`}
                        >
                            Say Hello
                        </a>
                    </div>
                </Fade>
            </div>
        </section>
    );
};

export default Contact;