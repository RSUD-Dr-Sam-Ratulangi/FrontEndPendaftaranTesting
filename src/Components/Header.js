import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

const Header = () => {
  
  
  return (
    <Navbar  expand="md" className="header">
      <Navbar.Brand href="/" className="text-white font-weight-bold mr-auto flex-grow-10">Healthcare Center</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
      
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
