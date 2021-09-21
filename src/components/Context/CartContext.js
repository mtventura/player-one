import { createContext } from "react";

const Context = createContext([])

export const CartContextProvider = ({children}) => {
    const [items, setItems] = useState([])

    const getFromCart = (id) => {
        return items.filter(item => item.id === id)
    }

    const isInCart = (id) => {
        return items.some(item => item.id === id)
    }

    const addToCart = (item) => {
        if(isInCart(item.id))
        {
            const existingItem = getFromCart(item.id)
        }
        else
            setItems([...items, item])
    }

    const removeFromCart = (id) => {

    }

    const clearCart = () => {
        setItems([])
    }
    return (
        <Context.Provider
        value={{
            item:{
                id, 
                name, 
                quantity,
                price
            }, 
            addToCart
        }}
        >
            {children}
        </Context.Provider>
    )
}

export default Context