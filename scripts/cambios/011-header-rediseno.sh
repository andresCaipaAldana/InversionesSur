#!/bin/bash
# ============================================================
# Cambio 011: Rediseño del Header estilo Marval
# - Logo clickeable
# - Chips de navegación (Casas · Aptos · Lotes)
# - Sticky con sombra al scroll
# - Mobile-first con menú hamburguesa
# Fecha: $(date +%Y-%m-%d)
# ============================================================

set -e

cd "$(dirname "$0")/../.."
echo "🎨 Rediseñando Header..."
echo ""

# --- 1. Header.jsx ---
echo "1️⃣ Actualizando Header.jsx..."
cat > src/components/common/Header.jsx << 'EOF'
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
EOF
echo "   ✅ Header.jsx actualizado"

# --- 2. Header.css ---
echo "2️⃣ Actualizando Header.css..."
cat > src/components/common/Header.css << 'EOF'
.header {
  position: sticky;
  top: 0;
  background: var(--color-blanco);
  z-index: 100;
  padding: 1rem 0;
  transition: box-shadow var(--transicion), padding var(--transicion);
  border-bottom: 1px solid transparent;
}

.header--scrolled {
  padding: 0.75rem 0;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  border-bottom-color: var(--color-borde);
}

.header__contenido {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1.5rem;
}

/* ============================================
   LOGO
   ============================================ */
.header__logo {
  display: flex;
  align-items: baseline;
  gap: 0.3rem;
  transition: transform var(--transicion);
}

.header__logo:hover {
  transform: scale(1.03);
}

.header__logo-marca {
  font-family: var(--fuente-titulos);
  font-size: 1.5rem;
  font-weight: 800;
  color: var(--color-primario);
  letter-spacing: 0.05em;
  line-height: 1;
}

.header__logo-sub {
  font-family: var(--fuente-titulos);
  font-size: 1.1rem;
  font-weight: 500;
  color: var(--color-secundario);
  letter-spacing: 0.05em;
  line-height: 1;
}

/* ============================================
   CHIPS DE NAVEGACIÓN - Desktop
   ============================================ */
.header__nav--desktop {
  display: flex;
  gap: 0.5rem;
  align-items: center;
  flex: 1;
  justify-content: center;
}

.header__chip {
  padding: 0.5rem 1.2rem;
  background: transparent;
  color: var(--color-texto-suave);
  border-radius: var(--radio-full);
  font-size: 0.9rem;
  font-weight: 500;
  transition: all var(--transicion);
  font-family: var(--fuente-cuerpo);
  border: 1.5px solid transparent;
  white-space: nowrap;
}

.header__chip:hover {
  background: var(--color-fondo-alt);
  color: var(--color-primario);
}

.header__chip--activo {
  background: var(--color-primario);
  color: var(--color-blanco);
  font-weight: 600;
}

/* ============================================
   ACCIONES (Contacto + Hamburguesa)
   ============================================ */
