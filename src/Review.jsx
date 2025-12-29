import React from "react";
import "./Website.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { MdOutlineStarPurple500 } from "react-icons/md";
import { IoIosStarHalf } from "react-icons/io";

const Review = () => {
  return (
    <>
      <div className="sec5">
        <Container>
          <Row>
            <Col>
              <div className="rev-header">
                <div className="rev-subhead">
                  <h2>What our customers says</h2>

                  <p>
                    We take pride in serving our customers with the best
                    experience. Read what they say.
                  </p>
                </div>
              </div>
            </Col>
          </Row>

          <Row className="review">
            <Col xs={12} md={6}>
              <div className="rev-card">
                <div className="card-star">
                  <MdOutlineStarPurple500 />
                  <MdOutlineStarPurple500 />
                  <MdOutlineStarPurple500 />
                  <MdOutlineStarPurple500 />
                  <IoIosStarHalf />
                </div>

                <div className="rev-text">
                  <p>
                    the food was delicious, fresh, and full of rich flavors that
                    made every bite enjoyable. Great quality ingredients and
                    perfect taste make it worth trying again.
                  </p>
                </div>

                <div className="rev-pro">
                  <div className="rev-img">
                    <img src="rev1.png" alt="" />
                    <p>Emily Hunt</p>
                  </div>
                </div>
              </div>
            </Col>

            <Col>
              <div className="rev-card">
                <div className="card-star">
                  <MdOutlineStarPurple500 />
                  <MdOutlineStarPurple500 />
                  <MdOutlineStarPurple500 />
                  <MdOutlineStarPurple500 />
                  <IoIosStarHalf />
                </div>

                <div className="rev-text">
                  <p>
                    The food was incredibly delicious with rich and balanced
                    flavors. Fresh ingredients and perfect seasoning made every
                    dish stand out. A truly satisfying and memorable dining
                    experience.
                  </p>
                </div>

                <div className="rev-pro">
                  <div className="rev-img">
                    <img src="rev2.png" alt="" />
                    <p>Julie Robinson</p>
                  </div>
                </div>
              </div>
            </Col>
          </Row>

          <Row className="review">
            <Col xs={12} md={6}>
              <div className="rev-card">
                <div className="card-star">
                  <MdOutlineStarPurple500 />
                  <MdOutlineStarPurple500 />
                  <MdOutlineStarPurple500 />
                  <MdOutlineStarPurple500 />
                  <IoIosStarHalf />
                </div>

                <div className="rev-text">
                  <p>
                    The food quality was excellent with great attention to
                    detail. Flavors were well balanced and portions were
                    generous. Overall, it was a wonderful experience.
                  </p>
                </div>

                <div className="rev-pro">
                  <div className="rev-img">
                    <img src="rev3.png" alt="" />
                    <p>Sophia Brook</p>
                  </div>
                </div>
              </div>
            </Col>

            <Col>
              <div className="rev-card">
                <div className="card-star">
                  <MdOutlineStarPurple500 />
                  <MdOutlineStarPurple500 />
                  <MdOutlineStarPurple500 />
                  <MdOutlineStarPurple500 />
                  <IoIosStarHalf />
                </div>

                <div className="rev-text">
                  <p>
                    Delicious food made with fresh, high-quality ingredients.
                    The flavors were rich, comforting, and satisfying. An
                    enjoyable meal from start to finish.
                  </p>
                </div>

                <div className="rev-pro">
                  <div className="rev-img">
                    <img src="rev4.png" alt="" />
                    <p>James Brook</p>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Review;
