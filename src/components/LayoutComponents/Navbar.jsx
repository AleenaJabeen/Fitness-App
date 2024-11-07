import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import styles from "../../styles/LayoutStyles/Navbar.module.css";
import login from "../../assets/Layoutassets/userprofile.png";
import { HiOutlineMenuAlt2 } from "react-icons/hi";
import { HiOutlineX } from "react-icons/hi";

function Navbar() {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => {
    setMenuOpen((prevState) => !prevState);
  };
  return (
    <nav className={styles.navbar}>
      <div className={`${styles.openMenuBtn}${isMenuOpen ? styles.hide : ""}`} >
        <HiOutlineMenuAlt2 style={{ fontSize: "2rem" }} onClick={toggleMenu} />
      </div>
    
        <div
          className={`${styles.menuItems} ${isMenuOpen ? styles.showMenu : ""}`}
          onClick={toggleMenu}
        >
            <ul>
          <li className={styles.closeMenuBtn} onClick={toggleMenu}>
            <HiOutlineX style={{ fontSize: "2rem" }} onClick={toggleMenu}/>
          </li>
          <li>
            <NavLink
              to="/home"
              exact
              className={styles.li}
              activeClassName={styles.active}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={styles.li}
              activeClassName={styles.active}
            >
              About Us
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/blogs"
              className={styles.li}
              activeClassName={styles.active}
            >
              Blogs
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/faqs"
              className={styles.li}
              activeClassName={styles.active}
            >
              FAQs
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className={styles.li}
              activeClassName={styles.active}
            >
              Contact Us
            </NavLink>
          </li>
          </ul>
        </div>
      <div className={styles.loginBtn}>
        <p>
          <NavLink
            to="/login"
            activeClassName={styles.active}
          >
            <img src={login} alt="Login Icon" />
          </NavLink>
        </p>
      </div>
    </nav>
  );
}

export default Navbar;
