import React, { useState } from 'react';
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

    // const [state, setState]= useState({
        // toggle: false
    //    })

    // const {toggle} = this.state;

    
    
    return (
        <div>
            <div className={navbar ? 'navbar active' : 'navbar'}>
                <Link to='/' className="logo">Medi<span>Rest</span></Link>
                <ul className="nav-list" /*{state.toggle ? "toggle nav-list": ""}*/ >
                    <li className="nav-item"><Link to='/' className="nav-link">Home</Link></li>
                    <li className="nav-item"><Link to="/about" className="nav-link">About</Link></li>
                    <li className="nav-item"><Link to='/services' className="nav-link">Services</Link></li>
                    <li className="nav-item"><Link to='/teams' className="nav-link">Teams</Link></li>
                    <li className="nav-item"><Link to='/contact' className="nav-link">Contact</Link></li>
                    {/* <li className="close" onClick={this.menuToggle}>x</li> */}
                </ul>
                {/* <div className="hamburger" onClick={this.menuToggle}>Menu</div> */}
            </div>
        </div>
    )
}


export default Navbar;