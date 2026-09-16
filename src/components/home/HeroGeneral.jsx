import './HeroGeneral.css'
import WhatsAppIcon from '../common/WhatsAppIcon'

const WHATSAPP =
  'https://wa.me/573017982968?text=Hola,%20quiero%20informaci%C3%B3n%20sobre%20las%20propiedades'

function HeroGeneral() {
  return (
    <section className="hero-general">
      <div className="container hero-general__contenido">
        <span className="hero-general__badge">Inversiones Sur</span>
        <h1 className="hero-general__titulo">
          Inversiones que <span>trascienden</span>
        </h1>
        <p className="hero-general__subtitulo">
          Descubre nuestra selección de propiedades en Fusagasugá y la región.
          Proyectos, fincas y lotes con la mejor asesoría.
        </p>
        <div className="hero-general__botones">
          <a
            href={WHATSAPP}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn--whatsapp"
          >
            <WhatsAppIcon size={20} />
            <span>Contacto por WhatsApp</span>
          </a>
          <a href="#propiedades" className="btn btn--outline">
            Ver propiedades
          </a>
        </div>
      </div>
    </section>
  )
}

export default HeroGeneral
