import React, { useEffect, useState } from 'react'

const google = window.google

export const GoogleMap = ({ location }) => {
    const [map, setMap] = useState(null)
    const [markers, setMarkers] = useState([])
    useEffect( () => {
        if(google){
            const position = {lat: 32.950787, lng: -96.821118}
            const googleMap = new google.maps.Map(document.getElementById('map'), {
                center: position,
                zoom: 15
            });
            
            setMap(googleMap)
        }
    }, [google])
    useEffect(  () => {
         if(map && location.location){
            const position = getLocationLatLng(location.location)
            const marker = new google.maps.Marker({ position, map, title: location.name, animation: google.maps.Animation.DROP })
            setMarkers(new Set([ ...markers, marker ]))
            map.setCenter(position)
         }
    }, [map, location])

    const getLocationLatLng = (location) => {
         return { lat: location.lat, lng: location.lng }
    }
    return (
        <div className="map-container">
            <div id="map">

            </div>
        </div>
    )
}

export default GoogleMap