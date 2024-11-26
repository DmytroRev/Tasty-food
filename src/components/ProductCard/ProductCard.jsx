import PropTypes from "prop-types";
import css from "./ProductCard.module.css";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css"; 
import { PiArrowsClockwiseLight, PiHeart } from "react-icons/pi";
import { GoScreenFull } from "react-icons/go";
import { useState } from "react";
import ModalWrapper from "../ModalWrapper/ModalWrapper";

const ProductCard = ({ product }) => {
  const [selectImage, setSelectImage] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false)

const handleModalOpen = (product) => {
  setSelectImage(product);
  setIsModalOpen(true)}

  const handleModalClose = () => {
    setIsModalOpen(false)
    setSelectImage(null)
  }

    return (
      <div className={css.container}>
        <div className={css.containerImg}>
        <img src={product.image} alt={product.name} className={css.img} />
        <div className={css.hoverButtons}>
            <button className={css.iconButton} onClick={() => alert("Please logIn or signIn")}>
                <PiArrowsClockwiseLight/>
            </button>
            <button className={css.iconButton} onClick={() => alert("Please logIn or signIn")}><PiHeart/></button>
            <button className={css.iconButton}  onClick={handleModalOpen}><GoScreenFull/></button>
        </div>
        </div>
        <div className={css.containerWithInfo}>
        <h3 className={css.name}>{product.name}</h3>
        <p className={css.price}>
          {product.isDiscounted ? (
            <>
              <span className={css.oldPrice}>${product.price.toFixed(2)} <span style={{color: '#76A713', fontSize: 15}}>-</span></span>
              <span className={css.price}> ${product.discountPrice.toFixed(2)}</span>
              <span className={css.discountPercent}>Off {product.discountPercent}%</span>
            </>
          ) : (
            `$${product.price.toFixed(2)}`
          )}
        </p>
        <div className={css.rating}>
        <Rating style={{maxWidth: 80}}
        value={product.rating}
        readOnly/>
        </div>
        <div style={{display: "flex", justifyContent:"center"}}>
        <button className={css.btn}>Buy</button>
        </div>
      </div>
      {isModalOpen && selectImage && (
        <ModalWrapper
          isOpen={isModalOpen}
          onClose={handleModalClose}
          product={product} 
        />
      )}
      </div>
    );
  };
  
  ProductCard.propTypes = {
    product: PropTypes.shape({
      name: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      discountPrice: PropTypes.number,
      discountPercent: PropTypes.number,
      isDiscounted: PropTypes.bool,
      rating: PropTypes.number.isRequired,
      image: PropTypes.string.isRequired,
    }).isRequired,
    products: PropTypes.arrayOf(
        PropTypes.shape({
          image: PropTypes.string.isRequired,
          name: PropTypes.string.isRequired,
          price: PropTypes.number.isRequired,
          description: PropTypes.string.isRequired,
        }).isRequired
      )
  };
  
  export default ProductCard;
  