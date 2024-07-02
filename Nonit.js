import React from 'react';
import yourhr from './Hr.jpg';
import yoursuply from './supply.jpg';
import yourcontent from './writting.jpg';
import './Nonit.css'; // Import the styles for this component

const Nonit = () => {
  return (
    <div>
      <h1>Non-IT Courses</h1>
      <div className="core-container">
        <div className="core-item">
          <img src={yourhr} alt="HR & Payroll Training" className="core-image" />
          <h4>HR & Payroll Training</h4>
        </div>
        <div className="core-item">
          <img src={yoursuply} alt="Supply Chain Management" className="core-image" />
          <h4>Process Associate (Supply Chain Management)</h4>
        </div>
        <div className="core-item">
          <img src={yourcontent} alt="Content Writing" className="core-image" />
          <h4>Content Writing</h4>
        </div>
      </div>
    </div>
  );
};

export default Nonit;
