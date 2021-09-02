import { StyledCard } from "../Card/Card.Style";

const ItemListContainer = ({className, onClick}) => {
    return(
        <div className={className}>
            <StyledCard stock="10" image="https://images.gameinfo.io/pokemon/256/p1f87.png"/>
            <StyledCard image="https://pokemongostop.org/images/pokemon/ivysaur.png"/>
            <StyledCard stock="20" image="https://pokemongostop.org/images/pokemon/venusaur.png"/>
            <StyledCard stock="40" image="https://images.gameinfo.io/pokemon/256/p4f96.png"/>
            <StyledCard stock="5" image="https://images.gameinfo.io/pokemon/256/p5f205.png"/>
            <StyledCard stock="31" image="https://images.gameinfo.io/pokemon/256/p6f102.png"/>
            <StyledCard stock="12" image="https://images.gameinfo.io/pokemon/256/p7f105.webp"/>
            <StyledCard stock="86" image="https://images.gameinfo.io/pokemon/256/p8f108.webp"/>
            <StyledCard stock="14" image="https://images.gameinfo.io/pokemon/256/p9f111.webp"/>
            <StyledCard stock="10" image="https://images.gameinfo.io/pokemon/256/p10.webp"/>
            <StyledCard stock="10" image="https://images.gameinfo.io/pokemon/256/p11.webp"/>
            <StyledCard stock="10" image="https://images.gameinfo.io/pokemon/256/p12.webp"/>
        </div>
    )
}
export default ItemListContainer; 
