// components/Alert.js
'use client';
import { useAlertState } from "./Form";
const Alert = () => {
    // const { alert, setAlert } = useAlertState();
    
    return (
        <>
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
        </>
    );
}

export default Alert;