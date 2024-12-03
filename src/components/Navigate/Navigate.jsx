import { FiSearch } from "react-icons/fi";
import css from "./Navigate.module.css";
import { CiShoppingCart } from "react-icons/ci";
import { useSelector } from "react-redux";
import useScrollTo from "../hooks/useScrollTo";
import BacketBuyInfo from "../BacketBuyInfo/BacketBuyInfo";
import { useState } from "react";

const Navigate = ({ product }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const scrollToElement = useScrollTo()

  const handleModalOpen = () => setIsModalOpen(true);
  const handleModalClose = () => setIsModalOpen(false);
  
  const handleLinkClick = (e, targetId) => {
    e.preventDefault()
    scrollToElement(targetId)
  }

  const totalItems = useSelector(state => state.cart.totalItems)
  return (
    <div className={css.container}>
      <img src="/logo.png" alt="logo" className={css.img} />
      <div className={css.ContainerForListAndBtns}>
      <ul className={css.containerList}>
        <li><a href="/"  className={css.list}>Home +</a></li>
        <li><a href="#about" onClick={(e) => handleLinkClick(e, "about")} className={css.list}>About +</a></li>
        <li><a href="#shop" onClick={(e) => handleLinkClick(e, "shop")} className={css.list}>Shop +</a></li>
        <li><a href="#products" onClick={(e) => handleLinkClick(e, "products")}  className={css.list}>Products +</a></li>
        <li><a href="#contact" onClick={(e) => handleLinkClick(e, "contact")} className={css.list}>Contact</a></li>
      </ul>
      <div className={css.containerForBtns}>
      <button className={css.btnLogin}>Login</button>
      <button className={css.btn}>
        <FiSearch style={{width: 20, height:20}}/>
      </button>
      <button className={css.btn}  onClick={handleModalOpen}>
        <CiShoppingCart  style={{width: 20, height:20}}/>
        <span className={css.cartCount}>{totalItems}</span>
      </button>
    </div>
    </div>
    {isModalOpen && (
        <BacketBuyInfo
          isOpen={isModalOpen}
          onClose={handleModalClose}
        />
      )}
    </div>
  );
};

export default Navigate;
