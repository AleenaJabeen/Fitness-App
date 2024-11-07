import React from 'react';
import styles from '../../styles/HomeStyles/KeyFeatures.module.css';


function Card(props) {
  return (
    <>
      <section className={styles.featureCard}>
        <img src={props.image} alt="" />
        <h3>{props.title}</h3>
        <button>Read More</button>
      </section>
    </>
  )
}

export default Card
