// ContactForm.js
import React from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './ContactForm.css';  // Custom styling for the form

const ContactForm = ({ show, handleClose }) => {
  return (
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>Contact Us</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          {/* First Name */}
          <Form.Group controlId="formFirstName">
            <Form.Label>First Name *</Form.Label>
            <Form.Control type="text" placeholder="First Name" required />
          </Form.Group>

          {/* Last Name */}
          <Form.Group controlId="formLastName" className="mt-2">
            <Form.Label>Last Name *</Form.Label>
            <Form.Control type="text" placeholder="Last Name" required />
          </Form.Group>

          {/* Phone Number */}
          <Form.Group controlId="formPhone" className="mt-2">
            <Form.Label>Phone *</Form.Label>
            <div className="d-flex">
              <Form.Control type="text" placeholder="Phone" required />
            </div>
          </Form.Group>

          {/* Email */}
          <Form.Group controlId="formEmail" className="mt-2">
            <Form.Label>Email *</Form.Label>
            <Form.Control type="email" placeholder="Email" required />
          </Form.Group>

          {/* Destination */}
          <Form.Group controlId="formDestination" className="mt-2">
            <Form.Label>Destination *</Form.Label>
            <Form.Control type="text" placeholder="Destination" required />
          </Form.Group>

          {/* Package Name */}
          <Form.Group controlId="formPackage" className="mt-2">
            <Form.Label>Package Name *</Form.Label>
            <Form.Select required>
              <option>Select a package</option>
              <option>Holiday Package A</option>
              <option>Holiday Package B</option>
              <option>Holiday Package C</option>
            </Form.Select>
          </Form.Group>

          {/* Subject */}
          <Form.Group controlId="formSubject" className="mt-2">
            <Form.Label>Subject *</Form.Label>
            <Form.Control type="text" placeholder="Subject" required />
          </Form.Group>

          {/* Description */}
          <Form.Group controlId="formDescription" className="mt-2">
            <Form.Label>Description *</Form.Label>
            <Form.Control as="textarea" rows={3} required />
          </Form.Group>

          {/* Submit Button */}
          <Button variant="success" type="submit" className="w-100 mt-3">
            Submit
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default ContactForm;
