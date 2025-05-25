import React from 'react'; 
import Header from '../components/header/header'
import CardsSection from "../components/card/cardsection"
import WhoWeAreSection from '../components/whoWeAre/whoWeAreSection';
const Home = () => {
  return (
    <div className='wrapper'>
        <Header />
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
       </div>
    </div>
  )
}

export default Home ; 
