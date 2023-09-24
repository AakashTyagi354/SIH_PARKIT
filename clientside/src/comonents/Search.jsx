import React,{useRef} from 'react';
import { StandaloneSearchBox,LoadScript } from '@react-google-maps/api';
import '../styles/styles.css'

const Search = () => {
  const inputRef= useRef();

  const handlePlaceChanged = () => {
    const [place] = inputRef.current.getPlaces();
    if(place){
      console.log(place.formatted_address);
      console.log(place.geometry.location.lat());
      console.log(place.geometry.location.lng());

    }
  }
  return (
    <LoadScript
      googleMapsApiKey='AIzaSyDf8yBx-7BX0KmLLOkobnD7pu5HZ1gHoSE'
      libraries={['places']}>
        <StandaloneSearchBox onLoad={ref => (inputRef.current = ref)}
        onPlacesChanged={handlePlaceChanged} className='content-top'>
          <input type="text" className='content-search' placeholder='Enter Location'/>
        </StandaloneSearchBox>

    </LoadScript>
  )
}

export default Search