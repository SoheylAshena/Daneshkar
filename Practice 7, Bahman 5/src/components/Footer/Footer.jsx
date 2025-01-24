import styles from "./Footer.module.css";
import { useContext } from "react";
import { ThemeContext } from "../../Context/ThemeContext";

const Footer = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <footer
      className={`${styles.footer} ${theme === "dark" ? styles.dark : styles.light}`}
    >
      <div className={styles.content}>
        <p>&copy; 2025 Soheyl Ashena. All rights reserved.</p>
        <div className={styles.links}>
          <a href="#privacy-policy" className={styles.link}>
            Privacy Policy
          </a>
          <a href="#terms-of-service" className={styles.link}>
            Terms of Service
          </a>
          <a href="#contact" className={styles.link}>
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
