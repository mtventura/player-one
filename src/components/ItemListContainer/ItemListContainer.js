import { useState, useEffect } from "react";
import {StyledItemList} from '../ItemList/ItemList.style'
import {StyledLoading} from '../Loading/Loading.style'
import { useParams } from "react-router";
import { getItems } from '../../services/firebase/firebase'

const ItemListContainer = ({className}) => {
    const {id} = useParams()
    const [items, setItems] = useState([])
    const [loading, setLoading] = useState(true);
    
    useEffect(() => {
        setLoading(true)
        getItems(id).then(dbItems => {
            setItems(dbItems)
        }).catch((error) => {
            console.log('Error recuperando los items\r\n', error)
        }).finally(() => {
            setLoading(false)
        })
        return (() => {setItems([])})
    }, [id])
    
    return(
        <div className={className}>
            {loading ? <StyledLoading/> : <StyledItemList items={items}/>}
        </div>
    )
}
export default ItemListContainer; 
