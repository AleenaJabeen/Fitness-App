import React from "react";
import styles from "../../styles/HomeStyles/HeroSection.module.css";
import arrow from '../../assets/HomeAssets/Polygon 1.png'

function HeroSection() {
  return (
    <>
      <section className={styles.heroSection}>
        <h2>
          Welcome to <br />
          <span>Fitness Training</span>
        </h2>
        <h3> Transform Your Fitness Journey with Expert Guidance!.</h3>
        <p>
          At Fitness Training, we offer personalized training programs designed
          to help you achieve your fitness goals. From strength training to
          wellness coaching, we’re here to support you every step of the way.
        </p>
        <button className={styles.scheduleBtn}>
          Schedule Your Free Session Today
          <div className={styles.icon}>
            <img src={arrow} alt="Arrow icon" />
          </div>
        </button>
      </section>
    </>
  );
}

export default HeroSection;
