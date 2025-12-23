import { useCallback, useEffect, useState } from 'react';
import './App.css';

const useThrottle = (callback: () => void, delay: number) => {
  let lastRun = 0; // Initialize to 0 so first call executes immediately

  return useCallback(() => {
    const now = Date.now();

    if (now - lastRun >= delay) {
      callback();
      lastRun = now;
    }

    // Else Ignore
  }, [callback, delay]);
};

function App() {
  const [windowWidth, setWindowWidth] = useState({
    x: window.innerWidth,
    y: window.innerHeight,
  });

  // If you are using React Compiler you just not need to wrap this function in useCallback
  const handleResize = useCallback(() => {
    setWindowWidth({ x: window.innerWidth, y: window.innerHeight });
  }, []);

  const throttlingResizeHandler = useThrottle(handleResize, 6000);

  useEffect(() => {
    window.addEventListener('resize', throttlingResizeHandler);

    return () => window.removeEventListener('resize', throttlingResizeHandler);
  }, [throttlingResizeHandler]);

  return (
    <div>
      X : {windowWidth.x}px
      <br />Y : {windowWidth.y}px
    </div>
  );
}

export default App;
