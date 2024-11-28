import { useDispatch, useSelector } from 'react-redux';
import ModalWrapper from '../ModalWrapper/ModalWrapper';
import css from './BacketBuyInfo.module.css';
import { addItem, clearCart, removeItem } from '../../redux/basket/cartSlice';

const BacketBuyInfo = ({ isOpen, onClose }) => {
  const dispatch = useDispatch();
  const { Items } = useSelector((state) => state.cart);

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

  return (
    <ModalWrapper isOpen={isOpen} onClose={onClose}>
      <div className={css.container}>
        <h2 className={css.title}>Shopping Cart</h2>

        {Items.length > 0 ? (
          <>
            <ul className={css.itemList}>
              {Items.map((item) => {
                const effectivePrice = item.isDiscounted ? item.discountPrice : item.price;
                return (
                  <li key={item.id} className={css.item}>
                    <img src={item.image} alt={item.name} className={css.img} />
                    <div className={css.details}>
                      <span className={css.name}>{item.name}</span>
                      <span className={css.price}>
                        $ {effectivePrice.toFixed(2)}
                      </span>
                      {item.isDiscounted && (
                        <span className={css.oldPrice}>${item.price.toFixed(2)}</span>
                      )}
                    </div>
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
                  <span className={css.savingsAmount}>-${totalSavings.toFixed(2)}</span>
                </div>
              )}
            </div>

            <button
              className={css.clearBtn}
              onClick={() => dispatch(clearCart())}
            >
              Empty trash
            </button>
          </>
        ) : (
          <p className={css.empty}>Cart is empty</p>
        )}
      </div>
    </ModalWrapper>
  );
};

export default BacketBuyInfo;
