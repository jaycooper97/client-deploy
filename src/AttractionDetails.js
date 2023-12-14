//style here
import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
const Attraction = (props) => {
    const [showModal, setShowModal] = useState(false);
    const handleShow = () => setShowModal(true);
    const handleClose = () => setShowModal(false);
    return (
        <div className='text-center mt-4 m-5 border rounded bg-info col-3'>


            <h5>{props.cincy.name}</h5>
            <img className='attractionsImg img-fluid mx-auto' src={props.cincy.imgURL} alt='otr' />
            <p>{props.cincy.description}</p>



            <Button className='my-5' variant='primary' onClick={handleShow}>
                Open Details
            </Button>

            <Modal show={showModal} onHide={handleClose} className='modal'>
                <Modal.Header closeButton>
                    <Modal.Title>{props.cincy.name}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <ul>
                        <li>Address: {props.cincy.address ? props.cincy.address : 'Not available'}</li>
                        <li>Phone number: {props.cincy.number ? props.cincy.number : 'Not available'}</li>
                        <li>Hours: {props.cincy.hours ? props.cincy.hours : 'Not available'}</li>
                        <li>Rating: {props.cincy.rating ? props.cincy.rating : 'Not available'}</li>
                        <li>Happy Hour: {props.cincy.happy ? props.cincy.happy : 'Not available'}</li>
                        <li>Seating: {props.cincy.seating ? props.cincy.seating : 'Not available'}</li>
                        <li>Online shop: {props.cincy.shop ? props.cincy.shop : 'Not available'}</li>
                        <li>Club Subscription: {props.cincy.subscription ? props.cincy.subscription : 'Not available'}</li>
                        <li>Serving options: {props.cincy.serving ? props.cincy.serving : 'Not available'}</li>
                        <li>Kitchen hours: {props.cincy.kitchen ? props.cincy.kitchen : 'Not available'}</li>
                        <li>Gift cards: {props.cincy.giftCards ? props.cincy.giftCards : 'Not available'}</li>
                        <li>Traveler's Choice: {props.cincy.travelersChoice ? props.cincy.travelersChoice : 'Not available'}</li>
                        <li>Pricing: {props.cincy.pricing ? props.cincy.pricing : 'Not available'}</li>
                        <li>Category: {props.cincy.category ? props.cincy.category : 'Not available'}</li>
                        <li>Website: {props.cincy.website ? props.cincy.website : 'Not available'}</li>
                    </ul>
                        <div className="text-center">
                        <img src={props.cincy.imgURL} alt={props.cincy.name} className='img-fluid'/>

                        {/* Add more details based on your data structure */}
                        </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant='secondary' onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
};
export default Attraction;