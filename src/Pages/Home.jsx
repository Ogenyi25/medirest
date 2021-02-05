import React from 'react';
import { Link } from 'react-router-dom';
import photo from '../asset/images/bg.jpg';
import heartrate from '../asset/images/heartrate.png';



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
                        <img src={photo} alt="counselling image" className="image" />
                    </div>
                    <div className="welcome-text col-md-6">
                        <div className="title">Who we are</div>
                        <img src={heartrate} alt="counselling image" className="heartrate" />
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
            </div>
        </div>
    )
}

export default Home;