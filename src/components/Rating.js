import '../styles/Rating.scss';

export function Rating({ rating }) {
  
  const normalizedRating = Math.min(Math.max(rating, 0), 5);

  const starClasses = Array.from({ length: 5 }, (_, index) =>
    index < normalizedRating ? 'star filled' : 'star',
  );

  return (
    <div className="rating">
      {starClasses.map((starClass, index) => (
        <div key={index} className={starClass} />
      ))}
    </div>
  );
}
