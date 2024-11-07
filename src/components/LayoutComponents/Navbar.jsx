import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from '../../styles/LayoutStyles/Navbar.module.css';
import login from '../../assets/Layoutassets/userprofile.png';

function Navbar() {
  return (
    <nav className={styles.navbar}>
      <ul>
        <li>
          <NavLink 
            to={"/home"}
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
        <li>
          <NavLink 
            to="/login" 
            className={styles.li} 
            activeClassName={styles.active}
          >
            <img src={login} alt="Login Icon" />
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
