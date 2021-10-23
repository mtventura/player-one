import { StyledItemCount } from "../ItemCount/ItemCount.Style"
import { useState } from "react"
import { numberFormat } from "../../helpers/currencyHelper"
import { StyledButton } from "../Button/Button.style"
import { Link } from "react-router-dom"

const ItemDetail = ({className, item}) => {
    console.log(item)
    const descParagraphs = item.description ? item.description.split("\r\n") : ''

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
        item.description ? 
        <div className={className}>
            <div style={{marginRight:"2rem"}}>
                <img alt="" src={item.image} style={{borderRadius: "10px"}}/>
            </div>
            <div>
                <div>
                    <h1 style={{textAlign:"left", marginTop:"0px"}}>{item.name}</h1>
                    <h3 style={{textAlign:"left"}}>{numberFormat.format(item.price)}</h3>
                    {descParagraphs.map(par => <p key={par} style={{textAlign:"left"}}>{par}</p>)}
                </div>
                <div style={{justifyContent:"center", display: "flex"}}>
                    <StyledItemCount amount={amount} fixedAlignment={true} item={item} addButton={true} onAdd={onAddHandler} onRemove={onRemoveHandler}/>
                </div>
            </div>
        </div>
        :
        <div>
            <h2> El producto no existe</h2>
            <Link to={`/`}>
                <StyledButton buttonLabel={"Volver al catálogo"} textColor={'white'}></StyledButton>
            </Link>
        </div>
    )
}

export default ItemDetail