import { StyledButton } from "../Button/Button.style"
import { useContext, useState } from 'react'
import UserContext from '../../context/UserContext'
import { Link } from "react-router-dom"


const LogIn = ({ className }) => {
    const [userInfo, setUserInfo] = useState({email: '', password: ''})
    const { logIn } = useContext(UserContext)
    
    const onClickHandler = () => {
        logIn(userInfo)
    }
    
    const onChangeUserNameHandler = (event) => {
        const user = {...userInfo, email: event.target.value}
        setUserInfo(user)
    }

    const onChangePasswordHandler = (event) => {
        const user = {...userInfo, password: event.target.value}
        setUserInfo(user)
    }
    
    return (
        <div className={className}>
            <h2>Iniciar Sesión</h2>
            <p style={{textAlign: "left"}}>Email: </p>
            <input type="text" onChange={onChangeUserNameHandler} style={{borderRadius: "4px", height: "56px", width: "20vw", border: "1px solid rgba(0, 0, 0, 0.12)"}} />
            <p style={{textAlign: "left"}}>Contraseña: </p>
            <input type="password" onChange={onChangePasswordHandler} style={{borderRadius: "4px", height: "56px", width: "20vw", border: "1px solid rgba(0, 0, 0, 0.12)"}}/>
            <div style={{marginTop: "16px"}}>
                <Link to={`/register`}>
                    <h2>Crear una nueva cuenta</h2>
                </Link>
                <Link to={`/`}>
                    <StyledButton buttonLabel={"Ingresar"} onClick={onClickHandler} logIn={true} textColor={"white"}/>
                </Link>
            </div>
        </div>
    )
}

export default LogIn