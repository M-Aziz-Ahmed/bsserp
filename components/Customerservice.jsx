'use client'
import { FaCheck, FaHeadset, FaGlobe, FaComments, FaHandsHelping } from "react-icons/fa";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const Customerservice = ({setModel}) => {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef(null);

    const features = [
        {
            icon: <FaHeadset className="text" />,
            title: "Always There for Our Clients",
            description: "24/7 support availability for all your needs"
        },
        {
            icon: <FaGlobe className="text" />,
            title: "Worldwide Presence with Local Teams",
            description: "Global reach with region-specific expertise"
        },
        {
            icon: <FaComments className="text" />,
            title: "Using Modern Ways to Communicate",
            description: "Real-time support through multiple channels"
        },
        {
            icon: <FaHandsHelping className="text" />,
            title: "Great Help After You Buy",
            description: "Continued support post-implementation"
        }
    ];

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.unobserve(entry.target);
                }
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
        <section ref={sectionRef} className="bg-light py-5 overflow-hidden">
            <div className="container">
                {/* Header Section */}
                <div className="text-center text-md-start mb-5">
                    <span className="badge bg-white text-highlight shadow rounded-5 px-3 py-2 mb-3 fs-6">
                        IMPLEMENTATION SERVICE
                    </span>
                    <h1 className="display-4 fw-bold text mb-4">
                        Uncover hassle-free customer assistance
                    </h1>
                    <p className="lead text-secondary">
                        Just selling the software isn't our only goal; real success is when our clients can use it right and take full advantage of it. SowaanERP is known as the {' '}
                        <span className="text-highlight fw-bold">best ERP software solution in Pakistan</span> because we offer robust ERP implementation and setup services.
                    </p>
                </div>

                {/* Main Content */}
                <div className="row align-items-center g-5">
                    {/* Image Column - Slide in from left */}
                    <div className="col-lg-6">
                        <div className={`position-relative rounded-4 overflow-hidden shadow-lg transition-all duration-700 ease-out ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'
                            }`}>
                            <Image
                                src={'/customerservice.png'}
                                height={600}
                                width={600}
                                alt="Customer service illustration"
                                className="img-fluid"
                                priority
                            />
                        </div>
                    </div>

                    {/* Features Column */}
                    <div className="col-lg-6">
                        <div className="d-flex flex-column gap-4">
                            {features.map((feature, index) => (
                                <div key={index} className="d-flex align-items-start gap-4">
                                    <div className="bg-highlight rounded-circle p-3 flex-shrink-0">
                                        {feature.icon}
                                    </div>
                                    <div>
                                        <h3 className="h5 fw-bold text-highlight mb-1">{feature.title}</h3>
                                        <p className="text-secondary mb-0">{feature.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="mt-5">
                            <button className="btn btn-theme btn-lg rounded-pill px-4 py-2 fw-bold"onClick={()=>{setModel(true)}}>
                                Request Demo
                            </button>
                        </div>
                    </div>
                </div>

                {/* Additional Info Section - Optional fade-in */}
                <div className={`row justify-content-center mt-5 transition-opacity duration-1000 delay-300 ${isVisible ? 'opacity-100' : 'opacity-0'
                    }`}>
                    <div className="col-lg-8">
                        <div className="bg-white p-4 p-lg-5 rounded-4 shadow-sm">
                            <p className="lead text-center text-secondary mb-0">
                                Our global teams use advanced support portals to resolve client issues efficiently. We leverage tools like Skype, WhatsApp, and Google Meet for real-time assistance. BSSERP is committed to exceeding your expectations, making your experience not just good, but truly outstanding. Our ERP solution enhances business functionality and management systems, making it ideal for both small businesses and large enterprises.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Customerservice;