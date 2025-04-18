import { FaUsers, FaTools, FaChartLine, FaWarehouse, FaShieldAlt, FaCogs } from 'react-icons/fa';
import { BiCalculator, BiBarChart, BiQuestionMark, BiCart, BiClipboard, BiSupport, BiBitcoin } from 'react-icons/bi';
import Link from 'next/link';

const Modules = () => {
    const cards = [
        {
            title: 'Accounts',
            desc: 'Comprehensive financial management that ensures transparent dealings and provides clear insight into your organization\'s financial health.',
            icon: <BiCalculator className="text-secondary" size={50} />,
            link: '/solutions/manufacturing-erp'
        },
        {
            title: 'Inventory',
            desc: 'Optimize your stock levels with intelligent inventory management that prevents shortages and reduces excess inventory.',
            icon: <BiBarChart className="text-secondary" size={50} />,
            link: '/solutions/supply-chain'
        },
        {
            title: 'CRM',
            desc: 'Build stronger customer relationships by understanding their needs and behaviors, leading to increased loyalty and satisfaction.',
            icon: <FaUsers className="text-secondary" size={50} />,
            link: '/solutions/crm'
        },
        {
            title: 'Procurement',
            desc: 'Streamline purchasing processes to reduce costs and develop stronger supplier relationships.',
            icon: <BiCart className="text-secondary" size={50} />,
            link: '/solutions/procurement'
        },
        {
            title: 'Human Resources',
            desc: 'Complete HR management including payroll, attendance, and talent development in one integrated solution.',
            icon: <FaUsers className="text-secondary" size={50} />,
            link: '/solutions/human-resources'
        },
        {
            title: 'Project Management',
            desc: 'Deliver projects on time and within budget with efficient resource allocation and structured planning.',
            icon: <BiClipboard className="text-secondary" size={50} />,
            link: '/solutions/project-management'
        },
        {
            title: 'Support',
            desc: '24/7 technical support to ensure your ERP system runs smoothly with minimal downtime.',
            icon: <BiSupport className="text-secondary" size={50} />,
            link: '/support'
        },
        {
            title: 'Asset Management',
            desc: 'Track and optimize your physical and digital assets to maximize utilization and operational efficiency.',
            icon: <BiBitcoin className="text-secondary" size={50} />,
            link: '/solutions/asset-management'
        },
    ];

    return (
        <section className="py-5 bg-secondary">
            <div className="container">
                <div className="mb-5 text-center text-md-start">
                    <span className="badge bg-dark text-white px-3 py-2 mb-3 fs-6">
                        BSSERP MODULES
                    </span>
                    <h2 className="display-5 fw-bold text-white mb-3">
                        Everything Your Business Needs
                    </h2>
                    <p className="lead text-light mb-0">
                        Trusted by businesses across Pakistan, BSSERP provides comprehensive modules to streamline and enhance your operations.
                    </p>
                </div>

                <div className="row g-4">
                    {cards.map((card, index) => (
                        <div className="col-lg-3 col-md-6" key={index}>
                            <Link href={card.link} className="text-decoration-none">
                                <div className="card h-100 border-0 shadow-lg hover-shadow-xl transition-all bg-light hover-transform-up">
                                    <div className="card-body text-center p-4 d-flex flex-column">
                                        <div className="mb-4 mt-2">
                                            {card.icon}
                                        </div>
                                        <h3 className="h4 card-title mb-3 text-dark">{card.title}</h3>
                                        <p className="card-text text-muted mb-0 flex-grow-1">{card.desc}</p>
                                        <div className="mt-3 text-secondary fw-semibold">
                                            Learn more →
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    ))}
                </div>

                {/* <div className="text-center mt-5">
                    <Link href="/solutions" className="btn btn-outline-light btn-lg px-4 py-2">
                        Explore All Solutions
                    </Link>
                </div> */}
            </div>
        </section>


    );
}

export default Modules;