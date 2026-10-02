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
