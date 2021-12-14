import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Container, NavLink } from "react-bootstrap";
import { faHeart, faStar } from "@fortawesome/free-solid-svg-icons";
import "./ProductDetail.css";

const ProductDetail = () => {
  return (
    <div style={{ paddingTop: "100px" }}>
      <Container className="product-container">
        <div>
          <img
            className="product-img"
            src="https://www.pngitem.com/pimgs/m/508-5082434_dining-table-top-view-png-dining-room-chair.png"
            alt=""
          />
        </div>
        <div className="product-info">
          <p>Dining {">"} Chair</p>
          <h1>Odium Counter Stool</h1>
          <div className="rating mb-3">
            <FontAwesomeIcon className="marked" icon={faStar} />
            <FontAwesomeIcon className="marked" icon={faStar} />
            <FontAwesomeIcon className="marked" icon={faStar} />
            <FontAwesomeIcon className="marked" icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
          </div>
          <NavLink href="sdf" className="link d-inline p-0">
            <FontAwesomeIcon icon={faHeart} />
            <p className="ms-2 d-inline">Add To Wishlist</p>
          </NavLink>
          <hr />
          <p>
            Take casual dining to new heights with the Odium bar stool. Admire
            how the dark bronze-tone powder coat metal finish and planked
            looking back and seat reflect the popular rustic, industrial style.
            Decorative details include metal rivets and curved metal design. A
            convenient swivel feature also adjusts the seat height, perfect for
            flexibility.
          </p>
          <hr />
          <div className="d-flex align-items-center">
            <p className="offer-price">$199</p>
            <p className="reg-price ms-2">$240</p>
          </div>
          <div className="fs-3 d-flex gap-2 py-3">
            <p>QTY</p>
            <input type="number" className="quantity" name="" id="" min="1" />
            <input type="button" className="button round px-3" value="Add To Cart" />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ProductDetail;
