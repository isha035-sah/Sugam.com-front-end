import React from "react";

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import banner from "./images/banner.png"

import NBar from "./Navbar";
import ProductBa from "./ProductBar";

function Inventory(){
    return (
        <>
        
         <Navbar style={{backgroundColor:"#FFFBE9"}} variant="dark">
        <Container>
          {/* <Navbar.Brand href="#home">Navbar</Navbar.Brand> */}
          <Nav className="me-auto" >
            <Nav.Link href="#home" style={{color:"#439A97"}}>Academics</Nav.Link>
            <Nav.Link href="#features" style={{color:"#439A97"}}>Finance Books</Nav.Link>
            <Nav.Link href="#pricing" style={{color:"#439A97"}}>Startup</Nav.Link>
            <Nav.Link href="#home" style={{color:"#439A97"}}>Holy Books</Nav.Link>
            <Nav.Link href="#features" style={{color:"#439A97"}}>SelfHelp</Nav.Link>
            <Nav.Link href="#pricing" style={{color:"#439A97"}}>Medical Books</Nav.Link>
            <Nav.Link href="#pricing" style={{color:"#439A97"}}>Exam Prep</Nav.Link>

          </Nav>
        </Container>
      </Navbar>
      <img src= {banner}  style={{width:"100%" }}/>
      <ProductBa />
      
        </>
    );

}

export default Inventory;