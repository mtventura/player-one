import { useContext } from 'react';
import { StyledButton } from '../Button/Button.style';
import { StyledAddItem } from './AddItem/AddItem.style';
import { StyledRemoveItem } from './RemoveItem/RemoveItem.Style';
import CartContext from '../../context/CartContext'

const ItemCount = ({className, item, addButton, onAdd, onRemove, amount}) =>{
    const { addToCart } = useContext(CartContext)

    const onClickHandler = () => {
        addToCart({...item, quantity: amount})
    }

    const onAddHandler = () => {
        onAdd()
    }
    const onRemoveHandler = () => {
        onRemove()
    }
    return(
    <div className={className}>
        <span>Stock disponible: {item.stock !== undefined ? item.stock : 0}</span>
        <StyledRemoveItem onRemove={onRemoveHandler}/>
        <span style={{verticalAlign: "top"}}>{amount}</span>
        <StyledAddItem onAdd={onAddHandler} />
        {addButton ? <StyledButton buttonLabel="Agregar al carrito" textColor="white" logIn onClick={onClickHandler} cart/> : null}
    </div>
    )
}
export default ItemCount;