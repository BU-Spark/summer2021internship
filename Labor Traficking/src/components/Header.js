import React from 'react'
import { LinkContainer } from 'react-router-bootstrap'
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap'

const Header = () => {
    return (
        <header>
            <Navbar bg="light" expand="lg" collapseOnSelect className="myFontColor">
                <Container>
                    <LinkContainer to='/'>
                        <Navbar.Brand>RESULT</Navbar.Brand>
                    </LinkContainer>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <NavDropdown title="Tools" id="basic-nav-dropdown">
                                <LinkContainer to='/Assess'>
                                    <NavDropdown.Item>Assess</NavDropdown.Item>
                                </LinkContainer>
                                <NavDropdown.Divider />
                                <LinkContainer to='/Prepare'>
                                    <NavDropdown.Item>Prepare</NavDropdown.Item>
                                </LinkContainer>
                                <NavDropdown.Divider />
                                <LinkContainer to='/Resources'>
                                    <NavDropdown.Item>Resources</NavDropdown.Item>
                                </LinkContainer>
                            </NavDropdown>
                            <LinkContainer to='/massLaw'>
                                <Nav.Link>Massachusetts Law</Nav.Link>
                            </LinkContainer>
                            <LinkContainer to='/aboutUs'>
                                <Nav.Link>About Us</Nav.Link>
                            </LinkContainer>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    )
}

export default Header
