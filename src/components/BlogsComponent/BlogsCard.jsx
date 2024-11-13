import React from 'react';
import styles  from '../../styles/BlogsStyles/BlogsCard.module.css';
import rightArrow from '../../assets/BlogsAssets/arrow-up-right.png';

function BlogsCard(props) {
  return (
    <>
      <section className={styles.blogCard}>
        <img src={props.image} alt={props.title} className={styles.blogImg} />
        <h3>{props.title} <span><img src={rightArrow} alt="Right Arrow" /></span></h3>
        <p>{props.description}</p>
        <div className={styles.profileBox}>
            <img src={props.profileImg} alt={props.name} />
            <div className={styles.profileDetail}>
                <h4>{props.name}</h4>
                <p>{props.date}</p>
            </div>
        </div>
      </section>
    </>
  )
}

export default BlogsCard
