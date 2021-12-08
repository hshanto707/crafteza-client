import {
  faHeart,
  faSearch,
  faShoppingCart,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Badge } from "@mui/material";
import React from "react";
import {
  Container,
  FormControl,
  Nav,
  Navbar,
  NavDropdown,
  Button,
  InputGroup,
} from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <Navbar bg="light" expand="lg" sticky="top" className="header py-0">
      <Container className="justify-content-between align-items-center mt-0">
        <NavLink to="/" className="me-5 logo">
          Crafteza.
        </NavLink>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-between">
          <Nav
            className="my-2 my-lg-0 w-100 justify-content-between"
            style={{ maxHeight: "100px" }}
          >
            <div className="d-flex fs-5">
              <NavLink to="/all-products" className="nav-item dropdown">
                <span>Products</span>
                <div className="dropdown-content">
                  <NavLink to="/" className="nav-item">product 1</NavLink>
                  <NavLink to="/" className="nav-item">product 1</NavLink>
                  <NavLink to="/" className="nav-item">product 1</NavLink>
                  <NavLink to="/" className="nav-item">product 1</NavLink>
                  <NavLink to="/" className="nav-item">product 1</NavLink>
                </div>
              </NavLink>
            </div>
            <InputGroup className="w-50">
              <FormControl
                placeholder="Search Products"
                aria-label="search-products"
              />
              <Button variant="outline-secondary" className="px-3 button">
                <FontAwesomeIcon icon={faSearch} />
              </Button>
            </InputGroup>
            <div className="d-flex fs-4 my-auto">
              <Badge badgeContent={4} color="primary" className="me-4">
                <FontAwesomeIcon className="link" icon={faShoppingCart} />
              </Badge>
              <Badge badgeContent={4} color="primary" className="me-4">
                <FontAwesomeIcon className="link" icon={faHeart} />
              </Badge>
              <FontAwesomeIcon className="link" icon={faUser} />
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
