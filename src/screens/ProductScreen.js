import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Link, useParams, useNavigate } from "react-router-dom";

import { getProduct } from "../actions/productsActions";
import { addToCart } from "../actions/cartActins";
import Rating from "../components/Rating";
import styled from "styled-components";
const Pic = styled.img`
  margin: 15px 30px;
`;
const ProductScreen = ({ product, getProduct, addToCart, ...props }) => {
  const params = useParams();
  const navigate = useNavigate();

  const [quantity, setQuantity] = useState(1);

  const addToCartHandler = () => {
    addToCart(params.id, quantity);
    navigate("../cart", { replace: true });
  };

  useEffect(() => {
    getProduct(params.id);
  }, [getProduct, params]);

  return (
    <div className="page">
      <div className="columns product-card">
        <div className="col-2 ">
          <Pic src={product.image} alt={product.description} />
        </div>
        <div className="col-3">
          <div className=" margin-down">
            <div className="margin-down ">
              <div>
                <h2>{product.name}</h2>
              </div>
              <div>discription: {product.description}</div>
              <div>Price ${product.price}</div>
              <div>
                {
                  <Rating
                    rating={product.rating}
                    numReviews={product.numReviews}
                  />
                }
              </div>
            </div>
            <div>
              <p className="margin-left">Price</p>
              <h4 className="margin-right">${product.price}</h4>
            </div>
            <div>
              <p className="margin-left">Status</p>
              <h4
                className={
                  product.countInStock > 0
                    ? "success margin-right"
                    : "error margin-right"
                }
              >
                {product.countInStock > 0 ? "In Stock" : "Unavailable"}
              </h4>
            </div>
            <div>
              <select
                className="quantity-select"
                value={quantity}
                onChange={(e) => {
                  setQuantity(e.target.value);
                }}
              >
                {[...Array(product.countInStock).keys()].map((x, key) => (
                  <option key={key} value={x + 1}>
                    {x + 1}
                  </option>
                ))}
              </select>
            </div>
            <div className="add-to-cart-container">
              <button className="add-to-cart-button" onClick={addToCartHandler}>
                add to cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default connect((state) => ({ product: state.product.productDetails }), {
  getProduct,
  addToCart,
})(ProductScreen);
