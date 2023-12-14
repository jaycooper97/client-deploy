import React from "react";
import Other from "./imgs/map.png"
// Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';


function Parking() {
    return (
        <div className="container">
               <h4 className='display-4'>Cincy Parking</h4>

               {/* Images  */}
               <div className="break">
                <img src={Other} alt="" className="navigation" />
<hr className="line-break"/>
                <h5>Find the parking near you</h5>
                </div>

               {/* Add map to parking */}
               <iframe src="https://www.google.com/maps/d/embed?mid=1rOdReg6owbeWOEnAZdVMS8oZAF5crOc&ehbc=2E312F&noprof=1" title="Cincy parking map " width="640" height="480"></iframe>

        </div>
    )
}

export default Parking