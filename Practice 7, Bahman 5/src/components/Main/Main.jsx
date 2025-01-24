import styles from "./Main.module.css";
import { useContext } from "react";
import { ThemeContext } from "../../Context/ThemeContext";

const Main = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <div
      className={`${styles.main} ${theme === "dark" ? styles.dark : styles.light}`}
    >
      <section className={styles.hero}>
        <h2>Welcome to My Page</h2>
        <p>
          This page uses React and Context API to change the theme of the page.
        </p>
      </section>
    </div>
  );
};

export default Main;
