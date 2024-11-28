import { useDispatch, useSelector } from 'react-redux';
import ModalWrapper from '../ModalWrapper/ModalWrapper';
import css from './BacketBuyInfo.module.css'
import { addItem, removeItem } from '../../redux/basket/cartSlice';

const BacketBuyInfo = ({ isOpen, onClose}) => {
    const dispatch = useDispatch()
    const cartItems = useSelector(state => state.cart.Items)

    const increaseQuantity = product => {
        dispatch(addItem(product))
    }

    const decreaseQuantity = product => {
        dispatch(removeItem(product))
    }
    return (
        <ModalWrapper isOpen={isOpen} onClose={onClose}>
            <div></div>
        </ModalWrapper>
    )
}

export default BacketBuyInfo;