// Importation du composant `Link` depuis `react-router-dom` pour gérer la navigation sans rechargement de la page
import { Link } from 'react-router-dom';

// Importation des styles spécifiques au composant `Card` depuis un fichier SCSS
import '../styles/Card.scss';

// Définition et exportation du composant fonctionnel `Card`
// Le composant prend deux propriétés : `title` et `cover`
export default function Card({ title, cover }) {
  return (
    // Le composant `Link` redirige vers une URL dynamique basée sur le titre de la carte
    <Link to={`/Rental/${title}`} className="gallery_card">
      {/* Affichage de l'image avec la source provenant de la propriété `cover` et une description alternative dynamique */}
      <img src={cover} alt={`Kasa - ${title}`} />

      {/* Affichage du titre de la carte dans une balise <h3> */}
      <h3>{title}</h3>
    </Link>
  );
}
