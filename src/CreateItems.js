import { StyledButton } from './components/Button/Button.style'
import {Games} from './data'
import {CreateItem} from './services/firebase/firebase'

const CreateItems = () => {

const onClickHandler = () => {
    {Games.forEach(game => CreateItem(game))}
}
return <StyledButton onClick={onClickHandler}/>
}

export default CreateItems