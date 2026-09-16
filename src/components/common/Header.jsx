import './Header.css'
import WhatsAppIcon from './WhatsAppIcon'

const LINK_INVERSIONES = '#' // TODO: reemplazar por URL real de Inversiones Sur
const WHATSAPP = 'https://wa.me/573017982968?text=Hola,%20quiero%20informaci%C3%B3n%20sobre%20la%20Torre%20Manolo'

function Header() {
  return (
    <header className="header">
      <div className="container header__contenido">
        <a
          href={LINK_INVERSIONES}
          className="header__link"
          aria-label="Inversiones Sur"
        >
          <span className="header__logo-texto">Inversiones Sur</span>
        </a>

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
