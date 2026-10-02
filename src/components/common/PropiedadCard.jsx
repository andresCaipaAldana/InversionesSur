import { Link } from 'react-router-dom'
import { getMediaUrl } from '../../data/propiedades'
import './PropiedadCard.css'

function PropiedadCard({ propiedad }) {
  const {
    id,
    nombre,
    subtitulo,
    tipo,
    ubicacion,
    imagenPrincipal,
    precioTexto,
    estado,
    media,
    caracteristicas,
  } = propiedad

  const tipoLabel = {
    proyecto: 'Proyecto',
    finca: 'Finca',
    lote: 'Lote',
    casa: 'Casa',
    apartamento: 'Apartamento',
  }

  // Determinar portada
  let portada = null
  if (imagenPrincipal) {
    portada = imagenPrincipal
  } else if (media?.fotos && media.fotos.length > 0) {
    portada = getMediaUrl(media.fotos[0])
  }

  // Extraer datos de características (o usar defaults)
  const datos = extraerDatos(caracteristicas, tipo)

  return (
    <Link to={`/propiedad/${id}`} className="prop-card">
      {/* Imagen */}
      <div className="prop-card__imagen">
        {portada ? (
          <img src={portada} alt={nombre} loading="lazy" />
        ) : (
          <div className="prop-card__placeholder">
            <span>{tipo === 'lote' ? '🌳' : tipo === 'casa' ? '🏡' : tipo === 'finca' ? '🌾' : '🏢'}</span>
          </div>
        )}
        <span className="prop-card__badge">{tipoLabel[tipo] || tipo}</span>
        {estado === 'proximamente' && (
          <span className="prop-card__estado">Próximamente</span>
        )}
      </div>

      {/* Contenido */}
      <div className="prop-card__contenido">
        <h3 className="prop-card__nombre">{nombre}</h3>
        <p className="prop-card__ubicacion">
          <span className="prop-card__icono">📍</span>
          {ubicacion?.ciudad || 'Sin ubicación'}
        </p>

        {/* Datos con íconos */}
        <div className="prop-card__datos">
          {datos.area && (
            <div className="prop-card__dato">
              <span className="prop-card__icono">📐</span>
              <span>{datos.area}</span>
            </div>
          )}
          {datos.habitaciones && (
            <div className="prop-card__dato">
              <span className="prop-card__icono">🛏</span>
              <span>{datos.habitaciones}</span>
            </div>
          )}
          {datos.banos && (
            <div className="prop-card__dato">
              <span className="prop-card__icono">🛁</span>
              <span>{datos.banos}</span>
            </div>
          )}
        </div>

        {/* Precio */}
        {precioTexto && (
          <div className="prop-card__precio-wrap">
            <span className="prop-card__precio">{precioTexto}</span>
          </div>
        )}

        {/* CTA */}
        <span className="prop-card__cta">
          Descúbrelo <span className="prop-card__cta-flecha">→</span>
        </span>
      </div>
    </Link>
  )
}

// Función auxiliar para extraer datos de las características
function extraerDatos(caracteristicas = [], tipo) {
  const datos = {
    area: null,
    habitaciones: null,
    banos: null,
  }

  if (!caracteristicas || caracteristicas.length === 0) return datos

  // Buscar área (ej: "170 m² construidos", "1.700 m²", "39.8 - 90 m²")
  const areaMatch = caracteristicas.find((c) => /m²/.test(c))
  if (areaMatch) {
    datos.area = areaMatch.replace(' construidos', '').replace(' construido', '')
  }

  // Buscar habitaciones (ej: "3 habitaciones", "4 habitaciones")
  const habMatch = caracteristicas.find((c) => /habitacion/i.test(c))
  if (habMatch) {
    datos.habitaciones = habMatch
  }

  // Buscar baños (ej: "4 baños", "2 baños")
  const banosMatch = caracteristicas.find((c) => /ba[ñn]o/i.test(c))
  if (banosMatch) {
    datos.banos = banosMatch
  }

  return datos
}

export default PropiedadCard
