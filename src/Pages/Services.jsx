import React from 'react';
import { Link } from 'react-router-dom';
import heartrate from '../asset/images/heartbeat.png';


const Service = () => {
    return (
        <div className="service-page">
            <div className="service-section">
                <div className="service-title">Our Services</div>
            </div>
            <div className="service-details-section">
                <div className="service-details-title">
                    professional psychology therapy <br /> service you can choose
                </div>
                <img src={heartrate} alt="counselling" className="heartrate" />

                <div className="services-provided row container-fluid">
                    <div className="services col-md-3">
                        <div className="service-title">Personal Meeting</div>
                        <div className="service-details">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga similique nihil,
                            ea impedit hic quasi nam reprehenderit praesentium nulla veritatis doloremque officia officiis.
                            Veritatis corrupti distinctio omnis optio fugit? Facilis!
                        </div>
                        <Link to='/' className="service-btn">Know More</Link>
                    </div>

                    <div className="services col-md-3">
                        <div className="service-title">Personal Meeting</div>
                        <div className="service-details">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga similique nihil,
                            ea impedit hic quasi nam reprehenderit praesentium nulla veritatis doloremque officia officiis.
                            Veritatis corrupti distinctio omnis optio fugit? Facilis!
                        </div>
                        <Link to='/' className="service-btn">Know More</Link>
                    </div>

                    <div className="services col-md-3">
                        <div className="service-title">Personal Meeting</div>
                        <div className="service-details">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga similique nihil,
                            ea impedit hic quasi nam reprehenderit praesentium nulla veritatis doloremque officia officiis.
                            Veritatis corrupti distinctio omnis optio fugit? Facilis!
                        </div>
                        <Link to='/' className="service-btn">Know More</Link>
                    </div>
                </div>

                <div className="services-provided row container-fluid">
                    <div className="services col-md-3">
                        <div className="service-title">Personal Meeting</div>
                        <div className="service-details">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga similique nihil,
                            ea impedit hic quasi nam reprehenderit praesentium nulla veritatis doloremque officia officiis.
                            Veritatis corrupti distinctio omnis optio fugit? Facilis!
                        </div>
                        <Link to='/' className="service-btn">Know More</Link>
                    </div>

                    <div className="services col-md-3">
                        <div className="service-title">Personal Meeting</div>
                        <div className="service-details">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga similique nihil,
                            ea impedit hic quasi nam reprehenderit praesentium nulla veritatis doloremque officia officiis.
                            Veritatis corrupti distinctio omnis optio fugit? Facilis!
                        </div>
                        <Link to='/' className="service-btn">Know More</Link>
                    </div>

                    <div className="services col-md-3">
                        <div className="service-title">Personal Meeting</div>
                        <div className="service-details">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga similique nihil,
                            ea impedit hic quasi nam reprehenderit praesentium nulla veritatis doloremque officia officiis.
                            Veritatis corrupti distinctio omnis optio fugit? Facilis!
                        </div>
                        <Link to='/' className="service-btn">Know More</Link>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Service;