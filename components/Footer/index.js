import React from "react";
import styles from "./footer.module.css";
import { FaGithub, FaLinkedin, FaInstagram, FaTwitter } from "react-icons/fa";

class Footer extends React.PureComponent {
  render() {
    const date = new Date();

    const socialList = [
      {
        name: "GitHub",
        url: "https://github.com/Vipul-26",
        icon: <FaGithub size={24} />,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/vipul-singh-929354153/",
        icon: <FaLinkedin size={24} />,
      },
      {
        name: "Instagram",
        url: "https://www.instagram.com/vips.26/",
        icon: <FaInstagram size={24} />,
      },
      {
        name: "Twitter",
        url: "https://twitter.com/VipulSi78066437",
        icon: <FaTwitter size={24} />,
      },
    ];

    return (
      <footer id="Footer" className={styles.footer}>
        {/* Social Icons */}
        <div className={styles.socialContainer}>
          <ul className={styles.list}>
            {socialList.map(({ name, url, icon }) => (
              <li key={name}>
                <a
                  href={url}
                  target="_blank"
                  rel="nofollow noopener noreferrer"
                  aria-label={name}
                >
                  <span
                    className={`${styles.svg} hover:text-primary transition-transform duration-300 inline-flex transform hover:-translate-y-1`}
                  >
                    {icon}
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Email */}
        <div className={styles.email}>
          <h4>vipulsinghssm1@gmail.com</h4>
        </div>

        {/* Footer Content */}
        <div className={styles.content}>
          <a href="/" aria-label="home">
            <span>
              Handcrafted with <span className={styles.heart}>❤️</span> in
              India.
            </span>
            <div>
              <span>
                Copyright &copy;
                {date.getFullYear()}
              </span>
            </div>
          </a>
        </div>
      </footer>
    );
  }
}

export default Footer;
