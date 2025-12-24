import { useState, useEffect, useRef } from 'react';

const StatCounter = ({ end, suffix, description }) => {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const counterRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          
          const duration = 2000; // 2 seconds
          const steps = 60;
          const increment = end / steps;
          let current = 0;
          
          const timer = setInterval(() => {
            current += increment;
            if (current >= end) {
              setCount(end);
              clearInterval(timer);
            } else {
              setCount(Math.floor(current));
            }
          }, duration / steps);
          
          return () => clearInterval(timer);
        }
      },
      { threshold: 0.5 }
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => observer.disconnect();
  }, [end, hasAnimated]);

  return (
    <div className="text-center lg:text-left" ref={counterRef}>
      <div className="text-3xl md:text-[48px] font-bold text-red-500">
        {count}{suffix}
      </div>
      <p className="text-black text-sm md:text-base">{description}</p>
    </div>
  );
};

export default StatCounter