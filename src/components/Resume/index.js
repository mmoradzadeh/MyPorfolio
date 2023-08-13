import React from 'react';

function Resume() {
    return (
        <div className="resume container mt-5" id='resume'>
            <h2>My Resume</h2>
            <p className="mb-4">You can view my Resume Here</p>
            
            <div className="d-flex justify-content-center mb-3">
                <a 
                    href="/Resume.pdf" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="btn btn-primary mr-2"
                >
                    View PDF
                </a>
                <a 
                    href="/Resume.pdf" 
                    download="MMoradzadeh-Resume.pdf"
                    className="btn btn-secondary"
                >
                    Download Resume
                </a>
            </div>
        </div>
    );
}

export default Resume;
