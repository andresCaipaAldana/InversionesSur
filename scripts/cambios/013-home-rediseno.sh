#!/bin/bash
# ============================================================
# Cambio 013: Home rediseñada estilo Marval
# - Hero moderno con fondo claro
# - Filtros chips elegantes
# - Sección de stats con contadores animados
# - CTA final
# - Mobile-first
# Fecha: $(date +%Y-%m-%d)
# ============================================================

set -e

cd "$(dirname "$0")/../.."
echo "🎨 Rediseñando Home..."
echo ""

# --- 1. HeroGeneral.jsx ---
echo "1️⃣ Actualizando HeroGeneral.jsx..."
cat > src/components/home/HeroGeneral.jsx << 'EOF'
import './HeroGeneral.css'
import WhatsAppIcon from '../common/WhatsAppIcon'

const WHATSAPP =
  'https://wa.me/573017982968?text=Hola,%20quiero%20informaci%C3%B3n%20sobre%20las%20propiedades%20de%20Construcciones%20Azur%20M%26A'

function HeroGeneral() {
  return (
    <section className="hero-general">
      <div className="container hero-general__contenido">
        <div className="hero-general__texto">
          <span className="hero-general__badge">Construcciones Azur M&amp;A</span>
          <h1 className="hero-general__titulo">
            Encuentra tu{' '}
            <span className="hero-general__titulo-destacado">próximo hogar</span>
          </h1>
          <p className="hero-general__subtitulo">
            Proyectos, casas y lotes en Fusagasugá, Silvania y la región.
            Asesoría personalizada para hacer realidad tu inversión.
          </p>
          <div className="hero-general__botones">
            <a href="#propiedades" className="btn btn--primary">
              Ver propiedades
            </a>
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn--ghost"
            >
              <WhatsAppIcon size={18} />
              <span>Contacto</span>
            </a>
          </div>
        </div>

        <div className="hero-general__decoracion">
          <div className="hero-general__circulo"></div>
          <div className="hero-general__circulo hero-general__circulo--2"></div>
          <div className="hero-general__circulo hero-general__circulo--3"></div>
        </div>
      </div>
    </section>
  )
}

export default HeroGeneral
EOF
echo "   ✅ HeroGeneral.jsx actualizado"

