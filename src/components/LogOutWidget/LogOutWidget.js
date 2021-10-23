import Logout from '../../assets/images/Logout.svg'
import UserContext from '../../context/UserContext'
import CartContext from '../../context/CartContext'
import { useContext } from 'react'

const LogOutWidget = ({className}) => {
    const { logOut } = useContext(UserContext)
    const {clearCart} = useContext(CartContext)

    const onClickHandler = () => {
        clearCart()
        logOut()
    }
    return(
        <button className={className} onClick={onClickHandler}>
            <img alt="" src={Logout}/>
        </button>    
    )
}

export default LogOutWidget