import React from 'react'
import PropTypes from 'prop-types'
import { GoogleMap } from './GoogleMap';
import { LocationInfoWrapper, LocationName, LocationCategory, LocationMetaDetailsWrapper, LocationAddress, LocationContact,  } from '../layout';

export const LocationDetails = ({ location }) => {
    return (
        <div className={'location-details'}>
            <GoogleMap location={location}/>
            <LocationInfoWrapper details>
                <LocationName name={location.name} />
                <LocationCategory category={location.category} />
            </LocationInfoWrapper>
            {
                location && (
                    <LocationMetaDetailsWrapper>
                        <LocationAddress location={location} />
                        <LocationContact location={location} />
                    </LocationMetaDetailsWrapper>
                )
            }
        </div>
    )
}

LocationDetails.propTypes = {
    location: PropTypes.object
}

LocationDetails.defaultProps = {
    location: {},
}
export default LocationDetails