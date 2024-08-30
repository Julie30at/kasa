import { useParams } from 'react-router-dom';
import Data from '../data/data.json';
import '../styles/Rental.scss';
import { Header, Collapse, Tags, Rating, Carousel, Footer } from '../components';

export function Rental() {
  // Utilisation du hook useParams pour récupérer les paramètres de l'URL
  const { title } = useParams();

  // Recherche des données correspondantes dans le fichier JSON
  const rentalData = Data.find((item) => item.title === title);

  // Gestion du cas où le titre n'est pas trouvé
  if (!rentalData) {
    return <div>Rental not found</div>;
  }

  return (
    <div className="rental">
      <Header />
      <Carousel images={rentalData.images} />{' '}
      <h1 className="rental_title">{rentalData.title}</h1>
      <p className="rental_location">{rentalData.location}</p>
      <Tags />
      <div className="rental_host">
        <h2 className="rental_host_name">{rentalData.host.name}</h2>
        <img
          src={rentalData.host.image}
          alt={`Kasa - ${rentalData.host.name}`}
        ></img>
        <Rating rating={rentalData.rating} className="rental_host_rating" />
      </div>
      <div className="rental_collapse">
        <div className="rental_collapse_item">
          <Collapse title={'Description'} content={rentalData.description} />
        </div>
        <div className="rental_collapse_item">
          <Collapse title={'Équipements'} content={rentalData.equipment} />
        </div>
      </div>
      <Footer />
    </div>
  );
}
