import React from 'react';
import styles from './Loader.module.css';

export const Loader = () => {
  return (
    <div className={styles.container}>
      <div className={styles.diamond}>
        <div className={styles.inner}></div>
      </div>
      <span className={styles.text}>AZA LUXURY ATELIER</span>
    </div>
  );
};

export default Loader;
