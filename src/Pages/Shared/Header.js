import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import UseAuth from '../../Hooks/UseAuth';

const Header = () => {
  const {user, logOut} = UseAuth()
    return (
        <>
            <Navbar  sticky="top" bg="dark" variant="dark" expand="lg">
  <Container>
    <Navbar.Brand href="#home">Navbar with text</Navbar.Brand>
    <Navbar.Toggle />
    <Navbar.Collapse className="justify-content-end">
      <Nav.Link as={HashLink} to="/home#home">Home</Nav.Link>
      <Nav.Link as={HashLink} to="/home#services">services</Nav.Link>
      <Nav.Link as={HashLink} to="/home#doctors">Doctors</Nav.Link>
      <Nav.Link as={HashLink} to="/home#timetable">Timetable</Nav.Link>
      <Nav.Link as={HashLink} to="/home#about">About Us</Nav.Link>
      {user?.email? 
        <Button onClick={logOut} className='btn btn-dark'>LogOut</Button>:
        <Nav.Link as={Link} to="/login">Login</Nav.Link>}
      <Navbar.Text>
        Signed in as: <a href="#login">{user?.displayName}</a>
      </Navbar.Text>
    </Navbar.Collapse>
  </Container>
</Navbar>
        </>
    );
};

export default Header;