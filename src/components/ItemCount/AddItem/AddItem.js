import AddIcon from '@material-ui/icons/Add';

const AddItem = ({className, onAdd}) => {
    return (
        <AddIcon className={className} onClick={onAdd}/>
    )
}

export default AddItem; 