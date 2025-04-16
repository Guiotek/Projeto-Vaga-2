import React from 'react';
import "../styles/userCard.css";

const userCard = ({ name, image, bio }) => {
  return (
    <div className="user-card">
      <img src={image} alt={name} />
      <div className="user-info">
        <h2>{name}</h2>
        <p>{bio}</p>
      </div>
    </div>
  );
};

export default userCard;
