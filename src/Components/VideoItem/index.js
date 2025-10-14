import React, { useState } from "react";
import "./index.css";

const VideoItem = ({ videoUrl, title, rating, description, moreLink }) => {
  const [liked, setLiked] = useState(false);
  const [saved, setSaved] = useState(false);
  const [Enroll, setEnroll] = useState(false);

  const handleEnroll = () => setEnroll(!Enroll);

  const handleLike = () => setLiked(!liked);
  const handleSave = () => setSaved(!saved);

  return (
    <div className="video-item-container">
      <div className="video-wrapper">
        <iframe
          width="100%"
          height="155"
          src={videoUrl}
          title={title}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
      <div className="video-details">
        <h3>{title}</h3>
        <div className="video-rating">Rating: {rating} / 5</div>
        <p className="video-description">{description}</p>
        <div className="video-actions">
          <button
            className={`like-btn${liked ? " liked" : ""}`}
            onClick={handleLike}
          >
            {liked ? "Liked" : "Like"}
          </button>
          <button
            className={`save-btn${saved ? " saved" : ""}`}
            onClick={handleSave}
          >
            {saved ? "Saved" : "Save"}
          </button>

          <button
            className={`enroll-btn${Enroll ? " enrolled" : ""}`}
            onClick={handleEnroll}
          >
            {Enroll ? "Enrolled" : "Enroll"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default VideoItem;