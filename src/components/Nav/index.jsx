import React from 'react';
import { Link } from 'react-scroll';

function Nav() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <Link to="home" smooth={true} duration={1000} className="navbar-brand">My Portfolio</Link>
            <div className="collapse navbar-collapse">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <Link to="home" smooth={true} duration={1000} className="nav-link">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="about" smooth={true} duration={1000} className="nav-link">About</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="contact" smooth={true} duration={1000} className="nav-link">Contact</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="pastwork" smooth={true} duration={1000} className="nav-link">Past Work</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Nav;
