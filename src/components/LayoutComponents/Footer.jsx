import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../../styles/LayoutStyles/Footer.module.css';
import sideImage from '../../assets/Layoutassets/image-removebg-preview - 2024-10-17T184228.352 1.png';
import googleIcon from '../../assets/Layoutassets/Social Icons (2).png';
import insta from '../../assets/Layoutassets/Social Icons (1).png';
import fb from '../../assets/Layoutassets/Social Icons.png';
import telephoneIcon from '../../assets/Layoutassets/image-removebg-preview - 2024-10-20T192003.787 1.png'
import mapIcon from '../../assets/Layoutassets/image-removebg-preview - 2024-10-20T192158.025 1.png';
import youtube from '../../assets/Layoutassets/Social Icons (3).png'

function Footer() {
  return (
    <>
      <footer className={styles.footer}>
        <div className={styles.wrapper}>
        <div className={styles.fitnessObjective}>
          <div className={styles.gymName}>
            <div className={styles.circle}></div>
            <h3>Fitness Training</h3>
          </div>
          <p>
            Transform your body with Fitness Training, Your Trusted Partner in Fitness with over <span>5 Years</span> of Experience.
            We offer Workout Tracking, Nutrition Tracking, Progress Tracking, Challenges and Achievements, Community Features. <span>Join Our Community</span> 
            and Start your Journey Towards a Healthier, Stronger You. Ready to make a Change?
          </p>
          <div className={styles.socialContact}>
            <img src={fb} alt="Facebook Icon" />
            <img src={insta} alt="Instagram Icon" />
            <img src={youtube}alt="Youtube Icon" />
          </div>
        </div>
        <div className={styles.company}>
          <h4>Company</h4>
          <ul className={styles.sections}>
            <li><Link className={styles.li} to={"/"}>About Us</Link></li>
            <li><Link className={styles.li} to={"/"}>Blogs</Link></li>
            <li><Link className={styles.li} to={"/"}>FAQs</Link></li>
          </ul>
        </div>
        <div className={styles.contacts}>
          <h4>Contact Us</h4>
          <ul className={styles.contactSection}>
            <li><img src={mapIcon} alt="Map Icon" />USA, Washington DC</li>
            <li><img src={telephoneIcon} alt="Telephone Icon" />1234-5678</li>
            <li><img src={googleIcon} alt="Google Icon" />fitnesstraining123@gmail.com</li>
          </ul>
        </div>
        <div className={styles.sideImage}>
          <img src={sideImage} alt="Side Image" />
        </div>
        
        </div>
        <div className={styles.copyRight}>Fitness Training &copy; 2024 All Copyrights Reserved</div>
      </footer>
      
    </>
  );
}

export default Footer;
