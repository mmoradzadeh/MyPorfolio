import React from 'react';
import profilePic from '../../assets/profile/profilePic.jpeg';

function About() {
    return (
        <div className='about'>
            <div className="container mt-5" id='about'>
                <h2>About Me</h2>

                <div className="row">
                    <div className="col-md-4">
                        <img src={profilePic} alt="myself" className="img-fluid rounded-circle mb-4" />
                    </div>

                    <div className="col-md-8">
                        <p>Welcome to the portfolio of Mohammadmahdi Moradzadeh, 
                            a Toronto-based Fullstack Web Developer with a passion for creating innovative 
                            web applications and a proven track record in systems optimization.</p> 
                            <p> Blending a background in Civil Engineering with advanced technical proficiencies, I craft 
                            digital solutions that prioritize user experience and efficiency. 
                            Here, you'll discover a collection of projects that highlight my skills in both 
                            frontend and backend development, as well as my commitment to continuous learning 
                            and collaboration.</p> 
                            <p> Dive in to witness my journey of turning concepts into tangible 
                            web realities.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;
