import { zonasComunes } from '../data/apartamentos'
import './ZonasComunes.css'

function ZonasComunes() {
  return (
    <section className="zonas">
      <div className="container">
        <h2>Zonas Comunes</h2>
        <p className="zonas__intro">
          La Torre Manolo cuenta con magníficas zonas sociales para que tú y tu
          familia disfruten de un lugar único.
        </p>
        <div className="zonas__grid">
          {zonasComunes.map((zona, idx) => (
            <div key={idx} className="zonas__item">
              <span className="zonas__icono">{zona.icono}</span>
              <span className="zonas__nombre">{zona.nombre}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ZonasComunes
