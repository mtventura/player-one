import './App.css';
import { StyledItemListContainer } from './components/ItemListContainer/ItemListContainer.style';
import {StyledNavBar} from "./components/NavBar/NavBar.style";

function App() {

  return (
    <div className="App">
      <StyledNavBar StyledNavBarButton></StyledNavBar>
      <StyledItemListContainer/>
    </div>
  );
}

export default App;
