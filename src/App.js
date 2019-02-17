import React, { useState, useEffect } from 'react';
import cx from 'classnames'
import { LocationDetails } from './components/LocationDetails';
import { ListView } from './components/ListView';
import Header from './components/Header';

const App = () => {
  const [ locations, setLocations ] = useState([])
  const [ selectedLocation, setSelectedLocation ] = useState({})
  const [ detailsOpen, setDetailsOpen ] = useState(false)
  const closeDetails = () => {
    setDetailsOpen(false)
  }

  const openDetailsFor = (location) => {
    setDetailsOpen(true) 
    setSelectedLocation(location)
  }

  useEffect(() => {
    fetch( 'https://s3.amazonaws.com/br-codingexams/restaurants.json')
      .then(res => res.json())
      .then(data => {
        setLocations(data.restaurants)
      })
  }, [])
  return (
    <div className={cx({ open: detailsOpen })}>
      <Header onClose={closeDetails} />
      <LocationDetails location={selectedLocation} onClose={closeDetails}/>
      <ListView locations={locations} onLocationSelection={openDetailsFor}/>
    </div>
  )
}

export default App;
