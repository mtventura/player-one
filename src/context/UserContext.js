import { createContext, useState } from 'react'
import { getUsers } from '../services/firebase/firebase'

const Context = createContext()

export const UserContextProvider = ({ defaultValue = {}, children }) =>{
    const [user, setUser] = useState(defaultValue)
    const [error, setError] = useState({message: '', error: false})

    const isUserLoggedIn = () => {
        return Object.entries(user).length !== 0
    }

    const logIn = (userInfo) => {
        getUsers().then(users => {
            if(users.length !== 0 && users.some(userInDb => userInDb.email === userInfo.email && userInDb.password === userInfo.password))
            {
                const userFromDb = users.find(userInDb => userInDb.email === userInfo.email && userInDb.password === userInfo.password)
                const {password, ...infoForContext} = userFromDb; 
                setUser(infoForContext)
            }
            else
                setError({message:'Usuario o contraseña incorrecta', error: true})
        })
    }

    const logOut = () => {
        setUser(defaultValue)
    }
    return (
        <Context.Provider
            value ={{
                user, 
                error, 
                logIn, 
                logOut, 
                isUserLoggedIn, 
            }}
        >
            {children}
        </Context.Provider>
    )
}

export default Context