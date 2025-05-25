import React from 'react';

const Card = ({ icon, title, description, link }) => {
  return (
    <div className="card">
      <div className="card-icon">{icon}</div>
      <h3 className="card-title">{title}</h3>
      <p className="card-description">{description}</p>
      <a href={link.url} className="card-link">{link.text}</a>
    </div>
  );
};

export default Card;
