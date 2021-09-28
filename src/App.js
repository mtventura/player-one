import './App.css';
import { useContext } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { StyledItemListContainer } from './components/ItemListContainer/ItemListContainer.style';
import {StyledNavBar} from "./components/NavBar/NavBar.style";
import { StyledItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer.style';
import { StyledCart } from './components/Cart/Cart.style';
import { CartContextProvider } from './context/CartContext'
import UserContext  from './context/UserContext'
import { StyledLogInContainer } from './components/LogInContainer/LogInContainer.style';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';

function App() {
  const { user } = useContext(UserContext)

  return (
    <div className="App">
      <CartContextProvider>
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
            <PrivateRoute path="/cart/" user={user}>
              <StyledCart/>
            </PrivateRoute>
            <Route path="/login/">
              <StyledLogInContainer/>
            </Route>
          </Switch>
        </BrowserRouter>
      </CartContextProvider>
    </div>
  );
}

export default App;
