import React from "react";
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <Navbar className="navbar">
      <Container>
        <Navbar.Brand href="#home">Think Easy</Navbar.Brand>
        <Navbar.Toggle />
        <Nav>
          <Nav.Item>
            <Link to="/">
              Home
            </Link> 
          </Nav.Item>
          <Nav.Item>
            <Link to="/reserve">
              Reserve
            </Link>
          </Nav.Item>
        </Nav>
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            Signed in as: <a href="#login">Mark Otto</a>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
