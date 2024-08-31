import { NavLink } from 'react-router-dom';
import logo from '../assets/Logo.png';
import '../styles/Header.scss';

export function Header() {
  return (
    <header className="header_container">
      <div className="header">
        <img src={logo} alt="logo" />
        <div className="link">
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? 'active' : '')}
          >
            Accueil
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) => (isActive ? 'active' : '')}
          >
            A propos
          </NavLink>
        </div>
      </div>
    </header>
  );
}
