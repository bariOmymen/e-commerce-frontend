import React, { useEffect } from "react";
import { connect, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { placeOrder } from "../actions/orderActions";
import ChexkoutFlow from "../components/ChexkoutFlow";
import { CREATE_ORDER_RESET } from "../types";
import { useToast } from "../hooks/useToast";
import Card from "../components/Card/Card";
import Page from "../components/styles/Page";
import styled from "styled-components";

const StyledCard = styled(Card)`
  border-radius: 8px;
`;

function PlaceOrderScreen({
  cartItems,
  paymentMethod,
  placeOrder,
  order,
  shippingDetails: shipping,

  ...props
}) {
  const { success, createdOrder, error } = order;
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { toastSuccess, toastError } = useToast();
  useEffect(() => {
    if (success) {
      toastSuccess({ title: "Order Placed Successfully" });
      navigate(`/order/${createdOrder.order._id}`, { replace: true });
      dispatch({
        type: CREATE_ORDER_RESET,
      });
    }
    if (error) {
      toastError({ title: error.name, description: error.message });
    }
  }, [success, dispatch, createdOrder, navigate, error]);

  const itemsPrice = cartItems.reduce((a, c) => a + c.price * c.qty, 0);
  const taxPrice = cartItems[0].price;
  const shippingPrice = cartItems[0].price;
  const totalPrice = itemsPrice + taxPrice + shippingPrice;
  return (
    <Page>
      <ChexkoutFlow step1 step2 step3 step4 />
      <div className=" order-columns">
        <div className="order-col-1">
          <ul>
            <li>
              <StyledCard className="card shipping-details">
                <div>
                  <strong>Name :</strong> <span>{shipping?.fullName}</span>
                </div>
                <br />
                {shipping ? (
                  <div>
                    <strong>Address :</strong> {shipping?.address},{" "}
                    {shipping?.city}, {shipping?.postalCode},{" "}
                    {shipping?.country}
                  </div>
                ) : (
                  "loading..."
                )}
              </StyledCard>
            </li>
            <li>
              <StyledCard className="card payment-details">
                <h3>Payment Method</h3>
                <strong>{paymentMethod}</strong>
              </StyledCard>
            </li>
            <li>
              <StyledCard className="card payment-details">
                <div className="grid-2-cols">
                  <div className="products-col">
                    {cartItems.map((item) => (
                      <div key={item.product} className="cartItem">
                        <img
                          className="small-img"
                          src={item.image}
                          alt={item.name}
                        ></img>
                        <h3>{item.name}</h3>
                        <h3>{item.price}</h3>
                      </div>
                    ))}
                  </div>
                  <div className="card-total-col ">
                    <div className="container">
                      <div>total : {itemsPrice}</div>
                    </div>
                  </div>
                </div>
              </StyledCard>
            </li>
          </ul>
        </div>
        <StyledCard className="card proceed-checkout place-order-checkout">
          <div>
            <strong>propducts:</strong> <span>${itemsPrice}</span>
          </div>
          <div>
            <strong>shipping:</strong> <span>${shippingPrice}</span>
          </div>
          <div>
            <strong>tax:</strong> <span>${taxPrice}</span>
          </div>
          <div>
            <strong>total:</strong> <span>${totalPrice}</span>
          </div>

          <button
            className="place-order-button button"
            onClick={() => {
              placeOrder({
                orderItems: cartItems,
                shipping,
                paymentMethod,
                itemsPrice,
                shippingPrice,
                taxPrice,
                totalPrice,
              });
            }}
          >
            Place Order
          </button>
        </StyledCard>
      </div>
    </Page>
  );
}

export default connect(
  (state) => ({
    shippingDetails: state.userShippingDetails.shipping,
    payment: state.userPaymentDetails.payment,
    cartItems: state.cart.cartItems,
    paymentMethod: state.userPaymentDetails.payment,
    order: state.orders,
  }),
  {
    placeOrder,
  }
)(PlaceOrderScreen);
