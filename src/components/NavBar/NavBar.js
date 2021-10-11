import { Fragment } from "react"
import {StyledButton} from "../Button/Button.style"
import {StyledCartWidget} from "../CartWidget/CartWidget.style"
import Logo from "../../assets/images/LogoWeb.png"
import { Link } from "react-router-dom"
import { useEffect, useContext } from "react"
import {StyledLogInWidget} from '../LogInWidget/LogInWidget.style'
import UserContext from '../../context/UserContext'
import CartContext from '../../context/CartContext'
import MenuContext from '../../context/MenuContext'

const NavBar = ({className}) => {
    const { isUserLoggedIn } = useContext(UserContext)
    const { cartSize } = useContext(CartContext)
    const { menuOptions, buildMenu } = useContext(MenuContext)

    useEffect(() => {
        const buildNavMenu = () => {
            return buildMenu()
        }
        buildNavMenu()
    }, [])

    return (
        <nav className={className}>
            <div>
                 <Link to={`/`}><img alt="" src={Logo}/></Link>
            </div>
            { menuOptions.length === 0 
                ? null 
                : <Fragment>
                    {menuOptions.map(option => <Link key={option.id} to={`/category/${option.page}`}><StyledButton key={option.id} buttonLabel={option.name} textColor={option.color} logIn={option.login}/></Link>)}
                    {
                        isUserLoggedIn() ? 
                            cartSize() !== 0 ? 
                            <Link to={`/cart`}>
                                {<StyledCartWidget/>}
                            </Link> : null 
                        :
                        <Link to={`/login`}>
                            {<StyledLogInWidget/>} 
                        </Link>
                    }
                  </Fragment>
            }
        </nav>
    )
 }
 export default NavBar;