import React from 'react'
import MapIcon from '../assets/icon_map@2x.png'
import ChevronLeft from '../assets/ic_webBack@2x.png'
const Header = (props) => (
    <header className="app-header">
        <div className="app-header__title">Lunch Tyme</div>
        <div className="app-header__mapicon"><img src={MapIcon} alt="MapIcon"/></div>
        <div className="app-header__back" onClick={props.onClose}><img src={ChevronLeft} alt=""/></div>
    </header>
)

export default Header