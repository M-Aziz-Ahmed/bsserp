import Form from "./Form";

const Model = ({ setModel, alert, setAlert }) => {
    return (
        <>
            <div className="d-flex justify-center md position-fixed py-5 w-100 z-3 bg-dark bg-opacity-50">
                <div className="d-flex flex-column justify-content-center lg:w-150 md:w-150">
                    <div className="d-flex justify-content-end h2" onClick={() => { setModel(false) }} style={{ cursor: 'pointer' }}>X</div>
                    <Form  alert={alert} setAlert={setAlert}/>
                </div>
            </div>
        </>
    );
}

export default Model