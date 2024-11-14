import React from 'react';
import styles from '../../styles/FAQsStyles/GeneralFaqs.module.css';
import arrowIcon from '../../assets/FAQsAssets/Shape.png';


function FaqCard(props) {
  return (
    <>
    <div className={styles.gfaqCard}>
        <h3>{props.faq}</h3>
<img src={arrowIcon} alt="Up Down Icon" />
    </div>
      
    </>
  )
}

export default FaqCard
