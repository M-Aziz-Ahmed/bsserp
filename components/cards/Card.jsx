const Card = ({ setModel }) => {
    return (
        <div className="container-fluid">
            <div className={`row justify-content-center py-5 transition-opacity duration-1000 delay-300 opacity-100 bg-light
                    }`}>
                <div className="d-flex col-lg-8">
                    <div className="bg-white p-4 p-lg-5 rounded-4 shadow-sm flex lg:flex-row flex-col align-items-center gap-3">
                        <h2 className="h3 mb-0 text-center text-md-start w-75 w-md-50 fw-semibold">
                            Elevate your business with BSSERP - advanced software trusted worldwide that guides you to success
                        </h2>
                        <button
                            className="btn btn-theme btn-lg  rounded-5 h-fit"
                            aria-label="Request a demo of BSSERP"
                            onClick={() => { setModel(true) }}
                        >
                            Request Demo
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Card