import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import UseAuth from '../../Hooks/UseAuth';
import './Login.css'

const Login = () => {
const {signInWithGoogle} = UseAuth()
const handleLogin = e =>{
    console.log('register will be added');
    e.preventDefault();
}
const {signInGithub} = UseAuth()

    return (
        <div className='container bg'>
        <div className="row">
            <div className="col-md-6">
            <h2>Please Login !</h2>
            <Form onSubmit={handleLogin}>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label className='d-flex'>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" />
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label className='d-flex'>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" />
  </Form.Group>
  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>
<p>new user? <Link to='/register'>Create Account</Link></p>
<p  className='text-primary fw-bold'>---------- or -------------</p>
            <button onClick={signInWithGoogle} className='btn btn-dark me-2'>Google Sign In Login</button>
            <button onClick={signInGithub} className='btn btn-success'>Github Sign In Login</button>
            </div>
            <div className="col-md-6">
                <h3>Welcome to ! <span className='d-block'></span> Global Doctor's Chamber</h3>
               
                <p className='text-white'>Connected to us Make sure your login</p>
                <p>At The Global Doctor's Clinic, your health and safety are our very highest priorities. We are ready to care for you and your family. Learn how we are keeping you safe and protected so that you can get the care you need.</p>
            </div>
        </div>
            
        </div>
    );
};

export default Login;