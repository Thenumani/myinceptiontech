import React from 'react';
import yourplacement from './placement.jpg';
import yourtraning from './traning.jpg';
import yourstaff from './staff.jpg';
import yourcall from './call.jpg';
import yoursoft from './software.jpg';
import yourData from './data.jpg';
import './Services.css'; // Import the styles for this component

const Services = () => {
  return (

     <div>
      <h1>Our Services</h1>
   <p>Myinception offers a wide range of recruitment solutions that are configurable to your business needs. Our well trained and domain specific consultants will ensure that we deliver the high standards of service and value you would expect from your recruitment service provider</p>
    <div className="services-container">
      
      {/* First Row */}
      <div className="service-item">
        <img src={yourplacement} alt="place" className="service-image" />
        <h4>Call Center/BPO Services</h4>
        <p>MyInception Tech excels at providing exceptional call center and BPO services tailored to diverse industry needs.</p>
      </div>
      <div className="service-item">
        <img src={yourtraning} alt="training" className="service-image" />
        <h4>Software Development</h4>
        <p>MyInception Tech leads the way in innovative Software development, offering tailored solutions.</p>
      </div>
      <div className="service-item">
        <img src={yourstaff} alt="staff" className="service-image" />
        <h4>Data Annotation</h4>
        <p>MyInception Tech specializes in providing precise data annotations vital for machine learning algorithms.</p>
      </div>

      {/* Second Row */}
      <div className="service-item">
        <img src={yourcall} alt="call" className="service-image" />
        <h4>Placement Support</h4>
        <p>MyInception Tech is committed to your success beyond training. Our placement support services are designed to bridge the gap.</p>
      </div>
      <div className="service-item">
        <img src={yoursoft} alt="soft" className="service-image" />
        <h4>Training Programs</h4>
        <p>MyInception Tech's meticulously crafted training programs are tailored to empower individuals with the knowledge.</p>
      </div>
      <div className="service-item">
        <img src={yourData} alt="data" className="service-image" />
        <h4>Staffing Solutions</h4>
        <p>MyInception Tech recruitment services are dedicated to bridging the gap between talented professionals.</p>
      </div>
    </div>

    </div>
  );
};

export default Services;
