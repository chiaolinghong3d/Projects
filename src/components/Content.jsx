import React from 'react';
import About from './About';
import Skills from './Skills';
import Projects from './Projects';
import Education from './Education';
import Contact from './Contact';

function Content() {
  return (
    <div className="container-fluid p-0">
      <p>
        Testing testing testing...
      </p>
      <About />
      <Skills />
      <Projects />
      <Education />
      <Contact />
    </div>
  );
}

export default Content;
