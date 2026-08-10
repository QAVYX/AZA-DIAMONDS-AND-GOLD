import React from 'react';
import { motion } from 'framer-motion';
import styles from './Card.module.css';

export const Card = ({
  children,
  variant = 'default', // 'default' | 'glass' | 'dark'
  hoverEffect = true,
  className = '',
  onClick
}) => {
  const cardClass = `${styles.card} ${styles[variant]} ${hoverEffect ? styles.hoverable : ''} ${className}`;

  return (
    <motion.div
      className={cardClass}
      onClick={onClick}
      whileHover={hoverEffect ? { y: -8 } : {}}
      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
};

export default Card;
