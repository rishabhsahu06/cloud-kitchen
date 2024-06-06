import React from "react";
import { Container, Row, Col } from "react-bootstrap";
// import Burger from "../../assets/hero/hero-2.png";
import { Link } from "react-router-dom";

const Section1 = () => {
  return (
    <section className="hero_section">
      <Container>
        <Row>
          <Col lg={7} className="mb-5 mb-lg-0">
            <div className="position-relative">
              {/* <img src={Burger} className="img-fluid" alt="Hero" /> */}
              {/* <div className="price_badge">
                <div className="badge_text">
                  <h4 className="h4_xs">Only</h4>
                  <h4 className="h4_xs">$78</h4>
                </div>
              </div> */}
            </div>
          </Col>

          <Col lg={5}>
            <div className="hero_text text-center">
              <h1 className="text-white">Tasty Foods</h1>
              <h2 className="text-white">Delivery</h2>
              <p className="text-white pt-2 pb-4">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad
                quia est temporibus quos commodi, aperiam autem repudiandae
                aliquid nam voluptatem expedita deserunt dolorum doloribus,
                quaerat facere, sunt tempore impedit eum?
              </p>
              <Link to="/" className="btn order_now">Order Now</Link>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Section1;
