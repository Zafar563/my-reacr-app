import React, { useState } from "react";
import GraphicCard from "../heroSection/graphicCard";
import TabContent from '../heroSection/Tabcontent';
import Tabs from '../heroSection/tabs';
import PlatformDescription from '../heroSection/platformDescription';
export default function HeroSection() {
     const [activeTab, setActiveTab] = useState('Company Benefit');

  const tabs = ['Company Benefit', 'Team Management', 'Road Map'];

  return (<>
   <div className="hero-text">
        <h1 >Built for endless uses,<br />Across all teams.</h1> 
   
      </div>
   <div className="hero">
       
      <GraphicCard />
    
        <div className="tab"> 
            <Tabs tabs={tabs} activeTab={activeTab} onTabChange={setActiveTab} />
            <TabContent activeTab={activeTab} />
            <PlatformDescription /></div>
        
    </div></>
   
  );
}
