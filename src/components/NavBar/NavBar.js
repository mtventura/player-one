import React from "react"; 
import {StyledButton} from "../Button/Button.style"; 
import {StyledCartWidget} from "../CartWidget/CartWidget.style";
import Logo from "../../assets/images/LogoWeb.png";

 const NavBar = ({className}) => {
    return (
        <nav className={className}>
            <div>
                <img src={Logo}/>
            </div>
                <StyledButton buttonLabel="Inicio" textColor="white"/>
                <StyledButton buttonLabel="Productos" textColor="white"/>
                <StyledButton buttonLabel="Contacto" textColor="white"/>
                <StyledButton buttonLabel="Sucursales" textColor="white"/>
                <StyledButton buttonLabel="Ingresar" textColor="white" logIn/>
        </nav>
    )
 }
 export default NavBar;