import React from "react";
import "./Website.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Philosophy = () => {
  return (
    <>
      <div className="sec6">
        <Container>
          <div className="food-header">
            <div className="food-subhead">
              <h2>Our Food Philosophy</h2>
            </div>
          </div>

          <Row className="sec6-main">
            <Col xs={12} md={6}>
              <div className="food-img">
                {/* <img src="food1.png" alt="" className="food1" /> */}
                <img src="food2.png" alt="" className="food2" />
              </div>
            </Col>
            <Col>
              <div className="food-info">
                <p>
                  We believe great food starts with fresh, high-quality
                  ingredients sourced responsibly. Every dish is prepared with
                  care, balancing taste, nutrition, and authenticity. We focus
                  on clean cooking methods that preserve natural flavors and
                  goodness. Consistency, hygiene, and passion guide everything
                  we create in our kitchen. Our goal is to serve food that feels
                  comforting, wholesome, and truly satisfying. Our food
                  philosophy is rooted in freshness, quality, and authenticity.
                  We carefully select the finest ingredients to create flavors
                  that are both wholesome and delicious.
                </p>

                <div className="learn">
                  <span>Learn More</span>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Philosophy;
