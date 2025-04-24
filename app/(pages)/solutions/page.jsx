'use client'
import { FaUsers, FaTools, FaChartLine, FaWarehouse, FaShieldAlt, FaCogs } from 'react-icons/fa';
import { BiCalculator, BiBarChart, BiQuestionMark, BiCart, BiClipboard, BiSupport, BiBitcoin } from 'react-icons/bi';
import Link from 'next/link';

const Page = ({ }) => {
    const cards = [
        {
            title: 'Manufacturing ERP',
            desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae ratione ea quae reprehenderit sit. Facere, animi.',
            icon: <BiCalculator className="text" size={50} />,
            link: '/solutions/manufacturing-erp'
        },
        {
            title: 'Distribution ERP Software',
            desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae ratione ea quae reprehenderit sit. Facere, animi.',
            icon: <BiBarChart className="text" size={50} />,
            link: '/solutions/supply-chain'
        },
    ];

    return (
        <section className="overflow-hidden">
            {/* Hero Section */}
            <div className="container-fluid px-0">
                <div 
                    className="text py-lg-5 py-4" 
                    style={{ 
                        backgroundImage: "url('/BACKGROUND-LINES.webp')", 
                        backgroundSize: 'cover', 
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat'
                    }}
                >
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-xxl-8 col-lg-10 col-md-12 text-center py-4 py-lg-5">
                                <h1 className="display-4 fw-bolder mb-4">
                                    Transforming best
                                    <span className="text-highlight"> Quality Control </span>
                                    with <span className="text-highlight"> Manufacturing </span>
                                    ERP software in Pakistan
                                </h1>
                                <p className="text-secondary fs-4 mb-5">
                                    SowaanERP offers a cutting-edge cloud-based <span className="text-highlight fw-bold"> manufacturing ERP software in Pakistan </span>. It streamlines production processes, accurately monitors material use, ensures effective capacity planning, manages subcontracting efficiently, and much more. This software is designed to enhance your business operations significantly!
                                </p>
                                <div className="d-flex justify-content-center">
                                    <button className="btn btn-theme btn-lg rounded-5 px-4 py-3 fs-5 fw-semibold">
                                        Request a Demo
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Solutions Section */}
            <div className="bg-yellow">
                <div className="container py-5 my-md-5">
                    <div className="row justify-content-center">
                        <div className="col-xl-8 col-lg-10 text-center mb-5">
                            <span className="badge bg-white shadow text-dark rounded-5 px-3 py-2 mb-3 fs-6 fw-semibold">
                                Solutions
                            </span>
                            <h2 className="display-5 fw-bold mb-3">
                                Everything Your Business Needs
                            </h2>
                            <p className="lead text-secondary mb-0 px-lg-5">
                                Trusted by businesses across Pakistan, BSSERP provides comprehensive modules to streamline and enhance your operations.
                            </p>
                        </div>
                    </div>

                    <div className="row g-4 justify-content-center">
                        {cards.map((card, index) => (
                            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-10" key={index}>
                                <div className="rounded-5 custom-card shadow-lg h-100 border-0 bg-light transition-all hover-scale">
                                    <div className="card-body p-4 p-xl-5 d-flex flex-column">
                                        <div className="mb-4 custom-card-icon">
                                            {card.icon}
                                        </div>
                                        <h3 className="h4 mb-3 custom-card-title">{card.title}</h3>
                                        <p className="card-text text-muted mb-4 flex-grow-1">{card.desc}</p>
                                        <Link href={card.link} className="nav-link text-decoration-none">
                                            <div className="mt-3 text-secondary fw-semibold custom-card-link d-inline-flex align-items-center">
                                                Learn more <span className="ms-2">→</span>
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <style jsx>{`
                .text-highlight {
                    color: #FFD700; /* Gold/yellow color - adjust if needed */
                    position: relative;
                    display: inline-block;
                }
                
                .text-highlight:after {
                    content: '';
                    position: absolute;
                    bottom: 2px;
                    left: 0;
                    width: 100%;
                    height: 8px;
                    background-color: rgba(255, 215, 0, 0.3);
                    z-index: -1;
                }
                
                .btn-theme {
                    background-color: #FFD700;
                    color: #000;
                    font-weight: 600;
                    transition: all 0.3s ease;
                }
                
                .btn-theme:hover {
                    background-color: #FFC000;
                    transform: translateY(-2px);
                    box-shadow: 0 4px 12px rgba(255, 215, 0, 0.3);
                }
                
                .bg-yellow {
                    background-color: rgba(255, 215, 0, 0.1);
                }
                
                .custom-card {
                    transition: transform 0.3s ease, box-shadow 0.3s ease;
                }
                
                .hover-scale:hover {
                    transform: translateY(-5px);
                }
                
                .custom-card-link {
                    transition: color 0.3s ease;
                }
                
                .custom-card-link:hover {
                    color: #FFD700 !important;
                }
                
                @media (max-width: 768px) {
                    .display-4 {
                        font-size: 2.5rem;
                    }
                    
                    .fs-4 {
                        font-size: 1.1rem !important;
                    }
                }
                
                @media (max-width: 576px) {
                    .display-4 {
                        font-size: 2rem;
                    }
                    
                    .btn-lg {
                        padding: 0.5rem 1.5rem;
                        font-size: 1rem;
                    }
                }
            `}</style>
        </section>
    );
}

export default Page;