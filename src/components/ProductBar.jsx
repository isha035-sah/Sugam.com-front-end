import React from "react";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function ProductBa(){
    return(
        
        <Row>
        <Col xs={3} style={{border:"1px solid"}}>
        {/* <div>
            <h4>Price</h4>

        </div> */}

        <Row>
            {/* <Col xs={6} style={{border:"1px solid"}}>
                do
            </Col>
            <Col xs={6} style={{border:"1px solid"}}>
               wateve
            </Col> */}

            <div>
                <h4>Price</h4>
                
            </div>
        </Row>
        </Col>
        <Col xs={9} style={{border:"1px solid"}}> 
            <Row>
                <Col style={{border:"1px solid"}} lg={2} md={4} xs={6}>
                    lg-2 md-4 xs-6
                </Col>
                <Col style={{border:"1px solid"}} lg={2} md={4} xs={6}>
                    lg-2 md-4 xs-6
                </Col>
                <Col style={{border:"1px solid"}} lg={2} md={4} xs={6}>
                    lg-2 md-4 xs-6
                </Col>
                <Col style={{border:"1px solid"}} lg={2} md={4} xs={6}>
                    lg-2 md-4 xs-6
                </Col>
                <Col style={{border:"1px solid"}} lg={2} md={4} xs={6}>
                    lg-2 md-4 xs-6
                </Col>
                <Col style={{border:"1px solid"}} lg={2} md={4} xs={6}>
                    lg-2 md-4 xs-6
                </Col>
            </Row>
        </Col>
      </Row>

    );
}

export default ProductBa;