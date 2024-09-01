import '../styles/Banner.scss';

export function Banner({aboutPage}) {
  
  return (
    <section className={aboutPage ? 'banner_about' : 'banner'}>
      {!aboutPage && <h2>Chez vous, partout et ailleurs</h2>}
    </section>
  );
}
