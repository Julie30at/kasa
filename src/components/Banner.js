import '../styles/Banner.scss';

export function Banner({ aboutPage, backgroundImage, title }) {
  const getBannerStyle = () => ({
    backgroundImage: `linear-gradient(rgba(0, 0, 0, ${aboutPage ? '0.3' : '0.6'}), rgba(0, 0, 0, ${
      aboutPage ? '0.3' : '0.6'
    })), url(${backgroundImage})`,
  });

  return (
    <section className="banner" style={getBannerStyle()}>
      {!aboutPage && <h2>{title}</h2>}
    </section>
  );
}
