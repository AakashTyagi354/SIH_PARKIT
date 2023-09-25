import React from "react";
import '../styles/styles.css'

const MapCard = ({name,price,available}) => {
    
  return (
    <div>
      <div className="map-card">
        <div className="img-location"></div>
        <div className="details-location">
          <div className="location-price">
            <h6>{name}</h6>
            <h6>₹  {price}</h6>
          </div>
          <div className="available">
            <h6>Available Right Now</h6>
            <h6>{available}</h6>
          </div>
          <div className="btns">
            <div className="instant-btn">
              <a href="/park"><button>Instant</button></a>
            </div>
            <div className="pre-btn">
              <a href="/park"><button>Prebook</button></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MapCard;
