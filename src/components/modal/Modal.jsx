import Modal from "react-modal";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    backgroundColor: "#c0c0c0",
  },
  overlay: {
    backgroundColor: "grey",
  },
};

const ModalWindow = ({ img, model, desc, isOpen, onClose, func, acc }) => {
  return (
    <div>
      <Modal
        isOpen={isOpen}
        onRequestClose={onClose}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <img src={img} alt={model} width="800" />
        <h5 className="card-title">{model}</h5>
        <p className="card-text">{desc}</p>
        <h5>Functionalities</h5>
        <ul>
          {func.map((func) => (
            <li>{func}</li>
          ))}
        </ul>
        <h5>Accessories</h5>
        <ul>
          {acc.map((acc) => (
            <li>{acc}</li>
          ))}
        </ul>
        <button type="button" onClick={onClose}>
          Close
        </button>
      </Modal>
    </div>
  );
};

export default ModalWindow;
