import { Header, Banner, Gallery, Footer } from '../components';
import '../styles/Home.scss';

export function Home() {
  return (
    <div>
      <Header />
      <div className="homeContainer">
        <Banner />
        <Gallery />
      </div>
      <Footer />
    </div>
  );
}
