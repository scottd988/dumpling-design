import React from 'react'
import './navbar.css'
import logo from '../Assets/logo.png'
import cartIcon from '../Assets/cart_icon.png'

const Navbar = () => {
    return (
        <div className='navbar'>
            <div className='nav-logo'>
              <img src = {logo} alt='logo' />
              <p>Dumpling Shop</p>
            </div>
            <ul className="nav-menu">
                <li>Shop</li>
                <li>Men</li>
                <li>Women</li>
                <li>Kids</li>
            </ul>
            <div className="nav-login-cart">
                <button>Login</button>
                <img src={cartIcon} alt="Cart-icon" />
                <button>Sign-up</button>
            </div>
        </div>
)}

export default Navbar