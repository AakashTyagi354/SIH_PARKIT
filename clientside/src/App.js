import React from 'react'
import { BrowserRouter as Router , Routes , Route } from 'react-router-dom'
import Home from './comonents/Home.jsx';
import Navbar from './comonents/Navbar.jsx'
import About from './comonents/About.jsx'
import Report from './comonents/Report.jsx'
import { Login } from './comonents/Login.jsx';
import './styles/styles.css';

const App = () => {
  return (
    <div className='container-main'>
      <Navbar/>
      <Router>
        <Routes>
          <Route path='/' element= {<Login/>}/>
          <Route path='/home' element= {<Home/>}/>
          <Route path='/about' element= {<About/>}/>
          <Route path='/report' element= {<Report/>}/>
        </Routes>
      </Router>
      {/* <Footer/> */}
    </div>
  )
}

export default App