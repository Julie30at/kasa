import Data from '../data/data.json';
import Card from './Card';
import '../styles/Gallery.scss';

export function Gallery() {
  return (
    <main className="home_gallery">
      {Data.map((data) => {
        return (
          <Card
            key={data.id}
            id={data.id} 
            title={data.title} 
            cover={data.coverImage} 
          />
        );
      })}
    </main>
  );
}
