import { Fragment } from "react"
import {StyledButton} from "../Button/Button.style"
import {StyledCartWidget} from "../CartWidget/CartWidget.style"
import Logo from "../../assets/images/LogoWeb.png"
import { Link } from "react-router-dom"
import { useEffect, useContext } from "react"
import {StyledLogInWidget} from '../LogInWidget/LogInWidget.style'
import UserContext from '../../context/UserContext'
import MenuContext from '../../context/MenuContext'
import { StyledLogOutWidget } from "../LogOutWidget/LogOutWidget.style"

const NavBar = ({className}) => {
    const { isUserLoggedIn } = useContext(UserContext)
    const { menuOptions, buildMenu } = useContext(MenuContext)

    useEffect(() => {
            return buildMenu()
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
                        <Fragment>
                            <Link to={`/cart`}>
                                {<StyledCartWidget/>}
                            </Link>
                            <Link to={`/`}>
                                {<StyledLogOutWidget/>}
                            </Link>
                        </Fragment>
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