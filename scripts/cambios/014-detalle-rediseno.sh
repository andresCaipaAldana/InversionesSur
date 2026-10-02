#!/bin/bash
# ============================================================
# Cambio 014: PropiedadDetalle rediseñado
# - Hero con imagen de fondo + overlay
# - Breadcrumb moderno
# - Sección de características con íconos
# - CTA final antes del footer
# - Mobile-first en galería y video
# Fecha: $(date +%Y-%m-%d)
# ============================================================

set -e

cd "$(dirname "$0")/../.."
echo "🎨 Rediseñando PropiedadDetalle..."
echo ""

# --- 1. HeroDetalle.jsx ---
echo "1️⃣ Actualizando HeroDetalle.jsx..."
cat > src/components/propiedad/HeroDetalle.jsx << 'EOF'
import './HeroDetalle.css'
import WhatsAppIcon from '../common/WhatsAppIcon'
import { getMediaUrl } from '../../data/propiedades'

const TELEFONO = '573017982968'

function HeroDetalle({ propiedad }) {
  if (!propiedad) return null

  const mensaje = encodeURIComponent(
    `Hola, quiero información sobre ${propiedad.nombre}.`
  )
  const linkWhatsApp = `https://wa.me/${TELEFONO}?text=${mensaje}`

  const tipoLabel = {
    proyecto: 'Proyecto',
    finca: 'Finca',
    lote: 'Lote',
    casa: 'Casa',
    apartamento: 'Apartamento',
  }

  // Imagen de fondo: portada o primera foto
  let imagenFondo = null
  if (propiedad.imagenPrincipal) {
    imagenFondo = propiedad.imagenPrincipal
  } else if (propiedad.media?.fotos && propiedad.media.fotos.length > 0) {
    imagenFondo = getMediaUrl(propiedad.media.fotos[0])
  }

  const precioMostrar = propiedad.precioTexto || 'Consultar precio'

  // Datos destacados (extraídos de características)
  const datosDestacados = extraerDatosDestacados(propiedad)

  return (
    <section
      className={`hero-detalle ${imagenFondo ? 'hero-detalle--con-imagen' : ''}`}
      style={imagenFondo ? { backgroundImage: `url(${imagenFondo})` } : {}}
    >
      <div className="hero-detalle__overlay"></div>
      <div className="container hero-detalle__contenido">
        <span className="hero-detalle__badge">
          {tipoLabel[propiedad.tipo] || propiedad.tipo}
        </span>
        <h1 className="hero-detalle__nombre">{propiedad.nombre}</h1>
        {propiedad.ubicacion?.ciudad && (
          <p className="hero-detalle__ubicacion">
            📍 {propiedad.ubicacion.ciudad}
          </p>
        )}
        {propiedad.subtitulo && (
          <p className="hero-detalle__subtitulo">{propiedad.subtitulo}</p>
        )}
        <p className="hero-detalle__precio">{precioMostrar}</p>

        {datosDestacados.length > 0 && (
          <div className="hero-detalle__datos-rapidos">
            {datosDestacados.map((dato, idx) => (
              <div key={idx} className="hero-detalle__dato-rapido">
                <span className="hero-detalle__dato-icono">{dato.icono}</span>
                <span className="hero-detalle__dato-label">{dato.label}</span>
              </div>
            ))}
          </div>
        )}

        <div className="hero-detalle__botones">
          <a
            href={linkWhatsApp}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn--whatsapp"
          >
            <WhatsAppIcon size={20} />
            <span>Consultar por WhatsApp</span>
          </a>
          {propiedad.media?.videos?.length > 0 && (
            <a href="#video" className="btn btn--outline">
              ▶ Ver video
            </a>
          )}
        </div>
      </div>
    </section>
  )
}

// Extrae hasta 4 datos destacados de las características
function extraerDatosDestacados(propiedad) {
  const datos = []
  const caracteristicas = propiedad.caracteristicas || []

  // Buscar área
  const areaMatch = caracteristicas.find((c) => /m²/.test(c))
  if (areaMatch) {
    datos.push({ icono: '📐', label: areaMatch.replace(' construidos', '') })
  }

  // Buscar habitaciones
  const habMatch = caracteristicas.find((c) => /habitacion/i.test(c))
  if (habMatch) {
    datos.push({ icono: '🛏', label: habMatch })
  }

  // Buscar baños
  const banosMatch = caracteristicas.find((c) => /ba[ñn]o/i.test(c))
  if (banosMatch) {
    datos.push({ icono: '🛁', label: banosMatch })
  }

  // Buscar conjunto cerrado
  const conjuntoMatch = caracteristicas.find((c) => /conjunto/i.test(c))
  if (conjuntoMatch && datos.length < 4) {
    datos.push({ icono: '🏘️', label: 'Conjunto cerrado' })
  }

  return datos.slice(0, 4)
}

