'use client'
import React, { useState, useEffect } from 'react';
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css';

const Section1 = () => {
    const [formValues, setFormValues] = useState({
        userName: "",
        email: "",
        phoneNumber: "",
        services: "",
        message: "",
    });
    const [loader, setLoader] = useState(false);
    const [alert, setAlert] = useState({
        message: "",
        show: false,
        type: "" // 'success' or 'error'
    });
    const [errors, setErrors] = useState({});
    const [countryCode, setCountryCode] = useState('PK'); // Default to Pakistan

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

    useEffect(() => {
        // Auto-detect user's country
        if (typeof window !== 'undefined') {
            fetch('https://ipapi.co/json/')
                .then(res => res.json())
                .then(data => setCountryCode(data.country))
                .catch(() => setCountryCode('PK')); // Fallback to Pakistan
        }
    }, []);

    const validateEmail = (email) => {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    };

    const validateForm = () => {
        const newErrors = {};

        if (!formValues.userName.trim()) {
            newErrors.userName = "Full name is required";
        }

        if (!formValues.email.trim()) {
            newErrors.email = "Email is required";
        } else if (!validateEmail(formValues.email)) {
            newErrors.email = "Please enter a valid email address";
        }

        if (!formValues.phoneNumber) {
            newErrors.phoneNumber = "Phone number is required";
        } else if (formValues.phoneNumber.length < 5) {
            newErrors.phoneNumber = "Please enter a valid phone number";
        }

        if (!formValues.services) {
            newErrors.services = "Please select a service";
        }

        if (!formValues.message.trim()) {
            newErrors.message = "Please tell us about your requirements";
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues(prev => ({
            ...prev,
            [name]: value
        }));

        // Clear error when user types
        if (errors[name]) {
            setErrors(prev => ({ ...prev, [name]: '' }));
        }
    };

    const handlePhoneChange = (value) => {
        setFormValues(prev => ({
            ...prev,
            phoneNumber: value
        }));

        if (errors.phoneNumber) {
            setErrors(prev => ({ ...prev, phoneNumber: '' }));
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoader(true);
        setAlert({ ...alert, show: false });

        if (!validateForm()) {
            setLoader(false);
            setAlert({
                message: "Please fix the errors in the form",
                show: true,
                type: "error"
            });
            return;
        }

        try {
            const response = await fetch('/api/sendEmail', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    ...formValues,
                    countryCode // Include country code in submission
                }),
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.message || 'Failed to submit form');
            }

            setAlert({
                message: "Your request has been submitted successfully! We'll contact you soon.",
                show: true,
                type: "success"
            });

            // Reset form
            setFormValues({
                userName: "",
                email: "",
                phoneNumber: "",
                services: "",
                message: "",
            });

        } catch (error) {
            setAlert({
                message: error.message || "An error occurred. Please try again later.",
                show: true,
                type: "error"
            });
        } finally {
            setLoader(false);
        }
    };

    return (
        <section className="py-5">
            {alert.show && (
                <div className="container mb-4">
                    <div
                        className={`alert ${alert.type === 'success' ? 'bg-theme text-light' : 'alert-danger'} alert-dismissible fade show`}
                        role="alert"
                    >
                        {alert.message}
                        <button
                            type="button"
                            className={`btn-close`}
                            onClick={() => setAlert({ ...alert, show: false })}
                            aria-label="Close"
                        />
                    </div>
                </div>
            )}

            <div className="container my-5">
                <div className="row g-4 align-items-center">
                    <div className="col-lg-7 left-content">
                        <div className="pe-lg-5">
                            <h1 className="display-5 fw-bold mb-4 text">
                                Best ERP software in <span className="text-highlight">Pakistan</span> for <span className="text-highlight">Enterprises</span> & SMBs
                            </h1>
                            <p className="lead text-secondary mb-4">
                                Discover the most affordable and the <span className='text-highlight fw-bold'>best ERP software in Pakistan</span>, made to improve your daily work, increase efficiency, and take your business to the next level.
                            </p>
                            <button className="btn btn-theme btn-lg rounded-5">Request Demo</button>
                        </div>
                    </div>

                    <div className="col-lg-5 right-content">
                        <div className="shadow-lg border-0" style={{ backgroundColor: "#EFF4F3" }}>
                            <div className=" p-4">
                                <h3 className="card-title text-center mb-4">Request personalized demo</h3>
                                <form onSubmit={handleSubmit} noValidate>
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
                                                    className={`form-control ${errors.userName ? 'is-invalid' : ''}`}
                                                    placeholder=""
                                                    required
                                                />
                                                <label htmlFor="userName">Full Name</label>
                                                {errors.userName && (
                                                    <div className="invalid-feedback">
                                                        {errors.userName}
                                                    </div>
                                                )}
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
                                                    className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                                                    placeholder=""
                                                    required
                                                />
                                                <label htmlFor="email">Email Address</label>
                                                {errors.email && (
                                                    <div className="invalid-feedback">
                                                        {errors.email}
                                                    </div>
                                                )}
                                            </div>
                                        </div>

                                        {/* Phone */}
                                        <div className="col-md-6">
                                            <div className="form-floating mb-3">
                                                <PhoneInput
                                                    international
                                                    defaultCountry={countryCode}
                                                    value={formValues.phoneNumber}
                                                    onChange={handlePhoneChange}
                                                    className={`form-control ${errors.phoneNumber ? 'is-invalid' : ''}`}
                                                    placeholder=" "
                                                    style={{
                                                        height: 'calc(3.5rem + 2px)',
                                                        lineHeight: 2.25,
                                                        padding: '5%',
                                                    }}
                                                />
                                                <label htmlFor="phone-input" className="text-muted">
                                                    
                                                </label>
                                                {errors.phoneNumber && (
                                                    <div className="invalid-feedback d-block">
                                                        {errors.phoneNumber}
                                                    </div>
                                                )}
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
                                                    className={`form-select ${errors.services ? 'is-invalid' : ''}`}
                                                    required
                                                >
                                                    <option value="">Select a service</option>
                                                    {services.map((service, index) => (
                                                        <option key={index} value={service}>{service}</option>
                                                    ))}
                                                </select>
                                                <label htmlFor="services">Services</label>
                                                {errors.services && (
                                                    <div className="invalid-feedback">
                                                        {errors.services}
                                                    </div>
                                                )}
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
                                                    className={`form-control ${errors.message ? 'is-invalid' : ''}`}
                                                    rows={3}
                                                    placeholder=""
                                                    style={{ minHeight: "100px" }}
                                                    required
                                                />
                                                <label htmlFor="message">Tell us about your requirements...</label>
                                                {errors.message && (
                                                    <div className="invalid-feedback">
                                                        {errors.message}
                                                    </div>
                                                )}
                                            </div>
                                        </div>

                                        {/* Submit Button */}
                                        <div className="col-12 mt-4">
                                            <button
                                                type="submit"
                                                className="btn btn-theme rounded-0 w-100 py-3 fw-bold"
                                                disabled={loader}
                                            >
                                                {loader ? (
                                                    <>
                                                        <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true" />
                                                        Processing...
                                                    </>
                                                ) : (
                                                    'Request Demo'
                                                )}
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