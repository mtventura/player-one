import { useContext } from "react"
import { StyledButton } from "../Button/Button.style"
import { Link } from "react-router-dom"
import { StyledCartList } from '../CartList/CartList.style'
import CartContext from '../../context/CartContext'
import UserContext from '../../context/UserContext'
import { newOrder } from '../../services/firebase/firebase'

const Cart = ({className}) => {

    const {items, clearCart, removeFromCart, addOneToCartItem, removeOneToCartItem, cartTotal} = useContext(CartContext)
    const { user } = useContext(UserContext)

    const confirmOrder = () => {
        const order = {
            buyer: user, 
            items: items.map(({categoryId, description, image, stock, ...reducedItem}) => reducedItem), 
            total: cartTotal()
        }

        newOrder(order).then(order => {
            console.log(order)
        }).catch((error) => {
            console.log(error)
        }).finally(() => {
            clearCart()
        })
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
            <StyledCartList items={items} clearCartHandler={clearCart} removeFromCartHandler={removeFromCart} cartTotal={cartTotal()} addOneToCartItem={addOneToCartItem} removeOneToCartItem={removeOneToCartItem} confirmOrderHandler={confirmOrder}/>
        </div>
    )
}

export default Cart