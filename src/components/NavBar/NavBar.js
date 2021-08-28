import React from "react"; 
import {StyledButton} from "../Button/Button.style"; 
import Logo from "../../assets/images/LogoWeb.png";

 const NavBar = ({className}) => {
    return (
        <nav className={className}>
            <div>
                <img src={Logo}/>
            </div>
            <div>
                <StyledButton buttonLabel="Inicio" textColor="white"/>
                <StyledButton buttonLabel="Productos" textColor="white"/>
                <StyledButton buttonLabel="Contacto" textColor="white"/>
                <StyledButton buttonLabel="Sucursales" textColor="white"/>
            </div>
            <div>
                <StyledButton buttonLabel="Ingresar" textColor="white" logIn/>
            </div>
        </nav>
    )
 }
 export default NavBar;