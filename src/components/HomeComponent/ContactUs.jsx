import React from 'react';
import arrow from '../../assets/HomeAssets/Polygon 1.png';
import contactImg from '../../assets/HomeAssets/contact.png';
import styles from '../../styles/HomeStyles/ContactUs.module.css';


function ContactUs() {
  return (
    <>
      <section className={styles.contactSection}>
        <div className={styles.contactInfo}>
        <h3>Contact us</h3>
        <h2>
        Send Us A Message
        & Join Our Team!
        </h2>
        <form>
            <div className={styles.inputOne}>
            <div><input type="text"  placeholder='Name'/></div>
            <div><input type="text" placeholder='Phone' /></div></div>
            <div className={styles.inputTwo}>
            <div ><input type="email" placeholder='Email' /></div>
            <div><input type="text" placeholder='Subject' /></div></div>
            <div><textarea ></textarea></div>
            <button className={styles.sendBtn}>
         Send now
          <div className={styles.icon}>
            <img src={arrow} alt="Arrow icon" />
          </div>
        </button>
        </form>
        </div>
        <div className={styles.contactImg}>
            <img src={contactImg} alt="Contact Image" />
        </div>
      </section>
    </>
  )
}

export default ContactUs
