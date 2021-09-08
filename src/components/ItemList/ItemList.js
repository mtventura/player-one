import {StyledItem} from '../Item/Item.style'
const ItemList = ({className, items}) => {
    return(
        <div className={className}>
            {items.map(item => <StyledItem key={item.key} item={item}/>)}
        </div>
    )
}

export default ItemList