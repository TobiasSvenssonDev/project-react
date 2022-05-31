import React from 'react'

if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(getPosition);
  }
  function getPosition(position) {
    const lat = position.coords.latitude;
    const long =  position.coords.longitude;
    console.log("long = " + long)
    console.log("Lat = " + lat)
  }


export default function Geolocation() {
  return (
    <div>Geolocation</div>
    
  )
}