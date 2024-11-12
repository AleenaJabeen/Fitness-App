import React from "react";
import styles from "../../styles/AboutStyles/About.module.css";
import mainAbout from '../../assets/AboutAssets/mainAbout.png';

function MainAbout() {
  return (
    <>
      <section className={styles.mainAboutSection} style={{backgroundImage:`url(${mainAbout})`}}>
        <div className={styles.mainAbout}>
          <h2>About Us</h2>
          <p>
            At fitness training, we’re dedicated to helping everyone achieve
            their fitness goals, whether you're just starting out or an
            experienced athlete. Our app offers personalized workout plans,
            nutrition tracking, and a supportive community to keep you
            motivated. We believe in making fitness accessible, fun, and
            effective for everyone. Join us in transforming your health and
            wellness journey!
          </p>
          <button>Get Started</button>
        </div>
      </section>
    </>
  );
}

export default MainAbout;
