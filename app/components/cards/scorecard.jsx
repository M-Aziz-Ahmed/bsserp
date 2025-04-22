'use client'
import { useEffect, useRef, useState } from 'react';

const Scorecard = () => {
  const [isVisible, setIsVisible] = useState(false);
  const scorecardRef = useRef(null);
  const counters = [
    { value: 100, suffix: '%', text: 'Client satisfaction', bg: 'bg-dark', textColor: 'text-white' },
    { value: 24, suffix: 'h', text: 'Expert support team', bg: 'bg-light', textColor: 'text-dark' },
    { value: 6, suffix: '+', text: 'Countries', bg: 'bg-dark', textColor: 'text-white' },
    { value: 12, suffix: '+', text: 'Years experience', bg: 'bg-light', textColor: 'text-dark' }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.5 }
    );

    if (scorecardRef.current) {
      observer.observe(scorecardRef.current);
    }

    return () => {
      if (scorecardRef.current) {
        observer.unobserve(scorecardRef.current);
      }
    };
  }, []);

  return (
    <div ref={scorecardRef} className="container my-5 py-4">
      <div className="row g-4 text-center">
        {counters.map((counter, index) => (
          <div key={index} className="col-lg-3 col-sm-6">
            <div className={`${counter.bg} ${counter.textColor} p-4 rounded-4 shadow-sm`}>
              <h2 className="display-4 fw-bold mb-1">
                {isVisible ? (
                  <CountUp end={counter.value} suffix={counter.suffix} />
                ) : (
                  `0${counter.suffix}`
                )}
              </h2>
              <p className="mb-0 fs-5 fw-medium">{counter.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const CountUp = ({ end, suffix }) => {
  const [count, setCount] = useState(0);
  const duration = 2000; // Animation duration in ms
  const frameDuration = 1000 / 60; // 60fps

  useEffect(() => {
    let frame = 0;
    const totalFrames = Math.round(duration / frameDuration);
    const counter = setInterval(() => {
      frame++;
      const progress = frame / totalFrames;
      const currentCount = Math.round(end * progress);

      if (currentCount <= end) {
        setCount(currentCount);
      } else {
        setCount(end);
        clearInterval(counter);
      }
    }, frameDuration);

    return () => clearInterval(counter);
  }, [end, frameDuration]);

  return (
    <>
      {count}
      {suffix}
    </>
  );
};

export default Scorecard;