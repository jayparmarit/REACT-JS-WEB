import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

const About = () => {
  return (
    <Container className='mt-5 p-4 pb-5 pt-5'>
            <Row>
                <Col md={6}>
                    <Image src='https://theme.nileforest.com/html/mazel-v3.1/03_mazel_onepage/img/mockup03.png'></Image>
                </Col>
                <Col md={6}>
                   <div className='text-center'> 
                        <h6 className='text-warning mb-3'>Creative Agency</h6>
                        <h2 className='mb-4 fs-1 fw-bold'>MAZEL 
                            <span className='fs-3 text-secondary ms-3'>ONE</span>
                        </h2>
                        <p className='text-secondary mb-4'>Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur vel illum qui dolorem eum fugiat quo reprehenderit qui in dignissim qui blandit ea voluptate velit esse quam suscipit lobortis nisldolore eu feugiat praesent luptatum nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril.</p>
                        <img src="https://theme.nileforest.com/html/mazel-v3.1/03_mazel_onepage/img/signature.png" alt="" />
                   </div>
                </Col>
            </Row>
    </Container>
  )
}

export default About