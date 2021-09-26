import { useState, useContext } from 'react';
import { StyledButton } from '../Button/Button.style';
import { StyledAddItem } from './AddItem/AddItem.style';
import { StyledRemoveItem } from './RemoveItem/RemoveItem.Style';
import CartContext from '../context/CartContext'

const ItemCount = ({className, initial, item}) =>{
    const [amount, setAmount] = useState(initial === undefined ? 0 : initial);  
    const { addToCart } = useContext(CartContext)

    const onClickHandler = () => {
        addToCart({...item, quantity: amount})
    }

    return(
    <div className={className}>
        <span>Stock disponible: {item.stock !== undefined ? item.stock : 0}</span>
        <StyledRemoveItem onRemove={() => amount > initial ? setAmount(amount - 1) : null}/>
        <span style={{verticalAlign: "top"}}>{amount}</span>
        <StyledAddItem onAdd={() => amount < item.stock ? setAmount(amount + 1) : null} />
        <StyledButton buttonLabel="Agregar al carrito" textColor="white" logIn onClick={onClickHandler}/>
    </div>
    )
}
export default ItemCount;