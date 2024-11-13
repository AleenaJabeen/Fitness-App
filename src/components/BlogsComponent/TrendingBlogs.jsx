import React from 'react';
import BlogsCard from './BlogsCard';
import styles from '../../styles/BlogsStyles/TrendingBlogs.module.css';
import img1 from '../../assets/BlogsAssets/Image.png';
import img2 from '../../assets/BlogsAssets/Image (1).png';
import img3 from '../../assets/BlogsAssets/Image (2).png';
import profile1 from '../../assets/BlogsAssets/Avatar (7).png';
import profile2 from '../../assets/BlogsAssets/Avatar (4).png';
import profile3 from '../../assets/BlogsAssets/Avatar (6).png';


function TrendingBlogs() {
    const trendingBlogs = [
        {
          image: img1,
          title: "The Rise of Hybrid Workouts",
          description: "An introductory guide to understanding macronutrients and meal planning, perfect for users just starting their fitness journey.",
          profileImg: profile1,
          name: "Olivia Rhye",
          date: "20 Oct 2024"
        },
        {
          image: img2,
          title: "Mindfulness in Fitness",
          description: "Explore how hybrid workouts are gaining popularity and how to incorporate them into your routine for maximum benefits.",
          profileImg: profile2,
          name: "Natali Craig",
          date: "13 Oct 2024"
        },
        {
          image: img3,
          title: "Nutrition Hacks",
          description: "Learn about the growing trend of integrating mindfulness practices into fitness routines to enhance both mental and physical health.",
          profileImg: profile3,
          name: "Drew Cano",
          date: "10 Jan 2024"
        }
    ]
  return (
    <>
    <section className={styles.trendingBlogs}>
      <div className={styles.trendingWrapper}>
        <h2>Trending</h2>
        <p>Stay updated with the latest fitness trends, tips, and insights to elevate your health journey!</p>
        </div>
        <div className={styles.trendings}>
       {trendingBlogs.map((blog,index)=>(<BlogsCard key={index} image={blog.image} title={blog.title} profileImg={blog.profileImg} description={blog.description} name={blog.name} date={blog.date} />))}
        </div>

    </section>
      
    </>
  )
}

export default TrendingBlogs
