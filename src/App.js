import logo from './logo.svg';
import './App.css';
import AdminCreate from './Components/adminCreate.js'
import AdminTable from './Components/adminTable.js'
import Login from './Components/login';
import SignUp from './Components/signup';
import Navbar from './Components/navbar'
import Home from './Components/landinghome'
import Footer from './Components/footer'
import HotelCart from './Components/hotelcart';
import FeaturedHotels from './Components/featuredHotels';
 
import { BrowserRouter, BrowserRouter as Router, Navigate, Route, Routes, Switch} from 'react-router-dom'

function App() {

 
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
      <Routes exact path="Home"/>
        <Routes>
        <Route exact path="Home" element={<Home/>}/>
        </Routes>
        
        <Routes>
        <Route exact path="Home" element={<FeaturedHotels/>}/>
        </Routes>
          <Routes>
            <Route exact path="/Login" element={<Login/>}>
            </Route>
          </Routes>
          <Routes>
            <Route exact path="/SignUp" element={<SignUp />}>
            </Route>
          </Routes>
 
           
         
           <Routes>
            <Route exact path='/HotelCart' element={<HotelCart/>}>
            </Route>
           </Routes>
             
           <Routes>
            <Route exact path="/Admincreate" element={<AdminCreate/>}>
            </Route>
          </Routes>
          <Routes>
            <Route exact path="/Admincreate" element={<AdminTable />}>
            </Route>
          </Routes>
          
          {/* <FeaturedHotels/> */}
          <Footer/>
        
      </BrowserRouter>
    </div>
  );
}

export default App;
