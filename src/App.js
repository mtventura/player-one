import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { StyledItemListContainer } from './components/ItemListContainer/ItemListContainer.style'
import { StyledNavBar } from "./components/NavBar/NavBar.style"
import { StyledItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer.style'
import { CartContext } from './components/Context/CartContext'

function App() {
  return (
    <div className="App">
      <CartContext>
        <BrowserRouter>
          <StyledNavBar StyledNavBarButton></StyledNavBar>
          <Switch>
            <Route exact path="/">
              <StyledItemListContainer/>
            </Route>
            <Route path="/category/:id">
              <StyledItemListContainer />
            </Route>
            <Route path="/item/:id">
              <StyledItemDetailContainer/>
            </Route>
            <Route path="/cart">
              <StyledItemListContainer/>
            </Route>
          </Switch>
        </BrowserRouter>
      </CartContext>
    </div>
  );
}

export default App;
