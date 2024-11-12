import React from 'react';
import styles from '../../styles/AboutStyles/About.module.css';
import Reuse from './Reuse';
import vision from '../../assets/AboutAssets/vision.png';


function Vision() {
  return (
    <>
    <section className={styles.visionSection}>
<Reuse title="Our Vision" image={vision} description="To be the foremost fitness platform that inspires and empowers individuals to lead healthier lives by providing a comprehensive, personalized experience. We envision a world where everyone, regardless of their fitness level, has access to the tools, knowledge, and community support they need to reach their health and wellness goals. Through innovation, continuous improvement, and integration with modern technologies, we aim to create a platform that not only tracks progress but motivates, educates, and fosters meaningful connections within a global fitness community. Our vision is to make fitness a sustainable, enjoyable, and life-changing journey for all."/>
    </section>
      
    </>
  )
}

export default Vision