.header__acciones {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.header__contacto {
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  padding: 0.55rem 1.1rem;
  background: var(--color-primario);
  color: var(--color-blanco);
  border-radius: var(--radio-full);
  font-size: 0.85rem;
  font-weight: 600;
  transition: all var(--transicion);
}

.header__contacto:hover {
  background: var(--color-secundario);
  color: var(--color-primario);
  transform: translateY(-2px);
  box-shadow: 0 6px 15px rgba(201, 169, 97, 0.3);
}

/* ============================================
   HAMBURGUESA (Mobile)
   ============================================ */
.header__hamburguesa {
  display: none;
  width: 40px;
  height: 40px;
  background: transparent;
  border-radius: var(--radio-sm);
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 5px;
  transition: background var(--transicion);
}

.header__hamburguesa:hover {
  background: var(--color-fondo-alt);
}

.header__hamburguesa span {
  display: block;
  width: 22px;
  height: 2px;
  background: var(--color-primario);
  border-radius: 2px;
  transition: all var(--transicion);
}

.header__hamburguesa--activa span:nth-child(1) {
  transform: translateY(7px) rotate(45deg);
}

.header__hamburguesa--activa span:nth-child(2) {
  opacity: 0;
}

.header__hamburguesa--activa span:nth-child(3) {
  transform: translateY(-7px) rotate(-45deg);
}

/* ============================================
   MENÚ MOBILE
   ============================================ */
.header__menu-mobile {
  display: none;
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  background: var(--color-blanco);
  padding: 0;
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.3s ease, padding 0.3s ease;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  border-bottom: 1px solid var(--color-borde);
}

.header__menu-mobile--abierto {
  max-height: 500px;
  padding: 1.5rem 1.5rem 2rem;
}

.header__nav-mobile {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
}

.header__chip-mobile {
  padding: 0.9rem 1.2rem;
  background: var(--color-fondo-alt);
  color: var(--color-primario);
  border-radius: var(--radio);
  font-size: 1rem;
  font-weight: 500;
  text-align: left;
  transition: all var(--transicion);
  font-family: var(--fuente-cuerpo);
}

.header__chip-mobile:hover {
  background: var(--color-primario);
  color: var(--color-blanco);
}

.header__chip-mobile--activo {
  background: var(--color-primario);
  color: var(--color-blanco);
  font-weight: 600;
}

.header__contacto-mobile {
  width: 100%;
  justify-content: center;
}

/* ============================================
   RESPONSIVE
   ============================================ */
@media (max-width: 900px) {
  .header__nav--desktop {
    display: none;
  }

  .header__hamburguesa {
    display: flex;
  }

  .header__contacto {
    display: none;
  }

  .header__menu-mobile {
    display: block;
  }
}

@media (max-width: 480px) {
  .header__logo-marca { font-size: 1.3rem; }
  .header__logo-sub { font-size: 0.95rem; }
}
EOF
echo "   ✅ Header.css actualizado"

# --- 3. Home.jsx: leer filtro desde URL ---
echo "3️⃣ Actualizando Home.jsx para leer filtro desde URL..."
cat > src/pages/Home.jsx << 'EOF'
import { useState, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import Header from '../components/common/Header'
import Footer from '../components/common/Footer'
import HeroGeneral from '../components/home/HeroGeneral'
import FiltrosPropiedades from '../components/home/FiltrosPropiedades'
import PropiedadCard from '../components/common/PropiedadCard'
import { getPropiedadesPorTipo } from '../data/propiedades'
import './Home.css'

function Home() {
  const [searchParams, setSearchParams] = useSearchParams()
  const filtroUrl = searchParams.get('filtro') || 'todas'
  const [filtro, setFiltro] = useState(filtroUrl)

  // Sincronizar filtro con la URL
  useEffect(() => {
    setFiltro(filtroUrl)
  }, [filtroUrl])

  const handleCambiarFiltro = (nuevoFiltro) => {
    setFiltro(nuevoFiltro)
    if (nuevoFiltro === 'todas') {
      setSearchParams({})
    } else {
      setSearchParams({ filtro: nuevoFiltro })
    }
  }

  const propiedadesFiltradas = getPropiedadesPorTipo(filtro)

  return (
    <>
      <Header filtroActivo={filtro} onCambiarFiltro={handleCambiarFiltro} />
      <HeroGeneral />
      <FiltrosPropiedades filtroActivo={filtro} onCambiarFiltro={handleCambiarFiltro} />
      <section className="home__grid-section" id="propiedades">
        <div className="container">
          {propiedadesFiltradas.length === 0 ? (
            <p className="home__vacio">
              No hay propiedades disponibles en esta categoría por el momento.
            </p>
          ) : (
            <div className="home__grid">
              {propiedadesFiltradas.map((propiedad) => (
                <PropiedadCard key={propiedad.id} propiedad={propiedad} />
              ))}
            </div>
          )}
        </div>
      </section>
      <Footer />
    </>
  )
}

export default Home
EOF
echo "   ✅ Home.jsx actualizado"

echo ""
echo "✅ Cambio 011 aplicado correctamente"
echo ""
echo "📋 Notas:"
echo "   - Header con logo AZUR M&A clickeable"
echo "   - Chips: Todas · Casas · Aptos · Lotes"
echo "   - En home: filtran la lista"
echo "   - En otras páginas: navegan al home con el filtro"
echo "   - Mobile: menú hamburguesa"
echo "   - Sticky con sombra al hacer scroll"
