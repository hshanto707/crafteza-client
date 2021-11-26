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
import "./Header.css";

const Header = () => {
  return (
    <Navbar bg="light" expand="lg" sticky="top" className="header py-0">
      <Container className="justify-content-between align-items-center">
        <Navbar.Brand href="#" className="me-5 logo">
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
              <Button variant="outline-secondary" className="px-3 button">
                <FontAwesomeIcon icon={faSearch} />
              </Button>
            </InputGroup>
            <div className="d-flex fs-4 my-auto">
              <Badge badgeContent={4} color="primary" className="me-4">
                <FontAwesomeIcon className="link" icon={faShoppingCart} />
              </Badge>
              <FontAwesomeIcon className="me-4 link" icon={faHeart} />
              <FontAwesomeIcon className="link" icon={faUser} />
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
