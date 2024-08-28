// Importation du fichier de style SCSS spécifique pour le composant Banner
import '../styles/Banner.scss';

// Importation du hook `useLocation` de la bibliothèque 'react-router-dom'
// qui permet d'accéder à l'objet `location`, fournissant des informations
// sur l'URL actuelle.
import { useLocation } from 'react-router-dom';

// Importation des hooks `useEffect` et `useState` de React.
// `useState` est utilisé pour gérer l'état local du composant.
// `useEffect` est utilisé pour exécuter du code en réponse à des changements
// spécifiques dans le composant, comme le montage ou le changement de dépendances.
import { useEffect, useState } from 'react';

// Déclaration du composant fonctionnel `Banner`
export function Banner() {
  // Déclare une variable d'état `aboutPage` initialisée à `false`.
  // `aboutPage` indique si la page actuelle est la page "About".
  const [aboutPage, setAboutPage] = useState(false);

  // Récupère l'objet `location` qui contient des informations sur la route actuelle,
  // telles que le chemin (pathname) de l'URL.
  const location = useLocation();

  // Utilise le hook `useEffect` pour surveiller les changements du `location.pathname`.
  // Si le chemin est '/about', `aboutPage` est défini sur `true`, sinon sur `false`.
  useEffect(() => {
    if (location.pathname === '/about') {
      setAboutPage(true);
    } else {
      setAboutPage(false);
    }
  }, [location.pathname]); // Dépendance : ce bloc est exécuté à chaque fois que `location.pathname` change.

  // Rendu du composant `Banner`.
  // Si `aboutPage` est `true`, la section aura une classe CSS `banner_about`,
  // sinon elle aura la classe `banner`.
  // Si `aboutPage` est `false`, un titre `h2` est affiché avec le texte "Chez vous, partout et ailleurs".
  return (
    <section className={aboutPage ? 'banner_about' : 'banner'}>
      {!aboutPage && <h2>Chez vous, partout et ailleurs</h2>}
    </section>
  );
}
