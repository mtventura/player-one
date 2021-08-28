import React from "react"; 
import {StyledMenuOptions} from "../MenuOptions/MenuOptions.style";
import {StyledBurger} from "../Burger/Burger.style";
import Logo from "../../assets/images/LogoWeb.png";

 const NavBar = ({className}) => {
    return (
        <nav className={className}>
            <StyledBurger/>
            <img alt="" src={Logo}/>
            <StyledMenuOptions/>
        </nav>
    )
 }
 export default NavBar;