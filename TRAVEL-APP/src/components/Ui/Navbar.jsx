import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { MdTravelExplore } from "react-icons/md";

function Navigation() {
    return (
        <Navbar expand="lg" className="bg-body-secondary">
            <Container className='shadow'>
                <Navbar.Brand href="#home "><h1>
                    <MdTravelExplore />Travelo
                </h1></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <h6 className='d-flex'>
                            <Nav.Link href="#home" as={NavLink} to="/">Home</Nav.Link>
                            <Nav.Link href="#home" as={NavLink} to="trips">Trips</Nav.Link>
                            <Nav.Link href="#link">Destinations</Nav.Link>
                            <Nav.Link href="#link">About</Nav.Link>
                            <Nav.Link href="#link">Login</Nav.Link>
                        </h6>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Navigation;