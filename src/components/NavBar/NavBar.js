import {StyledButton} from "../Button/Button.style"; 
import {StyledCartWidget} from "../CartWidget/CartWidget.style";
import Logo from "../../assets/images/LogoWeb.png";
import { Link } from "react-router-dom";
import {MenuOptions} from "../../data"
import { useEffect, useState } from "react";

const getMenuOptions = () => {
    return new Promise((resolve) => {
        setTimeout(() => resolve(MenuOptions), 50)
    })
}

 const NavBar = ({className}) => {
    const [menuOptions, setMenuOptions] = useState([])
    useEffect(() => {
        const options = getMenuOptions()
        options.then(option => {setMenuOptions(option)})
    }, [])
    return (
        <nav className={className}>
            <div>
                 <Link to={`/`}><img alt="" src={Logo}/></Link>
            </div>
            {menuOptions.map(option => <Link key={option.id} to={`/category/${option.page}`}><StyledButton key={option.id} buttonLabel={option.name} textColor={option.color} logIn={option.login}/></Link>)}
            <Link to={`/cart`}>
                {<StyledCartWidget/>}
            </Link>
        </nav>
    )
 }
 export default NavBar;