// import React from 'react'
import React, { useState } from "react";
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';




const ReviewForm = () =>

    {

        const [input, setInput] = useState({
            name: "",
            description: "",
            completed: false,
        });


        const handleReviewData = (identifier, e) => {
            setInput((prev) => {
                return {
                    ...prev,
                    [identifier]: e.target.value,
                };
            });
        };


        const handleSubmit = (e) => {
            e.preventDefault();
            // addReview(input);

              console.log("data", input);
            setInput({ name: "", description: "", completed: false });

          
        };


        return (
            <>
                <Container className='border mt-5 p-5 w-25 bg-secondary'>
                    <h1 className='border-bottom text-center mb-5 pb-2 fw-bold text-white'>Review Project</h1>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group className="mb-4" controlId="exampleForm.ControlInput1">
                            <Form.Label className='border-bottom text-white'>Your name</Form.Label>
                            <Form.Control type="name" placeholder="Enter your name" className='w-100' onChange={(e) => handleReviewData("name", e)} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                            <Form.Label className='border-bottom text-white'>Description</Form.Label>
                            <Form.Control as="textarea" rows={3} className='w-100' onChange={(e) => handleReviewData("description", e)} />
                        </Form.Group>
                        <Form.Group className="mb-4" controlId="exampleForm.ControlInput1">
                            <Form.Label className='border-bottom text-white'>Rating</Form.Label>
                            <Form.Control type="number" placeholder="Give Rating" className='w-100' />
                        </Form.Group>
                        <Button variant="success" type="submit">Submit</Button>
                    </Form>
                </Container>
            </>
        )
    };

    export default ReviewForm;