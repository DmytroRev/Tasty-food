import { useDispatch, useSelector } from "react-redux";
import ModalWrapper from "../ModalWrapper/ModalWrapper";
import css from "./BacketBuyInfo.module.css";
import { addItem, clearCart, removeItem } from "../../redux/basket/cartSlice";
import { useRef, useState } from "react";
import OrderForm from "../OrderForm/OrderForm";
import CardInputForm from "../CardInputForm/CardInputForm";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe(
  "pk_test_51QQrkwFWCca8G3bWSzDpD4pvsM2Fi0FtZzZxKRz6eGiroAgj1xy8wY00HQqf5P7axqEhdZsbn08WLKKSKhOJfvPi00a8HVjcFB"
);

const BacketBuyInfo = ({ isOpen, onClose }) => {
  const dispatch = useDispatch();
  const { Items } = useSelector((state) => state.cart);
  const [showForm, setShowForm] = useState(false);
  const formRef = useRef(null);

  const totalAmount = Items.reduce((sum, item) => {
    const effectivePrice = item.isDiscounted ? item.discountPrice : item.price;
    return sum + effectivePrice * item.quantity;
  }, 0);

  const totalSavings = Items.reduce((sum, item) => {
    if (item.isDiscounted) {
      const savingsPerItem = (item.price - item.discountPrice) * item.quantity;
      return sum + savingsPerItem;
    }
    return sum;
  }, 0);

  const handleDecreaseQuantity = (item) => {
    if (item.quantity > 1) {
      dispatch(removeItem({ ...item, quantity: item.quantity - 1 }));
    } else {
      dispatch(removeItem(item));
    }
  };

  const handleBuyClick = () => {
    setShowForm(true);
    setTimeout(() => {
      formRef.current?.scrollIntoView({ behavior: "smooth" });
    }, 500);
  };

  return (
    <ModalWrapper isOpen={isOpen} onClose={onClose}>
      <div className={css.container}>
        <h2 className={css.title}>Shopping Cart</h2>

        {Items.length > 0 ? (
          <>
            <ul className={css.itemList}>
              {Items.map((item) => {
                const effectivePrice = item.isDiscounted
                  ? item.discountPrice
                  : item.price;
                return (
                  <li key={item.id} className={css.item}>
                    <img src={item.image} alt={item.name} className={css.img} />
                    <div className={css.details}>
                      <span className={css.name}>{item.name}</span>
                      <div className={css.controls}>
                        <button
                          className={css.controlBtn}
                          onClick={() => handleDecreaseQuantity(item)}
                        >
                          -
                        </button>
                        <span className={css.quantity}>{item.quantity}</span>
                        <button
                          className={css.controlBtn}
                          onClick={() => dispatch(addItem(item))}
                        >
                          +
                        </button>
                      </div>
                      <span className={css.price}>
                        $ {effectivePrice.toFixed(2)}
                      </span>
                    </div>
                  </li>
                );
              })}
            </ul>

            <div className={css.summary}>
              <div className={css.total}>
                <span>Total:</span>
                <span>$ {totalAmount.toFixed(2)}</span>
              </div>
              {totalSavings > 0 && (
                <div className={css.savings}>
                  <span>Economy:</span>
                  <span className={css.savingsAmount}>
                    -${totalSavings.toFixed(2)}
                  </span>
                </div>
              )}
            </div>
            <div className={css.containerForBtn}>
              <button
                className={css.clearBtn}
                onClick={() => dispatch(clearCart())}
              >
                Empty trash
              </button>
              <button className={css.buyBtn} onClick={handleBuyClick}>
                Buy Now
              </button>
            </div>
            {showForm && (
              <div ref={formRef}>
                <OrderForm />
              </div>
            )}
          </>
        ) : (
          <p className={css.empty}>Cart is empty</p>
        )}
        <Elements stripe={stripePromise}>
          <CardInputForm />
        </Elements>
      </div>
    </ModalWrapper>
  );
};

export default BacketBuyInfo;
