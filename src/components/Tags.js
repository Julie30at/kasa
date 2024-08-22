import Data from '../data/data.json';

export function Tags() {
  const [firstItem] = Data;

  if (!firstItem || !firstItem.tags) {
    return <div>Aucune information disponible</div>;
  }

  return (
    <div className="tags">
      {firstItem.tags.map((tag, index) => (
        <span key={index} className="tag">
          {tag}
        </span>
      ))}
    </div>
  );
}