import React, { Fragment } from 'react'
import cx from 'classnames'
import { callOnKeyPress } from './utils';
export const LocationItemContainer = (props) => (
    <div className={'location-item'} tabIndex="1" onKeyPress={callOnKeyPress({ Enter: props.onClick })} onClick={props.onClick}>
        {props.children}
    </div>
)

export const LocationInfoWrapper = (props) => (
    <div className={cx("location-item__info")}>
        {props.children}
    </div>
)

export const LocationName = (props) => (
    <div className={"location-item__name"}>{props.name}</div>
)

export const LocationImage = (props) => (
    <div className={"location-item__image"}>
        <img src={props.imageUrl} alt={`Restaurant ${props.name}`} />
    </div>
)
export const LocationCategory = (props) => (
    <div className={"location-item__category"}>{props.category}</div>
)

export const LocationMetaDetailsWrapper = (props) => (
    <div className="location-details__details">
        {props.children}
    </div>
)

export const LocationAddress = ({ location }) => {
    if(!location.location) return null
    return (
        <div className="location-details__address">
            <div className="address-section">
                {location.location.address}
            </div>
            <div className="address-section">
                {location.location.city}, {location.location.state} {location.location.postalCode}
            </div>
        </div>
    )
}

export const LocationContact = ({ location }) => {
    if (!location.contact) return null
    return (
        <Fragment>
            <div className="location-details__phone">
                <a href={`tel:${location.contact.phone}`}>{location.contact.formattedPhone}</a>
            </div>
            <div className="location-details__social">
                {location.contact.twitter && `@${location.contact.twitter}`}
            </div>
        </Fragment>
    )
}