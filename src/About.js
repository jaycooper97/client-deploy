import React from 'react';
import Footer from './Footer';
// Images
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Dennis from "./imgs/AboutPics/Dennis.png"
import Jay from "./imgs/AboutPics/Jay.jpg"
import Alykaa from "./imgs/AboutPics/Alykaa.jpeg"
import { faGithub } from '@fortawesome/free-brands-svg-icons';

// Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
// Style CSS
import './style/style.css'
// About page
function About() {
    return (
        <div>
            {/* About Content */}
            <div className='content'>
                <h4 className='display-4'>About us</h4>
                <p className='title-content'>
                    <em><blockquote>"Success is best when it's shared" <br /> - Howard Schultz</blockquote></em>
                </p>
                <hr />
                {/* Info */}
                <div className="container mt-5">
                    <div className="card">
                            <img src={Dennis} className='card-img-side' alt="One of our Creators" />
                        <div className="card-body">
                            <h5 className="card-title">Dennis</h5>
                            <p className="card-text">
                                Content from Dennis About Page
                                <b><u> Contact: </u></b>
                                <br />
                            </p>
                            <a href='' className='me-4 text-reset'>
                            <FontAwesomeIcon icon={faGithub}/></a>
                        </div>
                    </div>
                    {/* END */}
                    <div className="card">
                            <img src={Jay} className='card-img-side' alt="One of our Creators" />
                        <div className="card-body">
                            <h5 className="card-title">Jay</h5>
                            <p className="card-text">
                                Content from Jay About Page
                                <b><u> Contact: </u></b>
                                <br />
                            </p>
                            <a href='git@github.com:jaycooper97/About-Me.git' className='me-4 text-reset'>
                            <FontAwesomeIcon icon={faGithub}/></a>
                        </div>
                    </div>
                    {/* END */}
                     <div className="card">
                        <img src={Alykaa} className='card-img-side' alt="One of our Creators" />
                        <div className="card-body">
                            <h5 className="card-title">Alykaa</h5>
                            <p className="card-text">
                                Content from Alykaa About Page
                                <b><u> Contact: </u></b>
                                <br />
                                <a href='' className='me-4 text-reset'>
                            <FontAwesomeIcon icon={faGithub}/></a>
                            </p>
                        </div>
                    </div>
                    {/* END */}
                </div>
            </div>
          
            </div>
    );
};
export default About;