import { useState } from 'react';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';

const CardInputForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const [isProcessing, setIsProcessing] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    setIsProcessing(true);

    // Создаем токен с помощью данных карты
    const { token, error } = await stripe.createToken(elements.getElement(CardElement));

    if (error) {
      console.error(error);
      setIsProcessing(false);
    } else {
      console.log('Token:', token);
      // Отправьте token на сервер для обработки платежа
      // Например, вызовите API для создания платежа
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Card details
        <CardElement />
      </label>
      <button type="submit" disabled={isProcessing}>
        {isProcessing ? 'Processing...' : 'Pay Now'}
      </button>
    </form>
  );
};

export default CardInputForm;