export default HeroDetalle
EOF
echo "   ✅ HeroDetalle.jsx actualizado"

# --- 2. HeroDetalle.css ---
echo "2️⃣ Actualizando HeroDetalle.css..."
cat > src/components/propiedad/HeroDetalle.css << 'EOF'
.hero-detalle {
  position: relative;
  padding: 6rem 0 5rem;
  color: var(--color-blanco);
  text-align: center;
  overflow: hidden;
  background: linear-gradient(135deg, var(--color-primario-oscuro) 0%, var(--color-primario) 50%, var(--color-primario-claro) 100%);
  background-size: cover;
  background-position: center;
}

.hero-detalle--con-imagen {
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
}

.hero-detalle__overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    180deg,
    rgba(15, 23, 41, 0.7) 0%,
    rgba(15, 23, 41, 0.85) 100%
  );
  z-index: 1;
}

.hero-detalle:not(.hero-detalle--con-imagen) .hero-detalle__overlay {
  background: radial-gradient(
    circle at 50% 30%,
    rgba(201, 169, 97, 0.15) 0%,
    transparent 70%
  );
}

.hero-detalle__contenido {
  position: relative;
  z-index: 2;
  max-width: 900px;
  margin: 0 auto;
}

.hero-detalle__badge {
  display: inline-block;
  background: var(--color-secundario);
  color: var(--color-primario);
  padding: 0.4rem 1.2rem;
  border-radius: var(--radio-full);
  font-size: 0.75rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  box-shadow: 0 4px 12px rgba(201, 169, 97, 0.3);
}

.hero-detalle__nombre {
  font-family: var(--fuente-titulos);
  font-size: clamp(2rem, 5vw, 3.5rem);
  font-weight: 800;
  color: var(--color-blanco);
  line-height: 1.1;
  letter-spacing: -0.03em;
  margin-bottom: 1rem;
}

.hero-detalle__ubicacion {
  font-size: 1rem;
  color: var(--color-secundario);
  margin-bottom: 0.75rem;
  font-weight: 500;
  letter-spacing: 0.02em;
}

.hero-detalle__subtitulo {
  font-family: var(--fuente-titulos);
  font-size: clamp(1rem, 2vw, 1.25rem);
  font-weight: 400;
  color: rgba(255, 255, 255, 0.9);
  margin-bottom: 1.5rem;
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
  line-height: 1.5;
  font-style: italic;
}

.hero-detalle__precio {
  font-family: var(--fuente-titulos);
  font-size: clamp(1.75rem, 4vw, 2.5rem);
  font-weight: 800;
  color: var(--color-secundario);
  margin-bottom: 2rem;
  letter-spacing: -0.02em;
}

/* ============================================
   DATOS RÁPIDOS
   ============================================ */
.hero-detalle__datos-rapidos {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 2.5rem;
}

.hero-detalle__dato-rapido {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.15);
  padding: 0.6rem 1.2rem;
  border-radius: var(--radio-full);
  font-size: 0.9rem;
  font-weight: 500;
  color: var(--color-blanco);
  transition: all var(--transicion);
}

.hero-detalle__dato-rapido:hover {
  background: rgba(201, 169, 97, 0.2);
  border-color: var(--color-secundario);
}

.hero-detalle__dato-icono {
  font-size: 1.1rem;
  line-height: 1;
}

.hero-detalle__dato-label {
  white-space: nowrap;
}

/* ============================================
   BOTONES
   ============================================ */
.hero-detalle__botones {
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
}

/* ============================================
   RESPONSIVE
   ============================================ */
@media (max-width: 768px) {
  .hero-detalle {
    padding: 4rem 0 3.5rem;
  }

  .hero-detalle--con-imagen {
    background-attachment: scroll;
  }

  .hero-detalle__nombre {
    font-size: 2rem;
  }

  .hero-detalle__precio {
    font-size: 1.75rem;
  }
}

