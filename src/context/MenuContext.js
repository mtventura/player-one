import { createContext, useState } from "react"
import { getMenuOptions } from '../services/firebase/firebase'

const Context = createContext()

export const MenuContextProvider = ({defaultValue = [], children }) => {
    const [menuOptions, setMenuOptions] = useState(defaultValue)

    const buildMenu = () => {
        getMenuOptions().then(menu => {
            setMenuOptions(menu)
        })
    }

    return (
        <Context.Provider
            value={{
                menuOptions, 
                buildMenu
            }}
        >
            {children}
        </Context.Provider>
    )
}

export default Context