import StarEmpty from '../assets/greyStar.png';
import StarFilled from '../assets/redStar.png';

export function Rating({ rating }) {
 
  const getStarImage = (index) => {
    return index < rating ? StarFilled : StarEmpty;
  };

  return (
    <div>
      {Array(5)
        .fill(null)
        .map((_, index) => (
          <img
            key={index}
            src={getStarImage(index)}
            alt="star"
            style={{ width: '24px', height: '24px' }}
          />
        ))}
    </div>
  );
}