@media (max-width: 640px) {
  .hero-detalle {
    padding: 3rem 0 2.5rem;
  }

  .hero-detalle__badge {
    font-size: 0.7rem;
    padding: 0.35rem 1rem;
  }

  .hero-detalle__datos-rapidos {
    gap: 0.5rem;
    margin-bottom: 2rem;
  }

  .hero-detalle__dato-rapido {
    padding: 0.5rem 0.9rem;
    font-size: 0.8rem;
  }

  .hero-detalle__botones {
    flex-direction: column;
    width: 100%;
  }

  .hero-detalle__botones .btn {
    width: 100%;
    justify-content: center;
  }
}
EOF
echo "   ✅ HeroDetalle.css actualizado"

# --- 3. Galeria.css (mobile-first) ---
echo "3️⃣ Actualizando Galeria.css..."
cat > src/components/propiedad/Galeria.css << 'EOF'
.galeria {
  background: var(--color-blanco);
  padding: 4rem 0;
}

.galeria h2 {
  margin-bottom: 2rem;
}

.galeria__principal {
  position: relative;
  aspect-ratio: 16 / 10;
  background: var(--color-primario-oscuro);
  border-radius: var(--radio-lg);
  overflow: hidden;
  box-shadow: var(--sombra-md);
  margin-bottom: 1rem;
}

.galeria__principal img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.galeria__nav {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.95);
  color: var(--color-primario);
  font-size: 1.5rem;
  line-height: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all var(--transicion);
  border: none;
  font-family: var(--fuente-cuerpo);
  box-shadow: var(--sombra);
  padding-bottom: 4px;
}

.galeria__nav:hover {
  background: var(--color-secundario);
  color: var(--color-primario);
  transform: translateY(-50%) scale(1.1);
}

.galeria__nav--prev {
  left: 1rem;
}

.galeria__nav--next {
  right: 1rem;
}

.galeria__contador {
  position: absolute;
  bottom: 1rem;
  right: 1rem;
  background: rgba(15, 23, 41, 0.75);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  color: var(--color-blanco);
  padding: 0.4rem 1rem;
  border-radius: var(--radio-full);
  font-size: 0.85rem;
  font-weight: 600;
  letter-spacing: 0.05em;
}

.galeria__miniaturas {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(80px, 1fr));
  gap: 0.6rem;
}

.galeria__miniatura {
  aspect-ratio: 1;
  border-radius: var(--radio-sm);
  overflow: hidden;
  border: 2px solid transparent;
  cursor: pointer;
  padding: 0;
  background: transparent;
  transition: all var(--transicion);
  opacity: 0.6;
}

.galeria__miniatura:hover {
  opacity: 1;
  transform: scale(1.05);
}

.galeria__miniatura--activa {
  border-color: var(--color-secundario);
  opacity: 1;
}

.galeria__miniatura img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

@media (max-width: 640px) {
  .galeria {
    padding: 2.5rem 0;
  }

  .galeria__principal {
    aspect-ratio: 4 / 3;
    border-radius: var(--radio);
  }

  .galeria__nav {
    width: 38px;
    height: 38px;
    font-size: 1.2rem;
  }

  .galeria__nav--prev { left: 0.5rem; }
  .galeria__nav--next { right: 0.5rem; }

  .galeria__contador {
    bottom: 0.5rem;
    right: 0.5rem;
    font-size: 0.75rem;
    padding: 0.3rem 0.8rem;
  }

  .galeria__miniaturas {
    grid-template-columns: repeat(auto-fill, minmax(60px, 1fr));
    gap: 0.4rem;
  }
}
EOF
echo "   ✅ Galeria.css actualizado"

# --- 4. VideoPlayer.css (mobile-first) ---
echo "4️⃣ Actualizando VideoPlayer.css..."
cat > src/components/propiedad/VideoPlayer.css << 'EOF'
.video-player {
  background: var(--color-fondo-alt);
  padding: 4rem 0;
}

.video-player h2 {
  margin-bottom: 2rem;
}

.video-player__contenedor {
  max-width: 900px;
  margin: 0 auto;
  border-radius: var(--radio-lg);
  overflow: hidden;
  box-shadow: var(--sombra-md);
  background: #000;
}

.video-player__video {
  width: 100%;
  height: auto;
  display: block;
  aspect-ratio: 16 / 9;
  object-fit: contain;
}

.video-player__selector {
  display: flex;
  gap: 0.6rem;
  justify-content: center;
  margin-top: 1.5rem;
  flex-wrap: wrap;
}

