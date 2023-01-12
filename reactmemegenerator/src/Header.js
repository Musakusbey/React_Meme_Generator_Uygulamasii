import React from 'react'
import './Header.css'

const Header = (props) => {
    return (
        <header>
            <p> {props.name}</p>
        </header>
    )
}

export default Header