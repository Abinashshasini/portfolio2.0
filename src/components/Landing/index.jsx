/* eslint-disable @next/next/no-img-element */
'use client';
import React, { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { motion } from 'framer-motion';
import { AiFillGithub } from 'react-icons/ai';
import { slideUp } from './animation';
import styles from './style.module.scss';

const Landing = () => {
  // * Ref to target both texts * //
  const firstTextRef = useRef(null);
  const secondTextRef = useRef(null);
  const slider = useRef(null);
  let xPercent = 0;
  let direction = -1;

  // * Function to handle the infinite scroll animation of text * //
  const handleAnimation = () => {
    if (xPercent < -100) {
      xPercent = 0;
    } else if (xPercent > 0) {
      xPercent = -100;
    }
    gsap.set(firstTextRef.current, { xPercent: xPercent });
    gsap.set(secondTextRef.current, { xPercent: xPercent });
    requestAnimationFrame(handleAnimation);
    xPercent += 0.05 * direction;
  };

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.to(slider.current, {
      scrollTrigger: {
        trigger: document.documentElement,
        scrub: 0.25,
        start: 0,
        end: window.innerHeight,
        onUpdate: (e) => (direction = e.direction * -1),
      },
      x: '-500px',
    });
    requestAnimationFrame(handleAnimation);
  }, []);

  return (
    <motion.main
      variants={slideUp}
      initial="initial"
      animate="enter"
      className={styles.container}
    >
      <div className={styles.imgContainer} data-scroll data-scroll-speed={-0.3}>
        <img
          src="https://dennissnellenberg.com/assets/img/DSC07033.jpg"
          alt="background"
        />
      </div>

      <motion.div
        variants={slideUp}
        className={styles.sliderContainer}
        initial="initial"
        animate="enter"
      >
        <div ref={slider} className={styles.slider}>
          <p ref={firstTextRef}>
            Abinash Shasini <span className="bar">-</span>
          </p>
          <p ref={secondTextRef}>Abinash Shasini -</p>
        </div>
      </motion.div>

      <motion.div
        className={styles.description}
        variants={slideUp}
        initial="initial"
        animate="enter"
      >
        <div data-scroll data-scroll-speed={0.1}>
          <svg
            width="9"
            height="9"
            viewBox="0 0 9 9"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8 8.5C8.27614 8.5 8.5 8.27614 8.5 8L8.5 3.5C8.5 3.22386 8.27614 3 8 3C7.72386 3 7.5 3.22386 7.5 3.5V7.5H3.5C3.22386 7.5 3 7.72386 3 8C3 8.27614 3.22386 8.5 3.5 8.5L8 8.5ZM0.646447 1.35355L7.64645 8.35355L8.35355 7.64645L1.35355 0.646447L0.646447 1.35355Z"
              fill="white"
            />
          </svg>
          <p>Software</p>
          <p>Development Engineer</p>
        </div>
      </motion.div>

      <div className={styles.gitHub}>
        <AiFillGithub />
      </div>
    </motion.main>
  );
};

export default Landing;
