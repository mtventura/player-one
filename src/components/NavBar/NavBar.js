import {StyledButton} from "../Button/Button.style"; 
import {StyledCartWidget} from "../CartWidget/CartWidget.style";
import Logo from "../../assets/images/LogoWeb.png";

 const NavBar = ({className, count}) => {
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
                <StyledCartWidget items={count}/>
        </nav>
    )
 }
 export default NavBar;