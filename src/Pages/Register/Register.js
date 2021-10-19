import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { getAuth, signInWithPopup, GoogleAuthProvider, GithubAuthProvider , createUserWithEmailAndPassword,signInWithEmailAndPassword,sendEmailVerification, updateProfile } from "firebase/auth";
import initializeAuthentication from '../Login/Firebase/Firebase.init';

initializeAuthentication();
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();
const Register = e => {
    const auth = getAuth()
const [login, setLogin] = useState(false)
const [userEmail, setUserEmail] = useState('')
const [userPassword, setUserPassword] = useState('')
const [error, setError] = useState('')
const [name, setName] = useState('')
  const handleGoogleSign = () =>{
    signInWithPopup(auth, googleProvider)
    .then((result) => {
      const user = result.user;
      console.log(user);
    })
  }
const handleGithub = () =>{
signInWithPopup(auth, githubProvider)
.then((result) => {
    const user = result.user;
    console.log(user);
  })
}
  const checkLogin = e =>{
    setLogin(e.target.checked);
  }
  const handleEmailChange = e =>{
    setUserEmail(e.target.value);
  }
  const handlePasswordChange = e =>{
    setUserPassword(e.target.value);
  }
  const handleSetName = e =>{
    setName(e.target.value)
  }
  
  const handleRegistration = e =>{
    e.preventDefault()
    console.log(userEmail,userPassword);
    if(userPassword.length <= 6){
      setError('Password should be at least 6 characters')
      return;
    }
    if(!/(?=.*[A-Z].*[A-Z])/.test(userPassword)){
      setError('password Must Be 2 UpperCase');
      return;
    }
   if(login){
     oldUser (userEmail,userPassword)
   }else{
     newuser(userEmail, userPassword)
   }
  }
  const oldUser = (userEmail, userPassword) =>{
    signInWithEmailAndPassword (auth, userEmail, userPassword)
    .then(result =>{
      const user = result.user;
      console.log(user);
      setError('')
    })
    .catch(error =>{
      setError(error.message);
    })
  }
  const newuser = (userEmail, userPassword) =>{
    createUserWithEmailAndPassword(auth, userEmail, userPassword)
    .then(regester =>{
      const user = regester.user;
      console.log(user);
      setError('');
      varifiyEmail();
      setUserName();
    })
    .catch(error =>{
      setError(error.massage);
    })
  }
  const setUserName = () =>{
    updateProfile(auth.currentUser, {displayName:name})
    .then(result =>{

    })
  }
  const varifiyEmail = () =>{
    sendEmailVerification(auth.currentUser)
    .then(result =>{
      console.log(result);
    })
  }
    return (
        <div className='mx-5'>

    <form onSubmit={handleRegistration}>
    <h2 className='text-center text-primary'>Please! {login ? 'Login':'Register'}</h2>
    {!login &&
      <div className="row mb-3">
    <label htmlFor="inputName3" className="col-sm-2 col-form-label">Name</label>
    <div className="col-sm-10">
      <input onBlur={handleSetName} type="text" className="form-control" placeholder='user name' id="inputName3" required/>
    </div>
  </div>
  }

  <div className="row mb-3">
    <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Email</label>
    <div className="col-sm-10">
      <input onBlur={handleEmailChange} type="email" className="form-control" placeholder='user email' id="inputEmail3" required/>
    </div>
  </div>
  <div className="row mb-3">
    <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">Password</label>
    <div className="col-sm-10">
      <input type="password" onBlur={handlePasswordChange} className="form-control"  placeholder='password' id="inputPassword3" required/>
    </div>
    <div>
      <h6 className='text-danger text-center'>{error}</h6>
    </div>
  </div>
  <div className="row mb-3">
    <div className="col-sm-10 offset-sm-2">
      <div className="form-check d-flex">
        <input onChange={checkLogin} className="form-check-input" type="checkbox" id="gridCheck1"/>
        <label className="form-check-label" htmlFor="gridCheck1">
          Already Register?<Link to='/login'>Login</Link>
        </label>
      </div>
    </div>
  </div>
  <button type="submit" className="btn btn-primary btn-lg mx-auto d-block">{login ? 'Log In' : 'Register'}</button><br/>
</form>
    <div className='text-primary fw-bold'>--------- or -----------</div> <br/><br/>
      <button className='btn btn-dark me-2' onClick={handleGoogleSign}>Google Signin</button>
      <button className='btn btn-success' onClick={handleGithub}>Github Signin</button>

    </div>
    );
};

export default Register;