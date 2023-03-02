import React from "react";
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

import books from "./images/books.png"
import book1 from "./images/book1.png"

import { useNavigate } from "react-router-dom";

import {BsStars} from "react-icons/bs"

function Home(){

  const navigate = useNavigate();

    function Cards(props) {
        return (

          <><Container>
            <div className="bookheadDiv">
              <h3 className="h3Style">{props.title}</h3>
               <Button onClick={()=> navigate('inventory-service')} variant="warning" className="viewAllStyle">View All</Button>{' '} 
            </div>
          </Container><Container row>
              <Row>
                <Col lg={2} md={4} xs={6} className="col">
                  <div>
                    <img src={props.img2} className="images" alt="book"/>
                  </div>
                  <div className="titleDiv">
                    {props.name3}
                    <Container className="titleDiv starsContainer">4.3<BsStars />
                      &nbsp; {"(150)"}
                    </Container>

                  </div>
                  <div className="titleDiv">
                    <div className="price" style={{ fontWeight: "bold" }}>₹500</div>
                    <div className="price" style={{ textDecoration: "line-through" }}>₹315.00</div>
                    <div className="price" style={{ color: "green", fontWeight: "bold" }}>60% off</div>
                  </div>
                </Col>

                <Col lg={2} md={4} xs={6} className="col">
                  <div>
                    <img src={props.img2} className="images" alt="book"/>
                  </div>
                  <div className="titleDiv">
                    {props.name3}
                    <Container className="titleDiv starsContainer">4.3<BsStars />
                      &nbsp; {"(150)"}
                    </Container>

                  </div>
                  <div className="titleDiv">
                    <div className="price" style={{ fontWeight: "bold" }}>₹500</div>
                    <div className="price" style={{ textDecoration: "line-through" }}>₹315.00</div>
                    <div className="price" style={{ color: "green", fontWeight: "bold" }}>60% off</div>
                  </div>
                </Col>


                <Col lg={2} md={4} xs={6} className="col">
                  <div>
                    <img src={props.img2} className="images" alt="book"/>
                  </div>
                  <div className="titleDiv">
                    {props.name3}
                    <Container className="titleDiv starsContainer">4.3<BsStars />
                      &nbsp; {"(150)"}
                    </Container>

                  </div>
                  <div className="titleDiv">
                    <div className="price" style={{ fontWeight: "bold" }}>₹500</div>
                    <div className="price" style={{ textDecoration: "line-through" }}>₹315.00</div>
                    <div className="price" style={{ color: "green", fontWeight: "bold" }}>60% off</div>
                  </div>
                </Col>


                <Col lg={2} md={4} xs={6} className="col">
                  <div>
                    <img src={props.img2} className="images" alt="book"/>
                  </div>
                  <div className="titleDiv">
                    {props.name3}
                    <Container className="titleDiv starsContainer">4.3<BsStars />
                      &nbsp; {"(150)"}
                    </Container>

                  </div>
                  <div className="titleDiv">
                    <div className="price" style={{ fontWeight: "bold" }}>₹500</div>
                    <div className="price" style={{ textDecoration: "line-through" }}>₹315.00</div>
                    <div className="price" style={{ color: "green", fontWeight: "bold" }}>60% off</div>
                  </div>
                </Col>

                <Col lg={2} md={4} xs={6} className="col">
                  <div>
                    <img src={props.img2} className="images" alt="book"/>
                  </div>
                  <div className="titleDiv">
                    {props.name3}
                    <Container className="titleDiv starsContainer">4.3<BsStars />
                      &nbsp; {"(150)"}
                    </Container>

                  </div>
                  <div className="titleDiv">
                    <div className="price" style={{ fontWeight: "bold" }}>₹500</div>
                    <div className="price" style={{ textDecoration: "line-through" }}>₹315.00</div>
                    <div className="price" style={{ color: "green", fontWeight: "bold" }}>60% off</div>
                  </div>
                </Col>

                <Col lg={2} md={4} xs={6} className="col">
                  <div>
                    <img src={props.img2} className="images" alt="book"/>
                  </div>
                  <div className="titleDiv">
                    {props.name3}
                    <Container className="titleDiv starsContainer">4.3<BsStars />
                      &nbsp; {"(150)"}
                    </Container>

                  </div>
                  <div className="titleDiv">
                    <div className="price" style={{ fontWeight: "bold" }}>₹500</div>
                    <div className="price" style={{ textDecoration: "line-through" }}>₹315.00</div>
                    <div className="price" style={{ color: "green", fontWeight: "bold" }}>60% off</div>
                  </div>
                </Col>

              </Row>
            </Container></>
           
        );
      }
    
    
    


    return (
        <div>
            <Cards 
                  title="Exam prep"
                  img={books}
                  img2={book1}
                
                name3="Lorem Ipsum is simply dummy text"
            />
           <Cards 
                  title="Exam prep"
                  img={books}
                  img2={book1}
                
                name3="Lorem Ipsum is simply dummy text"
            />
            {/* <Cards name="Holy Books" 
              name2="Startup"
              name3="Nepali Samjhana"
            /> */}
        </div>
       

    );
}

export default Home;