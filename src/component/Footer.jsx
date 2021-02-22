import React from 'react';
import { Link } from 'react-router-dom';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
// import { faFacebook } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
    return (
        <div className="footer-section">
            <div className="row footer-row container-fluid">
                <div className="col-md-3 company-name">
                    <div className="title">Medi<span>Rest</span></div>
                    <div className="description">...committed to delivering quality health</div>
                    <div className="about">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est dolor quos
                    vitae eius omnis consequatur, architecto rem inventore mollitia consequuntur incidunt qui
                    consectetur iusto, fugiat eaque quia dolorum. Totam, iure.
                    </div>
                    <Link to='/about' className="button">Read More</Link>
                </div>
                <div className="col-md-3 navigate">
                    <div className="title">quick links</div>
                    <div className="nav-links">
                        <Link to='/' className="links">home</Link>
                        <Link to='/about' className="links">about</Link>
                        <Link to='/service' className="links">service</Link>
                        <Link to='/team' className="links">team</Link>
                        <Link to='/contact' className="links">contact</Link>
                    </div>
                </div>
                <div className="col-md-3 newsletter">
                    <div className="title">stay connected</div>
                    <div className="description">Don't miss out, join our other esteem customers to recieve
                    updates on our latest services
                    </div>
                </div>
                <div className="col-md-2 social-links">
                    <div className="title">social links</div>
                    <div className="social-icons">
                        <FaFacebook />
                        <FaTwitter />
                        <FaInstagram />
                    </div>
                </div>
            </div>
            <div className="footer-end">
            Copyright © 2021. Medirest Health Consulting.
            </div>
        </div>
    )
}

export default Footer;

