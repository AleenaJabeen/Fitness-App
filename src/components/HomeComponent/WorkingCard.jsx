import React from 'react';
import styles from '../../styles/HomeStyles/WebsiteWorking.module.css';


function WorkingCard(props) {
  return (
    <>
      <div className={styles.workingCard}>
        <img src={props.img} alt={props.title} />
        <h3>
{props.title}
        </h3>
        <p>{props.description}</p>
      </div>
    </>
  )
}

export default WorkingCard
