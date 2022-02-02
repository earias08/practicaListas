import React from 'react';
import { Navbar,Nav,Container } from 'react-bootstrap';
import { NavLink, Link} from "react-router-dom";

const Navigation = () => {
    return (
        <Navbar bg="primary" variant="dark" expand='lg' >
        <Container>
            <Link to='/' className='navbar-brand'>Lista tareas</Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              {/* <Nav.Link href="#home">Inicio</Nav.Link>
              <Nav.Link href="#link">Administrar Tareas</Nav.Link> */}
              <NavLink to='/' className='nav-link'>Inicio</NavLink>
              <NavLink to='/tareas' className='nav-link'>Administrar Tareas</NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
};

export default Navigation;