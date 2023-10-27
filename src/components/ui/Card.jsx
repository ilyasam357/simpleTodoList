// Card.js
import React from 'react';

function Card({ children, bgColor }) {
  const cardStyles = `rounded-lg shadow-lg p-4 m-4 w-3/5 ${bgColor}`;

  return (
    <div className={cardStyles}>
      {children}
    </div>
  );
}

export default Card;
