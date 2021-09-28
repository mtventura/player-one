import { StyledButton } from '../Button/Button.style'
import {StyledCartItem} from '../CartItem/CartItem.style'

const options = {style: 'currency', currency:'ARS'}
const numberFormat = new Intl.NumberFormat('es-AR', options)

const CartList = ({className, items, clearCartHandler, removeFromCartHandler, cartTotal, addOneToCartItem, removeOneToCartItem}) =>{

    return(
    <div style={{display:'flex', width:"100%", justifyContent:"space-around"}}>
        <div className={className}>
            {items.map(item => <StyledCartItem key={item.id} item={item} removeFromCartHandler={removeFromCartHandler} addOneToCartItem={addOneToCartItem} removeOneToCartItem={removeOneToCartItem}/>)}
        </div>
        <div style={{width:"25%"}}>
            <h2>Total: {numberFormat.format(cartTotal)}</h2>
            <StyledButton buttonLabel={"Vaciar carrito"} onClick={clearCartHandler} logIn textColor={"white"}/>
        </div>
    </div>    
    )
}

export default CartList