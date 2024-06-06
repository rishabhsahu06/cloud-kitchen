import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

import Pizza from "../../assets/about/pizza.png";
import Salad from "../../assets/about/salad.png";
import Delivery from "../../assets/about/delivery-bike.png";

const mockData = [
  {
    image: Pizza,
    title: "Original",
    paragraph: `Porta semper lacus cursus, feugiat primis ultrice a ligula risus auctor an tempus feugiat dolor lacinia cubilia curae integer orci congue and metus integer primis in integer metus`,
  },
  {
    image: Salad,
    title: "Qualty Foods",
    paragraph: `Porta semper lacus cursus, feugiat primis ultrice a ligula risus auctor an tempus feugiat dolor lacinia cubilia curae integer orci congue and metus integer primis in integer metus`,
  },
  {
    image: Delivery,
    title: "Fastest Delivery",
    paragraph: `Porta semper lacus cursus, feugiat primis ultrice a ligula risus auctor an tempus feugiat dolor lacinia cubilia curae integer orci congue and metus integer primis in integer metus`,
  },
];
const Section2 = () => {
  return (
    <>
      <section className="about_section">
        <Container>
          <Row>
            <Col lg={{ span: 8, offset: 2 }} className="text-center">
              <h2>Lorem ipsum dolor sit amet.</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio
                fuga rem cumque totam. Cumque vitae quod at, vero, voluptatum ea
                et veniam asperiores iusto distinctio accusantium suscipit minus
                ullam possimus.
              </p>
              <Link to="/" className="btn order_now btn_red">Explore Menu</Link>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="about_wrapper">
        <Container>
          <Row className="justify-content-md-center">
            {mockData.map((product, index) => (
              <Col md={6} lg={4} className="mb-4 mb-md-0" key={index}>
                <div className="about_box text-center">
                  <div className="about_icon">
                    <img src={product.image} alt="icon" className="img-fluid" />
                  </div>
                  <h4>{product.title}</h4>
                  <p>{product.paragraph}</p>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Section2;
