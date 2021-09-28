import { StyledItemCount} from '../ItemCount/ItemCount.Style'
import { StyledLink } from '../Link/Link.style'
import { useState } from 'react'

const options = {style: 'currency', currency:'ARS'}
const numberFormat = new Intl.NumberFormat('es-AR', options)


const Item = ({className, item}) =>{
    const initial = 1
    const [amount, setAmount] = useState(initial === undefined ? 0 : initial);  
    const onAddHandler = () => {
        if(amount < item.stock)
            setAmount(amount + 1)
    }
    const onRemoveHandler = () => {
        if(amount > initial)
            setAmount(amount - 1) 
    }

    return(
        <div className={className}>
            <StyledLink to={`/item/${item.id}`}>
                <div style={{height: "10rem"}}>
                    <img alt="" src={item.image} style={{height: "10rem", borderRadius: "6px", marginTop:"5px"}}/>
                </div>
            <div style={{height: "8rem"}}>
                <h3>{numberFormat.format(item.price)}</h3>
                <h3>{item.name}</h3>
            </div>
            </StyledLink>
            <StyledItemCount item={item} addButton={true} onAdd={onAddHandler} onRemove={onRemoveHandler} amount={amount} setAmount={setAmount}/>
        </div>
    )
}

export default Item; 