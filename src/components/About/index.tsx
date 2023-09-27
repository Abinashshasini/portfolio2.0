'use client';
import React, { useEffect, useRef, useState } from 'react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import gsap from 'gsap';
import { motion } from 'framer-motion';
import { isMobile } from 'react-device-detect';
import useMousePosition from '@/hooks/useMousePosition';
import Heading from '@/commons/Heading';
import styles from './style.module.scss';

const phrase =
  "Cool, Calm, and Code-Driven: I'm a software developer who's passionate about crafting exceptional digital experiences. With a blend of creative finesse and technical prowess, I tackle challenges head-on and sculpt user-centric solutions that not only meet but exceed expectations.";

const AboutMe = () => {
  // * Required ref & state to target every span item & container * //
  let spanRef = useRef([]);
  const containerRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  // * hook for mouse position * //
  const { x, y } = useMousePosition({ id: 'about_me' });
  const size = isHovered ? 300 : 40;

  // * Function to split words in letters and pushing them into a span tag * //
  const handleSplitWords = (word: string) => {
    let letters: React.JSX.Element[] = [];
    word.split('').forEach((letter: string, index: number) => {
      letters.push(
        <span
          //@ts-ignore
          ref={(element) => spanRef.current.push(element)}
          key={`lettre_${index}`}
        >
          {letter}
        </span>
      );
    });
    return letters;
  };

  // * Function to split the phares into words * //
  const handleSplitPhrase = () => {
    let body: React.JSX.Element[] = [];
    phrase.split(' ').forEach((word: string, index: number) => {
      const letters = handleSplitWords(word);
      body.push(<p key={`word_${index}`}>{letters}</p>);
    });
    return body;
  };

  // * Function to create Animation * //
  const handleCreateAnimation = () => {
    gsap.to(spanRef.current, {
      opacity: 1,
      ease: 'none',
      stagger: 0.1,
      scrollTrigger: {
        trigger: containerRef.current,
        scrub: true,
        start: '50% bottom',
        // @ts-ignore
        end: `+=${containerRef.current.clientHeight / 1.5}`,
      },
    });
  };

  // * Effect to start the animation * //
  useEffect(() => {
    handleCreateAnimation();
  }, []);

  return (
    <section className={styles.container} ref={containerRef} id="about_me">
      <Heading title="About Me" />
      <div className={styles.warper}>{handleSplitPhrase()}</div>
      <motion.div
        className={styles.mask}
        animate={{
          // @ts-ignore
          WebkitMaskPosition: `${x - size / 2}px ${y - size / 2}px`,
          WebkitMaskSize: isMobile ? 0 : `${size}px`,
        }}
        transition={{ type: 'tween', ease: 'backOut', duration: 0.5 }}
      >
        <p
          onMouseEnter={() => {
            setIsHovered(true);
          }}
          onMouseLeave={() => {
            setIsHovered(false);
          }}
        >
          Embracing the Cool, Maintaining Calm, and Riding the Code Wave:
          I&#39;m a software developer with an unwavering passion for crafting
          exceptional digital experiences. With a unique blend of creativity and
          technical mastery, I boldly confront challenges, sculpting
          user-centric solutions that send ripples through the digital universe.
        </p>
      </motion.div>
    </section>
  );
};

export default AboutMe;
