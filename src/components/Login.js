// Login.js
import React from 'react';
import { Form, Button } from 'react-bootstrap';
import './Login.css';

const Login = () => {
  const handleLoginSubmit = (event) => {
    event.preventDefault();
    // Add your login logic here, for example, redirect after successful login
    alert('Login successful!');
  };

  return (
    <div className="login-page">
      <h2>Login to Your Account</h2>
      <Form onSubmit={handleLoginSubmit}>
        <Form.Group controlId="formEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Email address" required />
        </Form.Group>

        <Form.Group controlId="formPassword" className="mt-3">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" required />
        </Form.Group>

        <div className="d-flex justify-content-between align-items-center mt-3">
          <Form.Check type="checkbox" label="Remember me" />
          <a href="#">Forgot password?</a>
        </div>

        <Button variant="primary" className="w-100 mt-4" type="submit">
          Sign In
        </Button>
      </Form>

      <div className="text-center mt-3">
        <p>Not a member? <a href="#">Register</a></p>
      </div>
    </div>
  );
};

export default Login;
