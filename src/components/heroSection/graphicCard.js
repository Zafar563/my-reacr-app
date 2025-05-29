import React from "react";
import AvatarList from "../heroSection/avatarList";

export default function GraphicCard() {
  return (
    <div className="graphic-card">
      <div className="graphic-header">
        <span className="red"></span>
        <span className="yellow"></span>
        <span className="green"></span>
      </div>
      <div className="graphic-image">
        <img src="https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg" alt="Figma" />
        <span>⭐</span>
      </div>
      <div className="avatar-list">
        <AvatarList />
        <span className="text-sm">1.2M Follower</span>
      </div>
    </div>
  );
}
