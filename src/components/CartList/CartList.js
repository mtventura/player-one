import { StyledButton } from '../Button/Button.style'
import {StyledCartItem} from '../CartItem/CartItem.style'

const CartList = ({className, items, clearCartHandler, removeFromCartHandler, cartTotal, addOneToCartItem, removeOneToCartItem}) =>{

    return(
    <div className={className}>
        <div>
            <StyledButton buttonLabel={"Vaciar carrito"} onClick={clearCartHandler} logIn textColor={"white"}/>
        </div>
        {items.map(item => <StyledCartItem key={item.id} item={item} removeFromCartHandler={removeFromCartHandler} addOneToCartItem={addOneToCartItem} removeOneToCartItem={removeOneToCartItem}/>)}
        <div>
            <h2>Total: {cartTotal}</h2>
        </div>
    </div>

    )
}

export default CartList