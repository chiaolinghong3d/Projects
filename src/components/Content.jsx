import React from 'react';
import About from './About';
import Skills from './Skills';
import Projects from './Projects';
import Contact from './Contact';

function Content() {
  return (
    <div className="container-fluid p-0">
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}

export default Content;
