import React from "react";
import { Container, Row, Col, Carousel } from "react-bootstrap";
import { Link } from "react-router-dom";
import StoreIOS from "../../assets/shop/appstore.png";
import storeGoogle from "../../assets/shop/googleplay.png";
import DownloadImage from "../../assets/shop/e-shop.png";
import Brand1 from "../../assets/brands/badkul.jpg"
import Brand2 from "../../assets/brands/samrat.jpg"
import Brand3 from "../../assets/brands/brand-13.png"
import Brand4 from "../../assets/brands/brand-14.png"
import Brand5 from "../../assets/brands/brand-15.png"
import Brand6 from "../../assets/brands/brand-16.png"
import Brand7 from "../../assets/brands/brand-17.png"
import Brand8 from "../../assets/brands/brand-18.png"


const Section4 = () => {
  return (
    <>
      <section className="shop_section">
        <Container>
          <Row className="align-items-center">
            <Col lg={6} className="text-center text-lg-start mb-5 mb-lg-0">
              <h4>Lorem ipsum dolor sit amet.</h4>
              <h2>save upto 20%</h2>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Accusamus, architecto?
              </p>
              <Link to="/">
                <img src={StoreIOS} alt="ios" className="img-fluid store me-3" />
              </Link>
              <Link to="/">
                <img
                  src={storeGoogle}
                  alt="android"
                  className="img-fluid store me-3"
                />
              </Link>
            </Col>
            <Col lg={6}>
              <img src={DownloadImage} alt="shop" className="img-fluid" />
            </Col>
          </Row>
        </Container>
      </section>

      <section className="brand_section">
        <Container>
          <Row>
            <Carousel>
              <Carousel.Item>
                <Carousel.Caption>
                  <div className="d-flex align-items-center justify-content-between">
                    <div className="brand_img">
                      <img src={Brand1} alt="brand" className="img-fluid" />
                    </div>

                    <div className="brand_img">
                      <img src={Brand2} alt="brand" className="img-fluid" />
                    </div>

                    <div className="brand_img">
                      <img src={Brand3} alt="brand" className="img-fluid" />
                    </div>

                    <div className="brand_img">
                      <img src={Brand4} alt="brand" className="img-fluid" />
                    </div>

                    <div className="brand_img">
                      <img src={Brand5} alt="brand" className="img-fluid" />
                    </div>

                    <div className="brand_img">
                      <img src={Brand6} alt="brand" className="img-fluid" />
                    </div>
                  </div>
                </Carousel.Caption>
              </Carousel.Item>


              <Carousel.Item>
                <Carousel.Caption>
                  <div className="d-flex align-items-center justify-content-between">
                    <div className="brand_img">
                      <img src={Brand3} alt="brand" className="img-fluid" />
                    </div>

                    <div className="brand_img">
                      <img src={Brand4} alt="brand" className="img-fluid" />
                    </div>

                    <div className="brand_img">
                      <img src={Brand5} alt="brand" className="img-fluid" />
                    </div>

                    <div className="brand_img">
                      <img src={Brand6} alt="brand" className="img-fluid" />
                    </div>

                    <div className="brand_img">
                      <img src={Brand7} alt="brand" className="img-fluid" />
                    </div>

                    <div className="brand_img">
                      <img src={Brand8} alt="brand" className="img-fluid" />
                    </div>
                  </div>
                </Carousel.Caption>
              </Carousel.Item>
              {/* <Carousel.Item>
        <img
          className="d-block w-100"
          src="holder.js/800x400?text=Second slide&bg=eee"
          alt="Second slide"
        />
        <Carousel.Caption>
          <h5>Second slide label</h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item> */}
              {/* <Carousel.Item>
        <img
          className="d-block w-100"
          src="holder.js/800x400?text=Third slide&bg=e5e5e5"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h5>Third slide label</h5>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item> */}
            </Carousel>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Section4;
