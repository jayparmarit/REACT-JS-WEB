import React, { useEffect, useState } from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';
import Navbar from './Navbar';

const Product = () => {


    const [Product,setProduct] = useState([]);

    useEffect(()=>{
        const ProductData = async () => {
            try {
                const res = await fetch("http://localhost:3000/Product")

                const Data = await res.json()

                setProduct(Data) 
            }catch(error){
                console.log(error)
            }
        }
        ProductData()
    })

  return (
        <>
        <Navbar/>
            <Container className='text-center pt-5 text-white mt-4' >
                  <h1 className='text-white fw-bold border-bottom pb-2'>Products</h1>
               <Row>
                   {Product.map((prod)=>(
                        <>
                            <Col md={3} className='mt-5 border p-2'>
                                <Image src={prod.image} className='w-100' style={{height:"300px", objectFit:"cover"}}></Image>
                                <p className='fw-bold'>{prod.name}</p>
                                <p>{prod.description}</p>
                                <p>₹{prod.price}</p>
                                <Button variant="info"> add to cart</Button>
                            </Col>
                        </>
                   ))}
               </Row>
            </Container>
        </>
  )
}

export default Product;
