import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';

const ProductForm = () => {
    return (
        <>
            <Container className='border mt-5 p-5 shadow rounded'>
                <Form>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label className='fw-bold'>Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter Product Name" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label className='fw-bold'>Price</Form.Label>
                        <Form.Control type="number" placeholder="Enter Product Price" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label className='fw-bold'>Quantity</Form.Label>
                        <Form.Control type="number" placeholder="Enter Product Quantity" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label className='fw-bold'>category</Form.Label>
                        <Form.Control type="text" placeholder="Enter Product category" />
                    </Form.Group>
                </Form>
            </Container>
        </>
    )
}

export default ProductForm;
