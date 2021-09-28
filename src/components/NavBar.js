import React, { useContext } from "react";
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom'
import { AuthContext } from "../context/AuthContext";
import CustomButton from './CustomButton';

const NavBar = () => {
  const { loggedIn } = useContext(AuthContext)

  return (
    <Navbar className="navbar">
      <Container>
        <Navbar.Brand>
          <Link to="/">
            Think Easy
          </Link>
        </Navbar.Brand>
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
          { loggedIn ? (
            <Navbar.Text>
              <CustomButton title="Log Out" func={() => console.log("test")}/>
            </Navbar.Text>
          ) : (
            <Navbar.Text>
              <Link to="/login">Log In</Link>
            </Navbar.Text>
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
