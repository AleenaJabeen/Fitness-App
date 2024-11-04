import React from 'react';
import styles from '../../styles/SignupStyles/Sigup.module.css';
import crossIcon from '../../assets/SignupAssets/x-01.png';
import arrow from '../../assets/SignupAssets/Icon.png';
import google from '../../assets/SignupAssets/image-removebg-preview (20) 1.png';
import fb from '../../assets/SignupAssets/image-removebg-preview (21) 1.png';
import { Link } from 'react-router-dom';

function Signup() {
  return (
    <>
      <section className={styles.signup}>
        <div className={styles.wrapper}>
        <Link to={"/home"} className={styles.homeBtn}><img src={crossIcon} alt="Cancel Signup icon" /></Link>
        <form className={styles.signupForm}>
            <h3>Sign Up</h3>
            <input type="text" placeholder='Full name'/>
            <input type="email" placeholder='Email' />
            <input type="password" placeholder='Password' />
            <input type="password"  placeholder='Confirm Password'/>
<Link to={"/login"} className={styles.signupBtn}>Sign Up <img src={arrow} alt="arrow" /></Link>
<div className={styles.socialIcons}>
            <div className={styles.google}><img src={google} alt="Google icon" /></div>
            <div className={styles.facebook}><img src={fb} alt="Facebook icon" /></div>
        </div>
        <div className={styles.account}>Already Have An Account?<span>Login</span></div>
        </form>
        
        </div>
      </section>
    </>
  )
}

export default Signup
