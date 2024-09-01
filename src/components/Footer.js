import logo from "../assets/logo_footer.png"
import "../styles/Footer.scss"

export function Footer() {
    return (
      <footer className="footer">
        <img className="footer_logo" src={logo} alt="logo" />
        <p className="footer_txt">© 2020 Kasa. All rights reserved</p>
      </footer>
    );
}