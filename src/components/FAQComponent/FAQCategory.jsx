import React from 'react';
import styles from '../../styles/FAQsStyles/FaqsCategory.module.css';
import CategoryCard from './CategoryCard';

function FAQCategory() {
  const faqData=[
    {
      title:"Common Questions",
      description:"Frequently asked questions about features user expectations, and engagement strategies in fitness website."
    }, {
      title:"Technical Questions",
      description:"Critical technical queries on integration, security,scalability, and performance optimization for the app."
    }, {
      title:"Related Topics",
      description:"Key themes related to website design, wearables,data security, monetization, and community building"
    }, {
      title:"Topic Navigation",
      description:"A guide for exploring the structure, features,and technical requirements of the fitness website."
    }
  ];
  return (
    <>
    <setion className={styles.faqCategories}>
        <h2>FAQ Categories</h2>
        <setion className={styles.faqCategory}>
        {faqData.map((faq,index)=>(<CategoryCard key={index} title={faq.title} description={faq.description}/>))}
        </setion>
    </setion>
      
    </>
  )
}

export default FAQCategory
