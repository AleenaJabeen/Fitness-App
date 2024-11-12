import React from 'react';
import styles from '../../styles/AboutStyles/About.module.css';
import Reuse from './Reuse';
import mission from '../../assets/AboutAssets/mission.png';

function Mission() {
  return (
    <>
    <section className={styles.missionSection}>
<Reuse title="Our Mission" image={mission} description="To empower individuals on their fitness journey by offering a comprehensive, user-friendly platform that helps track workouts, monitor nutrition, and measure progress. Our mission is to foster a supportive community where users can connect, stay motivated, and achieve their health goals with personalized coaching, engaging challenges, and seamless integration of modern fitness tools and wearable devices."/>
    </section>
      
    </>
  )
}

export default Mission
