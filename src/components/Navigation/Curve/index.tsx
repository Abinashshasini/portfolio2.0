import React from 'react';
import { motion } from 'framer-motion';
import { curve } from '../animation';
import styles from './styles.module.scss';

export default function Curve() {
  return (
    <svg className={styles.svgCurve}>
      <motion.path
        variants={curve}
        initial="initial"
        animate="enter"
        exit="exit"
      ></motion.path>
    </svg>
  );
}
