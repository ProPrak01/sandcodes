import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <div className="home">
      <div className="home-header">
        <h1>Welcome to SandCodes Hackathon!</h1>
        <p>Planet Hackunia Needs Your Help!</p>
        <div className="home-links">
          <Link to="/map" className="home-link">
            <div className="link-box">
              <h2>Map</h2>
              <p>Explore Planet Hackunia</p>
            </div>
          </Link>
          <Link to="/survival-guide" className="home-link">
            <div className="link-box">
              <h2>Survival Guide</h2>
              <p>Essential Tips for Survival</p>
            </div>
          </Link>
          <Link to="/chat" className="home-link">
            <div className="link-box">
              <h2>Chat</h2>
              <p>Communicate with Fellow Participants</p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
