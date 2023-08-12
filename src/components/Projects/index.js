import React from 'react';
import Project2B from '../../assets/img/Project2B.jpg';
import Project1 from '../../assets/img/Project1.jpg';

function Projects() {
    return (
        <div className="projects" id='projects'>
            <h2>My Projects</h2>
            
            <div className="dropdown">
                <button 
                    className="btn btn-secondary dropdown-toggle" 
                    type="button"
                    id="projectDropdown" 
                    data-toggle="dropdown" 
                    aria-haspopup="true" 
                    aria-expanded="false"
                >
                    My Recent Projects
                </button>
                <div className="dropdown-menu" aria-labelledby="projectDropdown">
                    <a className="dropdown-item" href="https://github.com/TimeBytes/Movie-Dashboard" target="_blank" rel="noopener noreferrer">
                        Project 1
                    </a>
                    <a href="https://github.com/TimeBytes/Movie-Dashboard" target="_blank" rel="noopener noreferrer">
                        <img src={Project1} alt="project_one" style={{width: '500px', height: '200px'}} />
                    </a>

                    <a className="dropdown-item" href="https://github.com/DanialDevelops/movie-review" target="_blank" rel="noopener noreferrer">
                        Project 2
                    </a>
                    <a href="https://github.com/DanialDevelops/movie-review" target="_blank" rel="noopener noreferrer">
                        <img src={Project2B} alt="project_two" style={{width: '500px', height: '200px'}} />
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Projects;
