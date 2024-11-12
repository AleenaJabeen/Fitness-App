import React from 'react';
import styles from '../../styles/ContactStyles/Contact.module.css';
import contactImg from '../../assets/ContactAssets/image-removebg-preview - 2024-10-22T234823.173 1 (1).png';

function ContactMessage() {
  return (
    <>
      <section className={styles.contactMsg}>
        <div className={styles.msgSide}>
<h2>Contact Us</h2>
<p>Any question or remarks?Just write us a message!</p>
        </div>
        <div className={styles.msgImage}>
            <img src={contactImg} alt="Contact Message" />
        </div>
      </section>
    </>
  )
}

export default ContactMessage
