import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";
import styles from "./Footer.module.css"

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <ul className={styles.social_list}>
        <li>
          <a href="https://www.instagram.com/_mateuscesar_/" target='_blank' rel='noreferrer'>
            <FaInstagram size={40}/>
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/mateus-cesar/" target='_blank' rel='noreferrer'>
            <FaLinkedin size={40}/>
          </a>
        </li>
        <li>
          <a href="https://www.github.com/mateuscesarglima" target='_blank' rel='noreferrer'>
            <FaGithub size={40}/>
          </a>
        </li>
      </ul>
      <p className={styles.copy_right}>TeuszinFlix, all rights reserved &copy; 2022 </p>
    </footer>
  );
};
export default Footer;
