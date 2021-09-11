import { useState } from 'react';
import { StyledItemCount} from '../ItemCount/ItemCount.Style'

const options = {style: 'currency', currency:'ARS'}
const numberFormat = new Intl.NumberFormat('es-AR', options)
const Item = ({className, item, setSelectedItem, showDetail, setShowDetail}) =>{
    return(
        <div className={className}>
            <div onClick={() => {setSelectedItem(item); setShowDetail(!showDetail)}}>
                <img alt="" src={item.pictureUrl}/>
                <h3>{numberFormat.format(item.price)}</h3>
                <h3>{item.title}</h3>
            </div>
            <StyledItemCount stock={item.stock} initial={1}/>
        </div>
    )
}

export default Item; 