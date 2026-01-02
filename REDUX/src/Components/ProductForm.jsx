import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import { useDispatch } from 'react-redux';

const ProductForm = () => {

    const [product, setProduct] = useState({

        name:"",
        price:"",
        qty:10,
        category:"",
    })

    const dispatch = useDispatch();

    const handleChange = {identifier,e} =>{
        setProduct ((prev)=>{
            return {
                ...prev,
                [identifier]:e.target.value,
            };
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const productData = {
            id: new Date().getTime(),
            product,
        }
    }

    return (
        <>
            <Container className='border mt-5 p-5 shadow rounded'>
                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label className='fw-bold'>Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter Product Name" value={product.name} onChange={(e)=>handleChange("name",e)}/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label className='fw-bold'>Price</Form.Label>
                        <Form.Control type="number" placeholder="Enter Product Price" value={product.price} onChange={(e)=>handleChange("price",e)}/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label className='fw-bold'>Quantity</Form.Label>
                        <Form.Control type="number" placeholder="Enter Product Quantity" value={product.qty} onChange={(e)=>handleChange("qty",e)}/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label className='fw-bold'>category</Form.Label>
                        <Form.Control type="text" placeholder="Enter Product category" value={product.category} onChange={(e)=>handleChange("category",e)}/>
                    </Form.Group>
                    <Button type='submit'>add product</Button>
                </Form>
            </Container>
        </>
    )
}

export default ProductForm;
