import { Link } from 'react-router-dom'
import { numberFormat } from '../../helpers/currencyHelper'
import { StyledButton } from '../Button/Button.style'

const Order = ({className, order }) => {

    const orderTotal = () => {
        if(order && order.items)
        {
            let total = 0 
            order.items.forEach(item => {total += item.quantity * item.price})
            return total
        } 
        else
            return 0
    }

    return(
        <div className={className}>
            <h1>¡Compraste!</h1>
            <h2>Código de órden: {order.id}</h2>
            <div style={{display:"flex", flexDirection:"row", justifyContent:"space-between"}}>
                <h2>Producto</h2>
                <h2>Subtotal</h2>
            </div>
            <div style={{display:"flex", flexDirection:"row", justifyContent:"space-between"}}>
                <div style={{display:"flex", flexDirection:"column"}}>
                    {order && order.items ? order.items.map(item => <p key={item.id}>{item.name} x {item.quantity}</p>) : null}
                </div>
                <div style={{display:"flex", flexDirection:"column"}}>
                    {order && order.items ? order.items.map(item => <p key={item.id}>{numberFormat.format(item.quantity * item.price)}</p>) : null}
                </div>
            </div>
            <div>
                <h3>Total</h3>
                <h3>{numberFormat.format(orderTotal())}</h3>
            </div>
            <Link to={`/`}>
                <StyledButton buttonLabel={"Volver al catálogo"} textColor={'white'}></StyledButton>
            </Link>
        </div>
    )
}

export default Order