import { StyledButton } from "../Button/Button.style"
import { useContext, useState } from 'react'
import UserContext from '../../context/UserContext'
import { Link, useLocation, useHistory } from "react-router-dom"
import {StyledInput} from '../Input/Input.style'


const LogIn = ({ className }) => {
    
    const history = useHistory()
    const location = useLocation()
    const {from} = location.state || {from: {pathname:'/'}}
    const [userInfo, setUserInfo] = useState({email: '', password: ''})
    const { logIn } = useContext(UserContext)
    
    const onClickHandler = () => {
        logIn(userInfo)
        history.replace(from)
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
            <label style={{textAlign:"left", marginBottom: "15px"}}>Email</label>
            <StyledInput type="text" id="email" name="email" onChange={onChangeUserNameHandler} />
            <label style={{textAlign: "left", marginBottom: "15px", marginTop: "15px"}}>Contraseña</label>
            <StyledInput type="password" id="password" name="password" onChange={onChangePasswordHandler} />
            <div style={{marginTop: "16px"}}>
                <Link to={`/register`}>
                    <span>Crear una nueva cuenta</span>
                </Link>
                    <StyledButton buttonLabel={"Ingresar"} onClick={onClickHandler} logIn={true} textColor={"white"}/>
            </div>
        </div>
    )
}

export default LogIn