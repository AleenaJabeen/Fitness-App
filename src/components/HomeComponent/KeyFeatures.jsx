import React from 'react';
import styles from '../../styles/HomeStyles/KeyFeatures.module.css';
import FeaturesCard from './FeaturesCard';
import trackProgress from '../../assets/HomeAssets/image-removebg-preview - 2024-10-15T173629.673 1.png';
import nutritional from '../../assets/HomeAssets/image-removebg-preview - 2024-10-15T182724.668 1.png';
import healthmetrics from '../../assets/HomeAssets/image-removebg-preview - 2024-10-16T142545.160 1.png';
import community from '../../assets/HomeAssets/image-removebg-preview - 2024-10-16T144805.834 1.png';

function KeyFeatures() {
  return (
    <>
      <div className={styles.keyFeatures}>
        <h2>Key Features</h2>
        <div className={styles.featureWrapper}>
<FeaturesCard title="Track Progress" image={trackProgress}/>
<FeaturesCard title="Community Engagement" image={community}/>
<FeaturesCard title="Health Metrics Monitoring" image={healthmetrics}/>
<FeaturesCard title="Nutritional Tracking" image={nutritional}/>



        </div>
      </div>
    </>
  )
}

export default KeyFeatures
