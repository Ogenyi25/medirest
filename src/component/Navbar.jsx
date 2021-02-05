import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';


const Navbar = () => {
    const [navbar, setNavbar] = useState(false);

    //function that handle the change background on scroll
    const changeBackground = () => {
        if(window.scrollY > 10) {
            setNavbar(true)
        }else {
            setNavbar(false)
        }
    }
    window.addEventListener('scroll', changeBackground);
    return (
        <div>
            <div className={navbar ? 'navbar active' : 'navbar'}>
                <Link to='/' className="logo">Medi<span>Rest</span></Link>
                <ul className="nav-list">
                    <li className="nav-item"><Link to='/' className="nav-link">Home</Link></li>
                    <li className="nav-item"><Link to='/about' className="nav-link">About</Link></li>
                    <li className="nav-item"><Link to='/services' className="nav-link">Services</Link></li>
                    <li className="nav-item"><Link to='/work' className="nav-link">Work</Link></li>
                    <li className="nav-item"><Link to='/contact' className="nav-link">Contact</Link></li>
                </ul>
            </div>
        </div>
    )
}


export default Navbar;