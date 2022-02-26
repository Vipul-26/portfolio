import React from 'react';
import styles from './contact.module.css';

const Contact = () => {
    return (
        <section id="contact" className={styles.section}>
            <div className={styles.contact}>
                <h3 className={styles.headingCenter}>
                    What's Next?
                </h3>
                <h4 className={styles.title}>Get In Touch</h4>
                <p className={styles.para}>
                    Although I&lsquo;m not currently looking for freelance opportunities,
                    my inbox is always open. Whether for a potential project or just to
                    say hi, I&lsquo;ll try my best to answer your email!
                </p>
                <a
                    href="mailto:vipulsinghssm1@gmail.com?subject=Get In Touch&body=Hello Vipul,"
                    className={`${styles.bigButton} ${styles.sayHello}`}
                >
                    Say Hello
                </a>
            </div>
        </section>
    );
};

export default Contact;