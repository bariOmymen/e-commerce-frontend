import React, { useEffect, useState } from "react";
import { connect } from "react-redux";

import ChexkoutFlow from "../components/ChexkoutFlow";
import { saveShippingDetails } from "../actions/cartActins";
import { useNavigate } from "react-router-dom";
import { Card, Form, Header, Input, Page } from "../components/form";
import styled from "styled-components";
import { useToast } from "../hooks/useToast";
import { default as PageWrapper } from "../components/styles/Page";

const ShippingCard = styled(Card)``;

const ShippingForm = styled(Form)`
  justify-self: center;
  align-self: center;
  margin-top: 5px;
`;
const ShippingInput = styled(Input)`
  margin: 0px auto;
  font-weight: bold;
`;
const ShippingPage = styled(Page)`
  display: flex;
  flex-direction: column;
  width: 100%;
`;
const ShippingHeader = styled(Header)`
  align-self: flex-start;
  justify-content: flex-start;
  margin: 10px 25px;
`;

function ShippingScreen({
  shippingDetails,
  saveShippingDetails,
  userInfo,
  ...props
}) {
  const [fullName, setFullName] = useState();
  const [address, setAddress] = useState();
  const [city, setCity] = useState();
  const [postalCode, setPostalCode] = useState();
  const [country, setCountry] = useState();
  const navigate = useNavigate();
  const { toastSuccess } = useToast();
  useEffect(() => {
    setFullName(shippingDetails?.fullName);
    setAddress(shippingDetails?.address);
    setCity(shippingDetails?.city);
    setPostalCode(shippingDetails?.postalCode);
    setCountry(shippingDetails?.country);
  }, [
    shippingDetails?.address,
    shippingDetails?.city,
    shippingDetails?.country,
    shippingDetails?.fullName,
    shippingDetails?.postalCode,
  ]);

  const submitHandler = (e) => {
    e.preventDefault();

    saveShippingDetails({ fullName, address, city, postalCode, country });
    toastSuccess({ title: "Shipping Details Saved" });

    navigate("../payment", { replace: true });
  };
  return (
    <PageWrapper>
      <ChexkoutFlow step1 step2></ChexkoutFlow>
      <ShippingPage>
        <ShippingCard size="big">
          <ShippingForm className="shipping-form form" onSubmit={submitHandler}>
            <ShippingHeader>Shipping details</ShippingHeader>

            <ShippingInput
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              placeholder="Full Name"
              type="text"
            />

            <ShippingInput
              value={address}
              type="text"
              onChange={(e) => setAddress(e.target.value)}
              placeholder="address"
            />

            <ShippingInput
              value={city}
              onChange={(e) => setCity(e.target.value)}
              placeholder="City"
            />

            <ShippingInput
              value={postalCode}
              type="text"
              onChange={(e) => setPostalCode(e.target.value)}
              placeholder="postal code"
            />

            <ShippingInput
              value={country}
              type="text"
              onChange={(e) => setCountry(e.target.value)}
              placeholder="Country"
            />

            <ShippingInput className="button" type="submit" value="continue" />
          </ShippingForm>
        </ShippingCard>
      </ShippingPage>
    </PageWrapper>
  );
}

export default connect(
  (state) => ({
    shippingDetails: state.userShippingDetails.shipping,
    userInfo: state.user.userInfo,
  }),
  { saveShippingDetails }
)(ShippingScreen);
