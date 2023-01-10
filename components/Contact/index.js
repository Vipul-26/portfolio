import React from 'react';
import styles from './contact.module.css';
import { JackInTheBox, Fade } from "react-awesome-reveal";

const Contact = () => {
    return (
        <section id="contact" className={styles.section}>
            <div className={styles.contact}>
                <JackInTheBox>
                    <h3 className={styles.headingCenter}>
                        What's Next?
                    </h3>
                </JackInTheBox>
                <Fade direction="left">
                    <h4 className={styles.title}>
                        Get In Touch
                    </h4>
                </Fade>
                <Fade direction="right">
                    <p className={styles.para}>
                        However I&lsquo;m not presently searching for freelance opportunities,
                        my inbox is usually open. Whether or not for a possible project or simply to mention hi, I&lsquo;ll strive my best to answer your email!
                    </p>
                </Fade>
                <Fade direction="down">
                    <div>
                        <a
                            href="mailto:vipulsinghssm1@gmail.com?subject=Get%20In%20Touch&body=Hello%20Vipul,"
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