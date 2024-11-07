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
      <div
        className={`${styles.openMenuBtn}${isMenuOpen ? styles.hide : ""}`}
      >
        <HiOutlineMenuAlt2 style={{ fontSize: "2rem" }} onClick={toggleMenu} />
      </div>

      <div
        className={`${styles.menuItems} ${isMenuOpen ? styles.showMenu : ""}`}
        onClick={toggleMenu}
      >
        <ul>
          <li className={styles.closeMenuBtn} onClick={toggleMenu}>
            <HiOutlineX style={{ fontSize: "2rem" }} onClick={toggleMenu} />
          </li>
          <li>
            <NavLink
              to="/home"
              className={({ isActive }) =>
                isActive ? `${styles.li} ${styles.active}` : styles.li
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive ? `${styles.li} ${styles.active}` : styles.li
              }
            >
              About Us
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/blogs"
              className={({ isActive }) =>
                isActive ? `${styles.li} ${styles.active}` : styles.li
              }
            >
              Blogs
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/faqs"
              className={({ isActive }) =>
                isActive ? `${styles.li} ${styles.active}` : styles.li
              }
            >
              FAQs
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive ? `${styles.li} ${styles.active}` : styles.li
              }
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
            className={({ isActive }) =>
              isActive ? `${styles.li} ${styles.active}` : styles.li
            }
          >
            <img src={login} alt="Login Icon" />
          </NavLink>
        </p>
      </div>
    </nav>
  );
}

export default Navbar;
