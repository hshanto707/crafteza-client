import React from "react";
import { Accordion } from "react-bootstrap";
import ProductCard from "../../components/ProductCard/ProductCard";
import "./AllProducts.css";

const AllProducts = () => {
  return (
    <div className="all-products w-100">
      <div className="products-header">
        <h1>Products</h1>
        <img src="https://i.imgur.com/n0jk2P1.jpg" alt="" />
      </div>
      <div className="products-body container">
        <div>
          <Accordion defaultActiveKey="0">
            <Accordion.Item eventKey="0" className="mb-3">
              <Accordion.Header>Price</Accordion.Header>
              <Accordion.Body>id est laborum.</Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="0">
              <Accordion.Header>Category</Accordion.Header>
              <Accordion.Body>id est laborum.</Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </div>
        <div className="products-container">
          <ProductCard></ProductCard>
          <ProductCard></ProductCard>
          <ProductCard></ProductCard>
          <ProductCard></ProductCard>
          <ProductCard></ProductCard>
          <ProductCard></ProductCard>
          <ProductCard></ProductCard>
          <ProductCard></ProductCard>
        </div>
      </div>
    </div>
  );
};

export default AllProducts;
