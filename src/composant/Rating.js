import React from 'react';

function Rating({ rating }) {
  const filledStars = Math.floor(rating);
  const remainingStar = 5 - filledStars;

  const filledStarsArray = Array.from({ length: filledStars }, (_, index) => (
    <span key={index} className="star filled">★</span>
  ));

  const remainingStarArray = Array.from({ length: remainingStar }, (_, index) => (
    <span key={index} className="star">☆</span>
  ));

  return (
    <div className="rating">
      {filledStarsArray}
      {remainingStarArray}
    </div>
  );
}

export default Rating;
