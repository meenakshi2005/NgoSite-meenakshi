import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <>
            <nav class="nav nav_top">
                <div class="logo">
                    <Link to="/"><img src="images/logo.png" width="250" /></Link>
                </div>
                <div class="nav_side">
                    <Link to="/">HOME</Link>
                    <Link to="/about">ABOUT US</Link>
                    <Link to="/donate">DONATE</Link>
                    <Link to="/contact">CONTACT</Link>
                </div>
            </nav>
        </>
    )
}

export default Header