import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      <footer>
        <Container>
          <Row>
            <Col sm={6} lg={3} className="mb-4 mb-lg-0">
              <div className="text-center">
                <h5>Location</h5>
                <p>Bargi Hills </p>
                <p>Near IT Park</p>
                <p>India</p>
              </div>
            </Col>
            <Col sm={6} lg={3} className="mb-4 mb-lg-0">
              <div className="text-center">
                <h5>Location</h5>
                <p>Bargi Hills </p>
                <p>Near IT Park</p>
                <p>India</p>
              </div>
            </Col>
            <Col sm={6} lg={3} className="mb-4 mb-lg-0">
              <div className="text-center">
                <h5>Order Now</h5>
                <p>Lorem ipsum dolor sit amet. </p>
                <p>
                  <Link to="tel:909090909" className="calling">
                    1800 180 555
                  </Link>
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </footer>
    </>
  );
}

export default Footer;
