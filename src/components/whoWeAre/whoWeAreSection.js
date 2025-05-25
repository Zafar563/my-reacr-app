import React from 'react';
import Chart from '../whoWeAre/chart';
import Stats from '../whoWeAre/stats';
import DescriptionWithCTA from '../whoWeAre/descriptionWithCTA';

const WhoWeAreSection = () => {
  return (
    <section className="who-we-are">
      <h2>Who we are?</h2>
      <div className="content">
        <Chart />
        <div className="right-side">
          <Stats />
          <DescriptionWithCTA />
        </div>
      </div>
    </section>
  );
};

export default WhoWeAreSection;
