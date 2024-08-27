import { Link } from "react-router-dom";
import { Footer, Header } from "../components";
import '../styles/Error.scss'

export function Error() {
    return (
      <div>
        <Header />
        <div className="error">
        <h1 className="error_title">404</h1>
        <p className="error_txt">
          Oups! La page que vous demandez n'existe pas
        </p>
        <Link to={`/`} className="error_link">
          <h2>Retourner sur la page d’accueil</h2>
        </Link>
        </div>
        <Footer />
      </div>
    );
}