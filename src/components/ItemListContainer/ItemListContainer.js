import { useState, useEffect } from "react";
import {StyledItemList} from '../ItemList/ItemList.style'
import {StyledLoading} from '../Loading/Loading.style'
import { useParams } from "react-router";
import { db } from '../../services/firebase/firebase'
import { collection, getDocs, query, where } from "@firebase/firestore";

const ItemListContainer = ({className}) => {
    const {id} = useParams()
    const [items, setItems] = useState([])
    const [loading, setLoading] = useState(true);
    
    useEffect(() => {
        setLoading(true)
        if(!id){
            getDocs(collection(db, 'items')).then((querySnapshot) => {
                const items = querySnapshot.docs.map(doc => {
                    return {id: doc.id, ...doc.data() }
                })
                setItems(items)
            }).catch((error) => {
                console.log('Error recuperando los items\r\n ', error)
            }).finally(() => {
                setLoading(false)
            })
        }else{
            getDocs(query(collection(db, 'items'), where('categoryId', '==', id))).then((querySnapshot) => {
                const items = querySnapshot.docs.map(doc => {
                    return {id: doc.id, ...doc.data()}
                })
                setItems(items)
            }).catch((error) => {
                console.log('Error recuperando los items\r\n ', error)
            }).finally(() => {
                setLoading(false)
            })
        }
        return (() => {setItems([])})
    }, [id])
    
    return(
        <div className={className}>
            {loading ? <StyledLoading/> : <StyledItemList items={items}/>}
        </div>
    )
}
export default ItemListContainer; 
