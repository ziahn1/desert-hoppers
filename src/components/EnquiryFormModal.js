// EnquiryFormModal.js
import React from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './EnquiryFormModal.css';

const EnquiryFormModal = ({ show, handleClose, destination }) => {
  return (
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>{destination} Enquiry</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group controlId="formFirstName">
            <Form.Label>Name *</Form.Label>
            <div className="d-flex">
              <Form.Control type="text" placeholder="First Name" className="me-2" required />
              <Form.Control type="text" placeholder="Last Name" required />
            </div>
          </Form.Group>

          <Form.Group controlId="formPhone">
            <Form.Label>Phone *</Form.Label>
            <div className="d-flex">
              <div className="country-code">
                <span role="img" aria-label="UAE">🇦🇪</span> +971
              </div>
              <Form.Control type="text" required />
            </div>
          </Form.Group>

          <Form.Group controlId="formEmail">
            <Form.Label>Email *</Form.Label>
            <Form.Control type="email" placeholder="Email" required />
          </Form.Group>

          <Form.Group controlId="formNationality">
            <Form.Label>Nationality *</Form.Label>
            <Form.Select required>
              <option>Select</option>
              <option>United Arab Emirates</option>
              <option>India</option>
              <option>Pakistan</option>
              {/* Add more options as needed */}
            </Form.Select>
          </Form.Group>

          <Form.Group controlId="formSource">
            <Form.Label>Where did you hear about us? *</Form.Label>
            <Form.Select required>
              <option>Select</option>
              <option>Facebook</option>
              <option>Instagram</option>
              <option>Google</option>
              <option>Friend</option>
              {/* Add more options as needed */}
            </Form.Select>
          </Form.Group>

          <Button variant="danger" type="submit" className="w-100 mt-3">
            Submit
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default EnquiryFormModal;
