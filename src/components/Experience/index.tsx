import React, { FC, useRef } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import Heading from '@/commons/Heading';
import Details from './Details';
import styles from './style.module.scss';

const experiences = [
  {
    key: 1,
    year: 2022,
    companyName: 'Justdial.com',
    timeline: 'Feb 2022 - Present',
    role: 'Software Engineer',
    description:
      'I partnered with designers and backend developers to create responsive, visually pleasing interfaces in React and JavaScript. I improved cross-browser compatibility and boosted application speed by 30% through performance optimization. My role in enhancing business leads functionality led to a 40% increase in lead generation and a 25% rise in daily user logins.',
  },
  {
    key: 2,
    year: 2021,
    companyName: 'ThinkZone India pvt, ltd',
    timeline: 'Feb 2021 - Jan 2021',
    role: 'Software Developer',
    description:
      'Led React development for a data-rich report website with interactive visuals, emphasizing modular, efficient code. Employed Charts.js for compelling data presentation. Migrated a complex Ionic Angular app to React Native, prioritizing high-performance interfaces and ensuring cross-platform consistency.',
  },
  {
    key: 3,
    year: 2021,
    companyName: 'Exposys Data Labs',
    timeline: 'Jan 2021 - Feb 2021',
    role: 'Intern',
    description:
      'I acquired proficiency in React and JavaScript, engaging in various software development activities. I built a fully functional language translator supporting 30+ languages using IBM Watson language-translator API, Next.js, Node.js, and Express, deploying it on Vercel.',
  },
];

const Experience: FC = () => {
  // * State and Refs for experience section * //
  const containerRef = useRef(null);
  const experienceRef = useRef({});

  // * hooks to add the vertical scroll bar animation * //
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'center start'],
  });
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <section className={styles.container} ref={containerRef}>
      <div className={styles.warper}>
        <Heading title="Experience" />
        {/* <motion.div
          className={styles.progressBar}
          style={{ scaleY: scrollYProgress }}
        ></motion.div> */}
        <ul className={styles.expContainer}>
          {experiences.map((elemnet) => (
            <Details data={elemnet} key={elemnet.key} />
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Experience;
