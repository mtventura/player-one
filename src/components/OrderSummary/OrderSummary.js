import { useContext } from 'react'
import CartContext from '../../context/CartContext'
import { numberFormat } from '../../helpers/currencyHelper'
import { StyledButton } from '../Button/Button.style'

const OrderSummary = ({className, onClick}) => {
    const {items, cartTotal} = useContext(CartContext)

    return(
        <div className={className}>
            <div style={{display:"flex", flexDirection:"row", justifyContent:"space-between"}}>
                <h2>Producto</h2>
                <h2>Subtotal</h2>
            </div>
            <div style={{display:"flex", flexDirection:"row", justifyContent:"space-between"}}>
                <div style={{display:"flex", flexDirection:"column"}}>
                    {items.map(item => <p key={item.id}>{item.name} x {item.quantity}</p>)}
                </div>
                <div style={{display:"flex", flexDirection:"column"}}>
                    {items.map(item => <p key={item.id}>{numberFormat.format(item.quantity * item.price)}</p>)}
                </div>
            </div>
            <div>
                <h3>Total</h3>
                <h3>{numberFormat.format(cartTotal())}</h3>
            </div>
            <StyledButton onClick={onClick} buttonLabel={"Comprar"} textColor={"white"}/>
        </div>
    )
}

export default OrderSummary