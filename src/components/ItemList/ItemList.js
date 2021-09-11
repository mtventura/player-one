import {StyledItem} from '../Item/Item.style'
const ItemList = ({className, items,selectedItem, setSelectedItem, showDetail, setShowDetail}) => {
    return(
        <div className={className}>
            {items.map(item => <StyledItem key={item.id} item={item} selectedItem={selectedItem} setSelectedItem={setSelectedItem} showDetail={showDetail} setShowDetail={setShowDetail} />)}
        </div>
    )
}

export default ItemList