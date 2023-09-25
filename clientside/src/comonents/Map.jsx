import React, { useState } from "react";
import "../styles/styles.css";
import "mapbox-gl/dist/mapbox-gl.css";
import ReactMapGL, { Marker } from "react-map-gl";
import "../styles/styles.css";
import geojson from "../data/data";
import MapCard from "./mapCard.jsx";


const locations = [
  {
    name: "KEM Hospital Parking",
    price: "17",
    available: "3",
  },
  {
    name: "Parking near Todkar Hospital",
    price: "5",
    available: "16",
  },
  {
    name: "ISKCON Pune Camp Parking",
    price: "10",
    available: "10",
  },
  {
    name: "Kayani Bakery Street",
    price: "9",
    available: "13",
  },
  {
    name: "Babu Video Games",
    price: "10",
    available: "10",
  },
  {
    name: "Kashewadi Slum Parking",
    price: "8",
    available: "11",
  },
  {
    name: "La Fit Parking",
    price: "20",
    available: "1",
  },
  {
    name: "RCM Gujarati High School",
    price: "5",
    available: "16",
  },
];
const Map = () => {
  const TOKEN =
    "pk.eyJ1IjoiZGV2ZXNoMTE0MTEiLCJhIjoiY2xteHU2Y2xkMHhmMjJsbGN5enpvYXh2aiJ9.bBWEfwffQR7__rE3r-9p-Q";
  const [viewPort, setViewPort] = useState({
    latitude: 18.516542579743234, 
    longitude: 73.87202740814477,
    zoom: 15,
  });
  // const [newPlace, setNewPlace] = useState('');

  return (
    <div className="map-main">
      <div className="map-left">
        {locations.map((ele) => (
           <MapCard name={ele.name} price={ele.price} available={ele.available} key={ele.name}/>
          
        ))}
      </div>

      <div className="map-right">
        <ReactMapGL
          {...viewPort}
          mapboxAccessToken={TOKEN} // Use 'mapboxApiAccessToken' instead of 'mapboxAccessToken'
          mapStyle="mapbox://styles/devesh11411/clmxtiho502r601pb7nblffcq" // Use a valid Mapbox style URL
          onMove={(evt) => setViewPort(evt.viewState)}
        >
          {geojson.features.map((parks, index) => {
            return (
              <Marker
                key={index}
                latitude={parks.geometry.coordinates[0]}
                longitude={parks.geometry.coordinates[1]}
                offsetTop={-48}
                offsetLeft={-24}
              >
                <img
                  src="https://img.icons8.com/color/48/000000/marker.png"
                  alt="mark"
                />
              </Marker>
            );
          })}
        </ReactMapGL>
      </div>
    </div>
  );
};

export default Map;
