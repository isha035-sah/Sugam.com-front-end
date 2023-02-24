import React from "react"
import NBar from "./Navbar"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

import books from "./images/books.png"
import book1 from "./images/book1.png"

function App(){

  function Bookshead(props){
    return(
      
      <Container>
      <div className="bookheadDiv">
      <h3 className="h3Style">{props.title}</h3>
        <Button variant="warning" className="viewAllStyle">View All</Button>{' '}
       </div>
       </Container>
      
    );
  }
   
    function Cards(props) {
        return (
          
            <Container row>
            <Row>
              <Col lg={2} md={4}  xs={6} className="col">
                 <div>
                    <img src={props.img2} className="images"/>
                 </div>
                 <div>
                 {props.name3} 
                  
                 </div>
              </Col>

              <Col lg={2} md={4}  xs={6} className="col">
                  {/* {props.name2} */}
                  <div>
                  <img src={props.img2} className="images"/>
                </div> 
                
              </Col>
              <Col lg={2} md={4}  xs={6} className="col">

              <div>
                  <img src={props.img2} className="images"/>
                </div> 

                {/* {props.name3} */}
              </Col>
              <Col lg={2} md={4}  xs={6} className="col">
              
              <div>
                  <img src={props.img2} className="images"/>
                </div> 
              {/* {props.name} */}
          </Col>
          <Col lg={2} md={4} sm={6} xs={6} className="col">
          
               <div>
                  <img src={props.img2} className="images"/>
                </div> 
            {/* {props.name2} */}
          </Col>
          <Col lg={2} md={4} sm={6} xs={6} className="col">
              <div>
                  <img src={props.img2} className="images"/>
                </div> 
            {/* {props.name3} */}
          </Col>
        
            </Row>
            </Container>
           
        );
      }
    
    
    


    return (
        <div>
            <NBar/>
            <Bookshead
              title="Exam prep"
              
            />
            <Cards 
                  img={books}
                  img2={book1}
                
                name3="Lorem Ipsum is simply dummy text"
            />
            {/* <Cards name="Self-Help Books"
              name2="Medical Books"
              name3="Technical Books"
            />
            <Cards name="Holy Books" 
              name2="Startup"
              name3="Nepali Samjhana"
            /> */}
        </div>
    );

}
export default App;