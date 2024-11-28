import { useRef, useState } from 'react';
import css from './AddToCartButton.module.css';
import { useDispatch } from 'react-redux';
import { addItem } from '../../redux/basket/cartSlice';
import { FcCheckmark } from 'react-icons/fc';

const AddToCartButton = ({ product }) => {
  const [animate, setAnimate] = useState(false);
  const [isValidated, setIsValidated] = useState(false); // Для состояния успешной отправки
  const buttonRef = useRef(null);
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    setAnimate(true); // Начало анимации
    dispatch(addItem(product)); // Добавление товара в корзину

    // Задержка для анимации
    setTimeout(() => {
      setAnimate(false); // Окончание анимации
      setIsValidated(true); // Показ успешной отправки
    }, 2250);

    // Сброс в начальное состояние
    setTimeout(() => {
      setIsValidated(false);
    }, 3500);
  };

  return (
    <button
      ref={buttonRef}
      className={`${css.btn} ${animate ? css.animate : ''} ${isValidated ? css.validate : ''}`}
      onClick={handleAddToCart}
    >
      {isValidated ? <FcCheckmark className={css.iconCheckMark}/> : 'Buy'}
    </button>
  );
};

export default AddToCartButton;
