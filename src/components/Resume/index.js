import React from 'react';

function Resume() {
    return (
        <div className="resume" id='resume'>
            <h2>My Resume</h2>
            <p>You can view my Resume Here</p>
            <a 
                href="/Resume.pdf" 
                target="_blank" 
                rel="noopener noreferrer"
            >
                <button>View PDF</button>
            </a>
        </div>
    );
}

export default Resume;
