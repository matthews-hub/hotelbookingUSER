import React, { useState } from 'react'
import '../CSS/adminCreate.css'
import { faUpload} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import Sidebar from './adminSidebar.js'
// import AdminNavbar from './adminNavbar'
// import AdminHome from './adminHome'
import { collection, doc, addDoc, Timestamp, serverTimestamp} from "firebase/firestore"; 
import {db, storage} from "../ConfigFirebase/firebase"
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage';



function AdminCreate() {

  const [description, setDescribtion] = useState("")
  const [hotelName, sethotelName] = useState("")
  const [features, setFeatures] = useState("")
  const [ratings, setRatings] = useState(0)
  const [price, setPrice] = useState(0)
  const [condition, setCondition] = useState("")
  const [province, setProvince] = useState("")
   
  const[file,setFile] = useState("");
  const storageRef = ref(storage, `/images/${file.name}`)
console.log(file.name);

  const handleAdd = async(e) =>{
    e.preventDefault()

 const task = await  uploadBytesResumable(storageRef, file)
  const  url = await getDownloadURL(task.ref)
    
    try{
    const res = await addDoc(collection(db, "newhotels",), {
       
      _description: description,
      _hotelName : hotelName,
      _features: features,
      _ratings:ratings,
      _price:price,
      _condition:condition,
      _province:province,
      Timestamp: serverTimestamp(),
      image:url.toString()
    }); 
    alert("New hotel/lodge added successfully")
  }catch(err){
    console.log(err)
  }


   }


   
    // console.log(res.id) 

  return (
    <>
    <div className='header'>
      <h1>ADMIN SITE</h1>
    </div>
    <div className='top'>
      <h2>Add New Hotel</h2>
    </div>

      <div className='bottom'>

        <div className='left'>
          <img src={file ? URL.createObjectURL(file): ""} 
          alt='hotel Image'
          htmlFor='file'
          />
           
          {/* <img src='https://images.pexels.com/photos/2467285/pexels-photo-2467285.jpeg?auto=compress&cs=tinysrgb&w=400'  */}
          {/* <img src={file ? URL.createObjectURL(file): ""} 
          alt='hotel Image'
          htmlFor='file'
          /> */}
          
          {/* <img src='https://images.pexels.com/photos/338504/pexels-photo-338504.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'  */}
          {/* <img src={file ? URL.createObjectURL(file): ""} 
          alt='hotel Image'
          htmlFor='file'
          /> */}
           

        </div>
        
        <div className='right'>
          <form onSubmit={handleAdd}>
            <div className='formInput'>
              <label htmlFor='file'>
                Hotel Image: <FontAwesomeIcon icon={faUpload} className="icon" />
              </label>
              <input type='file' id='file'
                onChange={e=>setFile(e.target.files[0])}
                style={{ display: 'none' }} />
            </div>

            <div className='formInput'>
              <label>Hotel Name</label>
              <input type="text" placeholder="Hotel Name" 
              onChange={(e)=>sethotelName(e.target.value)}></input>
            </div>

            <div className='formInput'>
              <label>Hotel Description</label>
              <textarea type="text" placeholder="Hotel Description"
              onChange={(e)=>setDescribtion(e.target.value)}></textarea>
            </div>
            <div className='formInput'>
              <label>Hotel Features</label>
              <textarea type="text" placeholder="Hotel Features"
              onChange={(e)=>setFeatures(e.target.value)}></textarea>
            </div>

            <div className='formInput'>
              <label>Hotel Ratings</label>
              <input type="text" placeholder="Hotel Ratings"
              onChange={(e)=>setCondition(e.target.value)}></input>
            </div>

            <div className='formInput'>
              <label>Hotel Ratings Stars</label>
              <input type="text" placeholder="Hotel Ratings Stars"
              onChange={(e)=>setRatings(e.target.value)}></input>
            </div>

            <div className='formInput'>
              <label>Hotel Price</label>
              <input type="text" placeholder="Hotel Price"
              onChange={(e)=>setPrice(e.target.value)}></input>
            </div>

            <div className='formInput'>
              <label>Hotel Duration</label>
              <input type="text" placeholder="Hotel Duration"></input>
            </div>
            
            <div className='formInput'>
              <label>Hotel Province</label>
              <input type="text" placeholder="Hotel Province"
              onChange={(e)=>setProvince(e.target.value)}></input>
            </div>
          <button type='submit'>ADD HOTEL</button>
          </form>
        </div>
      </div>
    </>
  )
  }

export default AdminCreate