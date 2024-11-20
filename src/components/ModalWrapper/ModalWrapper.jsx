import Modal from "react-modal";
import PropTypes from "prop-types";


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

const ModalWrapper = ({ isOpen, onClose, product }) => {
  return (
    <div>
      <Modal
        isOpen={isOpen}
        onRequestClose={onClose}
        style={customStyles}
        shouldCloseOnOverlayClick={true}
        shouldCloseOnEsc={true}
      >
        {product && (
          <div>
            <div>
              <img src={product.image} alt={product.name} />
            </div>
            <div>
              <h2>{product.name}</h2>
              <p>{product.category}</p>
              <p>{product.price}</p>
              <p>{product.discountPrice}</p>
              <p>{product.rating}</p>
              <p>{product.description}</p>
            </div>
          </div>
        )}
      </Modal>
    </div>
  );
};

ModalWrapper.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  product: PropTypes.shape({
    image: PropTypes.string,
    name: PropTypes.string,
    category: PropTypes.string,
    price: PropTypes.number,
    discountPrice: PropTypes.number,
    rating: PropTypes.number,
    description: PropTypes.string,
  }).isRequired,
};

export default ModalWrapper;
