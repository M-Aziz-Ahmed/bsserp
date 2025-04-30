'use client'
import { useState } from "react";
import Form from "../Form";

const Section1 = ({setModel, alert, setAlert}) => {
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
                            onClick={() => setAlert({...alert, show: false})}
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
                            <button className="btn btn-theme btn-lg rounded-5" onClick={()=>{setModel(true)}}>Request Demo</button>
                        </div>
                    </div>

                    <div className="col-lg-5 right-content">
                        <Form alert={alert} setAlert ={setAlert}/>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Section1;