import { useNavigate, Link } from 'react-router-dom';
import '../styles/Card.scss';

export default function Card({ title, cover }) {
  const navigate = useNavigate();
  
  const isValidTitle = (title) => {
    return title && title.trim().length > 0;
  };

  if (!isValidTitle(title)) {
    navigate('/error'); 
    return null;
  }

  return (
    <Link to={`/Rental/${title}`} className="gallery_card">
      <img src={cover} alt={`Kasa - ${title}`} />
      <h3>{title}</h3>
    </Link>
  );
}