# --- 2. HeroGeneral.css ---
echo "2️⃣ Actualizando HeroGeneral.css..."
cat > src/components/home/HeroGeneral.css << 'EOF'
.hero-general {
  background: linear-gradient(180deg, #FFFFFF 0%, var(--color-fondo-alt) 100%);
  padding: 5rem 0 4rem;
  position: relative;
  overflow: hidden;
}

.hero-general__contenido {
  display: grid;
  grid-template-columns: 1fr auto;
  gap: 3rem;
  align-items: center;
  position: relative;
  z-index: 1;
}

.hero-general__texto {
  max-width: 700px;
}

.hero-general__badge {
  display: inline-block;
  background: rgba(201, 169, 97, 0.15);
  color: var(--color-primario);
  padding: 0.5rem 1.2rem;
  border-radius: var(--radio-full);
  font-size: 0.8rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.hero-general__titulo {
  font-family: var(--fuente-titulos);
  font-size: clamp(2.2rem, 5vw, 3.8rem);
  font-weight: 800;
  color: var(--color-primario);
  line-height: 1.1;
  letter-spacing: -0.03em;
  margin-bottom: 1.5rem;
}

.hero-general__titulo-destacado {
  color: var(--color-secundario);
  position: relative;
  display: inline-block;
}

.hero-general__titulo-destacado::after {
  content: '';
  position: absolute;
  bottom: 0.1em;
  left: 0;
  right: 0;
  height: 0.35em;
  background: rgba(201, 169, 97, 0.2);
  z-index: -1;
  border-radius: var(--radio-sm);
}

.hero-general__subtitulo {
  font-size: clamp(1rem, 2vw, 1.15rem);
  color: var(--color-texto-suave);
  margin-bottom: 2rem;
  line-height: 1.7;
  font-weight: 400;
  max-width: 550px;
}

.hero-general__botones {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
}

/* ============================================
   DECORACIÓN (círculos flotantes)
   ============================================ */
.hero-general__decoracion {
  position: relative;
  width: 350px;
  height: 350px;
  display: block;
}

.hero-general__circulo {
  position: absolute;
  border-radius: 50%;
  filter: blur(2px);
  animation: float 6s ease-in-out infinite;
}

.hero-general__circulo {
  width: 280px;
  height: 280px;
  background: linear-gradient(135deg, rgba(201, 169, 97, 0.3), rgba(201, 169, 97, 0.05));
  top: 20px;
  right: 20px;
}

.hero-general__circulo--2 {
  width: 180px;
  height: 180px;
  background: linear-gradient(135deg, rgba(26, 43, 92, 0.15), rgba(26, 43, 92, 0.02));
  top: 100px;
  right: 150px;
  animation-delay: -2s;
}

.hero-general__circulo--3 {
  width: 120px;
  height: 120px;
  background: linear-gradient(135deg, rgba(201, 169, 97, 0.4), rgba(201, 169, 97, 0.1));
  top: 220px;
  right: 50px;
  animation-delay: -4s;
}

@keyframes float {
  0%, 100% { transform: translateY(0) scale(1); }
  50% { transform: translateY(-15px) scale(1.03); }
}

/* ============================================
   RESPONSIVE
   ============================================ */
@media (max-width: 900px) {
  .hero-general__contenido {
    grid-template-columns: 1fr;
    gap: 2rem;
  }

  .hero-general__decoracion {
    display: none;
  }
}

@media (max-width: 640px) {
  .hero-general {
    padding: 3rem 0 2.5rem;
  }

  .hero-general__badge {
    font-size: 0.7rem;
    padding: 0.4rem 1rem;
  }

  .hero-general__titulo {
    font-size: 2rem;
  }

  .hero-general__botones {
    flex-direction: column;
    width: 100%;
  }

  .hero-general__botones .btn {
    width: 100%;
    justify-content: center;
  }
}
EOF
echo "   ✅ HeroGeneral.css actualizado"

# --- 3. FiltrosPropiedades.jsx (rediseñados como chips) ---
echo "3️⃣ Actualizando FiltrosPropiedades.jsx..."
cat > src/components/home/FiltrosPropiedades.jsx << 'EOF'
import './FiltrosPropiedades.css'

const TIPOS = [
  { valor: 'todas', label: 'Todas', icono: '✨' },
  { valor: 'casa', label: 'Casas', icono: '🏡' },
  { valor: 'apartamento', label: 'Apartamentos', icono: '🏢' },
  { valor: 'lote', label: 'Lotes', icono: '🌳' },
  { valor: 'proyecto', label: 'Proyectos', icono: '🏗️' },
  { valor: 'finca', label: 'Fincas', icono: '🌾' },
]

function FiltrosPropiedades({ filtroActivo = 'todas', onCambiarFiltro }) {
  return (
    <section id="propiedades" className="filtros">
      <div className="container">
        <h2>Nuestras Propiedades</h2>
        <div className="filtros__lista">
          {TIPOS.map((tipo) => (
            <button
              key={tipo.valor}
              className={`filtros__boton ${
                filtroActivo === tipo.valor ? 'filtros__boton--activo' : ''
              }`}
              onClick={() => onCambiarFiltro && onCambiarFiltro(tipo.valor)}
            >
              <span className="filtros__icono">{tipo.icono}</span>
              <span>{tipo.label}</span>
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FiltrosPropiedades
EOF
echo "   ✅ FiltrosPropiedades.jsx actualizado"

# --- 4. FiltrosPropiedades.css ---
echo "4️⃣ Actualizando FiltrosPropiedades.css..."
cat > src/components/home/FiltrosPropiedades.css << 'EOF'
.filtros {
  padding: 3rem 0 2rem;
  background: var(--color-blanco);
}

.filtros h2 {
  font-size: clamp(1.5rem, 3vw, 2rem);
  margin-bottom: 0.5rem;
}

.filtros__lista {
  display: flex;
  flex-wrap: wrap;
  gap: 0.6rem;
  justify-content: center;
  margin-top: 2rem;
}

.filtros__boton {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.7rem 1.4rem;
  background: var(--color-fondo-alt);
  border: 1.5px solid transparent;
  color: var(--color-primario);
  border-radius: var(--radio-full);
  font-size: 0.9rem;
  font-weight: 500;
  letter-spacing: 0.02em;
  transition: all var(--transicion);
  cursor: pointer;
  font-family: var(--fuente-cuerpo);
  white-space: nowrap;
}

.filtros__icono {
  font-size: 1rem;
  line-height: 1;
}

.filtros__boton:hover {
  background: var(--color-blanco);
  border-color: var(--color-primario);
  transform: translateY(-2px);
  box-shadow: var(--sombra-sm);
}

.filtros__boton--activo {
  background: var(--color-primario);
  color: var(--color-blanco);
  border-color: var(--color-primario);
  font-weight: 600;
}

.filtros__boton--activo:hover {
  background: var(--color-primario-claro);
  border-color: var(--color-primario-claro);
  color: var(--color-blanco);
}

@media (max-width: 640px) {
  .filtros {
    padding: 2.5rem 0 1.5rem;
  }

  .filtros__lista {
    gap: 0.5rem;
    justify-content: flex-start;
    overflow-x: auto;
    flex-wrap: nowrap;
    padding-bottom: 0.5rem;
    -webkit-overflow-scrolling: touch;
    scrollbar-width: none;
  }

  .filtros__lista::-webkit-scrollbar {
    display: none;
  }

  .filtros__boton {
    padding: 0.6rem 1.1rem;
    font-size: 0.85rem;
    flex-shrink: 0;
  }
}
EOF
echo "   ✅ FiltrosPropiedades.css actualizado"

# --- 5. Stats.jsx (nuevo componente) ---
echo "5️⃣ Creando Stats.jsx..."
cat > src/components/home/Stats.jsx << 'EOF'
import { useState, useEffect, useRef } from 'react'
import './Stats.css'

const STATS = [
  { valor: 10, sufijo: '+', label: 'Años de experiencia' },
  { valor: 50, sufijo: '+', label: 'Propiedades vendidas' },
  { valor: 3, sufijo: '', label: 'Municipios' },
  { valor: 100, sufijo: '%', label: 'Clientes satisfechos' },
]

function Stats() {
  const [iniciado, setIniciado] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !iniciado) {
          setIniciado(true)
        }
      },
      { threshold: 0.3 }
    )

    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [iniciado])

  return (
    <section className="stats" ref={ref}>
      <div className="container">
        <div className="stats__grid">
          {STATS.map((stat, idx) => (
            <Contador key={idx} stat={stat} iniciado={iniciado} />
          ))}
        </div>
      </div>
    </section>
  )
}

function Contador({ stat, iniciado }) {
  const [valor, setValor] = useState(0)

  useEffect(() => {
    if (!iniciado) return

    const duracion = 1500
    const pasos = 40
    const incremento = stat.valor / pasos
    let actual = 0
    let contador = 0

    const intervalo = setInterval(() => {
      contador++
      actual += incremento
      if (contador >= pasos) {
        setValor(stat.valor)
        clearInterval(intervalo)
      } else {
        setValor(Math.floor(actual))
      }
    }, duracion / pasos)

    return () => clearInterval(intervalo)
  }, [iniciado, stat.valor])

  return (
    <div className="stats__item">
      <div className="stats__valor">
        {valor}
        <span className="stats__sufijo">{stat.sufijo}</span>
      </div>
      <div className="stats__label">{stat.label}</div>
    </div>
  )
}

export default Stats
EOF
echo "   ✅ Stats.jsx creado"

# --- 6. Stats.css ---
echo "6️⃣ Creando Stats.css..."
cat > src/components/home/Stats.css << 'EOF'
.stats {
  background: var(--color-primario);
  padding: 4rem 0;
  position: relative;
  overflow: hidden;
}

.stats::before {
  content: '';
  position: absolute;
  top: -100px;
  right: -100px;
  width: 400px;
  height: 400px;
  background: radial-gradient(circle, rgba(201, 169, 97, 0.15) 0%, transparent 70%);
  border-radius: 50%;
}

.stats__grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 2rem;
  text-align: center;
  position: relative;
  z-index: 1;
}

.stats__item {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.stats__valor {
  font-family: var(--fuente-titulos);
  font-size: clamp(2.5rem, 5vw, 3.5rem);
  font-weight: 800;
  color: var(--color-secundario);
  line-height: 1;
  letter-spacing: -0.03em;
}

.stats__sufijo {
  color: var(--color-blanco);
  opacity: 0.7;
  font-weight: 500;
}

.stats__label {
  color: var(--color-blanco);
  font-size: 0.9rem;
  font-weight: 400;
  opacity: 0.85;
  letter-spacing: 0.02em;
}

@media (max-width: 640px) {
  .stats {
    padding: 3rem 0;
  }

  .stats__grid {
    gap: 1.5rem;
  }

  .stats__label {
    font-size: 0.8rem;
  }
}
EOF
echo "   ✅ Stats.css creado"

# --- 7. CtaFinal.jsx (nuevo) ---
echo "7️⃣ Creando CtaFinal.jsx..."
cat > src/components/home/CtaFinal.jsx << 'EOF'
import './CtaFinal.css'
import WhatsAppIcon from '../common/WhatsAppIcon'

const WHATSAPP =
  'https://wa.me/573017982968?text=Hola,%20quiero%20asesor%C3%ADa%20para%20encontrar%20mi%20pr%C3%B3ximo%20hogar'

function CtaFinal() {
  return (
    <section className="cta-final">
      <div className="container cta-final__contenido">
        <h2 className="cta-final__titulo">
          ¿No encuentras lo que buscas?
        </h2>
        <p className="cta-final__texto">
          Cuéntanos qué necesitas y te ayudamos a encontrar la propiedad ideal
          para ti y tu familia.
        </p>
        <a
          href={WHATSAPP}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn--whatsapp cta-final__btn"
        >
          <WhatsAppIcon size={20} />
          <span>Contactar por WhatsApp</span>
        </a>
      </div>
    </section>
  )
}

export default CtaFinal
EOF
echo "   ✅ CtaFinal.jsx creado"

# --- 8. CtaFinal.css ---
echo "8️⃣ Creando CtaFinal.css..."
cat > src/components/home/CtaFinal.css << 'EOF'
.cta-final {
  background: linear-gradient(135deg, var(--color-fondo-alt) 0%, #FFFFFF 100%);
  padding: 5rem 0;
  text-align: center;
}

.cta-final__contenido {
  max-width: 700px;
  margin: 0 auto;
}

.cta-final__titulo {
  font-family: var(--fuente-titulos);
  font-size: clamp(1.75rem, 4vw, 2.5rem);
  font-weight: 800;
  color: var(--color-primario);
  margin-bottom: 1rem;
  letter-spacing: -0.02em;
}

.cta-final__titulo::after {
  display: none;
}

.cta-final__texto {
  font-size: clamp(1rem, 2vw, 1.1rem);
  color: var(--color-texto-suave);
  margin-bottom: 2rem;
  line-height: 1.7;
}

.cta-final__btn {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 1rem 2rem;
  font-size: 1rem;
  font-weight: 600;
}

@media (max-width: 640px) {
  .cta-final {
    padding: 3.5rem 0;
  }
}
EOF
echo "   ✅ CtaFinal.css creado"

# --- 9. Home.jsx actualizado con Stats y CtaFinal ---
echo "9️⃣ Actualizando Home.jsx..."
cat > src/pages/Home.jsx << 'EOF'
import { useState, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import Header from '../components/common/Header'
import Footer from '../components/common/Footer'
import HeroGeneral from '../components/home/HeroGeneral'
import FiltrosPropiedades from '../components/home/FiltrosPropiedades'
import Stats from '../components/home/Stats'
import CtaFinal from '../components/home/CtaFinal'
import PropiedadCard from '../components/common/PropiedadCard'
import { getPropiedadesPorTipo } from '../data/propiedades'
import './Home.css'

function Home() {
  const [searchParams, setSearchParams] = useSearchParams()
  const filtroUrl = searchParams.get('filtro') || 'todas'
  const [filtro, setFiltro] = useState(filtroUrl)

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
      <Stats />
      <CtaFinal />
      <Footer />
    </>
  )
}

export default Home
EOF
echo "   ✅ Home.jsx actualizado"

# --- 10. Home.css ---
echo "🔟 Actualizando Home.css..."
cat > src/pages/Home.css << 'EOF'
.home__grid-section {
  padding: 3rem 0 5rem;
  background: var(--color-blanco);
}

.home__grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 2rem;
}

.home__vacio {
  text-align: center;
  color: var(--color-texto-suave);
  font-style: italic;
  padding: 3rem 0;
}

@media (max-width: 640px) {
  .home__grid-section {
    padding: 2rem 0 3.5rem;
  }

  .home__grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
}
EOF
echo "   ✅ Home.css actualizado"

echo ""
echo "✅ Cambio 013 aplicado correctamente"
echo ""
echo "📋 Notas:"
echo "   - Hero moderno con fondo claro y decoración flotante"
echo "   - Filtros chips con íconos"
echo "   - Sección Stats con contadores animados"
echo "   - CTA final antes del footer"
echo "   - Mobile-first en todos los componentes"
