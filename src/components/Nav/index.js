import React from 'react';
import { Link } from 'react-scroll';

function Nav() {
    return (
        <nav className="navbar navbar-expand-lg navbar-custom">
            <Link to="home" smooth={true} duration={1000} className="navbar-brand">My Portfolio</Link>

            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarNavDropdown">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <Link to="about" smooth={true} duration={1000} className="nav-link">About</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="projects" smooth={true} duration={1000} className="nav-link">Projects</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="resume" smooth={true} duration={1000} className="nav-link">Resume</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="background" smooth={true} duration={1000} className="nav-link">Background</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="contact" smooth={true} duration={1000} className="nav-link">Contact</Link>
                    </li>
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-expanded="false">
                            Find Me On
                        </a>
                        <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                            <li><a className="dropdown-item" href="https://github.com/mmoradzadeh" target="_blank" rel="noopener noreferrer">GitHub</a></li>
                            <li><a className="dropdown-item" href="https://www.linkedin.com/in/mmoradzadeh/" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
                            <li><a className="dropdown-item" href="https://www.instagram.com/mehdi__mm97/" target="_blank" rel="noopener noreferrer">Instagram</a></li>
                            <li><a className="dropdown-item" href="https://twitter.com/7H3_3M" target="_blank" rel="noopener noreferrer">Twitter</a></li>
                            <li><a className="dropdown-item" href="https://www.facebook.com/mehdi.moradzadeh97" target="_blank" rel="noopener noreferrer">Facebook</a></li>
                            <li><a className="dropdown-item" href="https://open.spotify.com/user/21zjijx4oaxral3u6zlwqi4gq" target="_blank" rel="noopener noreferrer">Spotify</a></li>
                        </ul>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Nav;
