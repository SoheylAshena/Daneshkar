import styles from "./Header.module.css";
import { useContext } from "react";
import { ThemeContext } from "../../Context/ThemeContext";

const Header = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div
      className={`${styles.header} ${theme === "dark" ? styles.dark : styles.light}`}
    >
      <h1 className={styles.logo}>Soheyl Ashena</h1>
      <div className={styles.navigation}>
        <p className={styles.navItem}>Home</p>
        <p className={styles.navItem}>About us</p>
        <p className={styles.navItem}>Contact</p>
      </div>
      <button className={styles.themeToggle} onClick={toggleTheme}>
        {theme === "dark" ? "☀️ Light Mode" : "🌙 Dark Mode"}
      </button>
    </div>
  );
};

export default Header;
