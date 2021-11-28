import React from "react";
import { Container } from "react-bootstrap";
import { NavLink } from "react-router-dom"
import "./Categories.css";

const Categories = () => {
  return (
    <Container style={{margin: '100px auto'}}>
      <h2 className="text-center mb-5 fw-bold">Shop By Categories</h2>
      <div className="category-container">
        <NavLink to="/sdf">
        <div className="category">
          <h4 className="text-white">Bedroom</h4>
          <img src="https://i.imgur.com/2Mzr5F7.png" alt="" />
          <div className="overlay"></div>
        </div>
        </NavLink>
        <NavLink to="/sdf">
        <div className="category">
          <h4 className="text-white">Livingroom</h4>
          <img src="https://i.imgur.com/ICbMNfR.png" alt="" />
          <div className="overlay"></div>
        </div></NavLink>
        <NavLink to="/sdf">
        <div className="category">
          <h4 className="text-white">Dinningroom</h4>
          <img src="https://i.imgur.com/RxfgDm6.png" alt="" />
          <div className="overlay"></div>
        </div></NavLink>
        <NavLink to="/sdf">
        <div className="category">
          <h4 className="text-white">Reading Room</h4>
          <img src="https://i.imgur.com/sCVnPKx.png" alt="" />
          <div className="overlay"></div>
        </div></NavLink>
        <NavLink to="/sdf">
        <div className="category">
          <h4 className="text-white">Kitchen</h4>
          <img src="https://i.imgur.com/TMNlIwj.png" alt="" />
          <div className="overlay"></div>
        </div></NavLink>
        <NavLink to="/sdf">
        <div className="category">
          <h4 className="text-white">Office</h4>
          <img src="https://i.imgur.com/dgeRsCg.png" alt="" />
          <div className="overlay"></div>
        </div></NavLink>
        <NavLink to="/sdf">
        <div className="category">
          <h4 className="text-white">Outdoor</h4>
          <img src="https://i.imgur.com/X8geNUs.png" alt="" />
          <div className="overlay"></div>
        </div></NavLink>
        <NavLink to="/sdf">
        <div className="category">
          <h4 className="text-white">Decor</h4>
          <img src="https://i.imgur.com/eyzEMuC.png" alt="" />
          <div className="overlay"></div>
        </div></NavLink>
      </div>
    </Container>
  );
};

export default Categories;
