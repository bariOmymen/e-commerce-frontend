

import './App.css';
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
import Nav from './components/menu';







function App() {


  
 
  return (
    
    <BrowserRouter>
    
    <div  className="grid-container">
      <header>
<Nav />
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
<div className="footer-container">
ALL RIGHTS RESERVED
</div>
      </footer> 
    </div>
    
    </BrowserRouter>
   
  ); 
}

export default App;


