import React from 'react';
import "./App.css";
import Header from './components/header/Header';
import Home from './components/home/Home';
import About from './components/about/About';
import Skills from './components/skills/Skills';
import Qualifications from './components/qualifications/Qualifications';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import Scrollup from './components/scrollup/Scrollup';

const App = () => {
    return (
        <>
        <Header />

        <main className="main">
            <Home />
            <div className="main__divider"> </div> 
            <About />
            <div className="main__divider"> </div> 
            <Skills />
            <div className="main__divider"> </div> 
            <Qualifications />
            <div className="main__divider"> </div> 
            <Contact />
        </main>
        <Footer />
        <Scrollup />
        </>
    )
}

export default App