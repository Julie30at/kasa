import '../styles/Rating.scss';

export function Rating({ rating }) {
  const normalizedRating = Math.min(Math.max(rating, 0), 5);

  return (
    <div className="rating">
      {Array(5)
        .fill(null)
        .map((_, index) => (
          <div
            key={index}
            className={index < normalizedRating ? 'star filled' : 'star'}
          />
        ))}
    </div>
  );
}
