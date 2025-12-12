import React, { useEffect, useState } from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

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
            <Container className='text-center pt-5 text-white'>
                  <h1 className='text-white fw-bold border-bottom pb-2'>Products</h1>
               <Row>
                   {Product.map((prod)=>(
                        <>
                            <Col md={3} className='mt-5 border p-2'>
                                <Image src={prod.image} className='w-100' style={{height:"300px", objectFit:"cover"}}></Image>
                                <p>Product Name:{prod.name}</p>
                                <p>Product Price:{prod.price}</p>
                                <p>Product Category:{prod.category}</p>
                                <p>Product Description:{prod.description}</p>
                            </Col>
                        </>
                   ))}
               </Row>
            </Container>
        </>
  )
}

export default Product;
