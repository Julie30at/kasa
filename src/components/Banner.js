import '../styles/Banner.scss';

export function Banner({ backgroundImage, title }) {
  const getBannerStyle = () => ({
    backgroundImage: `linear-gradient(rgba(0, 0, 0, ${title ? '0.6' : '0.3'}), rgba(0, 0, 0, ${
      title ? '0.6' : '0.3'
    })), url(${backgroundImage})`,
  });

  return (
    <section className="banner" style={getBannerStyle()}>
      {title && <h2>{title}</h2>}
    </section>
  );
}
