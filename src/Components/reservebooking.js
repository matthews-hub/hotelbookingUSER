import React from 'react'

function Reservebooking() {
  return (
    <div>
    <div className='reserveContainer'>
     <div className='reserveWrapper'>     
        
      <div className='reserveSearch'>
        <h1 id='reserveHead'>Search Hotel/Lodge By Province</h1>
        <div className='reserveItem'>
          <h5>Select Province</h5>

          <button>Limpopo Province</button>
          <button>Gauteng Province</button>
          <button>Mpumalanga Province</button>
          
        </div>
      </div>
      <div className='reserveResults'>
        
        </div>
        
        </div>
     </div>

    </div>
  )
}

export default Reservebooking