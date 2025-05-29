import React from "react";

export default function AvatarList() {
  const avatars = [
    "https://randomuser.me/api/portraits/men/32.jpg",
    "https://randomuser.me/api/portraits/women/44.jpg",
    "https://randomuser.me/api/portraits/men/56.jpg",
    "https://randomuser.me/api/portraits/women/65.jpg",
  ];

  return (
    <div className="avatars">
      {avatars.map((url, idx) => (
        <img key={idx} src={url} alt="avatar" />
      ))}
    </div>
  );
}
