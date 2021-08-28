import {StyledButton} from "../Button/Button.style"; 

const MenuOptions = ({className}) => {
   return(
       <div className={className}>
            <StyledButton buttonLabel="Inicio" textColor="white"/>
            <StyledButton buttonLabel="Productos" textColor="white"/>
            <StyledButton buttonLabel="Contacto" textColor="white"/>
            <StyledButton buttonLabel="Sucursales" textColor="white"/> 
            <StyledButton buttonLabel="Ingresar" textColor="white" logIn/>       
        </div>
   )
}
export default MenuOptions;