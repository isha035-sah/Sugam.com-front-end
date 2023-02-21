import React from "react"
import NBar from "./Navbar"
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import 'bootstrap/dist/css/bootstrap.min.css';


function App(){
   
    function Cards(props) {
        return (
          <div className="booksCategory">
            {/* <Container fluid> */}
            <Row >
              <Col lg={3} md={3} sm={12} xs={12} className="col">
              
                  {props.name}
              </Col>
              <Col lg={3} md={3} sm={12} xs={12} className="col">
              
                {props.name2}
              </Col>
              <Col lg={3} md={3} sm={12} xs={12} className="col">
            
                {props.name3}
              </Col>
              {/* <Col xxl={3} lg={3} md={3} sm={12} className="col">
              {" "}
              lg=3 md=4 ms=12
            </Col> */}
            </Row>
          </div>
        );
        }
    


    return (
        <div>
            <NBar/>
            <Cards name="Academics"
                name2="Entrance Prep"
                name3="Finance Books"
            />
            <Cards name="Self-Help Books"
              name2="Medical Books"
              name3="Technical Books"
            />
            <Cards name="Holy Books" 
              name2="Startup"
              name3="Nepali Samjhana"
            />
        </div>
    );

}
export default App;