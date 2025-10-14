import React, { Component } from "react";
import "./index.css";
import './user.jpg';

class DashBord extends Component {
  render() {
    // Example user data (replace with real data as needed)
    const user = {
      username: "Ishwar Chandra",
      social: {
        twitter: "https://twitter.com/",
        linkedin: "https://linkedin.com/",
        github: "https://github.com/",
      },
    };

    return (
      <div className="dashboard-container">
        <div className="profile-section">
          <h2>Your Dashboard</h2>
          <img src="./user.jpg" alt="User Profile" className="profile-photo" />
          <h2 className="username">{user.username}</h2>
          <div className="social-links">
            <a
              href={user.social.twitter}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/twitter.svg"
                alt="Twitter"
                className="social-icon"
              />
            </a>
            <a
              href={user.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/linkedin.svg"
                alt="LinkedIn"
                className="social-icon"
              />
            </a>
            <a
              href={user.social.github}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/github.svg"
                alt="GitHub"
                className="social-icon"
              />
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default DashBord;
