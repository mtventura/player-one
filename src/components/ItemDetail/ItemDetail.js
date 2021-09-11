
const options = {style: 'currency', currency:'ARS'}
const numberFormat = new Intl.NumberFormat('es-AR', options)

const ItemDetail = ({className, item}) => {
    return(
        <div className={className}>
            <div>
                <img alt="" src={item[0].pictureUrl}/>
            </div>
            <div>
                <h2>{item[0].title}</h2>
                <h3>{item[0].description}</h3>
                <h3>{numberFormat.format(item[0].price)}</h3>
            </div>
        </div>
    )
}

export default ItemDetail