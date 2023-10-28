import React from 'react';
import profilePic from '../../assets/profile/profilePic.jpeg';

function About() {
    return (
        <div className="about container mt-5" id='about'>
            <h2>About Me</h2>

            <div className="row">
                <div className="col-md-4">
                    <img src={profilePic} alt="myself" className="img-fluid rounded-circle mb-4" />
                </div>

                <div className="col-md-8">
                    <p>I am a 26 year old Canadian student of University of Toronto participating in a part-time bootcamp program.
                       I have completed my Bachelors and MASc degree in civil engineering from Toronto Metropolitan University (formerly known as Ryerson University).
                       I've always known that programming was my passion ever since my first programming lesson back in 9th grade; however, I also had an interest in
                       engineering since my childhood due to my knack for fixing and assembling things.</p>
                    <p>I hope, using the tools provided in this bootcamp, I can combine my engineering skills with the programming knowledge I've gained to apply
                       myself in an environment where I can continually grow.</p>
                </div>
            </div>
        </div>
    );
}

export default About;
