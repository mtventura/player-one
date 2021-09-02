import { useState } from 'react';
import { StyledButton } from '../Button/Button.style';
import { StyledAddItem } from './AddItem/AddItem.style';
import { StyledRemoveItem } from './RemoveItem/RemoveItem.Style';

const ItemCount = ({className, stock, initial}) =>{
    const [amount, setAmount] = useState(initial === undefined ? 0 : initial);  
    
    return(
    <div className={className}>
        <span>Stock disponible: {stock !== undefined ? stock : 0}</span>
        <StyledRemoveItem onRemove={() => amount > 0 ? setAmount(amount - 1) : null}/>
        <span style={{verticalAlign: "top"}}>{amount}</span>
        <StyledAddItem onAdd={() => amount < stock ? setAmount(amount + 1) : null} />
        <StyledButton buttonLabel="Agregar al carrito" textColor="white" logIn/>
    </div>
    )
}
export default ItemCount;