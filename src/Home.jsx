
import React from 'react';
import profileImage from './assets/profile.png';  // Importing the image
import './Home.css';  // Import the CSS for styling

const Home = () => {
  return (
    <section id="home" className="home-section">
      <div className="home-container">
        <div className="profile-content">
          <div className="profile-text">
            <h1 className="heading">Welcome to My Portfolio</h1>
            <p className="intro-text">I'm a passionate developer. Explore my work below!</p>
            
            <a href="#projects" className="btn">View My Projects</a>
          </div>
          <div className="profile-image-container">
            <img src={profileImage} alt="Profile" className="profile-image" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
