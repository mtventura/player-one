import { useState, useEffect } from "react";
import { StyledItemDetailContainer } from "../ItemDetailContainer/ItemDetailContainer.style";
import {StyledItemList} from '../ItemList/ItemList.style'
import {StyledLoading} from '../Loading/Loading.style'

const items = [
    {id: '001', title: 'Bulbasaur', description: '', price: 10, stock: 10, pictureUrl: 'https://images.gameinfo.io/pokemon/256/p1f87.png'},
    {id: '002', title: 'Ivysaur', description: '', price: 25, stock: 20, pictureUrl: 'https://pokemongostop.org/images/pokemon/ivysaur.png'},
    {id: '003', title: 'Venusaur', description: '', price: 100, stock: 50, pictureUrl: 'https://pokemongostop.org/images/pokemon/venusaur.png'},
    {id: '004', title: 'Charmander', description: '', price: 80, stock: 4, pictureUrl: 'https://images.gameinfo.io/pokemon/256/p4f96.png'},
    {id: '005', title: 'Charmeleon', description: '', price: 240, stock: 20, pictureUrl: 'https://images.gameinfo.io/pokemon/256/p5f205.png'},
    {id: '006', title: 'Charizard', description: '', price: 1000, stock: 70, pictureUrl: 'https://images.gameinfo.io/pokemon/256/p6f102.png'},
    {id: '007', title: 'Squirtle', description: '', price: 45, stock: 1, pictureUrl: 'https://images.gameinfo.io/pokemon/256/p7f105.webp'},
    {id: '008', title: 'Wartortle', description: '', price: 90, stock: 77, pictureUrl: 'https://images.gameinfo.io/pokemon/256/p8f108.webp'},
    {id: '009', title: 'Blastoise', description: '', price: 450, stock: 999, pictureUrl: 'https://images.gameinfo.io/pokemon/256/p9f111.webp'},
    {id: '010', title: 'Caterpie', description: '', price: 1, stock: 5, pictureUrl: 'https://images.gameinfo.io/pokemon/256/p10.webp'},
    {id: '011', title: 'Metapod', description: '', price: 12, stock: 10, pictureUrl: 'https://images.gameinfo.io/pokemon/256/p11.webp'},
    {id: '012', title: 'Butterfree', description: '', price: 45, stock: 15, pictureUrl: 'https://images.gameinfo.io/pokemon/256/p12.webp'},
 ]

const getCardItems = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(items), 2000)
    })
}
const ItemListContainer = ({className}) => {
    const [itemsList, setCardItems] = useState([])
    const [loading, setLoading] = useState(true);
    const [selectedItem, setSelectedItem] = useState(); 
    const [showDetail, setShowDetail] = useState(false); 
    useEffect(() => {
        const cardItems = getCardItems()
        cardItems.then(items => {setCardItems(items)}).then(() => {setLoading(false)})
    }, [])

    return(
        <div className={className}>
            {loading ? <StyledLoading/> : <StyledItemList items={itemsList} selectedItem={selectedItem} setSelectedItem={setSelectedItem} showDetail={showDetail} setShowDetail={setShowDetail}/>}
            {showDetail ? <StyledItemDetailContainer id={selectedItem.id} showDetail={showDetail} setShowDetail={setShowDetail}/> : null}
        </div>
    )
}
export default ItemListContainer; 
