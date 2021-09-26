import { createContext, useState } from "react";

const Context = createContext()

export const CartContextProvider = ({ defaultValue = [], children}) => {
    const [items, setItems] = useState(defaultValue)
    
    const isInCart = (id) => {
        return items.some(item => item.id === id)
    }

    const getFromCart = (id) => {
        return items.find(item => item.id === id)
    }

    const addToCart = (item) => {
        isInCart(item && item.id) ? updateItemInCart(item) : setItems([...items, item])
    }

    const updateItemInCart = (itemToUpdate) => {
        const itemAtState = items.find(item => item.id === itemToUpdate.id)
        let quantity = 0
        
        if(itemAtState.quantity + itemToUpdate.quantity > itemToUpdate.stock)
            quantity = itemAtState.quantity + (itemToUpdate.stock - itemAtState.quantity)
        else
            quantity = itemAtState.quantity + itemToUpdate.quantity
        setItems(items.map(item => item.id === itemToUpdate.id ? {...item, quantity: quantity} : item))
    }

    const removeFromCart = (id) => {
        setItems(items.filter(item => item.id !== id))
    }

    const clearCart = () =>{
        setItems([])
    }
    
    return (
        <Context.Provider
            value = {{
                items, 
                addToCart, 
                isInCart, 
                removeFromCart,
                getFromCart, 
                cartSize: items.length
            }}
        >
            {children}
        </Context.Provider>
    )
}

export default Context