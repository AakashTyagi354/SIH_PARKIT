import React,{useRef, useState} from 'react';
import { StandaloneSearchBox,LoadScript } from '@react-google-maps/api';
import '../styles/styles.css'

const Search = () => {
  
  const [address, setAddress] = useState('');
  const [lat, setLat] = useState('');
  const [lng, setLng] = useState('');

  const inputRef= useRef('');

  const handlePlaceChanged = () => {
      const [place] = inputRef.current.getPlaces('');
      setAddress(place.formatted_address);
      setLat(place.geometry.location.lat());
      setLng(place.geometry.location.lng());
  }
  
  console.log(address);
  console.log(lat);
  console.log(lng);



  return (
    <LoadScript
      googleMapsApiKey='APIKEY'
      libraries={['places']}>
        <StandaloneSearchBox onLoad={ref => (inputRef.current = ref)}
        onPlacesChanged={handlePlaceChanged} className='content-top'>
          <input type="text" className='content-search' placeholder='Enter Location' />
        </StandaloneSearchBox>
    </LoadScript>
  )
}

export default Search