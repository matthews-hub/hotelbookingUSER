import React, { useState, useEffect } from "react";
import { collection, getDocs, updateDoc } from 'firebase/firestore';
import { db } from '../ConfigFirebase/firebase';
import '../CSS/featuredHotels.css'
import { async } from '@firebase/util';

function FeaturedHotels() {
    const [hotelName, sethotelName] = useState("")
    
    const [hotels, setHotels] = useState([])
    const newHotelsRef = collection(db, "newhotels")
    
    useEffect(()=>{
        const getHotels = async()=>{
          const data = await getDocs(newHotelsRef)
          setHotels(data.docs.map((doc)=>({...doc.data(), id: doc.id})))
        };
        getHotels()
    }, [])
  return (
    <>
    <div>
 
      <div className="cardwrapper">
       
        <div className="featuredHotelHeading"  >
          <h1>Featured Hotels</h1>
        </div>

        <div class="cardrow">
{hotels.map((row) => (
          <div className="card"key={row.id}>
            <img src={row.image}
              alt="Denim Jeans" style={{ width: 150, alignItems:'center' }} />
            <h1>{row._hotelName}</h1>
            <p class="price">R{row._price}</p><label>Per Night</label>

            {/* <p>{row._description}</p> */}
            <div>
            <p><button>View Hotel</button></p>
            </div>
          </div>
 ))}
        </div> 
      </div>
     
      </div>
    </>
  )
}

export default FeaturedHotels