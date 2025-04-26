'use client'
import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

const Partners = () => {
  const [visiblePartners, setVisiblePartners] = useState([]);
  const sectionRef = useRef(null);
  
  const partnerGroups = [
    { name: 'microsoft', logo: '/Lahore-Apparel.png' },
    { name: 'microsoft', logo: '/Lazienda.png' },
    { name: 'microsoft', logo: '/SNS.png' },
    { name: 'microsoft', logo: '/Royal.png' },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            // Staggered animation - show partners one by one
            partnerGroups.forEach((_, index) => {
              setTimeout(() => {
                setVisiblePartners(prev => [...prev, index]);
              }, index * 100); // 100ms delay between each logo
            });
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section ref={sectionRef} className="py-5 bg-light overflow-hidden">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="display-5 fw-bold text">Our Selected Partners</h2>
          <div className="mx-auto bg-highlight" style={{ width: '100px', height: '3px'}}></div>
        </div>

        <div className="row g-4 justify-content-center">
          {partnerGroups.map((group, index) => (
            <div 
              key={index} 
              className="col-lg-3 col-md-6"
            >
              <div 
                className={`d-flex justify-content-center align-items-center my-5 transition-all duration-500 ease-out ${
                  visiblePartners.includes(index) 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-10'
                }`} 
                style={{ height: '60px' }}
              >
                <Image 
                  src={group.logo}
                  alt={`${group.name} logo`}
                  width={120}
                  height={60}
                  className="object-contain"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;