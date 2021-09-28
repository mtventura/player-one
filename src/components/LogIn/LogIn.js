import { StyledButton } from "../Button/Button.style"
import { useContext, useState } from 'react'
import UserContext from '../../context/UserContext'
import { Link } from "react-router-dom"

const LogIn = ({ className }) => {
    const [userInfo, setUserInfo] = useState({username: '', password: ''})
    const { logIn } = useContext(UserContext)
    
    const onClickHandler = () => {
        logIn(userInfo)
    }
    
    const onChangeUserNameHandler = (event) => {
        const username = event.target.value
        setUserInfo({username: username, password: userInfo.password})
    }

    const onChangePasswordHandler = (event) => {
        const password = event.target.value
        setUserInfo({username: userInfo.username, password: password})
    }
    
    return (
        <div className={className}>
                <h2>Iniciar Sesión</h2>
                <p style={{textAlign: "left"}}>Nombre de usuario: </p>
                <input type="text" onChange={onChangeUserNameHandler} style={{borderRadius: "4px", height: "56px", width: "20vw", border: "1px solid rgba(0, 0, 0, 0.12)"}} />
                <p style={{textAlign: "left"}}>Contraseña: </p>
                <input type="password" onChange={onChangePasswordHandler} style={{borderRadius: "4px", height: "56px", width: "20vw", border: "1px solid rgba(0, 0, 0, 0.12)"}}/>
                <div style={{marginTop: "16px"}}>
                <Link to={`/`}>
                    <StyledButton buttonLabel={"Ingresar"} onClick={onClickHandler} logIn={true} textColor={"white"}/>
                </Link>
                </div>
        </div>
    )
}

export default LogIn