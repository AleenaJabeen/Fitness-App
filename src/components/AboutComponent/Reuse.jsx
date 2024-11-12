import React from 'react';
import styles from '../../styles/AboutStyles/About.module.css';

function Reuse(props) {
  return (
    <>
    <div className={styles.sideImage}>
    <img src={props.image} alt={props.title} /></div>
    <div className={styles.textSide}>
        <h2>{props.title}</h2>
        <p>{props.description}</p>
    </div>

      
    </>
  )
}

export default Reuse
