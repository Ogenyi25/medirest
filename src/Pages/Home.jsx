import React from 'react';
import { Link } from 'react-router-dom';
// import { Carousel } from 'react-responsive-carousel';
import photo from '../asset/images/bg.jpg';
import heartrate from '../asset/images/heartbeat.png';
import stethoscope from '../asset/images/doc.png';
import doc from '../asset/images/doc.jpg';
import doc2 from '../asset/images/doc2.jpg';
import doc3 from '../asset/images/doc3.jpg';
import doc4 from '../asset/images/doc4.png';
import doc5 from '../asset/images/doc5.jpg';
import doc6 from '../asset/images/doc6.jpg';
import docicon from '../asset/images/doc-icon.png';
import emergency from '../asset/images/emergency.png';
import theatre from '../asset/images/theatre.png';
import time from '../asset/images/time.png';




const Home = () => {
    return (
        <div className="home">
            <div className="home-container container-fluid">
                <div className="home-data">
                    <div className="home-title">take care of your <br /> <span>Health</span></div>
                    <p className="home-description">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Incidunt assumenda nemo, quod corrupti soluta veniam voluptatibus praesentium voluptate
                    recusandae perspiciatis rerum aspernatur suscipit sunt iusto voluptates. Sit ducimus ipsa hic.
                    </p>
                    <Link to='/' className="button">View More</Link>
                </div>
            </div>
            {/* welcome section */}
            <div className="welcome-section container-fluid">
                <div className="welcome-note row">
                    <div className="welcome-img col-md-4">
                        <img src={photo} alt="counselling" className="image" />
                    </div>
                    <div className="welcome-text col-md-6">
                        <div className="title">Who we are</div>
                        <img src={heartrate} alt="counselling" className="heartrate" />
                        <div className="description">
                            At MediRest we promote, preserve, and restore individual and family health by
                            providing expert medical and surgical care within an innovative and dignified environment.
                        </div>
                        <ul>
                            <li>We provide high-quality services for the whole family</li>
                            <li>We are committed to acquiring and applying the most current knowledge and technical skills in the treatment of our patients,</li>
                            <li>We provide high patient confidentiality</li>
                            <li>We provide high-quality services for the whole family</li>
                        </ul>
                    </div>
                </div>

                {/* why choose us section */}

                <div className="reason-section container-fluid">
                    <div className="reason row">
                        <div className="text col-md-6">
                            <div className="text-title">why choose us</div>
                            <img src={heartrate} alt="heartrate" className="heartrate" />
                            <div className="divs row">
                                <div className="first col-md-6">
                                    <img src={docicon} alt="" className="icons" />
                                    <div className="title">qualified doctors</div>
                                    <div className="description">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Non rerum quia doloribus
                                        corporis ad minus, dolore, ullam, officiis commodi odio sunt odit? Aliquid nesciunt
                                        natus optio atque, alias itaque possimus.
                                    </div>
                                </div>

                                <div className="first col-md-6">
                                    <img src={emergency} alt="" className="icons" />
                                    <div className="title">emergency care</div>
                                    <div className="description">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Non rerum quia doloribus
                                        corporis ad minus, dolore, ullam, officiis commodi odio sunt odit? Aliquid nesciunt
                                        natus optio atque, alias itaque possimus.
                                    </div>
                                </div>

                                <div className="first col-md-6">
                                    <img src={time} alt="" className="icons" />
                                    <div className="title">24 hour services</div>
                                    <div className="description">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Non rerum quia doloribus
                                        corporis ad minus, dolore, ullam, officiis commodi odio sunt odit? Aliquid nesciunt
                                        natus optio atque, alias itaque possimus.
                                    </div>
                                </div>

                                <div className="first col-md-6">
                                    <img src={theatre} alt="" className="icons" />
                                    <div className="title">operation theater</div>
                                    <div className="description">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Non rerum quia doloribus
                                        corporis ad minus, dolore, ullam, officiis commodi odio sunt odit? Aliquid nesciunt
                                        natus optio atque, alias itaque possimus.
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="image col-md-4">
                            <img src={stethoscope} alt="" className="stethoscope" />
                        </div>
                    </div>
                </div>
            </div>

            {/* our teams section */}

            <div className="our-teams-section">
                <div className="our-teams-title">our team</div>
                <div className="team-subtitle">a group of dedicated staff</div>
                <div className="our-teams row container-fluid">
                    <div className="team col-md-3">
                        <img src={doc} alt="" className="stethoscope" />
                        <div className="team-details">
                            <div className="team-name">dr. teresa hakim</div>
                            <div className="team-post">pathologist</div>
                        </div>
                    </div>

                    <div className="team col-md-3">
                        <img src={doc2} alt="" className="stethoscope" />
                        <div className="team-details">
                            <div className="team-name">dr. teresa hakim</div>
                            <div className="team-post">pathologist</div>
                        </div>
                    </div>

                    <div className="team col-md-3">
                        <img src={doc3} alt="" className="stethoscope" />
                        <div className="team-details">
                            <div className="team-name">dr. teresa hakim</div>
                            <div className="team-post">pathologist</div>
                        </div>
                    </div>
                </div>

                <div className="our-teams row container-fluid">
                    <div className="team col-md-3">
                        <img src={doc4} alt="" className="stethoscope" />
                        <div className="team-details">
                            <div className="team-name">dr. teresa hakim</div>
                            <div className="team-post">pathologist</div>
                        </div>
                    </div>

                    <div className="team col-md-3">
                        <img src={doc5} alt="" className="stethoscope" />
                        <div className="team-details">
                            <div className="team-name">dr. teresa hakim</div>
                            <div className="team-post">pathologist</div>
                        </div>
                    </div>

                    <div className="team col-md-3">
                        <img src={doc6} alt="" className="stethoscope" />
                        <div className="team-details">
                            <div className="team-name">dr. teresa hakim</div>
                            <div className="team-post">pathologist</div>
                        </div>
                    </div>
                </div>
            </div>

            {/* our clients section */}

            <div className="our-clients-section">
                <div className="our-clients-title">our clients</div>
                <div className="our-clients-subtitle">who we provide service to</div>
                <div className="clients-carousel container-fluid">
                    
                </div>
            </div>

            {/* contact us section */}

            <div className="contact-section container-fluid" id="contact">
                <div className="contact-container row">
                    <div className="contact-data col-md-8">
                        <span className="section-subtitle contact-initial">Let's talk</span>
                        <div className="section-title contact-initial">Contact us</div>
                        <p className="contact-description">If you want to book an appointment with any of our special, <br /> contact us and
                            consider it done, with our 24/7 service.
                        </p>
                        <div className="address"><span>Address: </span>No.9 Madueke street, Asokoro Extention, Abuja.</div>
                        <div className="address"><span>Phone Number: </span>08036000000, 07034588888.</div>
                        <div className="address"><span>Email: </span>medirestofficial@gmail.com.</div>
                    </div>

                    <div className="contact-button col-md-3">
                        <Link to='/' className="button">Contact us now</Link>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default Home;