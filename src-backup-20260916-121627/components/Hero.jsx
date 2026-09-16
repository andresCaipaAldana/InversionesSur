import './Hero.css'
import logoDorado from '../assets/logo/manolo-dorado.svg'
import WhatsAppIcon from './WhatsAppIcon'

const WHATSAPP =
  'https://wa.me/573017982968?text=Hola,%20quiero%20informaci%C3%B3n%20sobre%20la%20Torre%20Manolo'

function Hero() {
  return (
    <section className="hero">
      <div className="container hero__contenido">
        <div className="hero__logo">
          <img src={logoDorado} alt="Manolo" className="hero__logo-img" />
          <h1 className="hero__nombre">MANOLO</h1>
        </div>

        <p className="hero__subtitulo">
          Un espacio perfecto para <strong>invertir en tu bienestar</strong> y
          calidad de vida.
        </p>

        <p className="hero__descripcion">
          Tu nuevo hogar en <strong>Fusagasugá</strong>: apartamentos modernos de
          39.8 m², 50.7 m² y 90.0 m² en el corazón de Cundinamarca.
          <br />
          Precio desde <strong>$5.500.000 / m²</strong>
        </p>

        <div className="hero__botones">
          <a
            href={WHATSAPP}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn--whatsapp"
          >
            <WhatsAppIcon size={20} />
            <span>Contacto por WhatsApp</span>
          </a>
          <a href="#apartamentos" className="btn btn--outline">
            Ver apartamentos
          </a>
        </div>
      </div>
    </section>
  )
}

export default Hero
