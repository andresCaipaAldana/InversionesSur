import { Link } from 'react-router-dom'
import './Footer.css'
import WhatsAppIcon from './WhatsAppIcon'
import { formatearPrecio } from '../../data/propiedades'

const WHATSAPP_GENERAL =
  'https://wa.me/573017982968?text=Hola,%20quiero%20informaci%C3%B3n%20sobre%20las%20propiedades%20de%20Construcciones%20Azur%20M%26A'

function Footer({ propiedad }) {
  const anio = new Date().getFullYear()

  // === FOOTER CON PROPIEDAD (detalle) ===
  if (propiedad) {
    const mensaje = encodeURIComponent(
      `Hola, quiero información sobre ${propiedad.nombre}.`
    )
    const linkWhatsApp = `https://wa.me/573017982968?text=${mensaje}`

    return (
      <footer className="footer">
        <div className="container footer__contenido">
          <div className="footer__columna">
            <h3>🏢 {propiedad.nombre}</h3>
            <p>{propiedad.subtitulo}</p>
            <p className="footer__direccion">
              {propiedad.ubicacion?.direccion || propiedad.ubicacion?.ciudad}
            </p>
          </div>

          <div className="footer__columna">
            <h4>Contacto</h4>
            <a
              href={linkWhatsApp}
              target="_blank"
              rel="noopener noreferrer"
              className="footer__whatsapp"
            >
              <WhatsAppIcon size={16} />
              <span>WhatsApp</span>
            </a>
          </div>

          <div className="footer__columna">
            <h4>Información</h4>
            <p>{propiedad.precioTexto || formatearPrecio(propiedad.precioBase)}</p>
            {propiedad.caracteristicas && propiedad.caracteristicas.length > 0 && (
              <p>{propiedad.caracteristicas.slice(0, 2).join(' · ')}</p>
            )}
          </div>
        </div>

        <div className="footer__copy">
          <p>
            © {anio} Construcciones Azur M&A. Todos los derechos reservados.{' '}
            <Link to="/" className="footer__link">
              Ver todas las propiedades
            </Link>
          </p>
        </div>
      </footer>
    )
  }

  // === FOOTER GENERAL (home y otras páginas) ===
  return (
    <footer className="footer">
      <div className="container footer__contenido">
        <div className="footer__columna">
          <h3>🏢 Construcciones Azur M&A</h3>
          <p>Construcción y venta de propiedades en Fusagasugá y la región.</p>
          <p className="footer__direccion">Cundinamarca, Colombia</p>
        </div>

        <div className="footer__columna">
          <h4>Contacto</h4>
          <a
            href={WHATSAPP_GENERAL}
            target="_blank"
            rel="noopener noreferrer"
            className="footer__whatsapp"
          >
            <WhatsAppIcon size={16} />
            <span>WhatsApp</span>
          </a>
        </div>

        <div className="footer__columna">
          <h4>Información</h4>
          <p>Proyectos, casas y lotes</p>
          <p>Asesoría personalizada</p>
          <p>Fusagasugá · Silvania · Región</p>
        </div>
      </div>

      <div className="footer__copy">
        <p>© {anio} Construcciones Azur M&A. Todos los derechos reservados.</p>
      </div>
    </footer>
  )
}

export default Footer
