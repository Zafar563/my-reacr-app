import React from "react";

export default function Tabs({ tabs, activeTab, onTabChange }) {
  return (
    <div className="tabs">
      {tabs.map((tab) => (
        <button
          key={tab}
          onClick={() => onTabChange(tab)}
          className={`tab-button ${activeTab === tab ? "active" : ""}`}
        >
          {tab}
        </button>
      ))}
    </div>
  );
}
