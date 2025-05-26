// components/HeroSection.jsx
import React from "react";
import GraphicCard from "../heroSection/graphicCard";

export default function HeroSection() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between gap-10 py-10">
      <GraphicCard />
      <div className="text-center md:text-left">
        <h1 className="text-4xl font-bold mb-4">Built for endless uses,<br />Across all teams.</h1>
      </div>
    </div>
  );
}
