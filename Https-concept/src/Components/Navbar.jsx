import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import Badge from 'react-bootstrap/Badge';


function BasicExample() {
  return (
    <Navbar expand="lg" className="bg-dark" fixed="top" >
      <Container>
        <Navbar.Brand href="#home" className='fw-bold text-white'>Urban-Cart</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <div className="d-flex gap-2">
                <Button variant="info" className='text-white'>Cart &nbsp;<Badge bg="secondary">0</Badge></Button>
                <Button variant="info" className='text-white'>Your Order</Button>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicExample;