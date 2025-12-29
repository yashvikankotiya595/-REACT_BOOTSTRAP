import React from "react";
import "./Website.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { IoPerson } from "react-icons/io5";
import { MdOutlineDateRange } from "react-icons/md";
import { IoMdTime } from "react-icons/io";

const Table_book = () => {
  return (
    <>
      <div className="sec7-img">
        <div className="image">
          <img src="bg-6.png" alt="" />

          <Container>
            <div className="sec7">
              <div className="book-text">
                <h2>Book Table</h2>
              </div>

              <Row className="book-info">
                <Col className="table-data">

                  <div className="book1">
                    <div className="icon">
                      <IoPerson />
                    </div>
                    <span className="current">Person</span>
                  </div>

                  <div className="book2">
                    <div className="icon">
                      <MdOutlineDateRange />
                    </div>
                    <span className="current">Date</span>
                  </div>

                  <div className="book3">
                    <div className="icon">
                      <IoMdTime />
                    </div>
                    <span className="current">Time</span>
                  </div>

                  <div className="book-now">
                    <span className="current">Book Now</span>
                  </div>
                </Col>
              </Row>
            </div>
          </Container>
        </div>
      </div>
    </>
  );
};

export default Table_book;
