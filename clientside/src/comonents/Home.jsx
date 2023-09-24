import React from 'react'
import Search from './Search'


const Home = () => {

  return (
    <div className='Home-main'>
      
      <div className="content-section">
        <div className="content">
          <div className="content-top">
            <div className="content-search">
              <Search />
            </div>
            <div className="content-btn">
            <a href="/maps"><button className="search-btn">Search</button></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home