import React from 'react';
import Image from 'next/image';

const Partners = () => {
  const partnerGroups = [
    {
      name: 'google',
      logo: 'https://logo.clearbit.com/google.com', // Replace with your actual logo path
    },
    {
      name: 'microsoft',
      logo: 'https://logo.clearbit.com/microsoft.com',
    },
    {
      name: 'amazon',
      logo: 'https://logo.clearbit.com/amazon.com',
    },
    {
      name: 'facebook',
      logo: 'https://logo.clearbit.com/facebook.com',
    },
    {
      name: 'twitter',
      logo: 'https://logo.clearbit.com/twitter.com',
    },
    {
      name: 'tesla',
      logo: 'https://logo.clearbit.com/tesla.com',
    },
    {
      name: 'toyota',
      logo: 'https://logo.clearbit.com/toyota.com',
    },
    {
      name: 'ford',
      logo: 'https://logo.clearbit.com/ford.com',
    },
    {
      name: 'walmart',
      logo: 'https://logo.clearbit.com/walmart.com',
    },
    {
      name: 'target',
      logo: 'https://logo.clearbit.com/target.com',
    },
    {
      name: 'visa',
      logo: 'https://logo.clearbit.com/visa.com',
    },
    {
      name: 'paypal',
      logo: 'https://logo.clearbit.com/paypal.com',
    },
    {
      name: 'starbucks',
      logo: 'https://logo.clearbit.com/starbucks.com',
    },
    {
      name: 'mcdonalds',
      logo: 'https://logo.clearbit.com/mcdonalds.com',
    },
  ];

  return (
    <section className="py-5 bg-light">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="display-5 fw-bold text-dark">Our Selected Partners</h2>
          <div className="mx-auto" style={{ width: '100px', height: '3px', backgroundColor: '#FFC107' }}></div>
        </div>

        <div className="row g-4 justify-content-center">
          {partnerGroups.map((group, index) => (
            <div key={index} className="col-lg-3 col-md-6">
                    <div className="d-flex justify-content-center align-items-center my-5" style={{ height: '60px' }}>
                      <Image 
                        src={group.logo}
                        alt={`${group.name} logo`}
                        width={120}
                        height={60}
                        objectFit="contain"
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