'use client'; // Required for Swiper to work in Next.js

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
// import './reviews-slider.css'; // We'll create this next

const ReviewsSlider = () => {
  const reviews = [
    {
      id: 1,
      review: "The modern SowanERP system has proven to be a valuable core business application that integrates effectively with a variety of third-party apps.",
      name: "Osama Ali Niaz",
      role: "GM",
      company: "Shining Horizon Trading CO",
      rating: 5,
      readMoreLink: "#"
    },
    {
      id: 2,
      review: "Working with SowanERP has been a great experience for us. The SowanERP cloud-based system may be tailored to our individual needs...",
      name: "Ayman A Hadi",
      role: "Founder & Director",
      company: "Tertiq International",
      rating: 5,
      readMoreLink: "#"
    },
    {
      id: 3,
      review: "SowanERP as an ERP solution, is ideal for the type of business where we can minimize the complexity of procedures, hazards, and expenses...",
      name: "Ammer Abu Obead",
      role: "CEO",
      company: "AI-Hussein SC (InNel)",
      rating: 5,
      readMoreLink: "#"
    },
    {
      id: 4,
      review: "We aim to devise a transparent system to get accurate information about inventory, sales, purchasing, warehouses, and all other relevant...",
      name: "Mohamal Lujami",
      role: "General Manager",
      company: "SGAPCO",
      rating: 5,
      readMoreLink: "#"
    },
    // Add more reviews as needed
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Client Reviews</h2>
          <p className="text-lg text-gray-600">What they say about us</p>
        </div>

        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={30}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          breakpoints={{
            640: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
          className="pb-12"
        >
          {reviews.map((review) => (
            <SwiperSlide key={review.id}>
              <div className="bg-white p-6 rounded-lg shadow-md h-full mx-2">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className={`text-${i < review.rating ? 'yellow' : 'gray'}-400 text-xl`}>★</span>
                  ))}
                </div>
                <p className="text-gray-600 mb-4 line-clamp-3">{review.review}</p>
                <a href={review.readMoreLink} className="text-blue-600 hover:underline">Read more</a>
                <div className="mt-4 pt-4 border-t border-gray-100">
                  <h4 className="font-semibold">{review.name}</h4>
                  <p className="text-gray-500 text-sm">{review.role}, {review.company}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default ReviewsSlider;