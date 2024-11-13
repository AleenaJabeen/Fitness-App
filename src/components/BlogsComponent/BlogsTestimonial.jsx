import React from 'react';
import styles from '../../styles/BlogsStyles/BlogsCard.module.css';
import BlogsCard from './BlogsCard';
import img1 from '../../assets/BlogsAssets/Image.png';
import img2 from '../../assets/BlogsAssets/Image (1).png';
import img3 from '../../assets/BlogsAssets/Image (2).png';
import profile1 from '../../assets/BlogsAssets/Avatar (5).png';
import profile2 from '../../assets/BlogsAssets/Avatar.png';
import profile3 from '../../assets/BlogsAssets/Avatar (1).png';
import profile4 from '../../assets/BlogsAssets/Avatar (3).png';
import profile5 from '../../assets/BlogsAssets/Avatar (4).png';
import profile6 from '../../assets/BlogsAssets/Avatar (2).png';

const blogsData = [
  {
    image: img1,
    title: "Nutrition Basics for Beginners",
    description: "An introductory guide to understanding macronutrients and meal planning, perfect for users just starting their fitness journey.",
    profileImg: profile1,
    name: "Olivia Rhye",
    date: "20 Oct 2024"
  },
  {
    image: img2,
    title: "Healthy Eating on a Budget",
    description: "Strategies for meal planning and nutrition tracking without breaking the bank, appealing to cost-conscious users.",
    profileImg: profile2,
    name: "Phoenix Baker",
    date: "19 Jan 2024"
  },
  {
    image: img3,
    title: "The Benefits of Tracking Your Fitness Progress",
    description: "An exploration of why logging workouts and nutrition can lead to better results and how to interpret progress graphs and statistics.",
    profileImg: profile3,
    name: "Lana Steiner",
    date: "18 Jan 2022"
  },
  {
    image: img1,
    title: "Healthy Eating on a Budget",
    description: "Strategies for meal planning and nutrition tracking without breaking the bank, appealing to cost-conscious users.",
    profileImg: profile4,
    name: "Sarah Olivia",
    date: "20 Aug 2024"
  },
  {
    image: img2,
    title: "Navigating Fitness Myths: What You Need to Know",
    description: "Debunking common fitness myths and misconceptions, providing users with reliable information to support their journey.",
    profileImg: profile5,
    name: "Dr John",
    date: "19 Jun 2021"
  },
  {
    image: img3,
    title: "Top 10 Home Workouts You Can Do Anywhere",
    description: "A curated list of effective workouts that require minimal equipment, catering to users looking for flexibility in their fitness routines.",
    profileImg: profile6,
    name: "Joseph Care",
    date: "18 Jan 2023"
  }
];

function BlogsTestimonial() {
  return (
    <section className={styles.blogTestimonial}>
      {blogsData.map((blog, index) => (
        <BlogsCard
          key={index}
          image={blog.image}
          title={blog.title}
          description={blog.description}
          profileImg={blog.profileImg}
          name={blog.name}
          date={blog.date}
        />
      ))}
    </section>
  );
}

export default BlogsTestimonial;
