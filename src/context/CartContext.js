import { createContext, useState } from "react";

const Context = createContext()

export const CartContextProvider = ({ defaultValue = [], children}) => {
    const [items, setItems] = useState(defaultValue)
    
    const isInCart = (id) => {
        return items.some(item => item.id === id)
    }

    const isCartEmpty = () => {
        return items.length === 0
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

    const addOneToCartItem = (id) => {
        console.log(items)
        if(id && isInCart(id)) 
        {
            const itemInState = items.find(item => item.id === id)
            const quantity = itemInState.quantity + 1
            if(itemInState.quantity + 1 <= itemInState.stock)
                setItems(items.map(item => item.id === id ? {...item, quantity: quantity} : item))
        }
    }

    const removeOneToCartItem = (id) => {
        console.log(items)
        if(id && isInCart(id))
        {
            const itemInState = items.find(item => item.id === id)
            const quantity = itemInState.quantity - 1
            if(itemInState.quantity - 1 > 0)
                setItems(items.map(item => item.id === id ? {...item, quantity: quantity} : item))
        }
    }

    const removeFromCart = (id) => {
        setItems(items.filter(item => item.id !== id))
    }

    const clearCart = () => {
        setItems([])
    }
    
    const cartTotal = () => {
        if(isCartEmpty())
        return 0

        let total = 0 
        items.forEach(item => {total += item.quantity * item.price})  
        return total
    }

    const cartSize = () =>{
        if(isCartEmpty())
            return 0
        
        let total = 0 
        items.forEach(item => {total += item.quantity})  
        return total

    }
    
    return (
        <Context.Provider
            value = {{
                items, 
                addToCart, 
                isInCart, 
                removeFromCart,
                getFromCart, 
                clearCart,
                cartTotal,
                cartSize, 
                addOneToCartItem,
                removeOneToCartItem
            }}
        >
            {children}
        </Context.Provider>
    )
}

export default Context