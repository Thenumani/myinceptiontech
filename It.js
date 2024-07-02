import React from 'react';
import yourcprog from './cprog.jpg';
import yourcplus from './cplus.jpg';
import yourjava from './java.jpg';
import yourpython from './python.jpg';
import yourmachine from './machine.jpg';
import yourreact from './react.jpg';
import './it.css'; // Import the styles for this component

const It = () => {
  return (
    <div>
      <h1>IT Courses</h1>
      <div className="it-container">
        <div className="it-item">
          <img src={yourcprog} alt="C-programming" className="it-image" />
          <h4>C-programming</h4>
        </div>
        <div className="it-item">
          <img src={yourcplus} alt="C++" className="it-image" />
          <h4>C++</h4>
        </div>
        <div className="it-item">
          <img src={yourjava} alt="Java" className="it-image" />
          <h4>Java</h4>
        </div>
        <div className="it-item">
          <img src={yourpython} alt="Python" className="it-image" />
          <h4>Python</h4>
        </div>
        <div className="it-item">
          <img src={yourreact} alt="React" className="it-image" />
          <h4>React</h4>
        </div>
        <div className="it-item">
          <img src={yourmachine} alt="Machine" className="it-image" />
          <h4>Machine</h4>
        </div>
      </div>
    </div>
  );
};

export default It;
