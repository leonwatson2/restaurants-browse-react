import React from 'react'
import PropTypes from 'prop-types'
import { LocationItemContainer, LocationImage, LocationName, LocationCategory, LocationInfoWrapper } from '../layout';
export const LocationItem = (props) => {
    return (
        <LocationItemContainer onClick={props.onClick} >
            <LocationImage imageUrl={props.imageUrl} name={props.name} />
            <LocationInfoWrapper>
                <LocationName name={props.name} />
                <LocationCategory category={props.category} />
            </LocationInfoWrapper>
        </LocationItemContainer>
    )
}

LocationItem.propTypes = {
    imageUrl: PropTypes.string,
    name: PropTypes.string,
    category: PropTypes.string,
    onClick: PropTypes.func,
}

export default LocationItem