.video-player__boton {
  padding: 0.6rem 1.2rem;
  background: var(--color-blanco);
  border: 1.5px solid var(--color-borde);
  color: var(--color-primario);
  border-radius: var(--radio-full);
  font-size: 0.85rem;
  font-weight: 600;
  letter-spacing: 0.02em;
  cursor: pointer;
  font-family: var(--fuente-cuerpo);
  transition: all var(--transicion);
}

.video-player__boton:hover {
  background: var(--color-primario);
  color: var(--color-blanco);
  border-color: var(--color-primario);
  transform: translateY(-2px);
  box-shadow: var(--sombra-sm);
}

.video-player__boton--activo {
  background: var(--color-primario);
  color: var(--color-blanco);
  border-color: var(--color-primario);
}

@media (max-width: 640px) {
  .video-player {
    padding: 2.5rem 0;
  }

  .video-player__contenedor {
    border-radius: var(--radio);
  }
}
EOF
echo "   ✅ VideoPlayer.css actualizado"

# --- 5. CtaFinalDetalle.jsx (nuevo) ---
echo "5️⃣ Creando CtaFinalDetalle.jsx..."
cat > src/components/propiedad/CtaFinalDetalle.jsx << 'EOF'
import './CtaFinalDetalle.css'
import WhatsAppIcon from '../common/WhatsAppIcon'

const TELEFONO = '573017982968'

function CtaFinalDetalle({ propiedad }) {
  if (!propiedad) return null

  const mensaje = encodeURIComponent(
    `Hola, quiero agendar una visita a ${propiedad.nombre}.`
  )
  const linkWhatsApp = `https://wa.me/${TELEFONO}?text=${mensaje}`

  return (
    <section className="cta-detalle">
      <div className="container cta-detalle__contenido">
        <h2 className="cta-detalle__titulo">
          ¿Te gustaría conocer {propiedad.nombre}?
        </h2>
        <p className="cta-detalle__texto">
          Agenda una visita y descubre todos los detalles en persona. Estamos
          listos para acompañarte en el proceso.
        </p>
        <a
          href={linkWhatsApp}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn--whatsapp cta-detalle__btn"
        >
          <WhatsAppIcon size={20} />
          <span>Agendar visita</span>
        </a>
      </div>
    </section>
  )
}

export default CtaFinalDetalle
EOF
echo "   ✅ CtaFinalDetalle.jsx creado"

# --- 6. CtaFinalDetalle.css ---
echo "6️⃣ Creando CtaFinalDetalle.css..."
cat > src/components/propiedad/CtaFinalDetalle.css << 'EOF'
.cta-detalle {
  background: linear-gradient(135deg, var(--color-primario) 0%, var(--color-primario-claro) 100%);
  padding: 5rem 0;
  text-align: center;
  position: relative;
  overflow: hidden;
}

.cta-detalle::before {
  content: '';
  position: absolute;
  top: -100px;
  right: -100px;
  width: 350px;
  height: 350px;
  background: radial-gradient(circle, rgba(201, 169, 97, 0.2) 0%, transparent 70%);
  border-radius: 50%;
}

.cta-detalle__contenido {
  max-width: 700px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
}

.cta-detalle__titulo {
  font-family: var(--fuente-titulos);
  font-size: clamp(1.5rem, 4vw, 2.25rem);
  font-weight: 800;
  color: var(--color-blanco);
  margin-bottom: 1rem;
  letter-spacing: -0.02em;
}

.cta-detalle__titulo::after {
  display: none;
}

.cta-detalle__texto {
  font-size: clamp(1rem, 2vw, 1.1rem);
  color: rgba(255, 255, 255, 0.85);
  margin-bottom: 2rem;
  line-height: 1.7;
}

.cta-detalle__btn {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 1rem 2rem;
  font-size: 1rem;
  font-weight: 600;
}

@media (max-width: 640px) {
  .cta-detalle {
    padding: 3.5rem 0;
  }

  .cta-detalle__btn {
    width: 100%;
    justify-content: center;
  }
}
EOF
echo "   ✅ CtaFinalDetalle.css creado"

