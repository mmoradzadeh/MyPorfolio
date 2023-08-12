import React from 'react';
import Nav from './components/Nav';
import About from './components/About';
import Projects from './components/Projects';
import Resume from './components/Resume';
import Contact from './components/Contact';
import Footer from './components/Footer';






function App() {
    return (
        <div className="App">
            <Nav />
            <main>
                <About />
                <Projects />
                <Resume />
                <Contact />
            </main>
            <Footer />
        </div>
    );
}

export default App;
