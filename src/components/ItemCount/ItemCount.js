import { useState } from 'react';
import { StyledButton } from '../Button/Button.style';
import { StyledAddItem } from './AddItem/AddItem.style';
import { StyledRemoveItem } from './RemoveItem/RemoveItem.Style';

const ItemCount = ({className, availableAmount, onClick}) =>{
    const [amount, setAmount] = useState(0);     
    return(
    <div className={className}>
        <span>Stock disponible: {availableAmount}</span>
        <StyledRemoveItem onRemove={() => amount > 0 ? setAmount(amount - 1) : null}/>
        <span style={{verticalAlign: "top"}}>{amount}</span>
        <StyledAddItem onAdd={() => amount < availableAmount ? setAmount(amount + 1) : null} />
        <StyledButton onClick={onClick} buttonLabel="Agregar al carrito" textColor="white" logIn/>
    </div>
    )
}
export default ItemCount;