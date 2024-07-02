import React from 'react';
import yourHome from './Home.jpg';
import './Home.css'; // Import your CSS file

const Home = () => {
  return (
    <div className="container">
      <div className="content-wrapper">
        <div className="image-content">
          <img src={yourHome} alt="Logo" className="home-image" />
        </div>
        <div className="text-content">
          <h2>Welcome to MyInception Tech - Your Gateway to Excellence</h2>
          <p>
            MyInception Tech stands as more than a consultancy; we are your dedicated partners
            in shaping a fulfilling career or achieving business growth. Our mission is to arm
            professionals and businesses with the expertise, competence, and opportunities
            vital for excellence. We firmly believe that attaining excellence starts with
            the right training, support, and strategic services.
          </p>
        </div>
      </div>

      <div className="home-content">
        <div className="containers-wrapper">
          <div className="container">
            <h2>Company Address</h2>
            <p>
              No # 7/3 Shanthi Nivas, 2nd Floor, Madley Road, Ashoka Nagar, T.Nagar,
              Chennai - 600017.
            </p>
          </div>

          <div className="container">
            <h2>Contact Information</h2>
            <p>Email: hr@myinceptiontech.com</p>
            <p>Phone: +91 9884792981</p>
            <p>Phone: +91 9080556322</p>
          </div>

          <div className="container">
            <h2>Operating Hours</h2>
            <p>Monday to Saturday: 10.00 am - 6.30 pm</p>
            <p>Sunday: Closed</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
