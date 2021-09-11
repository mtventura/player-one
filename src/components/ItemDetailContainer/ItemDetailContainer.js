import { useEffect, useState } from "react"
import { StyledItemDetail } from "../ItemDetail/ItemDetail.style"
import { StyledLoading } from "../Loading/Loading.style"

const items = [
    {id: '001', title: 'Bulbasaur', description: 'Una rara semilla fue plantada en su espalda al nacer. \nLa planta brota y crece con este Pokémon', price: 10, stock: 10, pictureUrl: 'https://images.gameinfo.io/pokemon/256/p1f87.png'},
    {id: '002', title: 'Ivysaur', description: 'Cuando el bulbo de su espalda crece, \nparece no poder ponerse de pie sobre sus patas traseras.', price: 25, stock: 20, pictureUrl: 'https://pokemongostop.org/images/pokemon/ivysaur.png'},
    {id: '003', title: 'Venusaur', description: 'La planta florece cuando absorbe energía solar. \nÉsta le obliga a ponerse en busca de la luz solar.', price: 100, stock: 50, pictureUrl: 'https://pokemongostop.org/images/pokemon/venusaur.png'},
    {id: '004', title: 'Charmander', description: 'Prefiere los sitios calientes. \nDicen que cuando llueve sale vapor de la punta de su cola.', price: 80, stock: 4, pictureUrl: 'https://images.gameinfo.io/pokemon/256/p4f96.png'},
    {id: '005', title: 'Charmeleon', description: 'Cuando está luchando su llama arde vivamente, \nesto eleva las temperaturas.', price: 240, stock: 20, pictureUrl: 'https://images.gameinfo.io/pokemon/256/p5f205.png'},
    {id: '006', title: 'Charizard', description: 'Escupe fuego tan caliente que funde las rocas. \nCausa incendios forestales sin querer.', price: 1000, stock: 70, pictureUrl: 'https://images.gameinfo.io/pokemon/256/p6f102.png'},
    {id: '007', title: 'Squirtle', description: 'Tras nacer, su espalda se hincha y endurece como una concha. \nEcha potente espuma por la boca.', price: 45, stock: 1, pictureUrl: 'https://images.gameinfo.io/pokemon/256/p7f105.webp'},
    {id: '008', title: 'Wartortle', description: 'Se oculta en el agua para cazar a sus presas. \nAl nadar rápidamente, mueve sus orejas para nivelarse.', price: 90, stock: 77, pictureUrl: 'https://images.gameinfo.io/pokemon/256/p8f108.webp'},
    {id: '009', title: 'Blastoise', description: 'Un brutal Pokémon con reactores de agua en su caparazón. \nÉstos son usados para rápidos placajes.', price: 450, stock: 999, pictureUrl: 'https://images.gameinfo.io/pokemon/256/p9f111.webp'},
    {id: '010', title: 'Caterpie', description: 'Sus cortas patas están recubiertas de ventosas \nque le permiten subir incansable por muros y cuestas.', price: 1, stock: 5, pictureUrl: 'https://images.gameinfo.io/pokemon/256/p10.webp'},
    {id: '011', title: 'Metapod', description: 'Este Pokémon es vulnerable al ataque cuando \nsu concha es blanda, dejando expuesto su frágil cuerpo.', price: 12, stock: 10, pictureUrl: 'https://images.gameinfo.io/pokemon/256/p11.webp'},
    {id: '012', title: 'Butterfree', description: 'En combate, aletea a gran velocidad para lanzar al aire sus tóxicos polvillos.', price: 45, stock: 15, pictureUrl: 'https://images.gameinfo.io/pokemon/256/p12.webp'},
 ]

const getItem = (id) => {
    return new Promise((resolve) => {
        setTimeout(() => resolve(items.filter(item => item.id === id)), 2000)
    })
}

const ItemDetailContainer = ({className, id, showDetail, setShowDetail}) =>{
    const [selectedItem, setItem] = useState({})
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const itemDetail = getItem(id)
        itemDetail.then(item => {setItem(item)}).then(() => {setLoading(false)})
    }, [])
    return(
        showDetail ? 
        <div className={className} onClick={() => setShowDetail(!showDetail)}>
            {loading ? <StyledLoading/> : <StyledItemDetail item={selectedItem}/>}
        </div> 
        : null 
    )
}

export default ItemDetailContainer