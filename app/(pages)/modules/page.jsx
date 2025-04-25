'use client'
import { FaUsers, FaTools, FaChartLine, FaWarehouse, FaShieldAlt, FaCogs } from 'react-icons/fa';
import { BiCalculator, BiBarChart, BiQuestionMark, BiCart, BiClipboard, BiSupport, BiBitcoin } from 'react-icons/bi';
import Link from 'next/link';

const Page = ({ }) => {
    const cards = [
        {
            id: 'accounts',
            title: 'Accounts',
            desc: 'Biz Soft ERP Accounts Module...',
            icon: <BiCalculator size={32} />,
            link: `/modules/accounts`,
        },
        {
            id: 'human-resource',
            title: 'Human Resource',
            desc: 'The Biz Soft ERP HR module...',
            icon: <FaUsers size={32} />,
            link: '/modules/human-resource'
        },
        {
            id: 'supply-chain',
            title: 'Supply Chain Module',
            desc: 'The Biz Soft ERP Supply Chain module...',
            icon: <FaWarehouse size={32} />,
            link: '/modules/supply-chain'
        },
        {
            id: 'sales-merchandizing',
            title: 'Sales & Merchandizing',
            desc: 'The Biz Soft ERP Sales & Merchandizing module...',
            icon: <FaWarehouse size={32} />,
            link: '/modules/sales-merchandizing'
        },
        {
            id: 'wip',
            title: 'Work in Progress',
            desc: 'The Work in Progress Module...',
            icon: <FaWarehouse size={32} />,
            link: '/modules/wip'
        },
        {
            id: 'production',
            title: 'Production',
            desc: 'The Production Module...',
            icon: <FaWarehouse size={32} />,
            link: '/modules/production'
        },
        {
            id: 'dashboard',
            title: 'Dashboard',
            desc: 'Biz Soft ERP Dashboard Module...',
            icon: <FaWarehouse size={32} />,
            link: '/modules/dashboard'
        },
        {
            title: 'Support',
            desc: '24/7 technical support',
            icon: <BiSupport className="text" size={50} />,
            link: '/modules/support'
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
                    {/* ... rest of your hero section ... */}
                </div>
            </div>

            {/* Solutions Section */}
            <div className="bg-yellow">
                <div className="container py-5 my-md-5">
                    <div className="row justify-content-center">
                        <div className="col-xl-8 col-lg-10 text-center mb-5">
                            <span className="badge bg-white shadow text rounded-5 px-3 py-2 mb-3 fs-6 fw-semibold">
                                Modules
                            </span>
                            <h2 className="display-5 fw-bold mb-3 text">
                                Everything Your Business Needs
                            </h2>
                            <p className="lead text-secondary mb-0 px-lg-5">
                                Trusted by businesses across Pakistan, BSSERP provides comprehensive modules to streamline and enhance your operations.
                            </p>
                        </div>
                    </div>

                    <div className="row g-4">
                        {cards.map((card, index) => (
                            <div className="col-lg-3 col-md-6" key={index}>
                                <div className="rounded-5 custom-card shadow-lg h-100 border-0 bg-light">
                                    <div className="card-body p-4 custom-card-content">
                                        <div className="mb-4 custom-card-icon text">
                                            {card.icon}
                                        </div>
                                        <h3 className="h4 text mb-3 custom-card-title">{card.title}</h3>
                                        <p className="card-text text-muted mb-4 custom-card-desc">{card.desc.substring(0, 100)}...</p>
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
                </div>
            </div>
        </section>
    );
}

export default Page;