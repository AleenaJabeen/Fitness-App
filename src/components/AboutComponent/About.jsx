import React from 'react';
import styles from '../../styles/AboutStyles/About.module.css';
import Mission from './Mission';
import Vision from './Vision';
import MainAbout from './MainAbout';

function About() {
  return (
    <>
      <section className={styles.aboutSection}>
        {/* <MainAbout/> */}
        <Mission/>
        <Vision/>

      </section>
    </>
  )
}

export default About
