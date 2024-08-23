import StarEmpty from '../assets/greyStar.png';
import StarFilled from '../assets/redStar.png';
import "../styles/Rating.scss"

export function Rating({ rating }) {
  // Vérifiez que rating est un nombre et qu'il est dans la plage attendue
  const normalizedRating = Math.min(Math.max(rating, 0), 5);

  const getStarImage = (index) => {
    return index < normalizedRating ? StarFilled : StarEmpty;
  };

  return (
    <div className='rating'>
      {Array(5)
        .fill(null)
        .map((_, index) => (
          <img
            key={index}
            src={getStarImage(index)}
            alt="star"
          />
        ))}
    </div>
  );
}
