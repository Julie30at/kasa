import { Link } from 'react-router-dom';
import "../styles/Card.scss"

export default function Card({ title, cover }) {
  return (
    <Link to={`/Rental/${title}`} className="gallery_card">
      <img src={cover} alt={`Kasa - ${title}`} />
      <h3>{title}</h3>
    </Link>
  );
}
