import { useContext } from "react"
import { StyledButton } from "../Button/Button.style"
import { Link } from "react-router-dom"
import { StyledCartList } from '../CartList/CartList.style'
import CartContext from '../../context/CartContext'
import UserContext from '../../context/UserContext'

const Cart = ({className}) => {

    const {items, clearCart, removeFromCart, addOneToCartItem, removeOneToCartItem, cartTotal} = useContext(CartContext)
    const { user } = useContext(UserContext)

    const newOrder = {
        buyer: user, 
        items: items, 
        // date: firebase.firestore.Timestamp.fromDate(new Date()),
        total: cartTotal()
    }
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