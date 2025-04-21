const Scorecard = ({}) => {
  return (
    <div className="container my-5 py-4">
                <div className="row g-4 text-center">
                    {/* Client Satisfaction */}
                    <div className="col-lg-3 col-sm-6">
                        <div className="bg-dark text-white p-4 rounded-4 shadow-sm">
                            <h2 className="display-4 fw-bold mb-1">100%</h2>
                            <p className="mb-0 fs-5 fw-medium">Client satisfaction</p>
                        </div>
                    </div>

                    {/* Expert Support */}
                    <div className="col-lg-3 col-sm-6">
                        <div className="bg-light text-dark p-4 rounded-4 shadow-sm">
                            <h2 className="display-4 fw-bold mb-1">24h</h2>
                            <p className="mb-0 fs-5 fw-medium">Expert support team</p>
                        </div>
                    </div>

                    {/* Countries */}
                    <div className="col-lg-3 col-sm-6">
                        <div className="bg-dark text-white p-4 rounded-4 shadow-sm">
                            <h2 className="display-4 fw-bold mb-1">06+</h2>
                            <p className="mb-0 fs-5 fw-medium">Countries</p>
                        </div>
                    </div>

                    {/* Years Experience */}
                    <div className="col-lg-3 col-sm-6">
                        <div className="bg-light text-dark p-4 rounded-4 shadow-sm">
                            <h2 className="display-4 fw-bold mb-1">12+</h2>
                            <p className="mb-0 fs-5 fw-medium">Years experience</p>
                        </div>
                    </div>
                </div>
            </div>
  );
}

export default Scorecard