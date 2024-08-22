import { NavLink } from "react-router-dom";
import logo from "../assets/Logo.png"
import "../styles/Header.scss"

export function Header() {
  return (
    <header className="header">
      <img src={logo} alt="logo" />
      <div className="link ">
        <NavLink to={'/'} className="active ">
          Accueil
        </NavLink>
        <NavLink to={'/about'} className="active">
          A propos
        </NavLink>
      </div>
    </header>
  );
}
