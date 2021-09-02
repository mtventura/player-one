import {StyledButton} from "../Button/Button.style"; 
import {StyledCartWidget} from "../CartWidget/CartWidget.style";
import Logo from "../../assets/images/LogoWeb.png";

 const NavBar = ({className}) => {
    return (
        <nav className={className}>
            <div>
                <img alt="" src={Logo}/>
            </div>
                <StyledButton buttonLabel="Inicio" textColor="white"/>
                <StyledButton buttonLabel="Productos" textColor="white"/>
                <StyledButton buttonLabel="Contacto" textColor="white"/>
                <StyledButton buttonLabel="Sucursales" textColor="white"/>
                <StyledButton buttonLabel="Ingresar" textColor="white" logIn/>
                <StyledCartWidget/>
        </nav>
    )
 }
 export default NavBar;