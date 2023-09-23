import React from 'react'


import '../styles/styles.css'

const Navbar = () => {
  return (
    <div  className='Nav-main'>
        <div className="logo">

        </div>
        <div className="pages non-hover">
          <a href='/home'>Home</a>
          <a href='/about'>About</a>
          <a href='/report'>Report</a>
        </div>
        <div className="log">

        </div>
    </div> 
  )
}

export default Navbar