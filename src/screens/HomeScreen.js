import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchProducts } from "../actions/productsActions";
import ItemCard from "../components/Product/Card";
import { Page } from "../components/styles/Page";

const HomeScreen = ({ products, fetchProducts }) => {
  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  return (
    <Page className="home-container row-center">
      {products
        ? products.map((product) => (
            <ItemCard key={product._id} item={product} />
          ))
        : "loading.."}
    </Page>
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
