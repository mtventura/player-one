import { useEffect, useState } from "react"
import { useParams } from "react-router"
import { StyledOrder } from "../Order/Order.style"
import { getOrder } from "../../services/firebase/firebase"

const OrderContainer = ({className}) => {
    const {id} = useParams()
    const [order, setOrder] = useState({})    

    useEffect(() => {
        getOrder(id).then(dbOrder => {
            setOrder(dbOrder)
        }).catch((error) => {
            console.log(`Error recuperando la órden\r\n`, error)
        })
        return setOrder({})
    }, [id])

    return (
        order ? 
        <div className={className}>
            <StyledOrder order={order}/>
        </div>
        : null
    )
}

export default OrderContainer