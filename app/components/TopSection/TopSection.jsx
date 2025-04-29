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
    const [loader, setLoader] = useState(false);
    const [alert, setAlert] = useState({
        message: "",
        status: false,
        type: ""
    })

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

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoader(true);

        // Ensure all required fields exist
        if (!formValues.userName || !formValues.email || !formValues.phoneNumber || !formValues.services || !formValues.message) {
            setLoader(false);
            setAlert({
                message: "Please fill all the fields",
                status: true,
                type: "danger"
            })
            return;
        }

        try {
            const apiEndpoint = '/api/sendEmail';

            fetch(apiEndpoint, {
                method: 'POST',
                body: JSON.stringify(formValues),
            })
                .then((res) => res.json())
                .then((response) => {
                    // alert(response.message);
                    setLoader(false);
                    setAlert({
                        message: response.message,
                        status: true,
                        type: "success"
                    })


                })
                .catch((err) => {
                    alert(err);
                });

        } catch (error) {
            console.error("Submission error:", error);
            setAlert({
                message: "An error occurred while sending the email",
                status: true,
                type: "danger"
            });
        }
    };

    return (
        <section className="py-5">
            {alert.status && (
                <div className="d-flex justify-content-end px-3">
                    <div class={`alert ${alert.type==='success'?'bg-theme text-light':'alert-danger'} d-flex gap-4 align-items-center`} role="alert">
                        <span>{alert.message}</span>
                        <button type="button" class="close" onClick={() => setAlert({ ...alert, status: false })}>
                            <span aria-hidden="true" className='fs-4'>&times;</span>
                        </button>
                    </div>
                </div>
            )}
            {loader
                ? <>
                    <div className="d-flex justify-content-center align-items-center text" style={{ height: '60vh' }}>
                        <div className="spinner-border" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div>
                    </div>
                </>
                : <>
                    <div className="container my-5">
                        <div className="row g-4 align-items-center">
                            <div className="col-lg-7 left-content">
                                <div className="pe-lg-5">
                                    <h1 className="display-5 fw-bold text mb-4">
                                        Best ERP software in <span className="text-highlight">Pakistan</span> for <span className="text-highlight">Enterprises</span> & SMBs
                                    </h1>
                                    <p className="lead text-muted mb-4">
                                        Discover the most affordable and the <span className='text-highlight fw-bold'>best ERP software in Pakistan</span>, made to improve your daily work, increase efficiency, and take your business to the next level. This user-friendly cloud-based solution is more than just an application; it's a smart assistant that fits your company's needs perfectly.
                                    </p>
                                    <ul className="list-unstyled">
                                        <button className="btn-theme btn btn-lg rounded-5">Request Demo</button>
                                    </ul>
                                </div>
                            </div>

                            <div className="col-lg-5 right-content">
                                <div className="form-bg shadow-lg border-0">
                                    <div className="card-body p-3">
                                        <h3 className="card-title text-center mb-5 text">Request personalized demo</h3>
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
                                                            className="form-control border-0 border-bottom rounded-0"
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
                                                            className="form-control border-0 border-bottom rounded-0"
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
                                                            className="form-control border-0 border-bottom rounded-0"
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
                                                            className="form-select border-0 border-bottom rounded-0 "
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
                                                            className="form-control border-0 border-bottom rounded-0"
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
                                                        className="btn btn-theme w-100 py-3 fw-bold rounded-0"
                                                        onClick={handleSubmit}
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
                </>}

        </section>
    );
}

export default Section1;