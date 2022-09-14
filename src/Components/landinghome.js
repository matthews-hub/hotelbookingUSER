import React from 'react'
import '../CSS/landinghome.css'
import { Link, NavLink, Route } from 'react-router-dom'
import { useState, useEffect } from "react"
import {faCalendarDays, faPerson} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

 
 import {Box, Tab} from '@mui/material'
 import {TabContext, TabList, TabPanel} from '@mui/lab'
 

const Home = () => {
  
  const [value, setValue] = useState('one');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <>
    <section className="showcase">
        <div className="overlay">
        <h1 id="logo">Enjoy Vacations With Proper Hotels</h1>
        <p id='logo'>Let Us Plan You a Perfect Holiday</p>
      
        </div>

        <div className='search'>
             
                     <FontAwesomeIcon icon={faCalendarDays} className="homeIcon" />
                
                        <p>Check In</p>
                     <input type="date" className='homeSearchInput' />
            
                      <p>Check Out</p>
                     <input type="date" className='homeSearchInput' /> 
              
                     <FontAwesomeIcon icon={faPerson} className="homeIcon" />
                     <p>Adults: </p>
                     <input min={1} type="number" className='optionCounterBtn homeSearchInput' />
                     <p>Children: </p>
                     <input min={0} type="number" className='optionCounterBtn homeSearchInput' />
                     <p>Room:</p>
                     <input min={1} type='number' className='optionCounterBtn homeSearchInput' />                
                     
                     
                    <Link to="/HotelCart" className='searchBtn'>search</Link>
     </div>
    </section>
    
    </>
  )
}

export default Home