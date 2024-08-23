// Importation des images pour les flèches directionnelles
import arrowTop from '../assets/arrow_back_top.png';
import arrowBottom from '../assets/arrow_back_bottom.png';

// Importation des styles spécifiques pour ce composant
import '../styles/Collapse.scss';

// Importation du hook useState de React pour gérer l'état local
import { useState } from 'react';

export function Collapse({ title, content }) {
  // Déclaration d'une variable d'état 'toggle' pour gérer l'affichage du contenu
  // Initialisée à false (le contenu est caché par défaut)
  const [toggle, setToggle] = useState(false);

  return (
    <div className="collapse">
      {/* Titre du composant, si contenu déplié class css expanded */}
      <h3 className={`collapse_title ${toggle ? 'expanded' : ''}`}> 
        {title}
        {/* Image de la flèche, qui change en fonction de l'état 'toggle' */}
        <img
          className={toggle ? 'arrow arrow_down' : 'arrow arrow_up'} // La classe CSS change selon l'état pour orienter la flèche
          src={toggle ? arrowBottom : arrowTop} // L'image source change également en fonction de l'état
          alt="toggle content" // Texte alternatif pour l'image
          onClick={() => setToggle(!toggle)} // Inversion de l'état 'toggle' lorsqu'on clique sur l'image
        />
      </h3>

      {/* Contenu affiché uniquement si 'toggle' est vrai */}
      {toggle && (
        <div className="collapse_content">
          {/* Si le contenu est un tableau, chaque élément est mappé dans un paragraphe */}
          {
            Array.isArray(content)
              ? content.map((item, index) => <p key={index}>{item}</p>)
              : content /* Sinon, le contenu est affiché tel quel */
          }
        </div>
      )}
    </div>
  );
}
