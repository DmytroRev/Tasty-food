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
          <div className={css.container}>
            <div>
            <button onClick={onClose} className={css.btnClose}><IoCloseSharp />
            </button>
            </div>
            <div className={css.img}>
              <img src={product.image} alt={product.name} />
            </div>
            <div className={css.containerWithInfo}>
              <h2 className={css.title}>{product.name}</h2>
              <p className={css.category}>{product.category}</p>
              <p className={css.price}>
          {product.isDiscounted ? (
            <>
              <span className={css.oldPrice}>${product.price.toFixed(2)} <span style={{color: '#76A713', fontSize: 15}}>-</span></span>
              <span className={css.price}> ${product.discountPrice.toFixed(2)}</span>
            </>
          ) : (
            `$${product.price.toFixed(2)}`
          )}
        </p>
              <p>{product.description}</p>
              <div className={css.rating}>
        <Rating style={{maxWidth: 100}}
        value={product.rating}
        readOnly/>
        </div>
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
    isDiscounted: PropTypes.bool,
    discountPrice: PropTypes.number,
    rating: PropTypes.number,
    description: PropTypes.string,
  }).isRequired,
};

export default ModalWrapper;
