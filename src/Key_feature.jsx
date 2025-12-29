import React from "react";
import "./Website.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { PiChefHatLight, PiMedalLight } from "react-icons/pi";
import { FaUtensils } from "react-icons/fa";
import { TbMeat, TbTruckDelivery } from "react-icons/tb";
import { LuBeef } from "react-icons/lu";
import Section3 from "./Today_special";

const Key_feature = () => {
  return (
    <Container>
      <div className="section-header">
        <p>Why Choose Us</p>
        <h2>Our Key Features</h2>
      </div>
      <Row>
        <Col xs={12} lg={4} md={6}>
          <div className="feature-item">
            <div className="item">
              <div className="icon">
                <PiChefHatLight />
              </div>
              <h3>World’s best Chef</h3>
              <p>
                Led by the world’s best chef, our kitchen blends passion with
                perfection. Every dish reflects mastery of flavor and technique.
                An unforgettable culinary experience awaits you.Experience food
                that truly stands out.
              </p>
            </div>
          </div>
        </Col>
        <Col xs={12} lg={4} md={6}>
          <div className="feature-item">
            <div className="item">
              <div className="icon">
                <FaUtensils />
              </div>
              <h3>Natural ingredients</h3>
              <p>
                Our dishes are made using **natural ingredients**, carefully
                sourced for freshness. We avoid artificial additives
                to keep flavors authentic and healthy.Our food is prepared with
                100% natural ingredients.
              </p>
            </div>
          </div>
        </Col>
        <Col xs={12} lg={4} md={6}>
          <div className="feature-item">
            <div className="item">
              <div className="icon">
                <TbTruckDelivery />
              </div>
              <h3>Fastest door delivery</h3>
              <p>
                We provide the fastest door delivery, ensuring your food reaches
                you hot and fresh. Our quick and reliable service saves your
                time without compromising quality. Customer satisfaction.
              </p>
            </div>
          </div>
        </Col>
     
        <Col xs={12} lg={4} md={6}>
          <div className="feature-item">
            <div className="item">
              <div className="icon">
                <PiMedalLight />
              </div>
              <h3>Best quality products</h3>
              <p>
                We use only best quality products, carefully selected to meet
                high standards. Each ingredient is chosen for freshness, taste,
                and reliability. Quality is at the heart of everything we serve.
              </p>
            </div>
          </div>
        </Col>
        <Col xs={12} lg={4} md={6}>
          <div className="feature-item">
            <div className="item">
              <div className="icon">
                <TbMeat />
              </div>
              <h3>Fresh vegetables</h3>
              <p>
                We use fresh vegetables and meat, sourced daily from trusted
                suppliers. Natural freshness helps preserve flavor and
                nutrition. This ensures healthy, tasty, and high-quality meals
                every time.
              </p>
            </div>
          </div>
        </Col>
        <Col xs={12} lg={4} md={6}>
          <div className="feature-item">
            <div className="item">
              <div className="icon">
                <LuBeef />
              </div>
              <h3>Ground beef & Low fat</h3>
              <p>
                We use only best quality products, carefully selected to meet
                high standards. Each ingredient is chosen for freshness and
                superior taste. Quality and consistency are guaranteed in every
                dish.
              </p>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Key_feature;
