import { useState } from 'react';
import { StyledButton } from '../Button/Button.style';
import { StyledAddItem } from './AddItem/AddItem.style';
import { StyledRemoveItem } from './RemoveItem/RemoveItem.Style';

const ItemCount = ({className, stock, initial, onClick}) =>{
    const [amount, setAmount] = useState(initial === undefined ? 0 : initial);  
    const onClickHandler = () => {
        onClick(amount)
    }

    return(
    <div className={className}>
        <span>Stock disponible: {stock !== undefined ? stock : 0}</span>
        <StyledRemoveItem onRemove={() => amount > initial ? setAmount(amount - 1) : null}/>
        <span style={{verticalAlign: "top"}}>{amount}</span>
        <StyledAddItem onAdd={() => amount < stock ? setAmount(amount + 1) : null} />
        <StyledButton buttonLabel="Agregar al carrito" textColor="white" logIn onClick={onClickHandler}/>
    </div>
    )
}
export default ItemCount;