import React from 'react';
import '../../index.css';

function Background() {
    return (
        <div className="background" id='background'>
            <h2>Background</h2>
            <div className="work-item">
                <h3>Skills and Programs</h3>
                <p>
                    I have explored many application and have acquired many skills throughout my journey. One of few are, moderate understanding of programming in C and C++ languages, beginner in python, average understanding of Matlab, excellent skillset in the Microsoft suites (e.g. word, excel, etc.), confident in my abilities to work with AutoCAD, SAP, Safe, and ETABs.
                </p>
                <p>
                    I have acquired team working and excelled in communication skills during the completion of my Bachelors degree and have been successful at expanding my connection network outside of my field of study. I am passionate about the things that are my responsibility and provide my unequivocal attention in direction of completing the tasks at hand.
                </p>
            </div>
            
            <div className="work-item">
                <h3>Education</h3>
                <strong>Masters of Applied Sciences</strong>
                <p>
                    During the completion of my master's degree, I focused on a rare condition that occurs in concrete structures of basement walls and foundations. The reasons for such phenomena are found to be originated from the presence of sulfate in aggregates within the concrete matrix or scientifically known as Internal Sulphate Attack (a.k.a. ISA). Due to the lack of information regarding this topic, I was tasked with attempting to find an accelerated method that can identify the adequacy of aggregates used in concrete under extreme conditions.
                </p>
                <p>
                    I have successfully discovered two revolutionary methods that could possibly define the adequacy of aggregates to be used by the industry. This groundbreaking discovery is currently under further investigation to be published and presented to the Canadian Standard Association of concrete structures or CSA as a possible examination process on a universal scale.
                </p>
            </div>

            <div className="work-item">
                <h3>Fun Facts</h3>
                <p>
                    Some fun facts that might surprise people can be further categorized into two groups: interests and hobbies. Here, I'll detail things I am passionate about and strive to acquire more knowledge in (interests), and activities I indulge in during my free hours.
                </p>
                <strong>Interests:</strong>
                <ul>
                    <li>Continually expanding my knowledge about different languages and cultures.</li>
                    <li>Learning horseback riding.</li>
                    <li>Diving deeper into programming languages to expand my toolset.</li>
                    <li>Traveling the world to visit historical venues.</li>
                    <li>Volunteering in communities and supporting local events tied to my background and ethnicity.</li>
                </ul>
            </div>

        </div>
    );
}

export default Background;
