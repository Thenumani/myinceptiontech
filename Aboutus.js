import React from 'react';
import yourAbout from './about.jpg';
import yourAboutv from './Aboutv.jpg';
import yourAboutm from './Aboutm.jpg';
import yourAboutval from './Aboutval.jpg';
import './Aboutus.css';

const Aboutus = () => {
  return (
    <div className="about-container">
      <div className="content">
        <div className="image-content">
          <img src={yourAbout} alt="About" className="home-image" />
        </div>
        <div className="text-content">
          <p>
            <strong>Empowering Careers and Businesses</strong><br />
            MyInception Tech, founded in 2009 in Chennai, stands as a beacon of excellence in both the IT and core sectors. We have earned recognition for our exceptional professional recruitment services. Our expertise in conducting Campus placements, job fairs, and training programs have solidified our reputation among the leading colleges, corporate entities, and industries nationwide.
          </p>
        </div>
      </div>
      <div className="additional-images">
        <div className="image-box">
          <img src={yourAboutv} alt="About" className="additional-image" />
          <h2>Our Vision</h2>
          <p>
            Our vision extends beyond borders. We aspire to provide end-to-end, integrated human resources solutions for organizations around the world. MyInception Tech is committed to becoming a global leader in training and placement services. Our team comprises individuals from diverse backgrounds, each with a rich history of holding key positions in recruitment and training across major companies.
          </p>
        </div>
        <div className="image-box">
          <img src={yourAboutm} alt="About" className="additional-image" />
          <h2>Our Mission</h2>
          <p>
            Our primary mission is to provide integrated, strategic corporate, and consulting solutions across various verticals in different organizations. We believe in the philosophy that "ensuring customer satisfaction is our top priority." This principle guides us on our path to success and has been instrumental in establishing us as a reputable organization.
          </p>
        </div>
        <div className="image-box">
          <img src={yourAboutval} alt="About" className="additional-image" />
          <h2>Core Values</h2>
          <p>
            Our values are deeply ingrained in every aspect of our work. We're dedicated to offering complete training and placement solutions to organizations worldwide. The depth and breadth of experience within our team span every industry, and our understanding of local markets makes us invaluable partners in your journey.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Aboutus;
