import React, { useEffect } from "react";
import Products from "../components/Products";
import { connect } from "react-redux";
import { fetchProducts } from "../actions/productsActions";
import Card from "../components/Product/Card";

const HomeScreen = ({ products, fetchProducts }) => {
  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  return (
    <div className="home-container row-center">
      {products
        ? products.map((product) => <Card key={product._id} item={product} />)
        : "loading.."}
    </div>
  );
};

export default connect((state) => ({ products: state.products.items }), {
  fetchProducts,
})(HomeScreen);
/* <Product key={product._id} product={product}/> 
 
   <product.Image src={product.image} alt={product.title} />
                    <Product.Body className=''>
                        <Product.Title className='' >{product.title}</Product.Title>
                        
                    </Product.Body>
 
 */
