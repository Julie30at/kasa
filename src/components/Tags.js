// Importation des données à partir d'un fichier JSON local
import Data from '../data/data.json';

// Importation des styles spécifiques pour les tags depuis un fichier SCSS
import '../styles/Tags.scss';

// Définition du composant fonctionnel "Tags"
export function Tags() {
  // Extraction du premier élément de l'objet JSON importé
  const [firstItem] = Data;

  // Vérification si l'objet firstItem existe et s'il contient des tags
  // Si firstItem est undefined ou ne contient pas de tags, afficher un message d'information
  if (!firstItem || !firstItem.tags) {
    return <div>Aucune information disponible</div>;
  }

  // Si des tags sont disponibles, on les affiche dans des boutons
  return (
    <div className="tags">
      {firstItem.tags.map((tag, index) => (
        // Chaque tag est affiché dans un bouton avec une clé unique pour React
        <button key={index} className="tag">
          {tag}
        </button>
      ))}
    </div>
  );
}
