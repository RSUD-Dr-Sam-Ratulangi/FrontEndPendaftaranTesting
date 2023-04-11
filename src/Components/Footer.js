import React from 'react';
import { Container } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer className="bg-black fixed-bottom">
      <Container>
        <p className="text-center text-white">
          &copy; {new Date().getFullYear()} Darkzill
        </p>
      </Container>
    </footer>
  );
};

export default Footer;
