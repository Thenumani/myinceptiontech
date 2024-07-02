import React from 'react';
import yourembaded from './embaded.jpg';
import yourhtpanel from './htpanel.jpg';
import yourinternet from './internet.jpg';
import yourplc from './plc.jpg';
import './core.css'; // Import the styles for this component

const Core = () => {
  return (
    <div>
      <h1>Core</h1>
      <div className="core-container">
        <div className="core-item">
          <img src={yourembaded} alt="Embedded Systems" className="core-image" />
          <h4>Embedded Systems</h4>
        </div>
        <div className="core-item">
          <img src={yourhtpanel} alt="HT Panel Design" className="core-image" />
          <h4>HT Panel Design</h4>
        </div>
        <div className="core-item">
          <img src={yourinternet} alt="Internet of Things (IoT)" className="core-image" />
          <h4>Internet of Things (IoT)</h4>
        </div>
        <div className="core-item">
          <img src={yourplc} alt="PLC/SCADA" className="core-image" />
          <h4>PLC/SCADA</h4>
        </div>
      </div>
    </div>
  );
};

export default Core;
