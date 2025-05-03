'use client'
import Form from "@/components/Form";
import React, { useState } from "react";

const Page = () => {
  const [model, setModel] = useState(false);
  const [alert, setAlert] = useState({
    show: false,
    type: 'success',
    message: ''
  });
  return(
    <section className="py-5 bg-light">
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
                                Best ERP software <span className="text-highlight"></span> for <span className="text-highlight">Enterprises</span> & SMBs
                            </h1>
                            <p className="lead text-secondary mb-4">
                            Biz Soft Solutions has a clear vision towards its clients; aiming to deliver <span className='text-highlight fw-bold'>at the highest standards</span> by providing a unique client focus approach.
                            </p>
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

export default Page