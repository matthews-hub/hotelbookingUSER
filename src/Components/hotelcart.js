import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import '../CSS/hotelcart.css'
import { addDoc, collection, getDocs, updateDoc, serverTimestamp } from 'firebase/firestore';
import { db } from '../ConfigFirebase/firebase';
import { doc} from "firebase/firestore";
import { async } from '@firebase/util';
import { Box, Grid, Modal, Typography } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

 function HotelCart(closeModal){
    const [hotels, setHotels] = useState([])
    
    const [open, setOpen] = React.useState(false);
    const [hotelIDD, setHotelID] = useState('')
    const [price, setPrice] = useState("")
    const [province, setProvince] = useState("")
    const [hotelName, sethotelName] = useState("")
    const [checkInday, setCheckInday] = useState("")
    const [checkOutday, setCheckOutday] = useState("")
    const [userName, setUsername] = useState("")
    const [Hname, setHname] = useState('')
    const [email, setEmail] = useState("")
    const [adults, setAdults] = useState("")
    const [children, setChildren] = useState("")
    const [room, setRoom] = useState("")
    const [searched, setSearched] = useState("");

    const handleClose = () => setOpen(false);


const newHotelsRef = collection(db, "newhotels")
    useEffect(()=>{
        const getHotels = async()=>{
          const data = await getDocs(newHotelsRef)
          setHotels(data.docs.map((doc)=>({...doc.data(), id: doc.id})))
        };
        getHotels()
    }, [])


    const style = {
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      width: 400,
      bgcolor: 'background.paper',
      border: '2px solid #000',
      boxShadow: 24,
      p: 4,
    };

    const UpdateButton = async ()=>{
      setOpen(false)
     try {
    const hoteReff = await addDoc(collection(db,'bookings',),{
      //hotel object

        _email: email,
        _hotelName : hotelName,
        _price:price,
        _province:province,
        _checkInday: checkInday,
        _checkOutday: checkOutday,
        _adults:  adults,
        _children: children,
        _room: room,
        Timestamp: serverTimestamp(),
    });
    alert("Booking successfull")
   }catch(error){
      console.log(error)
   }
    }


    const handleOpen = (_hotelName, _province, _price) =>{

      console.log(hotelIDD)
      //getting a document
     
      setOpen(true);
      sethotelName(_hotelName)
      setPrice(_price)
      setProvince(_province)
      
    } 
    
    const Search =(hote)=>{
      
      setHotels(hotels.filter((hote)=>
        hote._province.toLowerCase().includes(searched)
       
      ));
    console.log(hote)
    };

    return(
      <>

  <div>
          <div className='reserveContainer'>
            <div className='reserveWrapper'>

              

              <div className='reserveSearch'>
                <h1 id='reserveHead'>Search Hotel/Lodge By Province</h1>
                <div className='reserveItem'>
                 
                  <input onChange={(e) => setSearched(e.target.value)}></input>
                  <button onClick={(e)=>Search(e.target.value)}>Search Province</button>
                  
                </div>
                <h6 id='reserveHead'>SEARCH HOTEL BY PRICE RANGE</h6>
                <div className='reserveItem'>
                 
                  <input type='range' 
                  style={{color:'teal'}}
                  onChange={(e) => {setSearched(e.target.value) }}></input>
   
                  
                </div>
                
              </div>
               

     
<div className="reserveResults">
      
      
      {hotels.map((row) => (
        <div className='hotel' key={row.id} >
        <img src={row.image} alt="" className='hotelImg'></img> 
          <div className='hotelDescribtion'>
            <h5 className='hotelName'>{row._hotelName}, {row._province}</h5>
            
            <span className='hotelSubDescribtion'>
              {row._description}
            </span>
          <span className='hotelRoomFeatures'>{row._features}</span>
          </div>
          <div className='hotelDetails'>
            <div className='hotelRating'>
              <span>{row._condition}</span>
              <button>{row._ratings}</button>
            </div>
            <div>
            
            </div>
            <div className='hotelPricingDetails'>
              <div className='hotelRating'>
                <span className='hotelPrice'>R{row._price}</span>
                <span>Per Day/Night</span>
                </div>
                <a href="#" className='hotelBtnCheck' to="/reservebooking"
                onClick={(e)=>{handleOpen(row._hotelName, row._province, row._price)}}
                >
                CHECK AVAILABILIY
                </a>
                 
            </div>
          </div>


          <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        className="gridcontainer"
      >
        <Box sx={style} key={row.id}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
           
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
           <form >
           <div style={{alignItems:'right', marginLeft:10}}>
         <button onClick={()=>closeModal(false)} style={{alignItems:'right', backgroundColor:'red', color:'white'}}>X</button>
       </div>
           <h3 style={{textAlign:'center', color:'black', marginTop: 0}}>Reserve Your Booking</h3>
            <Grid container>
              <Grid item xs={6}>
              {/* <div>
              <label  className='formInput'  style={{ color: "black" }}>User Name</label>
                        <div>
                          <label onChange={(e) => setPrice(e.target.value)}
                            style={{ color: "black", borderBottomStyle: 5  }}
                          >R {row._email}</label>
                        </div>
            </div> */}
            <br/>
              <div>
              <label  className='formInput'  style={{ color: "black" }}>Hotel Name</label>
                        <div>
                          <label onChange={(e) => sethotelName(e.target.value)}
                            style={{ color: "black" }}
                          >{row._hotelName}</label>
                        </div>
            </div>
            <br/>
            <div>
              <label  className='formInput'  style={{ color: "black" }}>Hotel Province</label>
                        <div>
                          <label onChange={(e) => setProvince(e.target.value)}
                            style={{ color: "black", borderBottomStyle: 5  }}
                          >{row._province}</label>
                        </div>
            </div>
                     <label style={{ color: "black" }}>Adults: </label>
                     <input min={1} type="number" 
                     onChange={(e) => setAdults(e.target.value)}
                     style={{ color: "black" }} className='optionCounterBtn homeSearchInput' />

                     <label style={{ color: "black" }}>Children: </label>
                     <input min={0} type="number"
                     onChange={(e) => setChildren(e.target.value)} 
                     style={{ color: "black" }} className='optionCounterBtn homeSearchInput' />
              </Grid>
              <Grid item xs={6}>
              <label style={{ color: "black" }}>Room:</label>
                     <input min={1} type='number' 
                     onChange={(e) => setRoom(e.target.value)}
                     style={{ color: "black" }} 
                     className='optionCounterBtn homeSearchInput' />
            <div>
              <label  className='formInput'  style={{ color: "black" }}>Check In</label>
                        <div>
                        <input type="date" className='homeSearchInput'
                        onChange={(e) => setCheckInday(e.target.value)}
                        style={{ color: "black", borderBottomStyle: 5  }}
                      >{row._checkInday}</input>
                        </div>
            </div>
            <div>
              <label  className='formInput'  style={{ color: "black" }}>Check Out</label>
                        <div>
                        <input type="date" className='homeSearchInput'
                        onChange={(e) => setCheckOutday(e.target.value)}
                        style={{ color: "black", borderBottomStyle: 5  }}
                      >{row._checkOutday}</input>
                        </div>
            </div>

            <div>
                      <label  className='formInput'  style={{ color: "black" }}>Hotel Price</label>
                        <div>
                          <label onChange={(e) => setPrice(e.target.value)}
                            style={{ color: "black", borderBottomStyle: 5  }}
                          >R {row._price}</label>
                        </div>
            </div> 

              </Grid>
              
            </Grid>
            <button type='submit' onClick={UpdateButton}>BOOK NOW</button>
           </form>
          </Typography>
        </Box>
      </Modal>
                      
    </div>
    ))}
    </div>
       </div>
          </div>

    </div>


    </>
    )
}
export default HotelCart