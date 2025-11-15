import React from "react";
import { motion } from "framer-motion";
import styles from "./contact.module.css";

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.12 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 14 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function Contact() {
  return (
    <section id="contact" className={styles.section}>
      <div className={styles.contact}>
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          variants={container}
        >
          <motion.h3 className={styles.headingCenter} variants={fadeUp}>
            What&apos;s Next?
          </motion.h3>

          <motion.h4 className={styles.title} variants={fadeUp}>
            Get In Touch
          </motion.h4>

          <motion.p className={styles.para} variants={fadeUp}>
            I&apos;m not currently looking for freelance work, but my inbox is
            usually open. Whether it&apos;s a potential project or just to say
            hi, I&apos;ll do my best to reply.
          </motion.p>

          <motion.div variants={fadeUp}>
            <a
              href="mailto:vipulsinghssm1@gmail.com?subject=Get%20In%20Touch&body=Hello%20Vipul,"
              className={`${styles.bigButton} ${styles.sayHello}`}
            >
              Say Hello
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
