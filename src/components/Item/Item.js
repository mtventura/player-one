import { StyledItemCount} from '../ItemCount/ItemCount.Style'
import { StyledLink } from '../Link/Link.style'

const options = {style: 'currency', currency:'ARS'}
const numberFormat = new Intl.NumberFormat('es-AR', options)
const Item = ({className, item}) =>{
    return(
        <div className={className}>
            <StyledLink to={`/item/${item.id}`}>
                <div style={{height: "10rem"}}>
                    <img alt="" src={item.image} style={{height: "10rem", borderRadius: "6px"}}/>
                </div>
            <div style={{height: "8rem"}}>
                <h3>{numberFormat.format(item.price)}</h3>
                <h3>{item.name}</h3>
            </div>
            </StyledLink>
            <StyledItemCount initial={1} item={item}/>
        </div>
    )
}

export default Item; 