import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLungs, faRightToBracket } from '@fortawesome/free-solid-svg-icons'
import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import '../CSS/navbar.css'
import Login from './login'
import { faIdCard } from '@fortawesome/free-regular-svg-icons'
import SignUp from './signup'

function Navbar () {
  
  const [openModal, setOpenModal] = useState(false)
  const [openModa, setOpenModa] = useState(false)
  return (
    <>
    <header className="navbar">
        <div>
            <Link to="/Home"  id='headerlogo'>Proper Hotels.com</Link>
       </div>
        <nav className="links">
             {/* <button id='login'
             onClick={()=>{setOpenModal(true)}}
             >Log In</button> */}
             <FontAwesomeIcon icon={faRightToBracket} 
             onClick={()=>{setOpenModal(true)}}
             className="homeIconnn"/>

             <FontAwesomeIcon icon={faIdCard}
              onClick={()=>{setOpenModa(true)}}
             className="homeIconnn"/>

             
             
        </nav>
    </header>
    {openModa && <SignUp closeM={setOpenModa}/>}
    {openModal && <Login closeModal={setOpenModal}/>}
    </>
  )
}

export default Navbar