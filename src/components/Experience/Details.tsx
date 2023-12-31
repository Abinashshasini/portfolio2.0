import React, { FC, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import styles from './style.module.scss';
import { slideUp } from './animation';
import Year from './Year';

interface IProps {
  data: {
    key: number;
    year: number;
    role: string;
    timeline: string;
    companyName: string;
    description: string;
  };
}

const Details: FC<IProps> = ({ data }) => {
  // * State and Refs for experience section * //
  const experienceRef = useRef(null);
  const isInView = useInView(experienceRef);

  return (
    <li key={data.key} className={styles.experienceWrp} ref={experienceRef}>
      <Year value={data.year} reference={experienceRef} />
      <motion.div className={styles.descWrp}>
        <h3>
          {data.role} <span>{data.timeline}</span>
        </h3>
        <h4>{data.companyName}</h4>
        <p>
          {data.description.split(' ').map((word, index) => (
            <span key={index} className={styles.mask}>
              <motion.span
                variants={slideUp}
                custom={index}
                animate={isInView ? 'open' : 'closed'}
                key={index}
              >
                {word}
              </motion.span>
            </span>
          ))}
        </p>
      </motion.div>
    </li>
  );
};

export default Details;
