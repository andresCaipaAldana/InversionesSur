import './Header.css'

const WHATSAPP = 'https://wa.me/573017982968?text=Hola,%20estoy%20interesado%20en%20los%20apartamentos%20de%20Inversiones%20Sur'

function Header() {
  return (
    <header className="header">
      <div className="container header__contenido">
        <div className="header__logo">
          <span className="header__logo-icono">🏢</span>
          <span className="header__logo-texto">Inversiones Sur</span>
        </div>
        <a
          href={WHATSAPP}
          target="_blank"
          rel="noopener noreferrer"
          className="header__whatsapp"
        >
          <span>💬</span> Contactar
        </a>
      </div>
    </header>
  )
}

export default Header
