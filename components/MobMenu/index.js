import styles from "./mobMenu.module.css";

const getMenuStyle = (isMenuOpen) => {
  return {
    transform: `translateX(${isMenuOpen ? "0" : "100"}vw)`,
    visibility: `${isMenuOpen ? "visible" : "hidden"}`,
  };
};

const MobMenu = ({ isMenuOpen, toggleMenu, links }) => {
  return (
    <div
      className={styles.menu}
      onClick={() => toggleMenu()}
      style={getMenuStyle(isMenuOpen)}
    >
      <aside className={styles.aside}>
        <div className={styles.nav}>
          <ol>
            {links?.map(({ name, to }) => (
              <li key={name}>
                <a href={to}>{name}</a>
              </li>
            ))}
          </ol>
          <a
            className={styles.resumeLink}
            href="VipulResume.pdf"
            download="VipulResume"
          >
            Resume
          </a>
        </div>
      </aside>
    </div>
  );
};

export default MobMenu;
