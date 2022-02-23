import { FaInstagram, FaLinkedin } from "react-icons/fa";
import styles from "./Footer.module.css"

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <ul className={styles.social_list}>
        <li>
          <a href="https://www.instagram.com/_mateuscesar_/">
            <FaInstagram size={40}/>
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/mateus-cesar/">
            <FaLinkedin size={40}/>
          </a>
        </li>
      </ul>
      <p className={styles.copy_right}>TeuszinFlix, all rights reserved &copy; 2022 </p>
    </footer>
  );
};
export default Footer;
