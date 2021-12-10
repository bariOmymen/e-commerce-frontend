import React, { useState } from "react";
import { connect } from "react-redux";
import ChexkoutFlow from "../components/ChexkoutFlow";
import { savePaymentMethod } from "../actions/cartActins";
import { useNavigate } from "react-router-dom";
import { Card, Form, Header, Input, Page } from "../components/form";
import styled from "styled-components";
import { useToast } from "../hooks/useToast";

const PaymentCard = styled(Card)``;
const PaymentForm = styled(Form)`
  justify-self: center;
  align-self: center;
  margin-top: 5px;
`;
const PaymentInput = styled(Input)`
  margin: 0px auto;
  font-weight: bold;
`;
const PaymentPage = styled(Page)`
  display: flex;
  flex-direction: column;
  width: 100%;
`;
const PaymentHeader = styled(Header)`
  align-self: flex-start;
  justify-content: flex-start;
  margin: 10px 25px;
`;

function PaymentScreen({ userInfo, savePaymentMethod, ...props }) {
  const [payment, setPayment] = useState("Paypal");
  const navigate = useNavigate();
  const { toastSuccess } = useToast();
  const submitHandler = (e) => {
    e.preventDefault();
    if (!payment) {
      alert("must");
    } else {
      savePaymentMethod(payment);
      toastSuccess({ title: "Payment Method Saved", description: "" });
      navigate("/placeOrder", { replace: true });
    }
  };
  return (
    <div className="screen">
      <ChexkoutFlow step1 step2 step3 />
      <PaymentPage>
        <PaymentCard size="medium">
          <PaymentForm onSubmit={submitHandler}>
            <PaymentHeader>Choose Payment Method</PaymentHeader>
            <div>
              <PaymentInput
                type="radio"
                required
                checked
                id="paypal"
                name="favorit-payment"
                value="Paypal"
                onChange={(e) => setPayment(e.target.payment)}
              />
              <label for="Paypal">Paypal</label>
              <br />
              <PaymentInput
                type="radio"
                required
                id="Stripe"
                name="favorit-payment"
                value="Stripe"
                onChange={(e) => setPayment(e.target.payment)}
              />
              <label for="Stripe">Stripe</label>
            </div>

            <PaymentInput className="button " type="submit" value="continue" />
          </PaymentForm>
        </PaymentCard>
      </PaymentPage>
    </div>
  );
}
export default connect(
  (state) => ({
    userInfo: state.user.userInfo,
  }),
  { savePaymentMethod }
)(PaymentScreen);
