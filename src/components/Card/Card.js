import { StyledItemCount } from "../ItemCount/ItemCount.Style"

const Card = ({className, image, availableAmount, onClick}) => {
    return(
        <div className={className}>
            <img alt ="" src={image}/>
            <StyledItemCount availableAmount={availableAmount} onClick={onClick}/>
        </div>
    )
}

export default Card;