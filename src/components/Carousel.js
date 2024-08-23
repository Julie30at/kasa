import "../styles/Carousel.scss"
import ArrowRight from "../assets/arrow_right.png"
import ArrowLeft from "../assets/arrow_left.png"
import { useState } from "react"

export function Carousel({ imageSlider }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex(currentIndex + 1);
    if (currentIndex === imageSlider.length - 1) setCurrentIndex(0);
  };

  const prevSlide = () => {
    setCurrentIndex(currentIndex - 1);
    if (currentIndex === 0) setCurrentIndex(imageSlider.length - 1);
  };

  return (
    <section
      style={{ backgroundImage: `url(${imageSlider[currentIndex]})` }}
      className="carousel"
    >
      {imageSlider.length > 1 && (
        <>
          <img
            className="carousel_arrow carousel_arrow_right"
            src={ArrowRight}
            alt="show next slider"
            onClick={nextSlide}
          />
          <img
            className="carousel_arrow carousel_arrow_left"
            src={ArrowLeft}
            alt="show previous slider"
            onClick={prevSlide}
          />
        </>
      )}
    </section>
  );
}