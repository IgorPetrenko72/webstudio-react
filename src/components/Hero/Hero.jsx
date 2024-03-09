import React from 'react';
import styles from './Hero.module.css';
import globalStyles from '../styles.module.css';
import Container from '../Container.module.css';
import btn from '../Btn.module.css';
import colors from '../colors.module.css';

export const HeroSection = () => {
  return (
    <section className={`${styles.hero} ${styles.overlay} ${globalStyles.overlay}`} style={{ color: colors['--main-title'] }}>
      <div className={Container.container}>
        <h1 className={styles['main-title']} style={{ color: colors['--color-btn'] }}>Ефективні рішення для вашого бізнесу</h1>
              <button className={`${btn.heroButton} ${btn.btn}`} style={{ color: colors['--button-color'] }} >Замовити послугу</button>
      </div>
    </section>
  );
};


