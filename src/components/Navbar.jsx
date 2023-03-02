// import React from "react";

import 'bootstrap/dist/css/bootstrap.min.css';
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';



function NBar() {
  
  const textStyle = {
    color: "#FFFBE9"
  };
  const navTitle=(
    // <MDBIcon  icon='gem' className='me-3 navitems' />
    <MDBIcon fas icon="user-check" className='navitems'/>
  )

  
  return (
    <Navbar className='nav'  expand="lg" sticky="top">
      <Container fluid className='containerNav'>
        <Navbar.Brand href="#" className='navitems'>
          Sugam.com
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link
              href="#action1"
              aria-current="page"
              active
              className='navitems'
            >
              Home
            </Nav.Link>
            {/* <Nav.Link href="#action2" active>Link</Nav.Link> */}

            {/* <Nav.Link href="#" disabled>
              Link
            </Nav.Link> */}
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-1"
              aria-label="Search"
            />
            <Button
              variant="outline-warning"
              className="me-5"
              // style={buttonStyle}
            >
              Search
            </Button>
          </Form>
          <NavDropdown
            title={navTitle}
            // icon="<MDBIcon className='navitems' fab icon='facebook-f'/>"
            // id="navbarScrollingDropdown"
            // style={textStyle}
            className="navitems"
          >
            {/* <FontAwesomeIcon icon="fa-solid fa-user" /> */}
            <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action5">
              Something else here
            </NavDropdown.Item>
          </NavDropdown>
        </Navbar.Collapse>
      </Container>
    </Navbar>

  
  );
}

export default NBar;

