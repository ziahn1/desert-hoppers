// SignUp.js
import React from 'react';
import { Form, Button } from 'react-bootstrap';
import './SignUp.css';

const SignUp = () => {
  const handleSignUpSubmit = (event) => {
    event.preventDefault();
    // Add your sign-up logic here, such as form submission or redirection
    alert('Sign Up successful!');
  };

  return (
    <div className="signup-page">
      <h2>Sign up now</h2>
      <Form onSubmit={handleSignUpSubmit}>
        <div className="d-flex">
          <Form.Group controlId="formFirstName" className="me-2">
            <Form.Label>First name</Form.Label>
            <Form.Control type="text" placeholder="First name" required />
          </Form.Group>

          <Form.Group controlId="formLastName">
            <Form.Label>Last name</Form.Label>
            <Form.Control type="text" placeholder="Last name" required />
          </Form.Group>
        </div>

        <Form.Group controlId="formEmail" className="mt-3">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Email address" required />
        </Form.Group>

        <Form.Group controlId="formPassword" className="mt-3">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" required />
        </Form.Group>

        <Form.Group controlId="formSubscribe" className="mt-3">
          <Form.Check type="checkbox" label="Subscribe to our newsletter" />
        </Form.Group>

        <Button variant="primary" className="w-100 mt-4" type="submit">
          Sign Up
        </Button>
      </Form>
    </div>
  );
};

export default SignUp;
