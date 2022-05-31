import React from 'react'

if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(getPosition);
  }
  function getPosition(position) {
    console.log("LOCATION" + position.coords.latitude, position.coords.longitude);
  }
  

export default function Geolocation() {
  return (
    <div>Geolocation</div>
    
  )
}
