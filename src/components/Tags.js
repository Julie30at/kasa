import '../styles/Tags.scss'; 

export function Tags({ tags }) {

  if (!Array.isArray(tags) || tags.length === 0) {
    return <div className='tag'>Aucune information disponible</div>; 
  }

  return (
    <div className="tags">

      {tags.map((tag, index) => (
        <div key={tag + index} className="tag">
          {tag}
        </div>
      ))}
    </div>
  );
}
