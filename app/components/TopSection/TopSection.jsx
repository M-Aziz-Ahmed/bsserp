'use client'
import React, { useState } from 'react';

const Section1 = () => {
    const [formValues, setFormValues] = useState({
        userName: "",
        email: "",
        phoneNumber: "",
        services: "",
        message: "",
    });

    const services = [
        "ERP Software Development",
        "Mobile App Development",
        "Web Development",
        "E-commerce Development",
        "Digital Marketing",
        "SEO Services",
        "Social Media Marketing",
        "Content Writing",
        "Graphic Designing",
    ];

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues(prev => ({
            ...prev,
            [name]: value
        }));
        console.log(formValues);
    };

    return (
        <section className="py-5">
            <div className="container my-5">
                <div className="row g-4 align-items-center">
                    <div className="col-lg-7 left-content">
                        <div className="pe-lg-5">
                            <h1 className="display-5 fw-bold text-secondary mb-4">
                                Best ERP software in <span className="text-dark">Pakistan</span> for <span className="text-dark">Enterprises</span> & SMBs
                            </h1>
                            <p className="lead text-muted mb-4">
                                Discover the most affordable and the best ERP software in Pakistan, made to improve your daily work, increase efficiency, and take your business to the next level. This user-friendly cloud-based solution is more than just an application; it's a smart assistant that fits your company's needs perfectly.
                            </p>
                            <ul className="list-unstyled">
                                <li className="mb-2"><i className="bi bi-check-circle-fill text-primary me-2"></i> Customizable solutions</li>
                                <li className="mb-2"><i className="bi bi-check-circle-fill text-primary me-2"></i> 24/7 customer support</li>
                                <li className="mb-2"><i className="bi bi-check-circle-fill text-primary me-2"></i> Cloud-based technology</li>
                            </ul>
                        </div>
                    </div>

                    <div className="col-lg-5 right-content">
                        <div className="card shadow-lg border-0">
                            <div className="card-body p-3">
                                <h3 className="card-title text-center mb-5 text-secondary">Request personalized demo</h3>
                                <form className="needs-validation" noValidate>
                                    <div className="row g-3">
                                        {/* Full Name */}
                                        <div className="col-12">
                                            <div className="form-floating">
                                                <input
                                                    type="text"
                                                    id="userName"
                                                    name="userName"
                                                    value={formValues.userName}
                                                    onChange={handleChange}
                                                    className="form-control border-0 border-bottom rounded-0 px-0"
                                                    placeholder=""
                                                    required
                                                />
                                                <label htmlFor="userName" className="text-muted">Full Name</label>
                                            </div>
                                        </div>

                                        {/* Email */}
                                        <div className="col-md-6">
                                            <div className="form-floating">
                                                <input
                                                    type="email"
                                                    id="email"
                                                    name="email"
                                                    value={formValues.email}
                                                    onChange={handleChange}
                                                    className="form-control border-0 border-bottom rounded-0 px-0"
                                                    placeholder=""
                                                    required
                                                />
                                                <label htmlFor="email" className="text-muted">Email Address</label>
                                            </div>
                                        </div>

                                        {/* Phone */}
                                        <div className="col-md-6">
                                            <div className="form-floating">
                                                <input
                                                    type="tel"
                                                    id="phoneNumber"
                                                    name="phoneNumber"
                                                    value={formValues.phoneNumber}
                                                    onChange={handleChange}
                                                    className="form-control border-0 border-bottom rounded-0 px-0"
                                                    placeholder=""
                                                    required
                                                />
                                                <label htmlFor="phoneNumber" className="text-muted">Phone Number</label>
                                            </div>
                                        </div>

                                        {/* Services */}
                                        <div className="col-12">
                                            <div className="form-floating">
                                                <select
                                                    id="services"
                                                    name="services"
                                                    value={formValues.services}
                                                    onChange={handleChange}
                                                    className="form-select border-0 border-bottom rounded-0 px-0"
                                                    required
                                                >
                                                    <option value=""></option>
                                                    {services.map((service, index) => (
                                                        <option key={index} value={service}>{service}</option>
                                                    ))}
                                                </select>
                                                <label htmlFor="services" className="text-muted">Services</label>
                                            </div>
                                        </div>

                                        {/* Message */}
                                        <div className="col-12">
                                            <div className="form-floating">
                                                <textarea
                                                    id="message"
                                                    name="message"
                                                    value={formValues.message}
                                                    onChange={handleChange}
                                                    className="form-control border-0 border-bottom rounded-0 px-0"
                                                    rows={3}
                                                    placeholder=""
                                                    style={{ minHeight: "100px" }}
                                                    required
                                                ></textarea>
                                                <label htmlFor="message" className="text-muted">Tell us about your requirements...</label>
                                            </div>
                                        </div>

                                        {/* Submit Button */}
                                        <div className="col-12 mt-4">
                                            <button
                                                type="submit"
                                                className="btn btn-dark w-100 py-3 fw-bold rounded-0"
                                            >
                                                Request Demo
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Section1;