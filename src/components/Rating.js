// Importation des images d'étoiles (une étoile vide et une étoile remplie)
import StarEmpty from '../assets/greyStar.png';
import StarFilled from '../assets/redStar.png';

// Importation du fichier de styles pour le composant Rating
import '../styles/Rating.scss';

// Fonction composant Rating qui prend la prop `rating`
export function Rating({ rating }) {
  // Normalise la valeur de `rating` pour qu'elle soit comprise entre 0 et 5
  const normalizedRating = Math.min(Math.max(rating, 0), 5);

  // Fonction pour déterminer quelle image d'étoile afficher
  // Retourne une étoile remplie si l'index est inférieur à `normalizedRating`, sinon une étoile vide
  const getStarImage = (index) => {
    return index < normalizedRating ? StarFilled : StarEmpty;
  };

  // Retourne l'affichage des 5 étoiles
  return (
    <div className="rating">
      {Array(5) // Crée un tableau de 5 éléments (pour les 5 étoiles)
        .fill(null) // Remplit le tableau avec des valeurs nulles
        .map(
          (
            _,
            index, // Itère sur chaque élément du tableau, où `index` est l'index de l'étoile
          ) => (
            <img
              key={index} // Ajoute une clé unique pour chaque étoile
              src={getStarImage(index)} // Détermine la source de l'image d'étoile à afficher
              alt="star" // Ajoute un texte alternatif pour l'image
            />
          ),
        )}
    </div>
  );
}
