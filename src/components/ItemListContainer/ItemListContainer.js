import { useState, useEffect } from "react";
import {StyledItemList} from '../ItemList/ItemList.style'
import {StyledLoading} from '../Loading/Loading.style'
import {Games} from '../../data'
import { useParams } from "react-router";

const getCardItems = (categoryId) => {
        return new Promise((resolve) => {
            setTimeout(() => resolve(!categoryId ? Games : Games.filter(game => game.categoryId === categoryId)), 2000)
        })
}
const ItemListContainer = ({className}) => {
    const {id} = useParams()
    const [itemsList, setCardItems] = useState([])
    const [loading, setLoading] = useState(true);
    
    useEffect(() => {
        setLoading(true)
        const cardItems = getCardItems(id)
        cardItems.then(items => {setCardItems(items)}).then(() => {setLoading(false)})
    }, [id])
    
    return(
        <div className={className}>
            {loading ? <StyledLoading/> : <StyledItemList items={itemsList}/>}
        </div>
    )
}
export default ItemListContainer; 
