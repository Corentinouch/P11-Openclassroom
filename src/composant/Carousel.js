import React, { useState } from 'react';
import './carousel.css'; // Assurez-vous d'avoir des styles CSS associés pour le carrousel
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'


function Carousel({ images }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((currentIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((currentIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="carousel">
      <button onClick={prevSlide} className="arrow_carousel prev"><FontAwesomeIcon icon={faChevronLeft} style={{color: "#ffffff",}} /></button>
      <div className="slide-container" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
        {images.map((image, index) => (
          <div key={index} className="slide">
            <img src={image} alt={`Slide ${index}`} />
          </div>
        ))}
      </div>
      <button onClick={nextSlide} className="arrow_carousel next"><FontAwesomeIcon icon={faChevronRight} style={{color: "#ffffff",}} /></button>
    </div>
  );
}

export default Carousel;
