'use client';
import { useEffect, useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import Preloader from '@/components/Preloader';
import Landing from '@/components/Landing';
import styles from './page.module.css';

export default function Home() {
  // * State to show the preloader * //
  const [isLoading, setIsLoading] = useState(true);

  // * Effect to initialise the locomotive scroll and remove the preloader after 3s * //
  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import('locomotive-scroll')).default;
      const locomotiveScroll = new LocomotiveScroll();

      setTimeout(() => {
        setIsLoading(false);
        document.body.style.cursor = 'default';
        window.scrollTo(0, 0);
      }, 2600);
    })();
  }, []);

  return (
    <main className={styles.main}>
      <AnimatePresence mode="wait">
        {isLoading && <Preloader />}
      </AnimatePresence>
      <Landing />
      <div style={{ height: '100vh', width: '100%', background: 'red' }}></div>
    </main>
  );
}
