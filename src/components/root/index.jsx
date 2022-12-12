import React from 'react'
import { Link } from 'react-router-dom'
import site_logo from '../images/site_logo.jpg'
import Slider from '../slider'

const Root = () => {
    return (
        <div className='root'>
            <div className="site-logo">
                <Link to="/">
                    <img src={site_logo} alt="siteLogo" className='logo' />
                </Link>
                

            </div>
        </div>
    )
}

export default Root;
