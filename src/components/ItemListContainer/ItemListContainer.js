import { StyledCard } from "../Card/Card.Style";

const ItemListContainer = ({className, onClick}) => {
    return(
        <div className={className}>
            <StyledCard availableAmount="10" image="https://images.gameinfo.io/pokemon/256/p1f87.png" onClick={onClick}/>
            <StyledCard availableAmount="10" image="https://pokemongostop.org/images/pokemon/ivysaur.png" onClick={onClick}/>
            <StyledCard availableAmount="10" image="https://pokemongostop.org/images/pokemon/venusaur.png" onClick={onClick}/>
            <StyledCard availableAmount="10" image="https://images.gameinfo.io/pokemon/256/p4f96.png" onClick={onClick}/>
            <StyledCard availableAmount="10" image="https://images.gameinfo.io/pokemon/256/p5f205.png" onClick={onClick}/>
            <StyledCard availableAmount="10" image="https://images.gameinfo.io/pokemon/256/p6f102.png" onClick={onClick}/>
            <StyledCard availableAmount="10" image="https://images.gameinfo.io/pokemon/256/p7f105.webp" onClick={onClick}/>
            <StyledCard availableAmount="10" image="https://images.gameinfo.io/pokemon/256/p8f108.webp" onClick={onClick}/>
            <StyledCard availableAmount="10" image="https://images.gameinfo.io/pokemon/256/p9f111.webp" onClick={onClick}/>
            <StyledCard availableAmount="10" image="https://images.gameinfo.io/pokemon/256/p10.webp" onClick={onClick}/>
            <StyledCard availableAmount="10" image="https://images.gameinfo.io/pokemon/256/p11.webp" onClick={onClick}/>
            <StyledCard availableAmount="10" image="https://images.gameinfo.io/pokemon/256/p12.webp" onClick={onClick}/>
        </div>
    )
}
export default ItemListContainer; 
