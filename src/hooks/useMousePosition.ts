import { useState, useEffect } from 'react';

const useMousePosition = ({ id }: { id: string }) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // * Function to update mouse position on mouse move * //
  const handleUpdateMousePosition = (e: any) => {
    const element = document.getElementById(id);
    if (element) {
      const rect = element.getBoundingClientRect();
      const xCordinates = e.clientX - rect?.left;
      const yCordinates = e.clientY - rect?.top;
      setMousePosition({ x: xCordinates, y: yCordinates });
    }
  };

  // * Effect to keep track of mouse movment * //
  useEffect(() => {
    window.addEventListener('mousemove', handleUpdateMousePosition);

    return () =>
      window.removeEventListener('mousemove', handleUpdateMousePosition);
  }, []);

  return mousePosition;
};

export default useMousePosition;
