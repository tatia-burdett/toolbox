import React from "react"

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Navbar from 'react-bootstrap/Navbar';

function NavBar() {

    return (
        <div className="App">
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" fixed="top">
                <Container fluid>
                    <Navbar.Brand href="#home">Toolbox</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                            <NavDropdown.Item href="">API - Client</NavDropdown.Item>
                            <NavDropdown.Item href="">API - Server</NavDropdown.Item>
                            <NavDropdown.Item href="">More options...</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
         </div>
    )
}

export default NavBar