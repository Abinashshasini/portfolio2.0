import { Dispatch, FC, SetStateAction } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { slide, scale } from '../animation';
import styles from './style.module.scss';
import Magnetic from '@/commons/Magnetic';

type data = {
  title: string;
  href: string;
  index: number;
};
interface IProps {
  data: data;
  isActive: boolean;
  setSelectedIndicator: Dispatch<SetStateAction<string>>;
}

const LinkComponent: FC<IProps> = ({
  data,
  isActive,
  setSelectedIndicator,
}) => {
  const { title, href, index } = data;

  return (
    <motion.div
      className={styles.link}
      onMouseEnter={() => {
        setSelectedIndicator(href);
      }}
      custom={index}
      variants={slide}
      initial="initial"
      animate="enter"
      exit="exit"
    >
      <motion.div
        variants={scale}
        animate={isActive ? 'open' : 'closed'}
        className={styles.indicator}
      ></motion.div>
      <Magnetic>
        <Link href={href}>{title}</Link>
      </Magnetic>
    </motion.div>
  );
};

export default LinkComponent;
