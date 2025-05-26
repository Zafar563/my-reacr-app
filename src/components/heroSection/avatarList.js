import React from "react";

export default function AvatarList() {
  const avatars = [
    "https://randomuser.me/api/portraits/men/32.jpg",
    "https://randomuser.me/api/portraits/women/44.jpg",
    "https://randomuser.me/api/portraits/men/56.jpg",
    "https://randomuser.me/api/portraits/women/65.jpg",
  ];

  return (
    <div className="flex -space-x-2">
      {avatars.map((url, idx) => (
        <img key={idx} src={url} alt="avatar" className="w-8 h-8 rounded-full border-2 border-white" />
      ))}
    </div>
  );
}