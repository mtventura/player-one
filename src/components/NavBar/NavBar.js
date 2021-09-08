import {StyledButton} from "../Button/Button.style"; 
import {StyledCartWidget} from "../CartWidget/CartWidget.style";
import Logo from "../../assets/images/LogoWeb.png";

const navBarOptions = [
    {id: '01', label:'Inicio', color: 'white', login: false},
    {id: '02', label:'Productos', color: 'white', login: false},
    {id: '03', label:'Contacto', color: 'white', login: false},
    {id: '04', label:'Sucursales', color: 'white', login: false},
    {id: '05', label:'Ingresar', color: 'white', login: true},
]
 const NavBar = ({className}) => {
    return (
        <nav className={className}>
            <div>
                <img alt="" src={Logo}/>
            </div>
            {navBarOptions.map(option => <StyledButton key={option.id} buttonLabel={option.label} textColor={option.color} logIn={option.login}/>)}
            <StyledCartWidget/>
        </nav>
    )
 }
 export default NavBar;