// App.js
import Nav from './components/Nav';
import About from './components/About';
import Projects from './components/Projects';
import Resume from './components/Resume';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Background from './components/Background';

function App() {
    return (
        <div className="App">
            <Nav />
            <main>
                <About />
                <Projects />
                <Resume />
                <Background />
                <Contact />
            </main>
            <footer className="footer">
                <Footer />
           </footer>
        </div>
    );
}

export default App;
