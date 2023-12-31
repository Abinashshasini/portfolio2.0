import React from 'react';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import Magnetic from '../Magnetic';
import styles from './style.module.scss';

export default function Button({
  children,
  backgroundColor = '#455CE9',
  ...attributes
}) {
  // * Required refs * //
  const circle = useRef(null);
  let timeline = useRef(null);
  let timeoutId = null;

  useEffect(() => {
    timeline.current = gsap.timeline({ paused: true });
    timeline.current
      .to(
        circle.current,
        { top: '-25%', width: '150%', duration: 0.4, ease: 'power3.in' },
        'enter'
      )
      .to(
        circle.current,
        { top: '-150%', width: '125%', duration: 0.25 },
        'exit'
      );
  }, []);

  // * Function to keep track of mouse enter * //
  const handleMouseEnter = () => {
    if (timeoutId) clearTimeout(timeoutId);
    timeline.current.tweenFromTo('enter', 'exit');
  };

  // * Function to keep track of mouse leave * //
  const handleMouseLeave = () => {
    timeoutId = setTimeout(() => {
      timeline.current.play();
    }, 300);
  };

  return (
    <Magnetic>
      <div
        className={styles.roundedButton}
        style={{ overflow: 'hidden' }}
        onMouseEnter={() => {
          handleMouseEnter();
        }}
        onMouseLeave={() => {
          handleMouseLeave();
        }}
        {...attributes}
      >
        {children}
        <div
          ref={circle}
          style={{ backgroundColor }}
          className={styles.circle}
        ></div>
      </div>
    </Magnetic>
  );
}
