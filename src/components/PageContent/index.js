import React from 'react';
import About from '../About';
import Projects from '../Projects';
import Resume from '../Resume';
import Contact from '../Contact';
import Background from '../Background';

function MainContent() {
    return (
        <main id="main">
            <About />
            <Projects />
            <Resume />
            <Background />
            <Contact />
        </main>
    );
}

export default MainContent;
