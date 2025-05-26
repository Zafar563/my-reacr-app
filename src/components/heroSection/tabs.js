import React from "react";

export default function Tabs({ tabs, activeTab, onTabChange }) {
  return (
    <div className="flex gap-4 mt-10">
      {tabs.map((tab) => (
        <button
          key={tab}
          onClick={() => onTabChange(tab)}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
            activeTab === tab ? "bg-purple-700 text-white border border-purple-400" : "bg-gray-800 text-gray-300"
          }`}
        >
          {tab}
        </button>
      ))}
    </div>
  );
}