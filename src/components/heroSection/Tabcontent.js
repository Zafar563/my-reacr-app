import React, { useEffect, useState } from 'react';

export default function TabContent({ activeTab }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(false);
    const timer = setTimeout(() => setVisible(true), 200); // biroz kechiktiramiz
    return () => clearTimeout(timer);
  }, [activeTab]);

  const content = {
    'Company Benefit': (
      <>
        <h2>Company main platform</h2>
        <p>Simplify your workflow...</p>
        <p>Our platform grows with your business...</p>
      </>
    ),
    'Team Management': (
      <>
        <h2>Team collaboration made easy</h2>
        <p>Organize your team’s tasks and communication...</p>
      </>
    ),
    'Road Map': (
      <>
        <h2>Product Roadmap</h2>
        <p>Plan and visualize your product development...</p>
      </>
    ),
  };

  return (
    <div className={`tab-content fade ${visible ? 'show' : ''}`}>
      {content[activeTab]}
    </div>
  );
}
