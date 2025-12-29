import React from "react";
import "./Website.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Today_special = () => {
  return (
    <>
      <div className="sec3-img">
        <div className="image">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRA4jMUVm_uUGuKF6rYzmuThT58WTqHf8Yuew&s"
            alt=""
          />
        </div>

        <div className="container">
          <div className="sec3">
            <div className="gallary-text">
              <h2> Today's Special </h2>
            </div>

            <Row>
              <Col  lg={4} md={12} sm={12} xs={12}>
                <div className="gallary-img1">
                  <div className="simg">
                    <img
                      src="https://themewagon.github.io/food-funday/images/special-menu-1.jpg"
                      alt=""
                    />
                  </div>

                  <div className="img-hov">
                    <div className="img-info">
                      <h4>SALMON STEAK</h4>
                      <p>
                        Perfectly grilled salmon steak, tender inside and packed
                        with bold, savory taste.
                      </p>
                    </div>
                  </div>
                </div>
              </Col>
              <Col  lg={4} md={12} sm={12} xs={12}>
                <div className="gallary-img2">
                  <div className="iimg">
                    <img
                      src="https://themewagon.github.io/food-funday/images/special-menu-2.jpg"
                      alt=""
                    />
                  </div>

                  <div className="img-hov">
                    <div className="img-info">
                      <h4>ITALIAN PIZZA</h4>
                      <p>
                        Authentic Italian pizza baked to perfection with fresh
                        dough, rich sauce, and premium cheese.
                      </p>
                    </div>
                  </div>
                </div>
              </Col>
              <Col lg={4} md={12} sm={12} xs={12}>
                <div className="gallary-img3">
                  <div className="vimg">
                    <img
                      src="https://themewagon.github.io/food-funday/images/special-menu-3.jpg"
                      alt=""
                    />
                  </div>

                  <div className="img-hov">
                    <div className="img-info">
                      <h4>VEG. ROLL</h4>
                      <p>
                        Crispy veg roll filled with fresh vegetables and
                        perfectly seasoned flavors.
                      </p>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
        </div>
      </div>
    </>
  );
};

export default Today_special;
