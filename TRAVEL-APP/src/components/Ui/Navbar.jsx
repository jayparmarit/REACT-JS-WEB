import { Container, Nav, Navbar} from 'react-bootstrap';
import {NavLink} from 'react-router-dom';

function Navigation() {
    return (
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
                <Navbar.Brand href="#home">Trvelo</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link href="#home" as={NavLink} to="/">Home</Nav.Link>
                        <Nav.Link href="#home" as={NavLink} to="trips">Trips</Nav.Link>
                        <Nav.Link href="#link">Destinations</Nav.Link>
                        <Nav.Link href="#link">About</Nav.Link>
                        <Nav.Link href="#link">Login</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Navigation;