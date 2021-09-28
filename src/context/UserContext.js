import { createContext, useState } from 'react'

const Context = createContext()

export const UserContextProvider = ({ defaultValue = {}, children }) =>{
    const [user, setUser] = useState(defaultValue)

    const isUserLoggedIn = () => {
        return Object.entries(user).length !== 0
    }

    const logIn = (userInfo) => {
        setUser(userInfo)
    }

    const logOut = () => {
        setUser(defaultValue)
    }

    return (
        <Context.Provider
            value ={{
                user, 
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