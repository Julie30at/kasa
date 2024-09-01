import Data from '../data/data.json';
import '../styles/Tags.scss';

export function Tags() {

  const [firstItem] = Data;

  if (!firstItem || !firstItem.tags) {
    return <div>Aucune information disponible</div>;
  }

  return (
    <div className="tags">
      {firstItem.tags.map((tag, index) => (
        <button key={index} className="tag">
          {tag}
        </button>
      ))}
    </div>
  );
}
