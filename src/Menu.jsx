import React from "react";
import "./Website.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Menu = () => {
  return (
    <>
      <Container>
        <div className="sec4">
          <div className="sec4-heading">
            <div className="menu">
              <h1>Our menu</h1>
            </div>
          </div>

          <Row>
            <Col lg={3} md={6} sm={12}>
              <div className="menu-item">
                <div className="menu-img">
                  <img src="menu1.png" alt="" />
                </div>

                <div className="menu-text">
                  <h4>Alfredo</h4>
                  {/* <p>
                    Creamy, cheesy Alfredo sauce tossed with perfectly cooked
                    pasta
                  </p> */}
                  <span>350/-</span>
                </div>
              </div>
            </Col>
            <Col lg={3} md={6} sm={12}>
              <div className="menu-item">
                <div className="menu-img">
                  <img src="menu2.png" alt="" />
                </div>

                <div className="menu-text">
                  <h4>lasagna</h4>
                  {/* <p>
                    Layered pasta with rich sauce and melted cheese perfection
                  </p> */}
                  <span>390/-</span>
                </div>
              </div>
            </Col>
            <Col lg={3} md={6} sm={12}>
              <div className="menu-item">
                <div className="menu-img">
                  <img src="menu3.png" alt="" />
                </div>

                <div className="menu-text">
                  <h4>tacos</h4>
                  {/* <p>
                    Crispy tacos filled with spicy goodness and fresh toppings
                  </p> */}
                  <span>250/-</span>
                </div>
              </div>
            </Col>
            <Col lg={3} md={6} sm={12}>
              <div className="menu-item">
                <div className="menu-img">
                  <img src="menu4.png" alt="" />
                </div>

                <div className="menu-text">
                  <h4> Quesadillas</h4>
                  {/* <p>
                    Grilled tortillas stuffed with cheese, veggies, and bold
                    flavors
                  </p> */}
                  <span>290/-</span>
                </div>
              </div>
            </Col>
            <Col lg={3} md={6} sm={12}>
              <div className="menu-item">
                <div className="menu-img">
                  <img src="menu5.png" alt="" />
                </div>

                <div className="menu-text">
                  <h4> manchurian</h4>
                  {/* <p>
                    Crispy vegetable balls tossed in spicy, tangy Manchurian
                    sauce
                  </p> */}
                  <span>300/-</span>
                </div>
              </div>
            </Col>
            <Col lg={3} md={6} sm={12}>
              <div className="menu-item">
                <div className="menu-img">
                  <img src="menu6.png" alt="" />
                </div>

                <div className="menu-text">
                  <h4> noodles</h4>
                  {/* <p>
                    Stir-fried noodles tossed with vegetables and savory Asian
                    flavors
                  </p> */}
                  <span>200/-</span>
                </div>
              </div>
            </Col>
            <Col lg={3} md={6} sm={12}>
              <div className="menu-item">
                <div className="menu-img">
                  <img src="menu7.png" alt="" />
                </div>

                <div className="menu-text">
                  <h4> coffee </h4>
                  {/* <p>Freshly brewed coffee with rich aroma and bold flavor</p> */}
                  <span>250/-</span>
                </div>
              </div>
            </Col>
            <Col lg={3} md={6} sm={12}>
              <div className="menu-item">
                <div className="menu-img">
                  <img src="menu8.png" alt="" />
                </div>

                <div className="menu-text">
                  <h4> mocktail </h4>
                  {/* <p>
                    Refreshing mocktail blended with fruits, herbs, and
                    sparkling fizz
                  </p> */}
                  <span>250/-</span>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </>
  );
};

export default Menu;
