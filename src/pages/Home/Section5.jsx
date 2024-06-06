import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const Section5 = () => {
  return (
    <>
      <section className="contact_section">
        <Container>
          <Row className="justify-content-center">
            <Col sm={8} className="text-center">
              <h4>We Guarantee</h4>
              <h2>30 Min Delivery</h2>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Voluptatibus, magnam?
              </p>

              <Link to="/" className="btn btn_red px-4 py-2 rounded-0">
                call:- 1800 000 222
              </Link>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Section5;
