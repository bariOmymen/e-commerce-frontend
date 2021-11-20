

import './App.css';
import {Link} from 'react-router-dom'
import { useSelector } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { Route } from 'react-router-dom'
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import SigninScreen from './screens/SinginScreen';
import CartScreen from './screens/CartScreen';
import SignupScreen from './screens/SignupScreen';
import ShippingScreen from './screens/ShippingScreen';
import PaymentScreen from './screens/PaymentScreen';
import PlaceOrderScreen from './screens/PlaceOrderScreen';
import OrderScreen from './screens/OrderScreen';
import OrderHistory from './screens/OrderHistory';
import UserProfileScreen from './screens/UserProfileScreen';
import ProtectedRoute from './ProtectedRoute';
import CartBadge from './components/CartBadge';
import User from './components/User';






function App() {
  const userInfo = useSelector(state => state.user.userInfo)

  const cartItems = useSelector(state => state.cart.cartItems);
  

  return (
    
    <BrowserRouter>
    
    <div className="grid-container">
      <header>
<div className="container">
<Link to="/signin"> AMAZONIA</Link>
<div className='right-side'>
<Link className='cart' to="/cart"> Cart {cartItems.length > 0 ? <CartBadge show classes='cart-badge'>
  {cartItems.length}
</CartBadge> : null}</Link>

{userInfo ? (
              <User />
            ) : (
              <Link to="/signin">Sign In</Link>
            )}

</div>

</div>
      </header>
      <main>

<Route component={HomeScreen} path="/" exact />
<Route component={SignupScreen} path="/signup" exact />
<Route component={SigninScreen} path="/signin" exact />


 <Route component={ProductScreen} path={"/product/:id"}/>
 <ProtectedRoute component={CartScreen} path={"/cart"}/>
 
 
 <ProtectedRoute component={ShippingScreen} path={"/shipping"} exact />
 <ProtectedRoute component={PaymentScreen} path={"/payment"} exact />
 <ProtectedRoute component={PlaceOrderScreen} path={"/placeOrder"} exact />
 <ProtectedRoute component={OrderScreen} path={"/order/:id"} />
 <ProtectedRoute component={UserProfileScreen} path="/userprofile" exact/>
 
 <ProtectedRoute component={OrderHistory} path={"/history"} exact />







      </main>
      <footer>
<div className="container">
ALL RIGHTS RESERVED
</div>
      </footer>
    </div>
    
    </BrowserRouter>
   
  ); 
}

export default App;


