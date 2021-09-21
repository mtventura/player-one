import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { StyledItemListContainer } from './components/ItemListContainer/ItemListContainer.style';
import {StyledNavBar} from "./components/NavBar/NavBar.style";
import { StyledItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer.style';
import { StyledCart } from './components/Cart/Cart.style';

function App() {
  return (
    <div className="App">
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
          <Route path="/cart/">
            <StyledCart/>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
