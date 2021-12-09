import { faEye, faHeart, faShoppingCart, faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./ProductCard.css";

const ProductCard = () => {
  return (
      <div className="product-card">
        <div className="product-card-body">
          <img
            src="https://freepngimg.com/thumb/chair/45-chair-png-image.png"
            alt=""
          />
          <div className="card-icon cart-icon text-end"><FontAwesomeIcon icon={faShoppingCart} /></div>
          <div className="card-icon heart-icon text-end"><FontAwesomeIcon icon={faHeart} /></div>
          <div className="card-icon eye-icon text-end"><FontAwesomeIcon icon={faEye} /></div>
        </div>
        <div className="card-info">
          <div className="rating mb-3">
            <FontAwesomeIcon className="marked" icon={faStar} />
            <FontAwesomeIcon className="marked" icon={faStar} />
            <FontAwesomeIcon className="marked" icon={faStar} />
            <FontAwesomeIcon className="marked" icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
          </div>
          <h4 className="name fw-bold">Cool Wooden Chair</h4>
          <h5 className="price marked">$199</h5>
        </div>
      </div>
  );
};

export default ProductCard;
