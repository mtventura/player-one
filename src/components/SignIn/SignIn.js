import { createUser } from '../../services/firebase/firebase'
import { useState } from 'react'
import {StyledButton} from '../Button/Button.style'
const SignIn = ({className}) => {
    const [user, setUser] = useState({email:'', password:'', phone:'', name:''})
    
    const onChangeNameHandler = (event) => {
        const newUser = {...user, name: event.target.value}
        setUser(newUser)
    }

    const onChangeEmailHandler = (event) => {
        const newUser = {...user, email: event.target.value }
        setUser(newUser)
    }

    const onChangePasswordHandler = (event) => {
        const newUser = {...user, password: event.target.value}
        setUser(newUser)
    }
    
    const onChangePhoneHandler = (event) => {
        const newUser = {...user, phone: event.target.value}
        setUser(newUser)

    }

    const onClickHandler = () => {
        if(user.email.trim() !== '' && user.password.trim() !== '' && user.phone.trim() !== '' && user.password.trim() !== '' && user.name.trim() !== '')
            createUser(user)
    }

    return(
        <div className={className}>
            <h3>Nombre</h3>
            <input type="text" id="name" name="name" onChange={onChangeNameHandler} style={{borderRadius: "4px", height: "56px", width: "20vw", border: "1px solid rgba(0, 0, 0, 0.12)"}} />
            <h3>Teléfono</h3>
            <input type="tel" id="phone" name="phone" onChange={onChangePhoneHandler} style={{borderRadius: "4px", height: "56px", width: "20vw", border: "1px solid rgba(0, 0, 0, 0.12)"}} />
            <h3>Email</h3>
            <input type="email" id="email" name="email" onChange={onChangeEmailHandler} style={{borderRadius: "4px", height: "56px", width: "20vw", border: "1px solid rgba(0, 0, 0, 0.12)"}} />
            <h3>Password</h3>
            <input type="password" id="password" name="password" onChange={onChangePasswordHandler} style={{borderRadius: "4px", height: "56px", width: "20vw", border: "1px solid rgba(0, 0, 0, 0.12)"}} />
            <StyledButton buttonLabel="Crear cuenta" textColor={"white"} logIn onClick={onClickHandler}/>
        </div>
    )
}

export default SignIn