import React from 'react';
import profilePic from '../../assets/profile/profilePic.jpeg';


function About() {
    return (
        <div className="about" id='about'>
            <h2>About Me</h2>
            <img src={profilePic} alt="myself" />
            <p>I am a 25 year old Canadian student of University of Toronto participating in part-time bootcamp program.
                    I have completed my Bacholers and MASc degree in civil engineering from Toronto Metropolitan University (formarly known as Ryerson University).
                    I have always known that programming was my passion ever since my first programing lesson back in 9th grade; however I also had an interest in
                    engineering since my childhood due to my ability in fixing and putting things together.</p>
                <p>I hope using the tools provided in this bootcamp, I can put together my engineering skills and programming ability that I have gained to apply
                    myself in an environment where I can grow with</p>
        </div>
    );
}

export default About;
