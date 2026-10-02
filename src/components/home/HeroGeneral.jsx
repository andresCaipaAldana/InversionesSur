import './HeroGeneral.css'
import WhatsAppIcon from '../common/WhatsAppIcon'

const WHATSAPP =
  'https://wa.me/573017982968?text=Hola,%20quiero%20informaci%C3%B3n%20sobre%20las%20propiedades%20de%20Construcciones%20Azur%20M%26A'

function HeroGeneral() {
  return (
    <section className="hero-general">
      <div className="container hero-general__contenido">
        <div className="hero-general__texto">
          <span className="hero-general__badge">Construcciones Azur M&amp;A</span>
          <h1 className="hero-general__titulo">
            Encuentra tu{' '}
            <span className="hero-general__titulo-destacado">próximo hogar</span>
          </h1>
          <p className="hero-general__subtitulo">
            Proyectos, casas y lotes en Fusagasugá, Silvania y la región.
            Asesoría personalizada para hacer realidad tu inversión.
          </p>
          <div className="hero-general__botones">
            <a href="#propiedades" className="btn btn--primary">
              Ver propiedades
            </a>
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn--ghost"
            >
              <WhatsAppIcon size={18} />
              <span>Contacto</span>
            </a>
          </div>
        </div>

        <div className="hero-general__decoracion">
          <div className="hero-general__circulo"></div>
          <div className="hero-general__circulo hero-general__circulo--2"></div>
          <div className="hero-general__circulo hero-general__circulo--3"></div>
        </div>
      </div>
    </section>
  )
}

export default HeroGeneral
