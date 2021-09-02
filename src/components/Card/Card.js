import { StyledItemCount } from "../ItemCount/ItemCount.Style"

const Card = ({className, image, stock, initial}) => {
    return(
        <div className={className}>
            <img alt ="" src={image}/>
            <StyledItemCount stock={stock} initial={initial}/>
        </div>
    )
}

export default Card;