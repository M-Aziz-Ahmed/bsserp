'use client'
import Image from 'next/image';
import Link from 'next/link';

const AboutSowaan = () => {
  return (
    <section className="relative py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Content Section */}
          <div className="lg:w-1/2">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              About <span className="text">BSSERP</span>
            </h1>
            
            <div className="bg-highlight" style={{ width: '100px', height: '3px'}}></div>
            
            <p className="text-lg text-gray-600 mb-8 leading-relaxed mt-4">
            The world of business is becoming highly competitive due to revolution in information technology, coupled with the advancements in telecommunication, which has, consequently, increased the expectation levels of the client in terms of both the quality and timing of services to be rendered.

            </p>
            
            <Link 
              href="/contact-us" 
              className="btn btn-theme btn-lg"
            >
              Contact Us →
            </Link>
          </div>
          
          {/* Image/Graphic Section */}
          <div className="lg:w-1/2">
            <div className=" p-6">
              <Image 
                src="/logo.png"
                alt="About Us"
                width={500}
                height={500}
                className="w-full h-auto rounded-xl shadow-lg transition-transform duration-300 transform hover:scale-105"/>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSowaan;