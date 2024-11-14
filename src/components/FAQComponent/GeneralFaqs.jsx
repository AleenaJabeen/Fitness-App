import React from 'react';
import styles from '../../styles/FAQsStyles/GeneralFaqs.module.css';
import image from '../../assets/FAQsAssets/image 16.png';
import FaqCard from './FaqCard';


function GeneralFaqs() {
  const faqs=["What platforms will the Fitness App be available on","How does the app website with tracking progress?","Is there personalized coaching available in the website?","What premium features does the website offer?" ]
  return (
    <>
    <section className={styles.generalFaqs}>
        <div className={styles.leftFaqs}>
            <h2>General FAQs</h2>
           {faqs.map((faq,index)=>(<FaqCard key={index} faq={faq}/>))}
        </div>
        <div className={styles.rightFaqs}>
            <img src={image} alt="Faq" />
        </div>
    </section>
      
    </>
  )
}

export default GeneralFaqs
