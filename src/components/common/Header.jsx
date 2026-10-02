import { useState, useEffect } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import './Header.css'
import WhatsAppIcon from './WhatsAppIcon'

const WHATSAPP =
  'https://wa.me/573017982968?text=Hola,%20quiero%20informaci%C3%B3n%20sobre%20las%20propiedades%20de%20Construcciones%20Azur%20M%26A'

const CHIPS = [
  { valor: 'todas', label: 'Todas' },
  { valor: 'casa', label: 'Casas' },
  { valor: 'apartamento', label: 'Aptos' },
  { valor: 'lote', label: 'Lotes' },
]

function Header({ filtroActivo, onCambiarFiltro }) {
  const [scrolled, setScrolled] = useState(false)
  const [menuAbierto, setMenuAbierto] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()
  const estaEnHome = location.pathname === '/'

  // Detectar scroll para cambiar el estilo del header
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Cerrar el menú al cambiar de ruta
  useEffect(() => {
    setMenuAbierto(false)
  }, [location.pathname])

  const handleChipClick = (valor) => {
    if (estaEnHome && onCambiarFiltro) {
      // Ya estamos en home: solo cambiamos el filtro
      onCambiarFiltro(valor)
      // Scroll suave a la sección de propiedades
      const seccion = document.getElementById('propiedades')
      if (seccion) {
        seccion.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }
    } else {
      // Estamos en otra página: navegamos al home con el filtro
      navigate(`/?filtro=${valor}`)
    }
    setMenuAbierto(false)
  }

  return (
    <header className={`header ${scrolled ? 'header--scrolled' : ''}`}>
      <div className="container header__contenido">
        {/* Logo clickeable al home */}
        <Link to="/" className="header__logo" aria-label="Azur M&A - Inicio">
          <span className="header__logo-marca">AZUR</span>
          <span className="header__logo-sub">M&amp;A</span>
        </Link>

        {/* Chips de navegación - Desktop */}
        <nav className="header__nav header__nav--desktop">
          {CHIPS.map((chip) => (
            <button
              key={chip.valor}
              className={`header__chip ${
                estaEnHome && filtroActivo === chip.valor
                  ? 'header__chip--activo'
                  : ''
              }`}
              onClick={() => handleChipClick(chip.valor)}
            >
              {chip.label}
            </button>
          ))}
        </nav>

        {/* Acciones - Desktop */}
        <div className="header__acciones">
          <a
            href={WHATSAPP}
            target="_blank"
            rel="noopener noreferrer"
            className="header__contacto"
          >
            <WhatsAppIcon size={16} />
            <span>Contacto</span>
          </a>

          {/* Hamburguesa - Mobile */}
          <button
            className={`header__hamburguesa ${
              menuAbierto ? 'header__hamburguesa--activa' : ''
            }`}
            onClick={() => setMenuAbierto(!menuAbierto)}
            aria-label="Menú"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>

      {/* Menú Mobile */}
      <div className={`header__menu-mobile ${menuAbierto ? 'header__menu-mobile--abierto' : ''}`}>
        <nav className="header__nav-mobile">
          {CHIPS.map((chip) => (
            <button
              key={chip.valor}
              className={`header__chip-mobile ${
                estaEnHome && filtroActivo === chip.valor
                  ? 'header__chip-mobile--activo'
                  : ''
              }`}
              onClick={() => handleChipClick(chip.valor)}
            >
              {chip.label}
            </button>
          ))}
        </nav>
        <a
          href={WHATSAPP}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn--whatsapp header__contacto-mobile"
        >
          <WhatsAppIcon size={18} />
          <span>Contactar por WhatsApp</span>
        </a>
      </div>
    </header>
  )
}

export default Header
