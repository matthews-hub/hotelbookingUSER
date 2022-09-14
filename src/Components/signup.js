import React, { useState } from 'react'
import '../CSS/signup.css'
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import {Auth, db} from '../ConfigFirebase/firebase.js';
import { addDoc, collection } from 'firebase/firestore'


function SignUp (closeM) {
  const [openModal, setOpenModal] = useState(false)
  const [name, setName] = useState("")
  const [surname, setSurname] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleSignUp = (e)=>{
    e.preventDefault(); 
    // const Auth = getAuth();
    createUserWithEmailAndPassword(Auth, email, password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        
        addDoc(collection(db,'Users'),{email:user.email,name:name,surname:surname,id:user.uid})

      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage);
        console.log(errorCode);
        console.log(email);
        // ..
      });

  };

  return (
     
      <div className='logContainer'>
      <div className="overlay">
        <form className="form COVER" onSubmit={handleSignUp}>
   
        <h1>SIGN UP</h1>
       
          <input 
          type="username"
          name="username"
          id="email"
          placeholder="Enter Your Name"
          required
          onChange={e=>setName(e.target.value)}
          />
           <input 
          type="username"
          name="username"
          id="email"
          placeholder="Enter Your Surname"
          required
          onChange={e=>setSurname(e.target.value)}
          />

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
          onChange={e=>setPassword(e.target.value)}
          />
           
           <button type="submit" id='loginBtn' to='/login'>REGISTER</button>
           {openModal && <SignUp closeM={setOpenModal}/>}
        </form>
      </div>
      </div>
    
  )
}

export default SignUp
