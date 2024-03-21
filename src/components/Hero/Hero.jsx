import React from 'react';
import styles from './Hero.module.css';



export const HeroSection = () => {
  return (
    <section className={`${styles.hero} ${styles.overlay} `} >
      <div className='container'>
        <h1 className={styles.mainTitle} >EFFECTIVE SOLUTIONS FOR YOUR BUSINESS</h1>
              <button className='heroButton btn'  >Request our service</button>
      </div>
    </section>
  );
};


