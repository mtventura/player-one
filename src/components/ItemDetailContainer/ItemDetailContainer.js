import { useEffect, useState } from "react"
import { useParams } from "react-router"
import { StyledItemDetail } from "../ItemDetail/ItemDetail.style"
import { StyledLoading } from "../Loading/Loading.style"
import {Games} from '../../data'

 const getCardItem = (id) => {
    return new Promise((resolve) => {
        setTimeout(() => resolve(Games.find(game => game.id.toString() === id)), 2000)
    })
}
const ItemDetailContainer = ({className}) =>{
    const {id} = useParams()
    const [selectedItem, setItem] = useState({})
    const [loading, setLoading] = useState(true)
    
    useEffect(() => {
        setLoading(true)
        const cardItem = getCardItem(id)
        cardItem.then(item => {setItem(item)}).then(() => {setLoading(false)})
    }, [id])

    return(
        <div className={className}>
            {loading ? <StyledLoading/> : <StyledItemDetail item={selectedItem}/>}
        </div> 
    )
}

export default ItemDetailContainer