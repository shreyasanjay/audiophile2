import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Alert  from "react-bootstrap/Alert";
import Modal from 'react-bootstrap/Modal';
const ContactForm = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div>
      <Alert variant="info" className="info-al">
        Contact Us
      </Alert>
    <div className="containercon">
      <form method="POST" target="_blank">
        <p style={{textAlign: 'center', color: 'black', fontSize: 'x-large', fontWeight: 'bold'}}>We would love to hear from you...</p>
        <div className="mb-3 pt-0">
          <label>Name</label>&nbsp;&nbsp;&nbsp;
          <input type="text" placeholder="Your name" name="name" className="" required />
        </div>
        <div className="mb-3 pt-0">
          <label>Email</label>&nbsp;&nbsp;&nbsp;
          <input type="email" placeholder="Your email" name="email" className="" required />
        </div>
        <div className="mb-3 pt-0">
          <label>Your Message</label>&nbsp;&nbsp;&nbsp;
          <textarea placeholder="Your message" name="message" className="area" required />
        </div>
        <div className="mb-3 pt-0">
            <Button variant="primary" onClick={handleShow} type="submit" className="contactbtn">
              Send a Message
            </Button>
        </div>
      </form>
    </div>
    <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}>
        <Modal.Header closeButton>
          <Modal.Title>Message</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Your response has been submitted, we will soon get in touch with you.
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};
export default ContactForm;
