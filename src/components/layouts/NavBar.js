import Container from "./Container";
import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";
import logo from "../../img/logo.png";

const NavBar = () => {
  return (
    <nav className={styles.navbar}>
      <Container>
        <Link to="/" style={{ textDecoration: "none", color: "red" }}>
          <img src={logo} alt="" className={styles.img} />
        </Link>
        <ul className={styles.list}>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/films">Films</Link>
          </li>
          <li>
            <Link to="/user">User</Link>
          </li>
          <li>
            <Link to="/newFilm">new Film</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </Container>
    </nav>
  );
};

export default NavBar;
