const Card = ({setModel }) => {
    return (
        <div className="container my-5">
            <div className="d-flex justify-content-center">
                <div className="d-flex flex-column flex-md-row w-100 w-md-75 bg-dark text-light p-4 p-md-5 rounded-4 justify-content-between align-items-center gap-3 gap-md-0 shadow-lg">
                    <h2 className="h3 mb-0 text-center text-md-start w-75 w-md-50 fw-semibold">
                        Elevate your business with SowaanERP - advanced software trusted worldwide that guides you to success
                    </h2>
                    <button
                        className="btn btn-theme btn-lg rounded-pill px-4 fw-medium fs-6"
                        aria-label="Request a demo of SowaanERP"
                        onClick={()=>{setModel(true)}}
                    >
                        Request Demo
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Card