import { StyledItemCount } from "../ItemCount/ItemCount.Style"
import Close from '@material-ui/icons/Close'

const options = {style: 'currency', currency:'ARS'}
const numberFormat = new Intl.NumberFormat('es-AR', options)

const CartItem = ({className, item, removeFromCartHandler, addOneToCartItem, removeOneToCartItem}) =>{
    const onClickHandler = () =>{
        removeFromCartHandler(item.id)
    }

    const onAddHandler = () => {
        addOneToCartItem(item.id)
    }

    const onRemoveHandler = () => {
        removeOneToCartItem(item.id)
    }

    return (
        <div className={className}>
            <img alt="" src={item.image} style={{height: "10rem", borderRadius: "6px"}}/>
            <h2 style={{width:"50%"}}>{item.name}</h2>
            <div>
                <StyledItemCount item={item} amount={item.quantity} onAdd={onAddHandler} onRemove={onRemoveHandler}/>
            </div>
            <h2>{numberFormat.format(item.price)}</h2>
            <Close onClick={onClickHandler}/>
        </div>
    )
}

export default CartItem