import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Box } from "../Box/Box";
import { FlexBox } from "../Box/Flex";
import Card from "../Card/Card";
import CardBody from "../Card/CardBody";
import CardFooter from "../Card/CardFooter";
import Rating from "../Rating";

const Image = styled.img`
  width: 90%;
  height: 95%;
  margin-top: 13px;
  justify-self: center;
  align-self: center;
`;

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;

  max-width: 350px;
  border: 0.1rem #c0c0c0 solid;
  background-color: #f8f8ff;
  border-radius: 0.5rem;
  margin: 1rem;
  &:hover {
    opacity: 0.7;
  }
`;
const Text = styled.h4`
  color: var(--text);
`;
const StyledCardLink = styled(Link)`
  text-decoration: none;
  max-width: 400px;
  margin: 15px;
`;

function ItemCard({ item, ...props }) {
  return (
    <StyledCardLink to={`/product/${item._id}`}>
      <Card margin={"12px"}>
        <CardBody p={"12px"}>
          <FlexBox flexDirection={"row"} justifyContent={"center"}>
            <Image src={item.image} />
          </FlexBox>
        </CardBody>
        <CardFooter>
          <Box>
            <Text>{item.name}</Text>
          </Box>

          <FlexBox flexDirection={"row"} justifyContent={"space-between"}>
            <Text>{item.price}</Text>
            <Rating rating={item.rating} numReviews={item.numReviews} />
          </FlexBox>
        </CardFooter>
      </Card>
    </StyledCardLink>
  );
}

export default ItemCard;
