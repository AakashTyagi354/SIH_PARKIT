import React, { useState } from "react";
import "../styles/styles.css";
import "mapbox-gl/dist/mapbox-gl.css";
import ReactMapGL, { Marker } from "react-map-gl";
import "../styles/styles.css";
import geojson from "../data/data";
import MapCard from "./mapCard.jsx";


const locations = [
  {
    name: "Narpaatgiri Police Station",
    price: "10",
    available: "10",
  },
  {
    name: "Narpaatgiri Police Station 2",
    price: "10",
    available: "10",
  },
  {
    name: "Narpaatgiri Police Station 3",
    price: "10",
    available: "10",
  },
  {
    name: "Narpaatgiri Police Station 4",
    price: "10",
    available: "10",
  },
  {
    name: "Narpaatgiri Police Station 5",
    price: "10",
    available: "10",
  },
  {
    name: "Narpaatgiri Police Station 6",
    price: "10",
    available: "10",
  },
  {
    name: "Narpaatgiri Police Station 7",
    price: "10",
    available: "10",
  },
  {
    name: "Narpaatgiri Police Station 8",
    price: "10",
    available: "10",
  },
];
const Map = () => {
  const TOKEN =
    "pk.eyJ1IjoiZGV2ZXNoMTE0MTEiLCJhIjoiY2xteHU2Y2xkMHhmMjJsbGN5enpvYXh2aiJ9.bBWEfwffQR7__rE3r-9p-Q";
  const [viewPort, setViewPort] = useState({
    latitude: 18.5228,
    longitude: 73.8673,
    zoom: 16,
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
