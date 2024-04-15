import React, { useState, useEffect } from 'react';
import './carousel.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons';

function Carousel({ images }) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };

        handleResize();
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const nextSlide = () => {
        setCurrentIndex((currentIndex + 1) % images.length);
    };

    const prevSlide = () => {
        setCurrentIndex((currentIndex - 1 + images.length) % images.length);
    };

    return (
        <div className="carousel">
            {images.length > 1 && (
                <button onClick={prevSlide} className={`arrow_carousel prev ${isMobile ? 'mobile' : ''}`}>
                    <FontAwesomeIcon icon={faChevronLeft} style={{ color: "#ffffff" }} />
                </button>
            )}
            <div className="slide-container" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
                {images.map((image, index) => (
                    <div key={index} className="slide">
                        {images.length > 1 && !isMobile && (
                            <span className="image-counter">{`${currentIndex + 1}/${images.length}`}</span>
                        )}
                        <img src={image} alt={`Slide ${index}`} />
                    </div>
                ))}
            </div>
            {images.length > 1 && (
                <button onClick={nextSlide} className={`arrow_carousel next ${isMobile ? 'mobile' : ''}`}>
                    <FontAwesomeIcon icon={faChevronRight} style={{ color: "#ffffff" }} />
                </button>
            )}
        </div>
    );
}

export default Carousel;
