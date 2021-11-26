import { faHeart, faShoppingCart, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import {
  Container,
  Form,
  FormControl,
  Nav,
  Navbar,
  NavDropdown,
  Button,
  InputGroup,
} from "react-bootstrap";
import "./Header.css";

const Header = () => {
  return (
    <Navbar bg="light" expand="lg" sticky="top" className="header">
      <Container className="justify-content-between align-items-center">
        <Navbar.Brand href="#" className="me-5 fs-2 fw-bold">
          Crafteza.
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-between">
          <Nav
            className="my-2 my-lg-0 w-100 justify-content-between"
            style={{ maxHeight: "100px" }}
          >
            <div className="d-flex fs-5">
              <Nav.Link href="#action1">Home</Nav.Link>
              <NavDropdown title="Products">
                <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action4">
                  Another action
                </NavDropdown.Item>
              </NavDropdown>
            </div>
            <InputGroup className="w-50">
              <FormControl
                placeholder="Search Products"
                aria-label="search-products"
              />
              <Button variant="outline-secondary" id="button-addon2">
                Search
              </Button>
            </InputGroup>
            <div className="d-flex fs-4 my-auto">
              <FontAwesomeIcon className="me-3" icon={faShoppingCart} />
              <FontAwesomeIcon className="me-3" icon={faHeart} />
              <FontAwesomeIcon icon={faUser} />
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
