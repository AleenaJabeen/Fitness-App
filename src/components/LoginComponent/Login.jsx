import React from 'react'
import styles from '../../styles/SignupStyles/Sigup.module.css';
import crossIcon from '../../assets/SignupAssets/x-01.png';
import arrow from '../../assets/SignupAssets/Icon.png';
import { Link } from 'react-router-dom';

function Login() {
  return (
    <>
      <section className={styles.signup}>
        <div className={styles.wrapper}>
        <Link to={"/home"} className={styles.homeBtn}><img src={crossIcon} alt="Cancel Signup icon" /></Link>
        <form className={styles.signupForm}>
            <h3>Login</h3>
         
            <input type="email" placeholder='Email' />
            <input type="password" placeholder='Password' />
            <div className={styles.frgtPass}>Forgot Passowrd?</div>
           
<Link to={"/login"} className={styles.signupBtn}>Login<img src={arrow} alt="arrow" /></Link>

        <div className={styles.account}>Don't Have An Account?<span>SignUp</span></div>

        </form>
        
        </div>
      </section>
    </>
  )
}

export default Login
