import React from 'react';
import { Link } from "react-router-dom";

const Nav = () => {
    return (
        <ul className="mainmenu">
            <li className="has-droupdown"><Link to="#">Home</Link>
                <ul className="submenu">
                    <li><Link to="/">Home</Link></li>
                </ul>
            </li>

            <li><Link to="/about-us">About Us</Link></li>

            <li><Link to="/service">Service</Link></li>

            <li><Link to="/blog-grid">News&Resources</Link></li>
            {/* 

            <li className="has-droupdown"><Link to="#">Portfolio</Link>
                <ul className="submenu">
                    <li><Link to="/portfolio">Portfolio Default</Link></li>
                    <li><Link to="/portfolio-three-column">Portfolio Three Column</Link></li>
                    <li><Link to="/portfolio-full-width">Portfolio Full Width</Link></li>
                    <li><Link to="/portfolio-grid-layout">Portfolio Grid Layout</Link></li>
                    <li><Link to="/portfolio-box-layout">Portfolio Box Layout</Link></li>
                </ul>
            </li> */}

            <li className="has-droupdown"><Link to="/contact">Contact Us</Link></li>
        </ul>
    )
}
export default Nav;
