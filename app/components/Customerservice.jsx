import { FaCheck, FaHeadset, FaGlobe, FaComments, FaHandsHelping } from "react-icons/fa";
import Image from "next/image";

const Customerservice = () => {
    const features = [
        {
            icon: <FaHeadset className="text-light" />,
            title: "Always There for Our Clients",
            description: "24/7 support availability for all your needs"
        },
        {
            icon: <FaGlobe className="text-light" />,
            title: "Worldwide Presence with Local Teams",
            description: "Global reach with region-specific expertise"
        },
        {
            icon: <FaComments className="text-light" />,
            title: "Using Modern Ways to Communicate",
            description: "Real-time support through multiple channels"
        },
        {
            icon: <FaHandsHelping className="text-light" />,
            title: "Great Help After You Buy",
            description: "Continued support post-implementation"
        }
    ];

    return (
        <section className="bg-light py-5">
            <div className="container">
                {/* Header Section */}
                <div className="text-center text-md-start mb-5">
                    <span className="badge bg-dark text-white px-3 py-2 mb-3 fs-6">
                        IMPLEMENTATION SERVICE
                    </span>
                    <h1 className="display-4 fw-bold text-secondary mb-4">
                        Uncover hassle-free customer assistance
                    </h1>
                    <p className="lead text-dark">
                        Just selling the software isn't our only goal; real success is when our clients can use it right and take full advantage of it. SowaanERP is known as the {' '}
                        <span className="text-dark fw-bold">best ERP software solution in Pakistan</span> because we offer robust ERP implementation and setup services.
                    </p>
                </div>

                {/* Main Content */}
                <div className="row align-items-center g-5">
                    {/* Image Column */}
                    <div className="col-lg-6">
                        <div className="position-relative rounded-4 overflow-hidden shadow-lg">
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
                                    <div className="bg-warning rounded-circle p-3 flex-shrink-0">
                                        {feature.icon}
                                    </div>
                                    <div>
                                        <h3 className="h5 fw-bold text-dark mb-1">{feature.title}</h3>
                                        <p className="text-muted mb-0">{feature.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="mt-5">
                            <button className="btn btn-secondary btn-lg rounded-pill px-4 py-2 fw-bold">
                                Request Demo
                            </button>
                        </div>
                    </div>
                </div>

                {/* Additional Info Section */}
                <div className="row justify-content-center mt-5">
                    <div className="col-lg-8">
                        <div className="bg-white p-4 p-lg-5 rounded-4 shadow-sm">
                            <p className="lead text-center text-dark mb-0">
                                Our global teams use advanced support portals to resolve client issues efficiently. We leverage tools like Skype, WhatsApp, and Google Meet for real-time assistance. SowaanERP is committed to exceeding your expectations, making your experience not just good, but truly outstanding. Our ERP solution enhances business functionality and management systems, making it ideal for both small businesses and large enterprises.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Customerservice;