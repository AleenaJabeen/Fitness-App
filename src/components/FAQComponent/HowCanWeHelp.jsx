import React from 'react';
import styles from '../../styles/FAQsStyles/HowCanWeHelp.module.css';
import rightImg from '../../assets/FAQsAssets/Figure → footer_left_icon.png (1).png';
import leftImg from '../../assets/FAQsAssets/Figure → footer_left_icon.png.png';
import search from '../../assets/FAQsAssets/search icon.png';

function HowCanIHelp() {
  return (
    <>
    <section className={styles.helpSection}>
        <div className={styles.img1}>
          <img src={leftImg} alt="Left" />
        </div>
        <div className={styles.helpText}>
            <h2>How can we help?</h2>
            <div className={styles.helpInput}><input type="text"  placeholder='Ask a Question'/><img src={search} alt="Search Icon" /></div>
        </div>
        <div className={styles.img2}>
          <img src={rightImg} alt="Right" />
        </div>
    </section>
      
    </>
  )
}

export default HowCanIHelp
