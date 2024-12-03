import { useState } from 'react';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import styled from 'styled-components';

// Компонент формы
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

    const { token, error } = await stripe.createToken(elements.getElement(CardElement));

    if (error) {
      console.error(error);
      setIsProcessing(false);
    } else {
      console.log('Token:', token);
      // Тут можно отправить токен на сервер для дальнейшей обработки
    }
  };



  return (
    <Form onSubmit={handleSubmit}>
      <Label>
        Card details
        <CardElementWrapper>
          <CardElement />
        </CardElementWrapper>
      </Label>
    </Form>
  );
};

// Стилизация компонентов с использованием styled-components
const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 350px;
  height: 120px;
  margin: 0 auto;
  padding: 20px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  text-align: center;
`;

const Label = styled.label`
  font-size: 16px;
  margin-bottom: 12px;
  color: #333;
`;

const CardElementWrapper = styled.div`
  margin-bottom: 20px;
  margin-top: 20px;
  .StripeElement {
    padding: 12px;
    font-size: 16px;
    border-radius: 4px;
    border: 1px solid #ccc;
    box-sizing: border-box;
  }

  .StripeElement--focus {
    border-color: #0070f3;
  }
`;

const SubmitButton = styled.button`
  padding: 14px;
  font-size: 16px;
  background-color: #0070f3;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #005bb5;
  }

  &:disabled {
    background-color: #cccccc;
    cursor: not-allowed;
  }
`;

export default CardInputForm;
