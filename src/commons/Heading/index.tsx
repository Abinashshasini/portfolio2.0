import React, { FC } from 'react';
import styles from './style.module.scss';

interface IProps {
  title: string;
}

const Heading: FC<IProps> = ({ title }) => {
  return (
    <div
      className={styles.headingContainer}
      data-scroll
      data-scroll-speed={0.05}
    >
      <h2>{title}</h2>
    </div>
  );
};

export default Heading;
