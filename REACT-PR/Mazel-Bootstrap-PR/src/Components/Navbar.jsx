import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Image from 'react-bootstrap/Image';

function BasicExample() {
    return (
        <Navbar expand="lg" className="bg-body-tertiary p-0">
            <Container fluid style={{backgroundColor:" rgba(51, 51, 51, 0.9"}} className='p-2'>
                <Navbar.Brand href="#home" className='p-1 pe-4 ps-4 text-white fs-3 border ms-5'>MAZEL ONE</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="m-auto">
                        <Nav.Link href="#home" className='text-white me-5'>HOME</Nav.Link>
                        <Nav.Link href="#link" className='text-white me-5'>ABOUT</Nav.Link>
                        <Nav.Link href="#link" className='text-white me-5'>OUR TEAM</Nav.Link>
                        <Nav.Link href="#home" className='text-white me-5'>SERVICE</Nav.Link>
                        <Nav.Link href="#link" className='text-white me-5'>CLIENT</Nav.Link>
                        <Nav.Link href="#home" className='text-white me-5'>CONTACT</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default BasicExample;