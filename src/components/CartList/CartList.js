import { StyledButton } from '../Button/Button.style'
import {StyledCartItem} from '../CartItem/CartItem.style'

const options = {style: 'currency', currency:'ARS'}
const numberFormat = new Intl.NumberFormat('es-AR', options)

const CartList = ({className, items, clearCartHandler, removeFromCartHandler, cartTotal, addOneToCartItem, removeOneToCartItem}) =>{

    return(
    <div className={className}>
        {items.map(item => <StyledCartItem key={item.id} item={item} removeFromCartHandler={removeFromCartHandler} addOneToCartItem={addOneToCartItem} removeOneToCartItem={removeOneToCartItem}/>)}
        <div>
            <StyledButton buttonLabel={"Vaciar carrito"} onClick={clearCartHandler} logIn textColor={"white"}/>
            <h2>Total: {numberFormat.format(cartTotal)}</h2>
        </div>
    </div>

    )
}

export default CartList