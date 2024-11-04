import React from 'react';
import styles from '../../styles/LoginStyles/Login.module.css';
import crossIcon from '../../assets/SignupAssets/x-01.png';
import arrow from '../../assets/SignupAssets/Icon.png';
import { Link } from 'react-router-dom';

function Login() {
  return (
    <>
      <section className={styles.login}>
        <div className={styles.wrapper}>
          <Link to={"/home"} className={styles.homeBtn}><img src={crossIcon} alt="Cancel Login icon" /></Link>
          <form className={styles.loginForm}>
            <h3>Login</h3>
            <input type="email" placeholder='Email' />
            <input type="password" placeholder='Password' />
            <div className={styles.frgtPass}>Forgot Passowrd?</div>
            {/* Button to submit login */}
            <Link to={"/home"} className={styles.loginBtn}>
              Login <img src={arrow} alt="arrow" />
            </Link>

            <div className={styles.account}>
              Don't Have An Account? <Link to={"/signup"}>Sign Up</Link>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}

export default Login;
