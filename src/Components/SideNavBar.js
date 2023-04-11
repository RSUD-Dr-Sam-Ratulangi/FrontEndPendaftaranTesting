import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsers } from '@fortawesome/free-solid-svg-icons';
import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom'; // import Link component

const SideNavBar = ({ mainWidth }) => {
  return (
    <Nav className="col-md-2 d-md-block bg-light sidebar collapse">
      <div className="sidebar-sticky">
        <Nav.Item className="mt-8">
          <Nav.Link as={Link} to="/Pendaftaran" className="sidebar-heading text-dark font-weight-bold">
            Pendaftaran Pasien
          </Nav.Link>
        </Nav.Item>
        
        <Nav.Item className="mt-8">
          <Nav.Link as={Link} to="/Pendaftaran" className="text-dark font-weight-bold">
            <FontAwesomeIcon icon={faUsers} className="mr-2" />
            Pendaftaran
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link as={Link} to="/PasienOlah" className="text-dark font-weight-bold">
            <FontAwesomeIcon icon={faUsers} className="mr-2" />
            Pasien
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link as={Link} to="/Pengaturan" className="text-dark font-weight-bold">
            <FontAwesomeIcon icon={faUsers} className="mr-2" />
            Pengaturan
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link as={Link} to="/Logout" className="text-dark font-weight-bold">
            <FontAwesomeIcon icon={faUsers} className="mr-2" />
            Logout
          </Nav.Link>
        </Nav.Item>
      </div>
    </Nav>
  );
};

export default SideNavBar;
