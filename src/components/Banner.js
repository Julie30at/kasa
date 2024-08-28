// Importation du fichier de style SCSS spécifique pour le composant Banner
import '../styles/Banner.scss';

// Déclaration du composant fonctionnel `Banner`
export function Banner({aboutPage}) {
  

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
