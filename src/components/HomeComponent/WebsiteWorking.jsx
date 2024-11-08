import React from "react";
import WorkingCard from "./WorkingCard";
import working1 from '../../assets/HomeAssets/working1.png';
import working2 from '../../assets/HomeAssets/working2.png';
import working3 from '../../assets/HomeAssets/working3.png';
import styles from '../../styles/HomeStyles/WebsiteWorking.module.css';

function WebsiteWorking() {
  return (
    <>
      <section className={styles.workingSection}>
        <h2>See How Our Website Works</h2>
        <p>Explore our easy-to-use tools designed to help you stay on track.</p>
        <div className={styles.cardWrapper}>
          <WorkingCard
            title="Workout Log"
            description="Easily track your sets, reps, and exercises, customize routines, and monitor your progress to stay on top of your fitness goals." img={working1}
          />
          <WorkingCard
            title="Nutrition Tracker"
            description="Log your meals, track calories, and monitor your macronutrients to stay on top of your nutrition and reach your fitness goals." img={working2}
          />
          <WorkingCard
            title="Community Challenges"
            description="Join fun fitness challenges, compete with friends, and stay motivated with a supportive community" img={working3}
          />
        </div>
      </section>
    </>
  );
}

export default WebsiteWorking;
