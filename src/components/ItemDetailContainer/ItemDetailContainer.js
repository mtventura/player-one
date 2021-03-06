import { useEffect, useState } from "react"
import { useParams } from "react-router"
import { StyledItemDetail } from "../ItemDetail/ItemDetail.style"
import { StyledLoading } from "../Loading/Loading.style"
import { getItem } from '../../services/firebase/firebase'

const ItemDetailContainer = ({className}) =>{
    const {id} = useParams()
    const [item, setItem] = useState({})
    const [loading, setLoading] = useState(true)
    
    console.log("Estoy en el itemDetailContainer")
    useEffect(() => {
        setLoading(true)
        getItem(id).then(item => {
            setItem(item)
        }).catch((error) => {
            console.log('Item Detail container Error\r\n', error)
        }).finally(() => {
            setLoading(false)
        })
        return (() => {setItem({})})
    }, [id])

    console.log("Valor de item en el itemDetailContainer: ", item)
    return(
        <div className={className}>
            {loading ? <StyledLoading/> : <StyledItemDetail item={item}/>}
        </div> 
    )
}

export default ItemDetailContainer