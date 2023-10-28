// import React, { useState, useEffect } from 'react';
// import { Link } from 'react-scroll';

// function Nav() {
//     const [scrolled, setScrolled] = useState(false);

//     useEffect(() => {
//         const handleScroll = () => {
//             const offset = window.scrollY;
//             if (offset > 200) {
//                 setScrolled(true);
//             } else {
//                 setScrolled(false);
//             }
//         };
//         window.addEventListener('scroll', handleScroll);
//         return () => {
//             window.removeEventListener('scroll', handleScroll);
//         };
//     }, []);

//     let navbarClasses = ['navbar', 'navbar-expand-lg', 'navbar-dark', 'bg-dark'];
//     if (scrolled) {
//         navbarClasses.push('nav-scrolled');
//     }

//     return (
//         <nav className={navbarClasses.join(' ')}>
//             <Link to="home" smooth={true} duration={1000} className="navbar-brand">Mahdi Moradzadeh</Link>
//             <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown">
//                 <span className="navbar-toggler-icon"></span>
//             </button>
//             <div className="collapse navbar-collapse" id="navbarNavDropdown">
//                 <ul className="navbar-nav ml-auto">
//                     <li className="nav-item">
//                         <Link to="about" smooth={true} duration={1000} className="nav-link">About</Link>
//                     </li>
//                     <li className="nav-item">
//                         <Link to="projects" smooth={true} duration={1000} className="nav-link">Projects</Link>
//                     </li>
//                     <li className="nav-item">
//                         <Link to="resume" smooth={true} duration={1000} className="nav-link">Resume</Link>
//                     </li>
//                     <li className="nav-item">
//                         <Link to="background" smooth={true} duration={1000} className="nav-link">Background</Link>
//                     </li>
//                     <li className="nav-item">
//                         <Link to="contact" smooth={true} duration={1000} className="nav-link">Contact</Link>
//                     </li>
//                     <li className="nav-item dropdown">
//                         <a className="nav-link dropdown-toggle" href="_blank" id="navbarDropdown" role="button" data-toggle="dropdown">
//                             Find Me On
//                         </a>
//                         <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
//                             <li><a className="dropdown-item" href="https://github.com/Mahdi-Moradzadeh">GitHub</a></li>
//                             <li><a className="dropdown-item" href="https://www.linkedin.com/in/mahdimoradzadeh/">LinkedIn</a></li>
//                             <li><a className="dropdown-item" href="https://www.instagram.com/mehdi__mm97/" >Instagram</a></li>
//                             <li><a className="dropdown-item" href="https://twitter.com/7H3_3M">Twitter</a></li>
//                             <li><a className="dropdown-item" href="https://www.facebook.com/mehdi.moradzadeh97">Facebook</a></li>
//                             <li><a className="dropdown-item" href="https://open.spotify.com/user/21zjijx4oaxral3u6zlwqi4gq">Spotify</a></li>
//                         </ul>
//                     </li>
//                 </ul>
//             </div>
//         </nav>
//     );
// }

// export default Nav;
