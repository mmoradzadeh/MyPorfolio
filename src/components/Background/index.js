import React from 'react';

function Background() {
    return (
        <div className="background container mt-5" id='background'>
            <h2>Background</h2>

            <div className="work-item mt-4">
                <h3>Skills and Programs</h3>
                <p>
                    I have explored many applications and have acquired many skills throughout my journey. Among these are a moderate understanding of programming in C and C++ languages, beginner skills in python, average understanding of Matlab, excellent skills in the Microsoft suites (e.g. word, excel, etc.), and confidence in my abilities to work with AutoCAD, SAP, Safe, and ETABs.
                </p>
                <p>
                    I have acquired team working and excelled in communication skills during the completion of my Bachelors degree and have been successful at expanding my connection network outside of my field of study. I am passionate about my responsibilities and always give my unequivocal attention towards completing tasks at hand.
                </p>
            </div>
            
            <div className="work-item mt-4">
                <h3>Education</h3>
                <strong>Masters of Applied Sciences</strong>
                <p>
                    During the completion of my master's degree, I focused on a rare condition that occurs in concrete structures of basement walls and foundations. This phenomena is thought to be originated from the presence of sulfate in aggregates within the concrete matrix, scientifically known as Internal Sulphate Attack (ISA). Due to the lack of information regarding this topic, I was tasked with attempting to find an accelerated method that can identify the adequacy of aggregates used in concrete under extreme conditions.
                </p>
                <p>
                    I successfully discovered two revolutionary methods that could possibly define the adequacy of aggregates to be used by the industry. This groundbreaking discovery is currently under further investigation to be published and presented to the Canadian Standard Association of concrete structures or CSA as a possible examination process on a universal scale.
                </p>
            </div>

            <div className="work-item mt-4">
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
