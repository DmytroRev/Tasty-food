import Modal from "react-modal";
import PropTypes from "prop-types";
import css from './ModalWrapper.module.css'
import { Rating } from "@smastrom/react-rating";
import { IoCloseSharp } from "react-icons/io5";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    padding: 0,
    border: "none",
    backgroundColor: "transparent",
  },
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.75)",
  },
};

Modal.setAppElement("#root");

const ModalWrapper = ({ isOpen, onClose, children }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      style={customStyles}
      shouldCloseOnOverlayClick={true}
      shouldCloseOnEsc={true}
    >
      <div className={css.container}>
        <div>
          <button onClick={onClose} className={css.btnClose}>
            <IoCloseSharp />
          </button>
        </div>
        {children}
      </div>
    </Modal>
  );
};

ModalWrapper.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,  // Принимает любой JSX
};

export default ModalWrapper;
