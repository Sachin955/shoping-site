import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import site_logo from '../images/site_logo.jpg'
import cart_image from '../images/cart_image.png'
import '../header/index.css'
import Root from '../root'
import NavLinks from '../nav-links'


const Header = (props) => {
    const { cartCount } = props
    return (
        <div className="header">
            <nav className="navbar">
                <Root/>
                <NavLinks/>
                <div className="section-cart">
                    <div className="cart-image">
                        <Link to="/cart">
                            <img src={cart_image} alt="" className='cart_image' />
                            <div>{cartCount ? cartCount : ""}</div>
                        </Link>
                    </div>
                </div>
            </nav>
        </div>
    )

}
export default Header;