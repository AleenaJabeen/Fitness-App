import React from 'react';
import styles from '../../styles/FAQsStyles/FaqsCategory.module.css';

function CategoryCard(props) {
  return (
    <>
    <section className={styles.faqCard}>
        <div className={styles.title}><h3>{props.title}</h3></div>
        <div className={styles.description}><p>{props.description}</p></div>
        <div className={styles.moreBtn}>
        <button>Learn more</button></div>
    </section>
      
    </>
  )
}

export default CategoryCard
