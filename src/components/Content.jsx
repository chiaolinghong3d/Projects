import React from 'react';
import Home from './Home';
import About from './About';
import Skills from './Skills';
import Projects from './Projects';

function Content() {
  return (
    <div className="container-fluid p-0">
      <Home />
      <About />
      <Skills />
      <Projects />
    </div>
  );
}

export default Content;
