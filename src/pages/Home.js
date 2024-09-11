import { Header, Banner, Gallery, Footer } from '../components';
import homePicture from '../assets/HomePicture.png';
import '../styles/Home.scss';

export function Home() {
  return (
    <div>
      <Header />
      <div className="homeContainer">
        <Banner
          backgroundImage={homePicture}
          title="Chez vous, partout et ailleurs"
        />
        <Gallery />
      </div>
      <Footer />
    </div>
  );
}
