import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Rating from "../Rating";

const Image = styled.img`
  width: 90%;
  height: 95%;
  margin-top: 13px;
  justify-self: center;
  align-self: center;
`;
const Container = styled.div`
  display: flex;
  flex-direction: ${(props) => props.flex};

  margin: 10px;
  justify-content: space-between;
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

function Card({ item, ...props }) {
  return (
    <Link to={`/product/${item._id}`}>
      <CardContainer>
        <Image src={item.image} />
        <Container>
          <Text>{item.name}</Text>
        </Container>

        <Container flex="row">
          <Text>{item.price}</Text>
          <Rating rating={item.rating} numReviews={item.numReviews} />
        </Container>
      </CardContainer>
    </Link>
  );
}

export default Card;
