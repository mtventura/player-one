import { createContext, useState } from 'react'
import { collection, getDocs } from '@firebase/firestore'
import { db } from '../services/firebase/firebase'

const Context = createContext()

export const UserContextProvider = ({ defaultValue = {}, children }) =>{
    const [user, setUser] = useState(defaultValue)
    const [users, setUsers] = useState([])
    const [error, setError] = useState({message: '', error: false})

    const isUserLoggedIn = () => {
        return Object.entries(user).length !== 0
    }

    const logIn = (userInfo) => {
        getUsers()
        if(users.length !== 0 && users.some(userInDb => userInDb.email === userInfo.email && userInDb.password === userInfo.password))
        {
            const userFromDb = users.find(userInDb => userInDb.email === userInfo.email && userInDb.password === userInfo.password)
            const {password, ...infoForContext} = userFromDb; 
            setUser(infoForContext)
        }
        else
        {
            setError({message:'Usuario o contraseña incorrecta', error: true})
        }
    }

    const logOut = () => {
        setUser(defaultValue)
    }

    const getUsers = () => {
        getDocs(collection(db, 'users')).then((querySnapshot) => {
           const usersInDb = querySnapshot.docs.map(doc => {
                return {...doc.data()}
            })
            setUsers(usersInDb)
        }).catch((error) => {
            console.log("getUsers Error: ", error)
            setError({messge: 'Error al comunicarse con la base de datos', error: true})
        })
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