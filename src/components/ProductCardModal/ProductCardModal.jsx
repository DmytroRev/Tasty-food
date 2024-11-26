import css from './ProductCardModal.module.css';
import PropTypes from "prop-types";
import ModalWrapper from '../ModalWrapper/ModalWrapper';
import { Rating } from '@smastrom/react-rating';

const ProductCardModal = ({ isOpen, onClose, product }) => {
  return (
    <ModalWrapper isOpen={isOpen} onClose={onClose}>
      <div className={css.modalContent}>
        <div className={css.img}>
          <img src={product.image} alt={product.name} />
        </div>
        <div className={css.containerWithInfo}>
          <h2 className={css.title}>{product.name}</h2>
          <p className={css.category}>{product.category}</p>
          <p className={css.price}>
            {product.isDiscounted ? (
              <>
                <span className={css.oldPrice}>
                  ${product.price.toFixed(2)}{" "}
                  <span style={{ color: "#76A713", fontSize: 15 }}>-</span>
                </span>
                <span className={css.price}> ${product.discountPrice.toFixed(2)}</span>
              </>
            ) : (
              `$${product.price.toFixed(2)}`
            )}
          </p>
          <p>{product.description}</p>
          <div className={css.rating}>
            <Rating style={{ maxWidth: 100 }} value={product.rating} readOnly />
          </div>
        </div>
      </div>
    </ModalWrapper>
  );
};

ProductCardModal.propTypes = {
  product: PropTypes.shape({
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    category: PropTypes.string.isRequired,
    discountPrice: PropTypes.number,
    discountPercent: PropTypes.number,
    isDiscounted: PropTypes.bool,
    rating: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default ProductCardModal;
