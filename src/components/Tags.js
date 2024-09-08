import '../styles/Tags.scss'; // Importation des styles CSS spécifiques au composant

// Le composant prend désormais une prop `tags`
export function Tags({ tags }) {
  // Vérifie si la prop `tags` est un tableau non vide
  if (!Array.isArray(tags) || tags.length === 0) {
    return <div className='tag'>Aucune information disponible</div>; // Affiche un message si les tags ne sont pas disponibles ou ne sont pas un tableau
  }

  return (
    <div className="tags">
      {/* Itération sur les tags et création d'un bouton pour chaque tag */}
      {tags.map((tag, index) => (
        <div key={tag + index} className="tag">
          {tag}
        </div>
      ))}
    </div>
  );
}
