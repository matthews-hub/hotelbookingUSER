import React from 'react'
import '../CSS/footer.css'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (

    <div>
      
    {/* <footer className="footer">

      <h6>All Rights Reserved, Coded and Designed By Matthews Mashoeu</h6>
    </footer> */}



    <header>
  
</header>

<main>
 
</main>

<footer class="footer1">
  <div class="footer__addr">
    <h1 class="footer__logo">Proper Hotels.com</h1>
        
    <h2>Contact</h2>
    
    <address>
      10128 Glen Cowie 1061, Limpopo <br/>
          
      <a class="footer__btn" href="mailto:mashoeumm@gmail.com">Email Us</a>
    </address>
  </div>
  
  <ul class="footer__nav">
    <li class="nav__item">
      <h2 class="nav__title">Media</h2>

      <ul class="nav__ul">
        <li>
          <a href="#">View Profile</a>
        </li>

        <li>
          <a href="/Admincreate" 
          style={{ color: "teal" }}
          >Admin</a>
        </li>
      </ul>
    </li>
    
    {/* <li class="nav__item nav__item--extra">
      <h2 class="nav__title">Technology</h2>
      
      <ul class="nav__ul nav__ul--extra">
        <li>
          <a href="#">Hardware Design</a>
        </li>
        
        <li>
          <a href="#">Software Design</a>
        </li>
        
        <li>
          <a href="#">Digital Signage</a>
        </li>
        
        <li>
          <a href="#">Automation</a>
        </li>
        
        <li>
          <a href="#">Artificial Intelligence</a>
        </li>
        
        <li>
          <a href="#">IoT</a>
        </li>
      </ul>
    </li> */}
    
    {/* <li class="nav__item">
      <h2 class="nav__title">Legal</h2>
      
      <ul class="nav__ul">
        <li>
          <a href="#">Privacy Policy</a>
        </li>
        
        <li>
          <a href="#">Terms of Use</a>
        </li>
        
        <li>
          <a href="#">Sitemap</a>
        </li>
      </ul>
    </li> */}
  </ul>
  
  <div class="legal">
    <p>&copy; 2022 Proper Hotels.com. All rights reserved.</p>
    
    <div class="legal__links">
      <span>Made with <span class="heart">♥</span> By  Matthews Mashoeu</span>
    </div>
  </div>
</footer>
    </div>

    
  )
}

export default Footer