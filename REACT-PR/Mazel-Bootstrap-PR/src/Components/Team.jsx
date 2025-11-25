import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";

const Team = () => {
  return (
    <>
      <Container className="mt-5 pt-5 p-2">
        <Row>
            <h2 className="mb-4 fs-1 fw-bold text-center">
                OUR
                <span className="fs-3 text-secondary ms-3">TEAM</span>
            </h2>
          <Col md={3} className="mt-5">
                <div className="">
                <img
                    src="https://theme.nileforest.com/html/mazel-v3.1/03_mazel_onepage/img/team/01.jpg"
                    className="w-100"
                    alt=""
                />
                <h6 className="text-center mt-2">MICHELL KAPPOS</h6>
                <p className="text-center text-secondary">(Graphic Designer)</p>
                </div>
          </Col>
          <Col md={3} className="mt-5">
                <div className="">
                <img
                    src="https://theme.nileforest.com/html/mazel-v3.1/03_mazel_onepage/img/team/03.jpg"
                    className="w-100"
                    alt=""
                />
                <h6 className="text-center mt-2">MICHELL KAPPOS</h6>
                <p className="text-center text-secondary">(Graphic Designer)</p>
                </div>
          </Col>
          <Col md={3} className="mt-5">
                <div className="">
                <img
                    src="https://theme.nileforest.com/html/mazel-v3.1/03_mazel_onepage/img/team/07.jpg"
                    className="w-100"
                    alt=""
                />
                <h6 className="text-center mt-2">MICHELL KAPPOS</h6>
                <p className="text-center text-secondary">(Graphic Designer)</p>
                </div>
          </Col>
          <Col md={3} className="mt-5">
                <div className="">
                <img
                    src="https://theme.nileforest.com/html/mazel-v3.1/03_mazel_onepage/img/team/04.jpg"
                    className="w-100"
                    alt=""
                />
                <h6 className="text-center mt-2">MICHELL KAPPOS</h6>
                <p className="text-center text-secondary">(Graphic Designer)</p>
                </div>
          </Col>
          
        </Row>
      </Container>
    </>
  );
};

export default Team;
