import './App.css';
import { useContext } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { StyledItemListContainer } from './components/ItemListContainer/ItemListContainer.style'
import { StyledNavBar } from "./components/NavBar/NavBar.style"
import { StyledItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer.style'
import { StyledCart } from './components/Cart/Cart.style'
import { StyledLogInContainer } from './components/LogInContainer/LogInContainer.style'
import { StyledNotification } from './components/Notification/Notification.style'
import { CartContextProvider } from './context/CartContext'
import { NotificationContextProvider } from './context/NotificationContext'
import { MenuContextProvider } from './context/MenuContext'
import { StyledCheckout } from './components/Checkout/Checkout.style';
import { StyledSignInContainer } from './components/SignInContainer/SignInContainer.style';
import PrivateRoute from './components/PrivateRoute/PrivateRoute'
import UserContext  from './context/UserContext'
import { StyledOrderContainer } from './components/OrderContainer/OrderContainer,style';

function App() {
  const { user } = useContext(UserContext)

  return (
    <div className="App">
      <NotificationContextProvider>
        <CartContextProvider>
          <MenuContextProvider>
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
                <PrivateRoute exact path="/cart/" user={user}>
                  <StyledCart/>
                </PrivateRoute>
                <Route path="/login/">
                  <StyledLogInContainer/>
                </Route>
                <Route path="/register/">
                  <StyledSignInContainer/>
                </Route>
                <Route path="/cart/checkout/">
                  <StyledCheckout/>
                </Route>
                <Route path="/order/:id">
                  <StyledOrderContainer/>
                </Route>
              </Switch>
              <StyledNotification />
            </BrowserRouter>
          </MenuContextProvider>
        </CartContextProvider>
      </NotificationContextProvider>
    </div>
  );
}

export default App;
