import React from 'react';
import styles from '../../styles/HomeStyles/Purpose.module.css';
import purpose from '../../assets/HomeAssets/purpose.png';

function Purpose() {
  return (
    <>
    <section className={styles.purposeSection}>
        <h2>Purpose</h2>
        <div className={styles.purposeDetail}>
            <img src={purpose} alt="Purpose Side Picture" />
            <div className={styles.detail}>
                <p>It is designed to empower users in achieving
their health and fitness goals through
comprehensive tracking and personalized guidance.</p>
<p>By integrating fitness tracking, nutrition
management, and progress monitoring, the
it allows users to seamlessly maintain a healthy
lifestyle. The inclusion of community features
and personalized coaching provides users with
the support and motivation they need to achieve
their fitness goals</p>
<p>The Fitness Website is designed for a wide range of users</p>
<table>
    <tr VALIGN="TOP">
        <td colSpan={2}>Fitness Enthusiasts</td>
        <td colSpan={2}>Beginners</td>
    </tr>
    <tr VALIGN="TOP">
        <td colSpan={2}>Busy Professionals</td>
        <td colSpan={2}>Individuals</td>
    </tr>
</table>
            </div>
        </div>
    </section>
    </>
  )
}

export default Purpose
