import { useContext } from "react"
import CartContext from '../../context/CartContext'
import { StyledButton } from "../Button/Button.style"
import { Link } from "react-router-dom"
import { StyledCartList } from '../CartList/CartList.style'

const Cart = ({className}) => {

     const {items, clearCart, removeFromCart, addOneToCartItem, removeOneToCartItem, cartTotal} = useContext(CartContext)
    return (
        items.length === 0 ? 
        <div> 
            <h2> El carrito está vacío</h2>
            <Link to={`/`}>
                <StyledButton buttonLabel={"Volver al catálogo"} textColor={'white'}></StyledButton>
            </Link>
        </div> : 
        <div className = {className}>
            <StyledCartList items={items} clearCartHandler={clearCart} removeFromCartHandler={removeFromCart} cartTotal={cartTotal()} addOneToCartItem={addOneToCartItem} removeOneToCartItem={removeOneToCartItem}/>
        </div>
    )
}

export default Cart