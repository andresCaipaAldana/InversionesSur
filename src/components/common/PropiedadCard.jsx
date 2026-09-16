import { Link } from 'react-router-dom'
import './PropiedadCard.css'

function PropiedadCard({ propiedad }) {
  const { id, nombre, subtitulo, tipo, ubicacion, imagenPrincipal, precioTexto, estado } = propiedad

  const tipoLabel = {
    proyecto: 'Proyecto',
    finca: 'Finca',
    lote: 'Lote',
    casa: 'Casa',
    apartamento: 'Apartamento',
  }

  return (
    <Link to={`/propiedad/${id}`} className="prop-card">
      <div className="prop-card__imagen">
        {imagenPrincipal ? (
          <img src={imagenPrincipal} alt={nombre} />
        ) : (
          <div className="prop-card__placeholder">
            <span>🏢</span>
          </div>
        )}
        <span className="prop-card__tipo">{tipoLabel[tipo] || tipo}</span>
        {estado === 'proximamente' && (
          <span className="prop-card__estado">Próximamente</span>
        )}
      </div>
      <div className="prop-card__contenido">
        <h3 className="prop-card__nombre">{nombre}</h3>
        {subtitulo && <p className="prop-card__subtitulo">{subtitulo}</p>}
        <p className="prop-card__ubicacion">📍 {ubicacion?.ciudad || 'Sin ubicación'}</p>
        {precioTexto && <p className="prop-card__precio">{precioTexto}</p>}
        <span className="prop-card__cta">Ver más →</span>
      </div>
    </Link>
  )
}

export default PropiedadCard
