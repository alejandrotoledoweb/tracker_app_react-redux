import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

import Container from 'react-bootstrap/Container';

const NavbarMenu = () => {
  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand>
            <Link to="/" className="nav-link text-white">
              ExcerTracker
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Link to="/" className="nav-link ">
                Exercises
              </Link>
              <Link to="/create" className="nav-link">
                Create Exercise Log
              </Link>
              <Link to="/user" className="nav-link">
                Create User
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
    // <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
    //   <button
    //     class="navbar-toggler"
    //     type="button"
    //     data-toggle="collapse"
    //     data-target="#navbarSupportedContent"
    //     aria-controls="navbarSupportedContent"
    //     aria-expanded="false"
    //     aria-label="Toggle navigation"
    //   >
    //     <span class="navbar-toggler-icon"></span>
    //   </button>
    //   <Link to="/" className="navbar-brand">
    //     ExcerTracker
    //   </Link>
    //   <div className="collapse navbar-collapse">
    //     <ul className="navbar-nav mr-auto">
    //       <li className="navbar-item">
    //         <Link to="/" className="nav-link">
    //           Exercises
    //         </Link>
    //       </li>
    //       <li className="navbar-item">
    //         <Link to="/create" className="nav-link">
    //           Create Exercise Log
    //         </Link>
    //       </li>
    //       <li className="navbar-item">
    //         <Link to="/user" className="nav-link">
    //           Create User
    //         </Link>
    //       </li>
    //     </ul>
    //   </div>
    // </nav>
  );
};

export default NavbarMenu;
