import { StyledCard } from "../Card/Card.Style";

const ItemListContainer = ({className, onClick}) => {
    return(
        <div className={className}>
            <StyledCard stock="10" image="https://images.gameinfo.io/pokemon/256/p1f87.png" onClick={onClick}/>
            <StyledCard image="https://pokemongostop.org/images/pokemon/ivysaur.png" onClick={onClick}/>
            <StyledCard stock="20" image="https://pokemongostop.org/images/pokemon/venusaur.png" onClick={onClick}/>
            <StyledCard stock="40" image="https://images.gameinfo.io/pokemon/256/p4f96.png" onClick={onClick}/>
            <StyledCard stock="5" image="https://images.gameinfo.io/pokemon/256/p5f205.png" onClick={onClick}/>
            <StyledCard stock="31" image="https://images.gameinfo.io/pokemon/256/p6f102.png" onClick={onClick}/>
            <StyledCard stock="12" image="https://images.gameinfo.io/pokemon/256/p7f105.webp" onClick={onClick}/>
            <StyledCard stock="86" image="https://images.gameinfo.io/pokemon/256/p8f108.webp" onClick={onClick}/>
            <StyledCard stock="14" image="https://images.gameinfo.io/pokemon/256/p9f111.webp" onClick={onClick}/>
            <StyledCard stock="10" image="https://images.gameinfo.io/pokemon/256/p10.webp" onClick={onClick}/>
            <StyledCard stock="10" image="https://images.gameinfo.io/pokemon/256/p11.webp" onClick={onClick}/>
            <StyledCard stock="10" image="https://images.gameinfo.io/pokemon/256/p12.webp" onClick={onClick}/>
        </div>
    )
}
export default ItemListContainer; 
