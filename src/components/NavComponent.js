import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Logo from '../assets/planet.png';

const NavComponent = () => (
  <div>
    <Navbar bg="light" className="spaceNav">
      <Container>
        <Navbar.Brand href="#home">
          <img src={Logo} alt="Planet Logo" height="40" />
          {' '}
          Space Travelers&apos; Hub
        </Navbar.Brand>
        <Nav className="align-item-right">
          <Link className="nav-link" to="/">Rockets</Link>
          <Link className="nav-link" to="/missions">Missions</Link>
          <Link className="nav-link last-link" to="/profile">My Profile</Link>
        </Nav>
      </Container>
    </Navbar>
  </div>
);

export default NavComponent;
