import React  from 'react'
import Search from './Search'
import img1 from '../icons/clock.png'
import img2 from '../icons/checked.png'
import img3 from '../icons/shedule.png'
import img4 from '../icons/instant-message.png'
import img5 from '../icons/cancel.png'
import img6 from '../icons/bar-chart.png'







const Home = () => {

  return (
    <div className="home-main">
      <div className="img-search">
        <div className="search">
          <Search />
        </div>
        <div className="search-btn">
          <a href="/maps">
            <button>Search</button>
          </a>
        </div>
      </div>
      <div className="features">
        <div className="heading">
          <h1>Features</h1>
        </div>
        <div className="card-container">
          <div className="card card1">
            <div className="card-logo">
              <img src={img1} alt="" />
            </div>
            <div className="card-feature">
              <h3>Save Time</h3>
            </div>
          </div>
          <div className="card card2">
            <div className="card-logo">
              <img src={img2} alt="" />
            </div>
            <div className="card-feature">
              <h3>Check Availability</h3>
            </div>
          </div>
          <div className="card card3">
            <div className="card-logo">
              <img src={img3} alt="" />
            </div>
            <div className="card-feature">
              <h3>Pre-schedule</h3>
            </div>
          </div>
          <div className="card card4">
            <div className="card-logo">
              <img src={img4} alt="" />
            </div>
            <div className="card-feature">
              <h3>Instant Parking</h3>
            </div>
          </div>
          <div className="card card5">
            <div className="card-logo">
              <img src={img5} alt="" />
            </div>
            <div className="card-feature">
              <h3>Auto-cancellation</h3>
            </div>
          </div>
          <div className="card card6">
            <div className="card-logo">
              <img src={img6} alt="" />
            </div>
            <div className="card-feature">
              <h3>Dynamic Pricing</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home