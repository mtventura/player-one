import { useContext, useState } from "react"
import UserContext  from "../../context/UserContext"
import { StyledBillingInfo } from "../BillingInfo/BillingInfo.style"
import { StyledOrderSummary } from "../OrderSummary/OrderSummary.style"
import { newOrder } from '../../services/firebase/firebase'
import CartContext from '../../context/CartContext'
import NotificationContext from '../../context/NotificationContext'
import { Redirect } from "react-router"

const Checkout = ({className}) => {
    const {user} = useContext(UserContext)
    const { setNotification } = useContext(NotificationContext)

    const {items, clearCart, cartTotal} = useContext(CartContext)
    const [billingInfo, setBillingInfo] = useState({email: user.email, name: '', lastName:'', address:'', city:'', province:'', postalCode:'', phone:'', observations:''})
    const [redirect, setRedirect] = useState({redirect: false, id: ''})
    
    const requiredFieldsFilled = () =>{
        return billingInfo.name !== '' && billingInfo.name !== '' && billingInfo.lastName !== '' && billingInfo.address !== '' && 
               billingInfo.province !== '' && billingInfo.city !== '' && billingInfo.postalCode !== '' && billingInfo.phone !== ''
    }
    const confirmOrder = () => {
        if(requiredFieldsFilled())
        {
            const order = {
                buyer: billingInfo, 
                items: items.map(({categoryId, description, image, stock, ...reducedItem}) => reducedItem), 
                total: cartTotal()
            }
    
            newOrder(order).then(newOrder => {
                setRedirect({redirect: true, id: newOrder})
                clearCart()
            }).catch((error) => {
                setNotification('error', error)
            })
        }
        else
            setNotification("error", "Hay campos obligatorios vacíos")
    }
    return(
        redirect.redirect ? <Redirect to={{pathname:`/order/${redirect.id}`}}/> 
        : <div className={className}>
            <StyledBillingInfo billingInfo={billingInfo} setBillingInfo={setBillingInfo}/>
            <StyledOrderSummary onClick={confirmOrder}/>
        </div>
    )
}

export default Checkout