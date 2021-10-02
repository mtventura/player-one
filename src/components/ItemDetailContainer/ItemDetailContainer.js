import { useEffect, useState } from "react"
import { useParams } from "react-router"
import { StyledItemDetail } from "../ItemDetail/ItemDetail.style"
import { StyledLoading } from "../Loading/Loading.style"
import { db } from '../../services/firebase/firebase'
import { doc, getDoc } from 'firebase/firestore'

const ItemDetailContainer = ({className}) =>{
    const {id} = useParams()
    const [item, setItem] = useState({})
    const [loading, setLoading] = useState(true)
    
    useEffect(() => {
        setLoading(true)
        getDoc(doc(db, 'items', id)).then((querySnapshot) => {
            const item = {id: querySnapshot.id, ...querySnapshot.data()}
            setItem(item)
        }).catch((error) => {
            console.log('Error recuperando los items\r\n ', error)
        }).finally(() => {
            setLoading(false)
        })
        return (() => {setItem({})})
    }, [id])

    return(
        <div className={className}>
            {loading ? <StyledLoading/> : <StyledItemDetail item={item}/>}
        </div> 
    )
}

export default ItemDetailContainer