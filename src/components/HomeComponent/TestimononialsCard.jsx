import React, { useState } from 'react';
import styles from '../../styles/HomeStyles/Testimonials.module.css';

function TestimononialsCard(props) {
  return (
    <>
      <section className={styles.testimonialCard}>
        <img src={props.img} alt={props.headline} className={styles.midImg}/>
        <h3>{props.headline}</h3>
        <p>{props.description}</p>
        <div className={styles.ratings}>
            <img src={props.rating} alt="Rating" />
            <img src={props.rating} alt="Rating" />
            <img src={props.rating} alt="Rating" />
            <img src={props.rating} alt="Rating" />
            <img src={props.rate?props.rate:props.rating} alt="Rating" />
        </div>
      </section>
    </>
  )
}

export default TestimononialsCard
