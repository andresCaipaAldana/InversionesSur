import { apartamentos, calcularPrecio, formatearPrecio } from '../data/apartamentos'
import './Apartamentos.css'

const TELEFONO = '573001234567'

function Apartamentos() {
  return (
    <section id="apartamentos" className="apartamentos">
      <div className="container">
        <h2>Nuestros Apartamentos</h2>
        <p className="apartamentos__intro">
          Contamos con 15 apartamentos distribuidos en 8 pisos. Elige el que mejor se adapte a ti.
        </p>
        <div className="apartamentos__grid">
          {apartamentos.map((apto) => {
            const precio = calcularPrecio(apto.area)
            const mensaje = encodeURIComponent(
              `Hola, estoy interesado en el ${apto.tipo} de Inversiones Sur.`
            )
            const linkWhatsApp = `https://wa.me/${TELEFONO}?text=${mensaje}`

            return (
              <article
                key={apto.id}
                className={`card ${apto.destacado ? 'card--destacado' : ''}`}
              >
                {apto.destacado && <span className="card__badge">Más popular</span>}
                <h3 className="card__titulo">{apto.tipo}</h3>
                <p className="card__descripcion">{apto.descripcion}</p>

                <ul className="card__detalles">
                  <li>📐 {apto.area} m²</li>
                  <li>🛏️ {apto.habitaciones} habitaciones</li>
                  <li>🚿 {apto.banos} baños</li>
                </ul>

                <div className="card__precio">
                  <span className="card__precio-label">Precio desde</span>
                  <span className="card__precio-valor">{formatearPrecio(precio)}</span>
                  <span className="card__precio-m2">
                    ({formatearPrecio(5500000)} / m²)
                  </span>
                </div>

                <a
                  href={linkWhatsApp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn--whatsapp card__btn"
                >
                  💬 Consultar
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
