import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Accordion from "react-bootstrap/Accordion";
import Image from 'react-bootstrap/Image';
import pic1 from '../image/pic1.png';

const Skills = () => {
  return (
    <>
      <Container className="mt-5 pt-5 p-2">
        <Row>
          <h2 className="mb-4 fs-1 fw-bold text-center">
            SKILLS
            <span className="fs-3 text-secondary ms-3">&</span>
            <span className="ms-3 fs-1 fw-bold text-center">HISTORY</span>
          </h2>

          <Col md={6} className="border mt-5">
          <div>
            <Accordion defaultActiveKey="0" flush>
              <Accordion.Item eventKey="0">
                <Accordion.Header>JAN 14, 2008 (OPENING)</Accordion.Header>
                <Accordion.Body>
                  Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur vel illum qui dolorem eum fugiat quo.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header>FEB 18, 2011 (THE BEST COMPANY OF THE YEAR)</Accordion.Header>
                <Accordion.Body>
                  Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur vel illum qui dolorem eum fugiat quo.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="2">
                <Accordion.Header>APR 6, 2013 (OPENING)</Accordion.Header>
                <Accordion.Body>
                  Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur vel illum qui dolorem eum fugiat quo.
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </div>
        </Col>
        <Col md={6} className="mt-5">
           <div>
                <Image src={pic1}>

                </Image>
           </div>
        </Col>
        </Row>
        
      </Container>
    </>
  );
};

export default Skills;
