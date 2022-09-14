import React, { useState } from 'react'

import { signInWithEmailAndPassword } from "firebase/auth";
import {Auth} from '../ConfigFirebase/firebase.js'
import '../CSS/login.css'
import SignUp from './signup.js';

function Login  ({closeModal})  {

  const [errormsg, setErrormsg] = useState(false)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [openModal, setOpenModal] = useState(false)

  const handleLogin = (e)=>{
    e.preventDefault();

    signInWithEmailAndPassword(Auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    // ...
    console.log(user)
  })
  alert('Welcome!!...Successfully Signed In')
  .catch((error) => {
    setErrormsg(true)
    // ..
  });

  };

  Auth.onAuthStateChanged(Users=>{
    console.log(Users)
  })

  return (
     
      <div className='logContainer'>
      <div className="overlay">
      
        <form className="form COVER" onSubmit={handleLogin}>
       <div style={{justifyContent: 'end', marginLeft:10}}>
         <button onClick={()=>closeModal(false)} style={{backgroundColor:'red', color:'white', border:'none',borderRadius:25,}}>X</button>
       </div>
        <h1 style={{textAlign:"center"}}>SIGN IN</h1>
          <input 
          type="email"
          name="email"
          id="email"
          placeholder="Enter your email"
          required
          onChange={e=>setEmail(e.target.value)}
          />

          <input 
          type="password"
          name="password"
          id="password"
          placeholder="Enter your password"
          required
          onChange={e=>setPassword (e.target.value)}
          />
         {errormsg && <span>Wrong Email or Wrong Password</span>}
          <a href='/HotelCart' id='loginBtn'>Log In</a>
            <div className='loginFooter'> 
                 <p style={{textalign:'center'}}>Don't Have An Account Yet?</p>
                 
                <a href="/Signup">Click Here to Register</a>
             </div>     
        </form>  
      </div>
      
      </div>
     
  )
}

export default Login