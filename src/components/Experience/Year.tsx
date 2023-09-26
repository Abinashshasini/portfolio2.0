import React, { FC } from 'react';
import { motion, useScroll } from 'framer-motion';
import styles from './style.module.scss';

interface IProps {
  value: number;
  reference: any;
}

const Year: FC<IProps> = ({ value, reference }) => {
  // * hooks to add the vertical scroll bar animation * //
  const { scrollYProgress } = useScroll({
    target: reference,
    offset: ['center end', 'center center'],
  });

  return (
    <figure className={styles.figure}>
      <svg viewBox="0 0 100 100">
        <circle cx="50" cy="50" r="48" className={styles.circle1} />
        <motion.circle
          cx="50"
          cy="50"
          r="48"
          className={styles.circle2}
          style={{
            pathLength: scrollYProgress,
          }}
        />
      </svg>
      <p>{value}</p>
    </figure>
  );
};

export default Year;
