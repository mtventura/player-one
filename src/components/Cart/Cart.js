import { useContext } from "react"
import { StyledButton } from "../Button/Button.style"
import { Link } from "react-router-dom"
import { StyledCartList } from '../CartList/CartList.style'
import CartContext from '../../context/CartContext'
import UserContext from '../../context/UserContext'
import { db } from '../../services/firebase/firebase'
import { collection, addDoc, getDoc, doc, Timestamp, writeBatch } from 'firebase/firestore'

const Cart = ({className}) => {

    const {items, clearCart, removeFromCart, addOneToCartItem, removeOneToCartItem, cartTotal} = useContext(CartContext)
    const { user } = useContext(UserContext)

    const confirmOrder = () => {
        const order = {
            buyer: user, 
            items: items, 
            date: Timestamp.fromDate(new Date()),
            total: cartTotal()
        }

        const batch = writeBatch(db)
        const itemsWithoutStock = []

        order.items.forEach((item) => {
            getDoc(doc(db, 'items', item.id)).then(documentSnapshot => {
                if(documentSnapshot.data().stock >= item.quantity)
                    batch.update(doc(db, 'items', documentSnapshot.id), {
                        stock: documentSnapshot.data().stock - item.quantity
                    })
                else
                    itemsWithoutStock.push({...documentSnapshot.data(), id: documentSnapshot.id})
            })
        })

        if(itemsWithoutStock.length === 0){
            addDoc(collection(db, 'orders'), order).then(() => {
                batch.commit().then(() => {
                    console.log('Orden grabada correctamente')
                })
            }).catch((error) => {
                console.log('error: ', error)
            }).finally(() => {
                clearCart()
            })
        }
    }

    return (
        items.length === 0 ? 
        <div> 
            <h2> El carrito está vacío</h2>
            <Link to={`/`}>
                <StyledButton buttonLabel={"Volver al catálogo"} textColor={'white'}></StyledButton>
            </Link>
        </div> : 
        <div className = {className}>
            <StyledCartList items={items} clearCartHandler={clearCart} removeFromCartHandler={removeFromCart} cartTotal={cartTotal()} addOneToCartItem={addOneToCartItem} removeOneToCartItem={removeOneToCartItem} confirmOrderHandler={confirmOrder}/>
        </div>
    )
}

export default Cart