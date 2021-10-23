import { createUser } from '../../services/firebase/firebase'
import { useContext, useState } from 'react'
import { StyledInput } from "../Input/Input.style"
import {StyledButton} from '../Button/Button.style'
import NotificationContext from '../../context/NotificationContext'
import { Redirect } from "react-router"

const SignIn = ({className}) => {
    const [user, setUser] = useState({email:'', password:'', confirmPassword:''})
    const { setNotification } = useContext(NotificationContext)
    const [redirect, setRedirect] = useState(false)
    
    //#region Eventos
    const onChangeEmailHandler = (event) => {
        const newUser = {...user, email: event.target.value }
        setUser(newUser)
    }
    
    const onChangePasswordHandler = (event) => {
        const newUser = {...user, password: event.target.value}
        setUser(newUser)
    }

    const onChangeConfirmPasswordHandler = (event) => {
        const newUser = {...user, confirmPassword: event.target.value}
        setUser(newUser)
    }

    const onClickHandler = () => {
        if(emailFilled() && passwordFilled() && equalPasswords())
        {
            createUser(user).then(newUser => {
                setRedirect(true)
            }).catch((error) => {
                setNotification('error', error)
            })
        }
    }
    //#endregion

    //#region Funciones privadas
    const emailFilled = () => {
        if(user.email.trim() !== '')
            return true
        else
        {
            setNotification('error', 'El email no puede estar vacío')
            return false
        }
    }

    const passwordFilled = () => {
        if(user.password.trim() !== '')
            return true
        else
        {
            setNotification('error', 'La contraseña no puede estar vacía')
            return false
        }
    }

    const equalPasswords = () => {
        if(user.password === user.confirmPassword)
           return true
        else
        {
            setNotification("error", "Las contraseñas no coinciden")
            return false
        }
    }

    //#endregion

    return(
        redirect ? <Redirect to={{pathname: '/login'}} />
        : <div className={className}>
            <label style={{textAlign:"left", marginBottom: "15px"}}>Email</label>
            <StyledInput type="email" id="email" name="email" onChange={onChangeEmailHandler} placeHolder="mail@mail.com" />
            <label style={{textAlign:"left", marginBottom: "15px", marginTop: "15px"}}>Contraseña</label>
            <StyledInput type="password" id="password" name="password" onChange={onChangePasswordHandler} />
            <label style={{textAlign:"left", marginBottom: "15px", marginTop: "15px"}}> Repetir Contraseña</label>
            <StyledInput type="password" id="confirmPassword" name="password" onChange={onChangeConfirmPasswordHandler} />
            <div style={{marginTop: "15px"}}>
                <StyledButton buttonLabel="Crear cuenta" textColor={"white"} logIn onClick={onClickHandler}/>
            </div>
         </div>
    )
}

export default SignIn