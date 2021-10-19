import React from 'react';
import UseAuth from '../../Hooks/UseAuth';

const Login = () => {
const {signInWithGoogle} = UseAuth()
    return (
        <div>
            <h2>Please Login !</h2>
            <button onClick={signInWithGoogle} className='btn btn-dark'>Google Sign In Login</button>
        </div>
    );
};

export default Login;