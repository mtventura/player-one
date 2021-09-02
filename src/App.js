import {useState} from "react"; 
import './App.css';
import { StyledItemListContainer } from './components/ItemListContainer/ItemListContainer.style';
import {StyledNavBar} from "./components/NavBar/NavBar.style";

function App() {
  const [count, setCount] = useState(null); 

  return (
    <div className="App">
      <StyledNavBar StyledNavBarButton count={count}></StyledNavBar>
      <StyledItemListContainer onClick={() => setCount(count + 1)}/>
    </div>
  );
}

export default App;
