import React, { useState } from 'react'; 
import '../styles/Carousel.scss'; 
import arrowLeft from '../assets/arrow_left.png'; 
import arrowRight from '../assets/arrow_right.png'; 

export function Carousel({ images }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const hasMultipleImages = images.length > 1;

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1,
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1,
    );
  };

  const goToImage = (index) => {
    setCurrentImageIndex(index);
  };

  return (
    <div className="carousel">

      {hasMultipleImages && (
        <button
          className="carousel_button carousel_button-left"
          onClick={prevImage}
        >
          <img src={arrowLeft} alt="Précédent" className="carousel_arrow" />
        </button>
      )}

      <img
        src={images[currentImageIndex]} 
        alt={`Kasa - ${currentImageIndex + 1}`} 
        className="carousel_image" 
      />

      {hasMultipleImages && (
        <button
          className="carousel_button carousel_button-right"
          onClick={nextImage} 
        >
          <img src={arrowRight} alt="Suivant" className="carousel_arrow" />
        </button>
      )}

      {hasMultipleImages && (

        <div className="carousel_dots">
          {images.map((_, index) => (
            <span
              key={index} 
              className={`carousel_dot ${index === currentImageIndex ? 'active' : ''}`} 
              onClick={() => goToImage(index)} 
            ></span>
          ))}
        </div>
      )}
    </div>
  );
}
