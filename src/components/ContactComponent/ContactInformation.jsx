import React from 'react';
import styles from '../../styles/ContactStyles/Contact.module.css';
import gmail from '../../assets/ContactAssets/Vector.png';
import phone from '../../assets/ContactAssets/image-removebg-preview - 2024-10-20T192003.787 1.png';
import location from '../../assets/ContactAssets/image-removebg-preview - 2024-10-20T192158.025 1.png'

function ContactInformation() {
  return (
    <>
      <section className={styles.contactInfo}>
        <h2>Contact Information</h2>
        <p>Say something to start a live chat.</p>
        <div className={styles.contactSource}>
            <div className={styles.contactIcons}>
                <img src={location} alt="Map Icon" />
                <p>USA,Washington DC</p>
            </div>
            <div className={styles.contactIconsPhone}>
                <img src={phone} alt="Phone Icon" />
                <p>1234-5678</p>
            </div>
            <div className={styles.contactIcons}>
                <img src={gmail} alt="Google Icon" />
                <p>fitnesstraining123@gmail.com</p>
            </div>
        </div>
      </section>
    </>
  )
}

export default ContactInformation
