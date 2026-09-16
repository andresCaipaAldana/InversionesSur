import { Link } from 'react-router-dom'
import './Header.css'
import WhatsAppIcon from './WhatsAppIcon'

const WHATSAPP =
  'https://wa.me/573017982968?text=Hola,%20quiero%20informaci%C3%B3n%20sobre%20las%20propiedades'

function Header() {
  return (
    <header className="header">
      <div className="container header__contenido">
        <Link to="/" className="header__link" aria-label="Inversiones Sur - Inicio">
          <span className="header__logo-texto">Inversiones Sur</span>
        </Link>

        <a
          href={WHATSAPP}
          target="_blank"
          rel="noopener noreferrer"
          className="header__whatsapp"
        >
          <WhatsAppIcon size={18} />
          <span>Contacto</span>
        </a>
      </div>
    </header>
  )
}

export default Header
