import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaIndustry, FaUsers, FaTools, FaChartLine, FaWarehouse, FaShieldAlt, FaCogs } from 'react-icons/fa';
import { BiSolidFactory } from 'react-icons/bi';

const CardsSection = () => {
    const cards = [
        {
            title: 'Manufacturing ERP',
            desc: 'Comprehensive solution to manage production, inventory, and quality control for manufacturing excellence.',
            icon: <BiSolidFactory className="text" size={48} />,
            link: '/solutions/manufacturing-erp'
        },
        {
            title: 'Supply Chain Management',
            desc: 'Optimize your logistics, procurement, and distribution networks for maximum efficiency.',
            icon: <FaIndustry className="text" size={48} />,
            link: '/solutions/supply-chain'
        },
        {
            title: 'Human Resources',
            desc: 'Streamline payroll, attendance, and talent management with our HR modules.',
            icon: <FaUsers className="text" size={48} />,
            link: '/solutions/human-resources'
        },
        {
            title: 'Maintenance Management',
            desc: 'Proactive equipment maintenance scheduling to minimize downtime and costs.',
            icon: <FaTools className="text" size={48} />,
            link: '/solutions/maintenance'
        },
        {
            title: 'Business Intelligence',
            desc: 'Powerful analytics and reporting tools for data-driven decision making.',
            icon: <FaChartLine className="text" size={48} />,
            link: '/solutions/analytics'
        },
        {
            title: 'Inventory Control',
            desc: 'Real-time inventory tracking and warehouse management solutions.',
            icon: <FaWarehouse className="text" size={48} />,
            link: '/solutions/inventory'
        },
        {
            title: 'Quality Assurance',
            desc: 'Ensure product quality and compliance with industry standards.',
            icon: <FaShieldAlt className="text" size={48} />,
            link: '/solutions/quality-assurance'
        },
        {
            title: 'Custom Modules',
            desc: 'Tailored solutions designed specifically for your business requirements.',
            icon: <FaCogs className="text" size={48} />,
            link: '/solutions/custom-modules'
        },
    ];

    return (
        <section className="py-5 bg-yellow">
            <div className="container">
                <div className="mb-5">
                    <span className="badge bg-white fw-bold text-highlight shadow rounded-5 px-3 py-2 mb-3 fs-6">
                        Leading The Path To Innovation
                    </span>
                    <h2 className="display-5 fw-bold text mb-3">
                        Transform Your Business with BSSERP
                    </h2>
                    <p className="lead textsecondary">
                        Custom ERP solutions designed for your unique business needs in Pakistan and beyond.
                    </p>
                </div>

                <div className="row g-4">
                    {cards.map((card, index) => (
                        <div className="col-lg-3 col-md-6" key={index}>
                            <div className="rounded-5 custom-card shadow-lg h-100 border-0 bg-light">
                                <div className="card-body p-4 custom-card-content">
                                    <div className="mb-4 custom-card-icon">
                                        {card.icon}
                                    </div>
                                    <h3 className="h4 text mb-3 custom-card-title">{card.title}</h3>
                                    <p className="card-text text-muted mb-4 custom-card-desc">{card.desc}</p>
                                    <Link href={card.link} className="nav-link">
                                        <div className="mt-3 text-secondary fw-semibold custom-card-link">
                                            Learn more →
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* <div className="text-center mt-5">
                    <Link href="/solutions" className="btn btn-light btn-lg px-4">
                        View All Solutions
                    </Link>
                </div> */}
            </div>
        </section>
    );
};

export default CardsSection;