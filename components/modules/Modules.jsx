import { FaUsers, FaTools, FaChartLine, FaWarehouse, FaShieldAlt, FaCogs } from 'react-icons/fa';
import { BiCalculator, BiBarChart, BiQuestionMark, BiCart, BiClipboard, BiSupport, BiBitcoin } from 'react-icons/bi';
import Link from 'next/link';

const Modules = () => {
    const cards = [
        {
            title: 'Accounts',
            desc: 'Comprehensive financial management that ensures transparent dealings and provides clear insight into your organization\'s financial health.',
            icon: <BiCalculator className="text" size={50} />,
            link: '/solutions/manufacturing-erp'
        },
        {
            title: 'Inventory',
            desc: 'Optimize your stock levels with intelligent inventory management that prevents shortages and reduces excess inventory.',
            icon: <BiBarChart className="text" size={50} />,
            link: '/solutions/supply-chain'
        },
        {
            title: 'CRM',
            desc: 'Build stronger customer relationships by understanding their needs and behaviors, leading to increased loyalty and satisfaction.',
            icon: <FaUsers className="text" size={50} />,
            link: '/solutions/crm'
        },
        {
            title: 'Procurement',
            desc: 'Streamline purchasing processes to reduce costs and develop stronger supplier relationships.',
            icon: <BiCart className="text" size={50} />,
            link: '/solutions/procurement'
        },
        {
            title: 'Human Resources',
            desc: 'Complete HR management including payroll, attendance, and talent development in one integrated solution.',
            icon: <FaUsers className="text" size={50} />,
            link: '/solutions/human-resources'
        },
        {
            title: 'Project Management',
            desc: 'Deliver projects on time and within budget with efficient resource allocation and structured planning.',
            icon: <BiClipboard className="text" size={50} />,
            link: '/solutions/project-management'
        },
        {
            title: 'Support',
            desc: '24/7 technical support to ensure your ERP system runs smoothly with minimal downtime.',
            icon: <BiSupport className="text" size={50} />,
            link: '/support'
        },
        {
            title: 'Asset Management',
            desc: 'Track and optimize your physical and digital assets to maximize utilization and operational efficiency.',
            icon: <BiBitcoin className="text" size={50} />,
            link: '/solutions/asset-management'
        },
    ];

    return (
        <section className="py-5 bg-yellow">
            <div className="container">
                <div className="mb-5 text-center text-md-start">
                    <span className="badge bg-white shadow text rounded-5 px-3 py-2 mb-3 fs-6">
                        BSSERP MODULES
                    </span>
                    <h2 className="display-5 fw-bold text mb-3">
                        Everything Your Business Needs
                    </h2>
                    <p className="lead text-secondary mb-0">
                        Trusted by businesses across Pakistan, BSSERP provides comprehensive modules to streamline and enhance your operations.
                    </p>
                </div>

                <div className="d-flex flex-wrap gap-5">
                    {cards.map((card, index) => (
                        <div className="group relative cursor-pointer overflow-hidden bg-white px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl sm:mx-auto sm:max-w-sm sm:rounded-lg sm:px-10 text-[#573174] hover:text-white" key={card.title}>
                            <span className="absolute top-10 z-0 h-20 w-20 rounded-full bg-[#573174] transition-all duration-300 group-hover:scale-[10]"></span>
                            <div className="relative z-10 mx-auto max-w-md">
                                <span className="grid h-20 w-20 place-items-center rounded-full bg-[#FEF1F2] group-hover:bg-white transition-all duration-300 border-[1px] border-[#573174]">
                                    {card.icon}
                                </span>

                                <div className="h4 my-3">
                                    {card.title}
                                </div>
                                <div className=" text-base leading-7 text-gray-600 transition-all duration-300 group-hover:text-white/90">
                                    <p>
                                        {card.desc}
                                    </p>
                                </div>
                            </div>
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