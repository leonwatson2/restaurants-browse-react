import React from 'react'
import PropTypes from 'prop-types'
import LocationItem from './LocationItem';

export const ListView = (props) => {
    
    const locationClicked = (location) => (event) => {
        props.onLocationSelection( location )
    }
    return (
        <div className={'list-view'}>
            { 
                props.locations.map(
                    (location) => ( 
                        <LocationItem 
                            key={location.name} 
                            name={location.name} 
                            category={location.category} 
                            imageUrl={ location.backgroundImageURL } 
                            onClick={locationClicked(location)}/> 
                    ) 
                ) 
            }
        </div>
    )
}

ListView.propTypes = {
    locations: PropTypes.array,
    onLocationSelection: PropTypes.func,
}
ListView.defaultProps = {
    locations: [],
    onLocationSelection: () => { },
}
export default ListView
