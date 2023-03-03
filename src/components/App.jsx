import React from "react"
import {  Route, Routes ,BrowserRouter as  Router } from 'react-router-dom'

// importing the components 
import NBar from "./Navbar"
import Home from "./Home"

import Footer from "./Footer"

import Inventory from "./Inventory";
import Customerservice from "./Customerservice"


function App(){

  // function Bookshead(props){
  //   return(
      
  //     <Container>
  //     <div className="bookheadDiv">
  //     <h3 className="h3Style">{props.title}</h3>
  //       <Button variant="warning" className="viewAllStyle">View All</Button>{' '}
  //      </div>
  //      </Container>
      
  //   );
  // }
   
    


    return (
         
      <>

        <Router>
          <NBar/>

          <Routes>
             <Route path="inventory-service" element={ <Inventory />} />
             <Route path="/customer-service" element={ <Customerservice />} />
              <Route path="/" element={<Home/>} />   
          </Routes>  

          <Footer/>
        </Router>
        </>

    );

}
export default App;