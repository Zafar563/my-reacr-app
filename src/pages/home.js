import React, { useState } from "react";
import CardsSection from "../components/card/cardsection"
import WhoWeAreSection from '../components/whoWeAre/whoWeAreSection';
import HeroSection from '../components/heroSection/heroSection';
import Tabs from '../components/heroSection/tabs';
import PlatformDescription from '../components/heroSection/platformDescription';
const Home = () => {
      const [activeTab, setActiveTab] = useState("Company Benefit");

       const tabs = ["Company Benefit", "Team Management", "Road Map"];

  return (
    <div className='wrapper'>
       <div className="container">
          <div className="sphere"></div>
          <div className="home-title">
            <h4>Welcome to Solve.</h4>
            <h1>Mange Your Task <br />
              Wfficiently</h1>
              <p>Solve Your Project Management Problems <br />
              For Your Satisfaction </p>
          </div>
          <div className="card-section">
            <CardsSection />
          </div>
          <div className="who-we-are-section">
            <WhoWeAreSection /> 
          </div>
            <div className="min-h-screen bg-gradient-to-br from-[#0f0c29] to-[#302b63] text-white p-6">
                   <HeroSection />
                   <Tabs tabs={tabs} activeTab={activeTab} onTabChange={setActiveTab} />
                   <PlatformDescription />
    </div>  
       </div>
    </div>
  )
}

export default Home ; 
