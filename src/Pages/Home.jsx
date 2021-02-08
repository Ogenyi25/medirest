import React from 'react';
import { Link } from 'react-router-dom';
import photo from '../asset/images/bg.jpg';
import heartrate from '../asset/images/heartrate.png';
import stethoscope from '../asset/images/doc.png';



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
                <div className="reason-section container-fluid">
                    <div className="reason row">
                        <div className="text col-md-6">
                            <div className="text-title">why choose us</div>
                            <img src={heartrate} alt="heartrate" className="heartrate" />
                            <div className="divs row">
                                <div className="first col-md-6">
                                    <div className="title">qualified doctors</div>
                                    <div className="description">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Non rerum quia doloribus
                                        corporis ad minus, dolore, ullam, officiis commodi odio sunt odit? Aliquid nesciunt
                                        natus optio atque, alias itaque possimus.
                                    </div>
                                </div>

                                <div className="first col-md-6">
                                    <div className="title">emergency care</div>
                                    <div className="description">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Non rerum quia doloribus
                                        corporis ad minus, dolore, ullam, officiis commodi odio sunt odit? Aliquid nesciunt
                                        natus optio atque, alias itaque possimus.
                                    </div>
                                </div>

                                <div className="first col-md-6">
                                    <div className="title">24 hour services</div>
                                    <div className="description">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Non rerum quia doloribus
                                        corporis ad minus, dolore, ullam, officiis commodi odio sunt odit? Aliquid nesciunt
                                        natus optio atque, alias itaque possimus.
                                    </div>
                                </div>

                                <div className="first col-md-6">
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
            <div className="our-teams-section">
                <div className="our-teams-title">our teams</div>
                <div className="our-teams row container-fluid">
                    <div className="team col-md-3">
                        <img src={stethoscope} alt="" className="stethoscope" />
                        <div className="team-details">
                            <div className="team-name">dr. teresa hakim</div>
                            <div className="team-post">pathologist</div>
                        </div>
                    </div>

                    <div className="team col-md-3">
                        <img src={stethoscope} alt="" className="stethoscope" />
                        <div className="team-details">
                            <div className="team-name">dr. teresa hakim</div>
                            <div className="team-post">pathologist</div>
                        </div>
                    </div>

                    <div className="team col-md-3">
                        <img src={stethoscope} alt="" className="stethoscope" />
                        <div className="team-details">
                            <div className="team-name">dr. teresa hakim</div>
                            <div className="team-post">pathologist</div>
                        </div>
                    </div>
                </div>

                <div className="our-teams row container-fluid">
                    <div className="team col-md-3">
                        <img src={stethoscope} alt="" className="stethoscope" />
                        <div className="team-details">
                            <div className="team-name">dr. teresa hakim</div>
                            <div className="team-post">pathologist</div>
                        </div>
                    </div>

                    <div className="team col-md-3">
                        <img src={stethoscope} alt="" className="stethoscope" />
                        <div className="team-details">
                            <div className="team-name">dr. teresa hakim</div>
                            <div className="team-post">pathologist</div>
                        </div>
                    </div>

                    <div className="team col-md-3">
                        <img src={stethoscope} alt="" className="stethoscope" />
                        <div className="team-details">
                            <div className="team-name">dr. teresa hakim</div>
                            <div className="team-post">pathologist</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;