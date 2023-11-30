"use client";

import React from 'react';
import { useRouter } from 'next/navigation';
import styles from './LoginForm.module.css'; // Import your CSS module

// // components/LoginForm.js
// import React from 'react';
// import { useRouter } from 'next/router';
// import styles from './LoginForm.module.css'; // Import your CSS module

const LoginForm = () => {
  const router = useRouter();

  const handleSubmit = (event) => {
    event.preventDefault();
    // Add your form submission logic here
  };

  const handleSkip = () => {
    router.push('/buy/BuyingProcess');
  };

  return (
    <form onSubmit={handleSubmit} className={styles.loginForm}>
    {/* <form onSubmit={handleSubmit} className={styles.loginForm}> */}
      <div className={styles.imgContainer}>
        <img src="https://tse1.mm.bing.net/th?id=OIP.BAR3X7gSZGFhTRI8-7sazgAAAA&pid=Api&P=0&h=180" alt="Avatar" className={styles.avatar} />
      </div>

      <div className={styles.container}>
        <label htmlFor="uname">
          <b>Username</b>
        </label>
        <input type="text" placeholder="Enter Username" name="uname" required />

        <label htmlFor="psw">
          <b>Password</b>
        </label>
        <input type="password" placeholder="Enter Password" name="psw" required />

        <label>
        <button type="submit" className={styles.loginFormButton}>
        Login
      </button>
      </label>

        <label>
          <input type="checkbox" defaultChecked name="remember" /> Remember me
        </label>
      </div>

      <div className={styles.container} style={{ backgroundColor: '#f1f1f1' }}>
        <button type="button" className={styles.cancelBtn}>
          Cancel
        </button>
        <span className={styles.psw}>
          Forgot <a href="#">password?</a>
        </span>
        <button type="button" className={styles.skipBtn} onClick={handleSkip}>
          Skip
        </button>
      </div>
    </form>
    // </form>
  );
};

export default LoginForm;
