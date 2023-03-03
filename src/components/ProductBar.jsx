import React from "react";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { MDBRange } from 'mdb-react-ui-kit';
import { MDBCheckbox } from 'mdb-react-ui-kit';

import Home from "./Home"
import ProDiv from "./ProBarDiv"

function ProductBa(){
    return(
        
        <Row>
     <Col xs={3} style={{border:"1px solid"}}>
        {/* <div>
            <h4>Price</h4>

        </div> */}

        <Row>
            <Col xs={3} style={{border:"1px solid"}}>
            <h4 >Price</h4>
  
            </Col>
            <Col xs={9} style={{border:"1px solid"}}>
            <Row>
                <Col  xs={4}>
                <h4 >Min</h4>

                </Col>
                <Col style={{border:"1px solid"}} xs={4}>
                <MDBRange
                 defaultValue={100}
                 min='100'
                 max='1000'
                 id='customRange'
                //  label='Example range'
                style={{width:"50px"}}
                />
                </Col>
                <Col style={{border:"1px solid"}} xs={4}>
                <h4 >Max</h4>

                </Col>
            </Row>

            </Col>

            {/* <div style={{padding:"2px"}}>
                <h4 style={{display:"inline-block"}}>Price</h4>
                <h4 style={{display:"inline-block"}}>Min</h4>
               
                <h4 style={{display:"inline-block"}}>Max</h4>

            </div> */}
        </Row>
        <div style={{padding:"5px"}}>
        <h4>Customer Ratings</h4>
        <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='4 & above' defaultChecked />
        <MDBCheckbox name='flexCheck' value='' id='flexCheckChecked' label='3 & above' />
          </div>  

          <div style={{padding:"5px"}}>
        <h4>Availability</h4>
        <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Exclude Out Of Stock' defaultChecked />
          </div>  

        <div style={{padding:"5px"}}>
            <h4>Language</h4>
             <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Nepali' defaultChecked />
             <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='English'  />
             <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Hindi'  />
        </div>  

        <div style={{padding:"5px"}}>
            <h4>Age Group</h4>
            <MDBCheckbox  name='flexCheck' value='' id='flexCheckDefault' label='0-5' />
            <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='5-12' />
            <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='teens and above' defaultChecked />


        </div>  

     </Col>
        <Col xs={9} style={{border:"1px solid"}}> 
            
            {/* <Home/> */}
            <ProDiv/>
        </Col>
      </Row>

    );
}

export default ProductBa;