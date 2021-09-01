import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

const CartWidget = ({className, items}) => {
    return(
    <button className={className}>
        <ShoppingCartIcon/>
        {items}
    </button>
        )
}

export default CartWidget;