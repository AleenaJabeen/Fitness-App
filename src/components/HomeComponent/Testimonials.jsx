import React from 'react';
import styles from '../../styles/HomeStyles/Testimonials.module.css';
import TestimononialsCard from './TestimononialsCard';
import testimonial2 from '../../assets/HomeAssets/Testimonial1.png';
import testimonial1 from '../../assets/HomeAssets/Testimonial2.png';
import rating from '../../assets/HomeAssets/Rating.png'
import rate from '../../assets/HomeAssets/rating2.png';


function Testimonials() {
  return (
    <>
    <section className={styles.customerTestimonials}>
      <div className={styles.testimonialWrapper}>
        <h2>Customer Testimonials</h2>
        </div>
        <div className={styles.testimonials}>
        <TestimononialsCard headline="Sara D., Lost 20 lbs in 3 months" description="This website has kept me consistent and motivated! The workout plans are easy to follow, and the progress tracking is a huge help. The community challenges make it even more fun – I’ve met great people who keep me accountable." img={testimonial1} rating={rating}/>
        <TestimononialsCard headline="Ayra M., Marathon Runner" description="The personalized workout plans kept me on track for my race and made training so much easier. The app tailored everything to my schedule and fitness level, which was a huge help. I also loved the progress tracking and reminders that kept me motivated along the way. Highly recommend!" img={testimonial2} rating={rating} rate={rate}/>
        </div>
    </section>
      
    </>
  )
}

export default Testimonials
