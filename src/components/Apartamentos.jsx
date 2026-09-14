import {
  apartamentos,
  calcularPrecio,
  calcularAreaTotal,
  formatearPrecio,
  PRECIO_M2,
} from '../data/apartamentos'
import './Apartamentos.css'

const TELEFONO = '573017982968'

function Apartamentos() {
  return (
    <section id="apartamentos" className="apartamentos">
      <div className="container">
        <h2>Nuestros Apartamentos</h2>
        <p className="apartamentos__intro">
          Contamos con <strong>15 apartamentos</strong> distribuidos en 8 pisos.
          Tipologías de 40 m², 65 m² y 90 m². Algunos con terraza privada única.
        </p>
        <div className="apartamentos__grid">
          {apartamentos.map((apto) => {
            const areaTotal = calcularAreaTotal(apto.area, apto.areaTerraza)
            const precio = calcularPrecio(apto.area, apto.areaTerraza)
            const mensaje = encodeURIComponent(
              `Hola, estoy interesado en el ${apto.tipo} de Inversiones Sur. ¿Me pueden dar más información?`
            )
            const linkWhatsApp = `https://wa.me/${TELEFONO}?text=${mensaje}`

            return (
              <article key={apto.id} className="card">
                {apto.etiqueta && (
                  <span className="card__badge">{apto.etiqueta}</span>
                )}
                <h3 className="card__titulo">{apto.tipo}</h3>
                <p className="card__descripcion">{apto.descripcion}</p>

                <ul className="card__detalles">
                  <li>📐 {apto.area} m² construidos</li>
                  {apto.areaTerraza > 0 && (
                    <li>🌿 {apto.areaTerraza} m² de terraza privada</li>
                  )}
                  {apto.areaTerraza > 0 && (
                    <li>📊 <strong>{areaTotal} m² totales</strong></li>
                  )}
                  <li>🛏️ {apto.habitaciones} habitaciones</li>
                  <li>🚿 {apto.banos} baños</li>
                  <li>
                    🔑 {apto.disponibles}{' '}
                    {apto.disponibles === 1 ? 'disponible' : 'disponibles'}
                  </li>
                </ul>

                <div className="card__precio">
                  <span className="card__precio-label">Precio desde</span>
                  <span className="card__precio-valor">
                    {formatearPrecio(precio)}
                  </span>
                  <span className="card__precio-m2">
                    ({areaTotal} m² × {formatearPrecio(PRECIO_M2)})
                  </span>
                </div>

                <a
                  href={linkWhatsApp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn--whatsapp card__btn"
                >
                  💬 Consultar disponibilidad
                </a>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Apartamentos
