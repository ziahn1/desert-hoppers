// MaldivesPage.js
import React from 'react';
import Header from './Header';
import Footer from './Footer';
import './MaldivesPage.css';
import { Modal, Button, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const MaldivesPage = () => {

  const [open, setOpen] = React.useState(false);

    const handleClose = () => {
        setOpen(false);
    };

    const handleOpen = () => {
        setOpen(true);
    };

  return (
    <div>

      {/* Banner Section */}
      <div className="banner" style={{ backgroundImage: 'url(https://cdn.travelwings.com/assets/images/maldives-tour-packages.jpg)' }}>
      </div>

      {/* Search and Sort Section */}
      <div className="search-sort-bar">
        <input type="text" placeholder="Search Package..." />
        <button className="sort-btn">Sort By</button>
      </div>

      {/* Package Cards */}
      <div className="package-cards container">
        <div className="package-card">
          <img src="https://cdn.travelwings.com/assets/images/Maldives-FD-3N4D-sp-small.jpg" alt="Maldives Package 1" />
          <h3>Paradise Maldives</h3>
          <p>3 Nights</p>
          <p>Starting From <strong>AED 6,999</strong></p>
          <button className="details-btn">View Details</button>
          <button className="enquire-btn" onClick={handleOpen}>Enquire Now</button>
        </div>
        <div className="package-card">
          <img src="https://cdn.travelwings.com/assets/images/kuramathi-maldives-sp-small.jpg" alt="Maldives Package 1" />
          <h3>Kuramathi Maldives</h3>
          <p>3 Nights</p>
          <p>Starting From <strong>AED 6,999</strong></p>
          <button className="details-btn">View Details</button>
          <button className="enquire-btn" href="/enquiry">Enquire Now</button>
        </div>
        <div className="package-card">
          <img src="https://cdn.travelwings.com/assets/images/kurumba-maldives-sp-small.jpg" alt="Maldives Package 1" />
          <h3>Kurumba Maldives</h3>
          <p>3 Nights</p>
          <p>Starting From <strong>AED 7,199</strong></p>
          <button className="details-btn">View Details</button>
          <button className="enquire-btn" href="/enquiry">Enquire Now</button>
        </div>
      </div>
      <Modal show={open} onHide={handleClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>Maldives Enquiry</Modal.Title>
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
                <span role="img" aria-label="UAE"></span> +971
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
    </div>
  );
};

export default MaldivesPage;
