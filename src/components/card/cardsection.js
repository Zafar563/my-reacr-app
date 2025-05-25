import React from 'react';
import Card from '../card/card';
import { FaAward, FaRocket, FaUsers } from 'react-icons/fa';

const CardsSection = () => {
  const cards = [
    {
      icon: <FaAward size={30} />,
      title: "Best interaction achievement award",
      description: "",
      link: { text: "Visit Solve.com", url: "#" },
    },
    {
      icon: <FaRocket size={30} />,
      title: "First unicorn company in 2024",
      description: "With 120k+ active user’s",
      link: { text: "Visit Solve.com", url: "#" },
    },
    {
      icon: <FaUsers size={30} />,
      title: "We reach 1m user’s in just 6 month’s",
      description: "We got 12 record in tec industry",
      link: { text: "Visit Solve.com", url: "#" },
    },
  ];

  return (
    <div className="cards-section">
      {cards.map((card, index) => (
        <Card key={index} {...card} />
      ))}
    </div>
  );
};

export default CardsSection;
