import React, { useState } from "react";
import { connect } from "react-redux";
import { Link, useParams } from "react-router-dom";
import styled from "styled-components";

import { deleteItem } from "../actions/cartActins";
import { FlexBox } from "../components/Box/Flex";
import Card from "../components/Card/Card";
import CardBody from "../components/Card/CardBody";
import CardFooter from "../components/Card/CardFooter";
import { Button } from "../components/styles/Button";
import { Page } from "../components/styles/Page";
import { Text } from "../components/Text";

const ProceedButton = styled(Button)`
  justify-self: flex-end;
  align-self: flex-end;
  text-align: flex-end;
`;
const CartCard = styled(Card)`
  width: 300px;
  margin: 15px;
`;
const Img = styled.img`
  height: 200px;
  width: 200px;
`;

const CartScreen = (props) => {
  const params = useParams();
  const id = params.id;
  const addToCart = props.addToCart;
  const cartItems = props.cartItems;
  const deleteItem = props.deleteItem;
  const [quantity, setQuantity] = useState();

  return (
    <Page className="grid-2-cols" style={{ minHeight: "70vh" }}>
      <div className="row-center">
        {cartItems.map((item) => (
          <CartCard key={item.product}>
            <CardBody>
              <FlexBox
                flexDirection={"column"}
                justifyContent={"center"}
                alignItems={"center"}
                width={"100%"}
              >
                <Img src={item.image} alt={item.name} />
                <FlexBox
                  margin={"10px auto"}
                  width={"100%"}
                  justifyContent={"space-between"}
                >
                  <Text>{item.name}</Text>
                  <Text>{item.price}</Text>
                </FlexBox>
              </FlexBox>
            </CardBody>
            <CardFooter>
              <FlexBox
                flexDirection={"row"}
                justifyContent={"space-between"}
                alignItems={"center"}
                width={"100%"}
              >
                <select
                  className="quantity-select"
                  value={quantity || item.qty}
                  onChange={(e) => {
                    setQuantity(e.target.value);
                    addToCart(id, e.target.value);
                  }}
                >
                  quantity{" "}
                  {[...Array(item.countInStock).keys()].map((x) => (
                    <option value={x + 1}>{x + 1}</option>
                  ))}
                </select>

                <button
                  className="delet-button"
                  onClick={() => deleteItem(item.product)}
                >
                  delete
                </button>
              </FlexBox>
            </CardFooter>
          </CartCard>
        ))}
      </div>
      <Card className="card-col card">
        <div className="card-container">
          <div>
            <p>
              {" "}
              total price of ({cartItems.reduce((a, c) => a + Number(c.qty), 0)}
              ) items :
            </p>
            <h3> ${cartItems.reduce((a, c) => a + c.price * c.qty, 0)}</h3>
          </div>

          <Link className="proceed-button" to="/shipping">
            <ProceedButton>Proceed</ProceedButton>
          </Link>
        </div>
      </Card>
    </Page>
  );
};

export default connect((state) => ({ cartItems: state.cart.cartItems }), {
  deleteItem,
})(CartScreen);
