import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { useContext } from 'react';
import CartContext from '../../context/CartContext'

const CartWidget = ({ className }) => {
    const { cartSize } = useContext(CartContext)
    
    return(
    <button className={className}>
        <ShoppingCartIcon/>
        {cartSize()}
    </button>
        )
}

export default CartWidget;