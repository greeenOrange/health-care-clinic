import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useLocation} from 'react-router-dom';
import { useHistory } from "react-router-dom";
import UseAuth from '../../Hooks/UseAuth';
import './Login.css'

const Login = () => {
const {signInWithGoogle} = UseAuth()
const location = useLocation();
const history = useHistory()
const redirect_uri = location.state?.from || '/home'
console.log('came from',location.state?.from);
const handleGoogleLogin = () =>{
    signInWithGoogle()
    .then(result =>{
        console.log(result);
        history.push(redirect_uri)
    })
}
const handleLogin = e =>{
    console.log('register will be added');
    e.preventDefault();
}
const {signInGithub} = UseAuth()
const gitlocation = useLocation();
const githistory = useHistory()
const gitredirect_uri = gitlocation.state?.from || '/home'
const handleGithubLogin = () =>{
    signInGithub()
    .then(result =>{
        console.log(result);
        githistory.push(gitredirect_uri)
    })
}

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
            <button onClick={handleGoogleLogin} className='btn btn-dark me-2'>Google Sign In Login</button>
            <button onClick={handleGithubLogin} className='btn btn-success'>Github Sign In Login</button>
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