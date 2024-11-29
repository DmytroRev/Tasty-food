import { useState } from 'react';
import css from './CardPaymentForm.module.css'
import Cards from 'react-credit-cards';
import 'react-credit-cards/es/styles-compiled.css';
import { toast } from 'react-toastify'; // Для тостов, если используете
import 'react-toastify/dist/ReactToastify.css';

const CardPaymentForm = () => {
    const [cardInfo, setCardInfo] = useState({
        number: '',
        name: '',
        expiry: '',
        cvc: '',
        focus: ''
    })

    const handleInputChange = (e) => {
        setCardInfo({...cardInfo, [e.target.name]: e.target.value})
    }

    const handleInputFocus = (e) => {
        setCardInfo({...cardInfo, focus: e.target.name})
    }

    const handleFormSubmit = (e) => {
        e.preventDefault()
        toast.success('Payment is true')
    }

    return (
        <div style={{display:'flex', gap: '20px'}}>
<Cards number={cardInfo.number}
name={cardInfo.name}
expiry={cardInfo.expiry}
cvc={cardInfo.cvc}
focused={cardInfo.focus}/>
 <form onSubmit={handleFormSubmit}>
        <input
          type="text"
          name="number"
          placeholder="Номер карты"
          onChange={handleInputChange}
          onFocus={handleInputFocus}
        />
        <input
          type="text"
          name="name"
          placeholder="Имя владельца"
          onChange={handleInputChange}
          onFocus={handleInputFocus}
        />
        <input
          type="text"
          name="expiry"
          placeholder="Срок действия (MM/YY)"
          onChange={handleInputChange}
          onFocus={handleInputFocus}
        />
        <input
          type="text"
          name="cvc"
          placeholder="CVC"
          onChange={handleInputChange}
          onFocus={handleInputFocus}
        />
        <button type="submit">Оплатить</button>
      </form>
        </div>
    )
}