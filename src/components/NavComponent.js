import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Logo from '../assets/planet.png';

const NavComponent = () => (
  <div>
    <Navbar bg="light" variant="light">
      <Container>
        <Navbar.Brand href="#home">
          <img src={Logo} alt="Planet Logo" height="40" />
          {' '}
          Space Travelers&apos; Hub
        </Navbar.Brand>
        <Nav className="align-item-right">
          <Nav.Link>
            <Link to="/">Rockets</Link>
          </Nav.Link>
          <Nav.Link>
            <Link to="/missions">Missions</Link>
          </Nav.Link>
          <Nav.Link>
            <Link to="/profile">My Profile</Link>
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  </div>
);

export default NavComponent;
