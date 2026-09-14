import './Parqueaderos.css'
import { PRECIO_PARQUEADERO, formatearPrecio } from '../data/apartamentos'

const TELEFONO = '573017982968'

function Parqueaderos() {
  const mensaje = encodeURIComponent(
    'Hola, estoy interesado en un parqueadero de la Torre Manolo. ¿Me dan más información?'
  )
  const linkWhatsApp = `https://wa.me/${TELEFONO}?text=${mensaje}`

  return (
    <section className="parqueaderos">
      <div className="container">
        <h2>Parqueaderos Privados</h2>
        <p className="parqueaderos__intro">
          Contamos con <strong>15 parqueaderos bajo techo</strong> disponibles en
          los pisos 1 y 2 de la torre. Cómpralos por separado o junto con tu
          apartamento.
        </p>
        <div className="parqueaderos__card">
          <div className="parqueaderos__info">
            <span className="parqueaderos__icono">🅿️</span>
            <div>
              <h3 className="parqueaderos__titulo">Parqueadero cubierto</h3>
              <ul className="parqueaderos__detalles">
                <li>✅ Bajo techo (pisos 1 y 2)</li>
                <li>✅ Acceso con vigilancia</li>
                <li>✅ 15 unidades disponibles</li>
              </ul>
            </div>
          </div>
          <div className="parqueaderos__precio">
            <span className="parqueaderos__precio-label">Precio por unidad</span>
            <span className="parqueaderos__precio-valor">
              {formatearPrecio(PRECIO_PARQUEADERO)}
            </span>
            <a
              href={linkWhatsApp}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn--whatsapp parqueaderos__btn"
            >
              💬 Reservar parqueadero
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Parqueaderos
