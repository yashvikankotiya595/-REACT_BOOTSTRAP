import React from "react";
import "./Website.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { FaInstagramSquare } from "react-icons/fa";
import { FaPinterestSquare } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { FaYoutubeSquare } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer-sec">
      <Container>
        <Row>
          <Col xs={12} md={5}>
            <div className="foot-text">
              <div className="logo">
                <img src="logo1.png" alt="" />
              </div>

              <p>
                For us, food is more than just a meal—it’s an experience. We use
                fresh ingredients and authentic flavors to deliver the best
                quality dishes. Every recipe is prepared with care, hygiene, and
                passion. Customer satisfaction is always our top priority. We
                are committed to making every moment delicious and memorable.
              </p>
            </div>
          </Col>

          <Col xs={12} md={7}>
            <div className="subscribe-form">
              <h3>Subscribe to our newsletter</h3>
              <div className="sub">
                <span className="current">Your Email</span>
              </div>
              <button>Subscribe</button>
            </div>

            <div className="social">
              <div className="social-item">
                <FaInstagramSquare className="icon" />
                <span className="icon-text">instagram</span>
              </div>

              <div className="social-item">
                <FaPinterestSquare className="icon" />
                <span className="icon-text">Pinterest</span>
              </div>

              <div className="social-item">
                <FaFacebookSquare className="icon" />
                <span className="icon-text">facebook</span>
              </div>

              <div className="social-item">
                <FaTwitterSquare className="icon" />
                <span className="icon-text">Twitter</span>
              </div>

              <div className="social-item">
                <FaYoutubeSquare className="icon" />
                <span className="icon-text">Youtube</span>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Footer;
