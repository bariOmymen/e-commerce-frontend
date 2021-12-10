import "./App.css";
import { BrowserRouter, Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";
import SigninScreen from "./screens/signin/SinginScreen";
import CartScreen from "./screens/CartScreen";
import SignupScreen from "./screens/SignupScreen";
import ShippingScreen from "./screens/ShippingScreen";
import PaymentScreen from "./screens/PaymentScreen";
import PlaceOrderScreen from "./screens/PlaceOrderScreen";
import OrderScreen from "./screens/OrderScreen";
import OrderHistory from "./screens/OrderHistory";
import UserProfileScreen from "./screens/UserProfileScreen";
import Nav from "./components/Nav";
import ToastListener from "./Contexts/ToastContext/Listener";
import AuthChildren from "./AuthChildren";
import AuthListener from "./Contexts/AuthContext/AuthListener";

function App() {
  return (
    <BrowserRouter>
      <div className="grid-container">
        <header>
          <Nav />
        </header>
        <main>
          <Routes>
            <Route element={<HomeScreen />} path="/" exact />
            <Route element={<SignupScreen />} path="/signup" exact />
            <Route element={<SigninScreen />} path="/signin" exact />
            <Route element={<ProductScreen />} path={"/product/:id"} />
            {/* <Route path="/cart" element={<Private />}>
              <Route path="/cart" element={<CartScreen />} />
            </Route> */}
            <Route
              path="/cart"
              element={
                <AuthChildren>
                  <CartScreen />
                </AuthChildren>
              }
            />
            <Route
              element={
                <AuthChildren>
                  {" "}
                  <ShippingScreen />
                </AuthChildren>
              }
              path={"/shipping"}
              exact
            />
            <Route
              element={
                <AuthChildren>
                  <PaymentScreen />
                </AuthChildren>
              }
              path={"/payment"}
              exact
            />{" "}
            <Route
              path={"/placeOrder"}
              element={
                <AuthChildren>
                  <PlaceOrderScreen />
                </AuthChildren>
              }
            />
            <Route
              element={
                <AuthChildren>
                  <OrderScreen />
                </AuthChildren>
              }
              path={"/order/:id"}
            />
            <Route
              element={
                <AuthChildren>
                  <UserProfileScreen />
                </AuthChildren>
              }
              path="/userprofile"
              exact
            />
            <Route
              element={
                <AuthChildren>
                  <OrderHistory />
                </AuthChildren>
              }
              path={"/history"}
              exact
            />
          </Routes>
        </main>
        <footer>
          <div className="footer-container">ALL RIGHTS RESERVED</div>
        </footer>
      </div>
      <ToastListener />
      <AuthListener />
    </BrowserRouter>
  );
}

export default App;
