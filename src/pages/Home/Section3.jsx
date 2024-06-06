import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import Cards from "../../components/Layouts/Cards";
import Image1 from "../../assets/menu/thali.png";
import Image2 from "../../assets/menu/sabudana.png";
import Image3 from "../../assets/menu/paratha.png";
import Image4 from "../../assets/menu/paneer.png";
import Image5 from "../../assets/menu/noodels.png";
import Image6 from "../../assets/menu/wrap.png";
import Image7 from "../../assets/menu/dal.png";
import Image8 from "../../assets/menu/burger-18.jpg";

const mockData = [
  {
    id: "0001",
    image: Image1,
    title: "Crispy Chicken",
    paragraph: "Chicken breast, chilli sauce, tomatoes, pickles, coleslaw",
    rating: 5,
    price: 99.15,
  },
  {
    id: "0002",
    image: Image2,
    title: "Sabudana Khichdi",
    paragraph: "House patty, cheddar cheese, bacon, onion, mustard",
    rating: 4.5,
    price: 129,
  },
  {
    id: "0003",
    image: Image3,
    title: "Black Sheep",
    paragraph: "American cheese, tomato relish, avocado, lettuce, red onion",
    rating: 4,
    price: 69.15,
  },
  {
    id: "0004",
    image: Image4,
    title: "Vegan Burger",
    paragraph: "House patty, cheddar cheese, bacon, onion, mustard",
    rating: 3.5,
    price: 99.25,
  },
  {
    id: "0005",
    image: Image5,
    title: "Double Burger",
    paragraph: "2 patties, cheddar cheese, mustard, pickles, tomatoes",
    rating: 3.0,
    price: 59.25,
  },
  {
    id: "0006",
    image: Image6,
    title: "Turkey Burger",
    paragraph: "Turkey, cheddar cheese, onion, lettuce, tomatoes, pickles",
    rating: 3,
    price: 79.18,
  },
  {
    id: "0007",
    image: Image7,
    title: "Smokey House",
    paragraph: "patty, cheddar cheese, onion, lettuce, tomatoes, pickles",
    rating: 2.5,
    price: 99.19,
  },
  {
    id: "0008",
    image: Image8,
    title: "Classic Burger",
    paragraph: "cheddar cheese, ketchup, mustard, pickles, onion",
    rating: 2.0,
    price: 89.12,
  },
];

let renderRatingIcons = (rating)=>{
let stars = []

for (let i=0; i<5; i++){
  if(rating>0.5){
    stars.push(<i key={i} className="bi bi-star-fill"></i>)
    rating--;
  } else if(rating > 0 && rating < 1){
    stars.push(<i key={"half"} className="bi bi-star-half"></i>)
    rating--;
  }else{
    stars.push(<i key={`empty${i}`} className="bi bi-star"></i>)
  }
}
return stars
}

const Section3 = () => {
  return (
    <>
      <section className="menu_section">
        <Container>
          <Row>
            <Col lg={{ span: 8, offset: 2 }} className="text-center mb-5">
              <h2>Our Cloud Kitchen Foods</h2>
              <p className="para">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et
                architecto minus ipsum at libero illo ab maxime! Quisquam iusto
                totam nisi illo ad amet laborum doloribus esse recusandae,
                reprehenderit qui!
              </p>
            </Col>
          </Row>
          <Row>
            {mockData.map((product, index) => {
              return (
                <Cards
                  key={index}
                  image={product.image}
                  rating={product.rating}
                  title={product.title}
                  paragraph={product.paragraph}
                  price={product.price}
                   renderRatingIcons = {renderRatingIcons}
                />
              );
            })}
          </Row>

          <Row className="pt-5">
            <Col sm={6} lg={5}>
              <div className="ads_box ads_img1 mb-5 mb-md-0">
                <h4 className="mb-0">Get Free</h4>
                <h5>Lorem ipsum dolor.</h5>
                <Link to="/" className="btn btn_red px-4 rounded-0">
                  Learn More
                </Link>
              </div>
            </Col>

            <Col sm={6} lg={7}>
              <div className="ads_box ads_img2">
                <h4 className="mb-0">Get Free</h4>
                <h5>Lorem ipsum dolor.</h5>
                <Link to="/" className="btn btn_red px-4 rounded-0">
                  Learn More
                </Link>
              </div>
            </Col>

          </Row>
        </Container>
      </section>
    </>
  );
};

export default Section3;
