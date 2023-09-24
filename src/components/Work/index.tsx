import Heading from '@/commons/Heading';
import Image from 'next/image';
import React, { FC } from 'react';
import ImageOne from '../../assets/image1.png';
import ImageTwo from '../../assets/image2.png';
import ImageThree from '../../assets/image3.png';
import { motion } from 'framer-motion';
import styles from './style.module.scss';

const Work: FC = () => {
  const slideUp = {
    initial: {
      y: 200,
    },
    enter: {
      y: 0,
      transition: { duration: 1, ease: [0.33, 1, 0.68, 1], delay: 1.5 },
    },
  };
  return (
    <div className={styles.container}>
      <Heading title="What i do" />
      <div className={styles.wraper}>
        <motion.div
          className={styles.warperContainer}
          variants={slideUp}
          initial="initial"
          animate="enter"
        >
          {/* <Image src={ImageOne.src} alt="image" width={100} height={100} /> */}
          <h2>Apps Development</h2>
          <p>
            I build scalable websites from scratch that fit seamlessly with
            design. My focus is on micro animations, transitions and
            interaction. For content management I use Kirby CMS.
          </p>
        </motion.div>
        <motion.div
          className={styles.warperContainer}
          variants={slideUp}
          initial="initial"
          animate="enter"
        >
          {/* <Image src={ImageTwo.src} alt="image" width={100} height={100} /> */}
          <h2>Web Development</h2>
          <p>
            I build scalable websites from scratch that fit seamlessly with
            design. My focus is on micro animations, transitions and
            interaction. For content management I use Kirby CMS.
          </p>
        </motion.div>
        <motion.div
          className={styles.warperContainer}
          variants={slideUp}
          initial="initial"
          animate="enter"
        >
          {/* <Image src={ImageThree.src} alt="image" width={100} height={100} /> */}
          <h2>Backend Development</h2>
          <p>
            I build scalable websites from scratch that fit seamlessly with
            design. My focus is on micro animations, transitions and
            interaction. For content management I use Kirby CMS.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Work;
