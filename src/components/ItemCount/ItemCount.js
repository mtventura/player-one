import { useContext, useState } from 'react'
import { Redirect, useLocation } from "react-router"
import { StyledButton } from '../Button/Button.style'
import { StyledAddItem } from './AddItem/AddItem.style'
import { StyledRemoveItem } from './RemoveItem/RemoveItem.Style'
import CartContext from '../../context/CartContext'
import NotificationContext from '../../context/NotificationContext'
import UserContext  from "../../context/UserContext"


const ItemCount = ({className, item, addButton, onAdd, onRemove, amount}) =>{
    const { addToCart } = useContext(CartContext)
    const { setNotification } = useContext(NotificationContext)
    const { user } = useContext(UserContext)
    const [redirect, setRedirect] = useState(false)
    const location = useLocation() 
    
    const onClickHandler = () => {
        if(user)
        {
            addToCart({...item, quantity: amount})
            setNotification('success', "Agregado al carrito satisfactoriamente")
        }
        else
            setRedirect(true)
    }

    const onAddHandler = () => {
        onAdd()
    }
    const onRemoveHandler = () => {
        onRemove()
    }
    return(
    <div className={className}>
        <span>Stock disponible: {item.stock !== undefined ? item.stock : 0}</span>
        <StyledRemoveItem onRemove={onRemoveHandler}/>
        <span style={{verticalAlign: "top"}}>{amount}</span>
        <StyledAddItem onAdd={onAddHandler} />
        {addButton ? redirect ? <Redirect to={{pathname:'/login', state:{from: location}}}/> : <StyledButton buttonLabel="Agregar al carrito" textColor="white" logIn onClick={onClickHandler} cart/> : null}
    </div>
    )
}
export default ItemCount;