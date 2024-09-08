import React, { useState } from 'react'; 
import '../styles/Carousel.scss'; 
import arrowLeft from '../assets/arrow_left.png'; 
import arrowRight from '../assets/arrow_right.png'; 

export function Carousel({ images }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const hasMultipleImages = images.length > 1;

  // Fonction pour passer à l'image suivante
  const nextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1,
    );
  };

  // Fonction pour passer à l'image précédente
  const prevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1,
    );
  };

  // Fonction pour aller directement à une image en fonction de l'index
  const goToImage = (index) => {
    setCurrentImageIndex(index);
  };

  return (
    <div className="carousel">
      {/* Affichage du bouton gauche pour l'image précédente seulement s'il y a plus d'une image */}
      {hasMultipleImages && (
        <button
          className="carousel_button carousel_button-left"
          onClick={prevImage}
        >
          <img src={arrowLeft} alt="Précédent" className="carousel_arrow" />
        </button>
      )}

      {/* Affichage de l'image actuellement sélectionnée */}
      <img
        src={images[currentImageIndex]} 
        alt={`Kasa - ${currentImageIndex + 1}`} 
        className="carousel_image" 
      />

      {/* Affichage du bouton droit pour l'image suivante seulement s'il y a plus d'une image */}
      {hasMultipleImages && (
        <button
          className="carousel_button carousel_button-right"
          onClick={nextImage} 
        >
          <img src={arrowRight} alt="Suivant" className="carousel_arrow" />
        </button>
      )}

      {/* Affichage des dots seulement s'il y a plus d'une image */}
      {hasMultipleImages && (
        <div className="carousel_dots">
          {/* Parcours de chaque image pour créer le nombre nécéssaire de dot */}
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
