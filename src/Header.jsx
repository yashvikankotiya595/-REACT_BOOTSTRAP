import React from "react";
import "./Website.css";
// import Container from "react-bootstrap/Container";
import { IoPerson } from "react-icons/io5";
import { FaShoppingCart, FaSearch } from "react-icons/fa";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { TiThMenu } from "react-icons/ti";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";

const Header = () => {
  const [show, setShow] = useState(false);
  return (
    <div className="container">
      <header className="header_sec">
        <nav>
          <Row>
            <Col>
              <div className="logo">
                <img src="logo1.png" alt="" />
              </div>
            </Col>
            <Col xs={6}>
              <div className="menu">
                <ul>
                  <li>
                    <a href="">Home</a>
                  </li>
                  <li>
                    <a href="">menu</a>
                  </li>
                  <li>
                    <a href="">about</a>
                  </li>
                  <li>
                    <a href="">book table</a>
                  </li>

                  <li>
                    <a href="">Contact</a>
                  </li>
                </ul>
              </div>
            </Col>
            <Col>
              <div className="sec3">
                <div className="user_option">
                  <a href="">
                    <IoPerson />
                  </a>
                  <a href="">
                    <FaShoppingCart />
                  </a>
                  <a href="">
                    <FaSearch />
                  </a>
                </div>
                {/* <div className="order_online">
                  <a href="">Order Online</a>
                </div> */}
                <div className="menu-btn-col text-end">
                  <Button variant="outline-light" onClick={() => setShow(true)}>
                    ☰
                  </Button>
                </div>
              </div>
            </Col>
          </Row>
          <Offcanvas
            show={show}
            onHide={() => setShow(false)}
            placement="end"
            className="bg-dark"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title className="menu-color">Menu</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <ul className="mobile-menu">
                <li>
                  <a href="#">Home</a>
                </li>
                <li>
                  <a href="#">Menu</a>
                </li>
                <li>
                  <a href="#">About</a>
                </li>
                <li>
                  <a href="#">Book Table</a>
                </li>
                <li>
                  <a href="#">Contact</a>
                </li>
                <li>
                  <div className="mobile_user_option">
                    <a href="">
                      <IoPerson />
                    </a>
                    <a href="">
                      <FaShoppingCart />
                    </a>
                    <a href="">
                      <FaSearch />
                    </a>
                  </div>
                </li>
              </ul>
            </Offcanvas.Body>
          </Offcanvas>
        </nav>
      </header>
      <div className="sec1">
        <Row className="rw">
          <Col xs={12} md={6}>
            <div className="main">
              <div className="bite-text">
                <p>Bite of Happiness</p>
              </div>
              <div className="detail-box">
                <h1>Fast Food Restaurant</h1>
              </div>
              <div className="detail-text">
                <p>
                  Experience the perfect blend of taste and quality. Fresh
                  ingredients prepared with care in every dish. A warm and
                  welcoming atmosphere for all guests. Memorable moments served
                  with exceptional service.
                </p>
              </div>

              <div className="btn-box">
                <a href="">Order Now</a>
              </div>
            </div>
          </Col>
          <Col xs={12} md={6}>
            <div className="burger">
              <img
                src="https://dashofhoney.ca/wp-content/uploads/2024/08/Burgerbanhmi.jpg"
                alt=""
              />
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Header;
