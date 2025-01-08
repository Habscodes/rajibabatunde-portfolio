import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Education from './components/Education';
import Portfolio from './components/Portfolio';
import Research from './components/Research';
import Resources from './components/Resources';
import Contact from './components/Contact';

function App() {
  return (
    <div className="bg-white">
      <Header />
      <main>
        <Hero />
        <About />
        <Experience />
        <Education />
        <Portfolio />
        <Research />
        <Resources />
        <Contact />
      </main>
    </div>
  );
}

export default App;