import Image from "next/image";
import { FaCheck, FaRocket, FaBullseye, FaCogs, FaChartLine } from "react-icons/fa";

const Mobile = () => {
    const features = [
        {
            icon: <FaRocket className="text-light" />,
            title: "Get started with us today",
            description: "Quick onboarding process to begin immediately"
        },
        {
            icon: <FaBullseye className="text-light" />,
            title: "Focus on Achieving Success",
            description: "Goal-oriented implementation strategies"
        },
        {
            icon: <FaCogs className="text-light" />,
            title: "Importance of Right Implementation",
            description: "Proper setup for optimal system performance"
        },
        {
            icon: <FaChartLine className="text-light" />,
            title: "Top ERP Solutions",
            description: "Industry-leading features for your business"
        }
    ];

    return (
        <section className="bg-secondary py-5">
            <div className="container py-lg-5">
                {/* Header Section */}
                <div className="text-center text-md-start mb-5">
                    <span className="badge bg-dark text-white px-3 py-2 mb-3 fs-6">
                        IMPLEMENTATION SERVICE
                    </span>
                    <h1 className="display-4 fw-bold text-light mb-4">
                        Explore the top implementation service providers
                    </h1>
                </div>

                {/* Main Content */}
                <div className="row align-items-center g-5 flex-column-reverse flex-lg-row">
                    {/* Text Content Column */}
                    <div className="col-lg-6">
                        <p className="lead text-light mb-5">
                            We promise to give you the best services. Our skilled team helps our clients from start to finish, making sure they complete their projects well. Find the {' '}
                            <span className="text-warning fw-bold">top ERP system in Pakistan</span> with us today. With ERP's help in Pakistan, we aim to make your business work better and more efficiently.
                        </p>

                        {/* Features List */}
                        <div className="d-flex flex-column gap-4">
                            {features.map((feature, index) => (
                                <div key={index} className="d-flex align-items-start gap-4">
                                    <div className="bg-warning rounded-circle p-2 flex-shrink-0">
                                        {feature.icon}
                                    </div>
                                    <div>
                                        <h3 className="h5 fw-bold text-light mb-1">{feature.title}</h3>
                                        <p className="text-light mb-0">{feature.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* CTA Button */}
                        <div className="mt-5">
                            <button className="btn btn-warning btn-lg rounded-pill px-4 py-2 fw-bold text-dark">
                                Get Started Today
                            </button>
                        </div>
                    </div>

                    {/* Image Column */}
                    <div className="col-lg-6">
                        <div
                            className={`position-relative rounded-4 overflow-hidden shadow-lg
                               `}
                        >
                            <Image
                                src={'/mobile.png'}
                                height={600}
                                width={600}
                                alt="Mobile ERP implementation illustration"
                                className="img-fluid"
                                priority
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Mobile;