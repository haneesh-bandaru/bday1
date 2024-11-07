import './Modal.css'; // Optional CSS for styling

const Modal = ({ show, onClose, title, children }) => {
    if (!show) return null;

    return (
        <div className="modal-backdrop">
            <div className="modal-content">
                <button className="close-button" onClick={onClose}>
                    &times;
                </button>
                <h2>{title}</h2>
                <div className="modal-body">{children}</div>
            </div>
        </div>
    );
};

export default Modal;
