import RemoveIcon from '@material-ui/icons/Remove';

const RemoveItem = ({className, onRemove}) => {
    return (
        <RemoveIcon className={className} onClick={onRemove}/>
    )
}

export default RemoveItem; 