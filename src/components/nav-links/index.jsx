import React from 'react'
import { Link } from 'react-router-dom'

const NavLinks = () => {
    return (
        <div classNameName='nav-links'>
            <ul className="nav nav-pills" >
                <li className="nav-item" role="presentation">
                    <Link to='/home' >
                        <button className="nav-link" type="button">Home</button>
                    </Link>
                </li>
                <li className="nav-item" role="presentation">
                    <Link to='/about'>
                        <button className="nav-link"type="button">About</button>
                    </Link>
                </li>
                <li className="nav-item" role="presentation">
                    <Link to='/contact  '>
                        <button className="nav-link"type="button">Contact</button>
                    </Link>
                </li>
            </ul>


        </div>
    )
}

export default NavLinks
