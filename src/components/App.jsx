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
                {" "}
                <div
                  className="glassdoor"
                  // style={{
                  //   width: "100%",
                  //   height: "inherit",
                  //   backgroundColor: "white",
                  //   textAlign: "center",
                  //   padding: "2%"
                  // }}
                >
                  
                  {props.name}
                </div>
              </Col>
              <Col lg={3} md={3} sm={12} xs={12} className="col">
                {" "}
                <div>{props.name2}</div>
              </Col>
              <Col lg={3} md={3} sm={12} xs={12} className="col">
                {" "}
                <div>{props.name3}</div>
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
        </div>
    );

}
export default App;