# --- 7. PropiedadDetalle.jsx (rediseñado) ---
echo "7️⃣ Actualizando PropiedadDetalle.jsx..."
cat > src/pages/PropiedadDetalle.jsx << 'EOF'
import { useParams, Link } from 'react-router-dom'
import Header from '../components/common/Header'
import Footer from '../components/common/Footer'
import HeroDetalle from '../components/propiedad/HeroDetalle'
import Galeria from '../components/propiedad/Galeria'
import VideoPlayer from '../components/propiedad/VideoPlayer'
import Unidades from '../components/propiedad/Unidades'
import ZonasComunes from '../components/propiedad/ZonasComunes'
import Parqueaderos from '../components/propiedad/Parqueaderos'
import Entorno from '../components/propiedad/Entorno'
import Mapa from '../components/propiedad/Mapa'
import CtaFinalDetalle from '../components/propiedad/CtaFinalDetalle'
import { getPropiedadPorId } from '../data/propiedades'
import './PropiedadDetalle.css'

function PropiedadDetalle() {
  const { id } = useParams()
  const propiedad = getPropiedadPorId(id)

  if (!propiedad) {
    return (
      <>
        <Header />
        <div className="container" style={{ padding: '6rem 1.5rem', textAlign: 'center' }}>
          <h2>Propiedad no encontrada</h2>
          <p style={{ marginTop: '1rem' }}>
            <Link to="/" style={{ color: 'var(--color-secundario)' }}>
              ← Volver al inicio
            </Link>
          </p>
        </div>
        <Footer />
      </>
    )
  }

  const tieneFotos = propiedad.media?.fotos && propiedad.media.fotos.length > 0
  const tieneVideos = propiedad.media?.videos && propiedad.media.videos.length > 0

  const renderSecciones = () => {
    switch (propiedad.tipo) {
      case 'proyecto':
        return (
          <>
            {propiedad.unidades && <Unidades data={propiedad} />}
            {propiedad.zonasComunes && <ZonasComunes data={propiedad} />}
            {propiedad.parqueaderos && <Parqueaderos data={propiedad} />}
          </>
        )
      default:
        return null
    }
  }

  return (
    <>
      <Header />
      <div className="container propiedad-detalle__breadcrumb">
        <Link to="/" className="propiedad-detalle__volver">
          <span className="propiedad-detalle__volver-icono">←</span>
          <span>Volver a propiedades</span>
        </Link>
      </div>
      <HeroDetalle propiedad={propiedad} />

      {tieneFotos && (
        <Galeria fotos={propiedad.media.fotos} titulo="Galería de fotos" />
      )}

      {tieneVideos && (
        <div id="video">
          <VideoPlayer
            videos={propiedad.media.videos}
            titulo={propiedad.media.videos.length > 1 ? 'Recorridos en video' : 'Recorrido en video'}
          />
        </div>
      )}

      {renderSecciones()}

      {propiedad.entorno && <Entorno data={propiedad} />}
      <Mapa propiedad={propiedad} />
      <CtaFinalDetalle propiedad={propiedad} />
      <Footer propiedad={propiedad} />
    </>
  )
}

export default PropiedadDetalle
EOF
echo "   ✅ PropiedadDetalle.jsx actualizado"

# --- 8. PropiedadDetalle.css ---
echo "8️⃣ Actualizando PropiedadDetalle.css..."
cat > src/pages/PropiedadDetalle.css << 'EOF'
.propiedad-detalle__breadcrumb {
  padding-top: 1.5rem;
  padding-bottom: 0.5rem;
}

.propiedad-detalle__volver {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  color: var(--color-texto-suave);
  font-size: 0.9rem;
  font-weight: 500;
  padding: 0.5rem 1rem 0.5rem 0;
  transition: color var(--transicion), transform var(--transicion);
}

.propiedad-detalle__volver:hover {
  color: var(--color-primario);
  transform: translateX(-4px);
}

.propiedad-detalle__volver-icono {
  font-size: 1.1rem;
  display: inline-block;
  transition: transform var(--transicion);
}

.propiedad-detalle__volver:hover .propiedad-detalle__volver-icono {
  transform: translateX(-2px);
}

@media (max-width: 640px) {
  .propiedad-detalle__breadcrumb {
    padding-top: 1rem;
  }

  .propiedad-detalle__volver {
    font-size: 0.85rem;
  }
}
EOF
echo "   ✅ PropiedadDetalle.css actualizado"

echo ""
echo "✅ Cambio 014 aplicado correctamente"
echo ""
echo "📋 Notas:"
echo "   - Hero de propiedad con imagen de fondo + overlay"
echo "   - Badge, nombre, ubicación, precio y datos rápidos en el hero"
echo "   - Galería y video mobile-first"
echo "   - Breadcrumb moderno con hover animado"
echo "   - CTA final antes del footer"
