import logo from "../assets/FooterLogo.png"
import "../styles/Footer.scss"

export function Footer() {
    return (
        <footer className="footer">
            <img src={logo} alt="logo" />
        </footer>
    )
}