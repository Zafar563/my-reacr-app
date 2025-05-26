import React from "react";
import AvatarList from "../heroSection/avatarList";

 function GraphicCard() {
  return (
    <div className="bg-white rounded-2xl p-4 w-80 shadow-xl relative">

      <div className="mt-4 flex items-center justify-between">
        <AvatarList />
        <span className="text-sm text-black">1.2M Follower</span>
      </div>
    </div>
  );
}
export default GraphicCard