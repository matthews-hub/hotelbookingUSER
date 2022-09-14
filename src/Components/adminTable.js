import React, { useState, useEffect } from 'react'
import createContext from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import {faTrash, faEdit,faUpload} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { collection, getDocs, updateDoc } from 'firebase/firestore';
import { db } from '../ConfigFirebase/firebase';
import { doc, deleteDoc } from "firebase/firestore";
import { flexbox } from '@mui/system';
import { red, teal } from '@mui/material/colors';
import { async } from '@firebase/util';
//modal
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

function AdminTable() {
    const [open, setOpen] = React.useState(false);
    const [Hname, setHname] = useState('')
    const [hotelID, setHotelID] = useState('')

  //update button
  const UpdateButton = async ()=>{
    setOpen(false)
   

  const hoteRef = doc(db,'newhotels',hotelID)
    //hotel object
    const updates = {
      _description: description,
      _hotelName : hotelName,
      _features: features,
      _ratings:ratings,
      _price:price,
      _condition:condition,
      _province:province,
    }


    await updateDoc(hoteRef,updates).then(()=>{
      alert("Successfully Updated")
    }).catch(err=>{
      console.log(err)
    })

  }
  
    //edid button
  const handleOpen = (index) =>{


    console.log(hotelID)
    //getting a document
   
    setOpen(true);
 
 
    console.log("i am clicked",index)
    console.log(hotels[index])
    setHname(hotels[index]._hotelName)
    setHotelID(hotels[index].id)
    
  } 
  const handleClose = () => setOpen(false);

    const [hotels, setHotels] = useState([])
    const newHotelsRef = collection(db, "newhotels")
    
    useEffect(()=>{
        const getHotels = async()=>{
          const data = await getDocs(newHotelsRef)
          setHotels(data.docs.map((doc)=>({...doc.data(), id: doc.id})))
        };
        getHotels()
    }, [])

//Delete Function
    function handleDelete(id){
      alert('Delete Clicked', {id})
      const getDoc = doc(db,'newhotels',id)
      deleteDoc(getDoc).then(()=>{
        alert("deleted successfully")
      }).catch(err=>{
        console.log(err)
      })
    }
 
  
    const[file,setFile] = useState("");
  const [description, setDescribtion] = useState("")
  const [hotelName, sethotelName] = useState("")
  const [features, setFeatures] = useState("")
  const [ratings, setRatings] = useState(0)
  const [price, setPrice] = useState(0)
  const [condition, setCondition] = useState("")
  const [province, setProvince] = useState("")

  //modal style
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

  return (
    <>
    <div className='top'>
      <h2>Newly Added Hotels</h2>
    </div>
  <div className='bottom'>
    <TableContainer>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Hotel Image</TableCell>
            <TableCell >Hotel Description</TableCell>
            <TableCell >Hotel Condition</TableCell>
            <TableCell >Hotel Price&nbsp;(Per N/D)</TableCell>
            <TableCell >Hotel Province</TableCell>
            <TableCell >Hotel Name</TableCell>
            <TableCell>Hotel Features</TableCell>
            <TableCell>Hotel Ratings Stars</TableCell>

          </TableRow>
        </TableHead>
        <TableBody>
          {hotels.map((row,index) => (
            <TableRow
              key={row.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row" id="image">
               <img src={row.image} style={{ height: 30 , width:30}} />
              </TableCell>
              
              <TableCell>{row._description}</TableCell>
              <TableCell>{row._condition}</TableCell>
              <TableCell>{row._price}</TableCell>
              <TableCell>{row._province}</TableCell>
              <TableCell>{row._hotelName}</TableCell>
              <TableCell>{row._features}</TableCell>
              <TableCell>{row._ratings}</TableCell>
            <div className='actionbtn' 
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  padding: 10,
                  margin: 10,
                  backgroundColor: red,

                }} >
                <FontAwesomeIcon icon={faTrash} className="icon" 
                onClick={(e)=>{handleDelete(row.id)}} />
          
               <FontAwesomeIcon icon={faEdit}  
               onClick={(e)=>{handleOpen(index)}}/> 
            </div>
              
            </TableRow>
          ))}
      
        </TableBody>
    
      </Table>
      
    </TableContainer>
    </div>
    <div>
      {/* <Button onClick={handleOpen}>Open modal</Button> */}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
           
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <div>
                  
        <form style={{textAlign:'center', color:'black', marginTop: 0,borderRadius:20, borderColor:"teal"}}>
        <h1 style={{textAlign:'center', color:'black', marginTop: 0}}>UPDATE HOTEL DETAILS</h1>
                   
         
          

            <div className='formInput'>
              <label htmlFor='file'>
              <label style={{aligncolor:'black'}}>Hotel Image: </label>  
                <FontAwesomeIcon icon={faUpload} className="icon" style={{alignItems:'left', color:'black'}}/>
              </label>
              <input type='file' id='file'
                onChange={e=>setFile(e.target.files[0])}
                style={{ display: 'none' }} />

       
            </div>

            <div className='formInput'>
             
              <input type="text" placeholder="Hotel Name" 
              onChange={(e)=>sethotelName(e.target.value)}></input>
            </div>

            <div className='formInput'>
              
              <textarea type="text" placeholder="Hotel Description"
              onChange={(e)=>setDescribtion(e.target.value)}></textarea>
            </div>
            <div className='formInput'>
               
              <textarea type="text" placeholder="Hotel Features"
              onChange={(e)=>setFeatures(e.target.value)}></textarea>
            </div>

            <div className='formInput'>
               
              <input type="text" placeholder="Hotel Ratings"
              onChange={(e)=>setCondition(e.target.value)}></input>
            </div>

            <div className='formInput'>
              
              <input type="text" placeholder="Hotel Ratings Stars"
              onChange={(e)=>setRatings(e.target.value)}></input>
            </div>

            <div className='formInput'>
               
              <input type="text" placeholder="Hotel Price"
              onChange={(e)=>setPrice(e.target.value)}></input>
            </div>

            <div className='formInput'>
              
              <input type="text" placeholder="Hotel Province"
              onChange={(e)=>setProvince(e.target.value)}></input>
            </div>
            <br></br><br></br>
          <button type='submit' onClick={UpdateButton}>UPDATE HOTEL</button>
          </form>
            </div>

          </Typography>
        </Box>
      </Modal>
    </div>
    </>
  )
}
export default AdminTable