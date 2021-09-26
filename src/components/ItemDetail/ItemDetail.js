import { StyledItemCount } from "../ItemCount/ItemCount.Style"

const options = {style: 'currency', currency:'ARS'}
const numberFormat = new Intl.NumberFormat('es-AR', options)

const ItemDetail = ({className, item}) => {
    const descParagraphs = item.description.split("\r\n")

    return(
        <div className={className}>
            <div style={{marginRight:"2rem"}}>
                <img alt="" src={item.image} style={{borderRadius: "10px"}}/>
            </div>
            <div>
                <div>
                    <h1 style={{textAlign:"left", marginTop:"0px"}}>{item.name}</h1>
                    <h3 style={{textAlign:"left"}}>{numberFormat.format(item.price)}</h3>
                    {descParagraphs.map(par => <p key={par} style={{textAlign:"left"}}>{par}</p>)}
                </div>
                <div style={{justifyContent:"center", display: "flex"}}>
                    <StyledItemCount initial={1} fixedAlignment={true} item={item}/>
                </div>
            </div>
        </div>
    )
}

export default ItemDetail