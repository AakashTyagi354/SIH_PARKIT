import React  from 'react'
import Search from './Search'





const Home = () => {

  return (
    <div className='Home-main'>
      <div className="Home-img">
          
      </div>
      <div className="Home-search">
        <div className="search-input">
          <Search/>
        </div>
        <div className="searh-btn">
          <a href="/maps">
            <button>Search</button>
          </a>
        </div>
      </div>
      <div className="Hoem-features">
        <div className="header">
          <h1>Features</h1>
        </div>
        <div className="features">

        </div>
      </div>
    </div>
  )
}

export default Home