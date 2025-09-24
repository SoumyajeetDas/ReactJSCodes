import { useCallback, useEffect, useState } from 'react';
import './App.css';

const useThrottle = (callback: () => void, delay: number) => {
  let lastRun = Date.now();

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

  const handleResize = () => {
    setWindowWidth({ x: window.innerWidth, y: window.innerHeight });
  };

  const throttlingCallback = useThrottle(handleResize, 6000);

  useEffect(() => {
    window.addEventListener('resize', throttlingCallback);

    return () => window.removeEventListener('resize', throttlingCallback);
  }, [throttlingCallback]);

  return (
    <div>
      X : {windowWidth.x}px
      <br />Y : {windowWidth.y}px
    </div>
  );
}

export default App;
