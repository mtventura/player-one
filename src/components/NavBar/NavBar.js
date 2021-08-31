import React from "react"; 
import {StyledMenuOptions} from "../MenuOptions/MenuOptions.style";
import {StyledBurger} from "../Burger/Burger.style";
import {StyledButton} from "../Button/Button.style";
import Logo from "../../assets/images/LogoWeb.png";

 const NavBar = ({className}) => {
    return (
        <nav className={className}>
            <img alt="" src={Logo}/>
            <StyledBurger/>
            <StyledMenuOptions>
                <StyledButton buttonLabel="Inicio" textColor="white"/>
                <StyledButton buttonLabel="Productos" textColor="white"/>
                <StyledButton buttonLabel="Contacto" textColor="white"/>
                <StyledButton buttonLabel="Sucursales" textColor="white"/> 
                <StyledButton buttonLabel="Ingresar" textColor="white" logIn/>
            </StyledMenuOptions>
        </nav>
    )
 }
 export default NavBar;