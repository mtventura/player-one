import { Link } from 'react-router-dom'
import { StyledButton } from '../Button/Button.style'
import {StyledCartItem} from '../CartItem/CartItem.style'
import { numberFormat } from '../../helpers/currencyHelper'


const CartList = ({className, items, clearCartHandler, removeFromCartHandler, cartTotal, addOneToCartItem, removeOneToCartItem}) =>{

    return(
    <div style={{display:'flex', width:"100%", justifyContent:"space-around"}}>
        <div className={className}>
            {items.map(item => <StyledCartItem key={item.id} item={item} removeFromCartHandler={removeFromCartHandler} addOneToCartItem={addOneToCartItem} removeOneToCartItem={removeOneToCartItem}/>)}
        </div>
        <div style={{width:"25%"}}>
            <h2>Total: {numberFormat.format(cartTotal)}</h2>
            <StyledButton buttonLabel={"Vaciar carrito"} onClick={clearCartHandler} logIn textColor={"white"}/>
            <Link to={`/cart/checkout`}>
                <StyledButton buttonLabel={"Finalizar compra"} logIn textColor={"white"}/>
            </Link>
        </div>
    </div>    
    )
}

export default CartList