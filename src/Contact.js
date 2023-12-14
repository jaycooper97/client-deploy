import React, { Component } from 'react'
import City from './img/City.avif';

class Contact extends Component {
  render() {
    return (
      <div>
        <h3 className="title">We'd love to hear from you!</h3>
        <br />
        <br />
        <img src={City} alt="City" className="img" />
        <br />
        <br />
        <p className='des'>Here at Cincy Finds, we strive to listen to our customers' voices and feedback; it's imperative that we understand your needs, and if you have any questions, concerns, or you want to help us update information on an attraction, you can complete the form below; we will respond as quickly as possible.</p>
        <br />
        <br />
        <h3 className="title" style={{marginBottom: '20px'}}>Tell us everything...</h3>
        <div className="container">
          <form className="form" action="">
            <input className="input" type="text" placeholder="First name" id="first-name" />

            <input className="input" type="text" placeholder='Last name' id="last-name" />

            <input className="input" type="text" placeholder='Email' id="email" />

            <textarea className="input" name="" cols="" rows="" placeholder='How can we help you?' id="help"></textarea>

            <input style={{width: "100px", height: "60px"}} type="submit" placeholder='Submit' />
          </form>
        </div>
        <br />
        <br />

        <h2 className='head' style={{textAlign: 'center'}}>Call or email us today!</h2>
        <br />
        <p className='info' style={{width: '50%', float: 'left', textAlign: 'center'}}>Phone number: <br /> (513) 628-4422</p>
        <p className="info" style={{width: '50%', float: 'right'}}>Email: <br /> cincyfinds_admin@yahoo.com</p>
        <br />
        <br />
        <h2 className="head" style={{textAlign: 'center'}}>Come and see us anytime!</h2>
        <br />
        <p className='info' style={{textAlign: 'center'}}>Hours: <br /> Monday-Friday: 10a-10p <br /> Saturday: 12p-12a <br /> Sunday: 12p-10p</p>
        <br />
        <br />
        <p className='end' style={{textAlign: 'center'}}>Thanks for stopping by Cincy Finds - Anything for our people!</p>
      </div>
    )
  }
}


export default Contact