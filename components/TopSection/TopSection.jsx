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
                            <div className="card-body p-4">
                                <h3 className="card-title text-center mb-4 text-secondary">Request personalized demo</h3>
                                <form>
                                    <div className="form-floating mb-3">
                                        <input 
                                            type="text" 
                                            id="userName"
                                            name="userName"
                                            value={formValues.userName}
                                            onChange={(e)=>{setFormValues({...formValues, userName: e.target.value})}}
                                            className="form-control py-2" 
                                            placeholder="" 
                                        />
                                        <label htmlFor="userName" className="form-label">Full Name</label>
                                    </div>
                                    <div className="form-floating mb-3">      
                                        <input 
                                            type="email" 
                                            id="email"
                                            name="email"
                                            value={formValues.email}
                                            onChange={handleChange}
                                            className="form-control py-2" 
                                            placeholder="" 
                                        />
                                        <label htmlFor="email" className="form-label">Email Address</label>
                                    </div>
                                    <div className="form-floating mb-3">
                                        <input 
                                            type="tel" 
                                            id="phoneNumber"
                                            name="phoneNumber"
                                            value={formValues.phoneNumber}
                                            onChange={handleChange}
                                            className="form-control py-2" 
                                            placeholder="" 
                                        />
                                        <label htmlFor="phoneNumber" className="form-label">Phone Number</label>
                                    </div>
                                    <div className="form-floating mb-3">
                                        <select 
                                            id="services"
                                            name="services"
                                            value={formValues.services}
                                            onChange={handleChange}
                                            className="form-select py-2"
                                        >
                                            <option value="Select Services">Select Services</option>
                                            {services.map((service, index) => (
                                                <option key={index} value={service}>{service}</option>
                                            ))}
                                        </select>
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="message" className="form-label">Message</label>
                                        <textarea 
                                            id="message"
                                            name="message"
                                            value={formValues.message}
                                            onChange={handleChange}
                                            className="form-control py-2" 
                                            rows={3}
                                            placeholder="Tell us about your requirements..."
                                        ></textarea>
                                    </div>
                                    <button type="submit" className="btn btn-dark w-100 py-2 fw-bold">
                                        Request Demo
                                    </button>
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