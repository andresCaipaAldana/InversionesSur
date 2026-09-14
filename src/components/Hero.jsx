import './Hero.css'
import { TORRE } from '../data/apartamentos'

const WHATSAPP =
  'https://wa.me/573017982968?text=Hola,%20quiero%20informaci%C3%B3n%20sobre%20los%20apartamentos%20de%20la%20Torre%20Manolo'

function Hero() {
  return (
    <section className="hero">
      <div className="container hero__contenido">
        <span className="hero__badge">Torre {TORRE}</span>
        <h1 className="hero__titulo">
          Tu nuevo hogar en <span>Fusagasugá</span>
        </h1>
        <p className="hero__subtitulo">
          Apartamentos modernos de 39.8 m², 50.7 m² y 90.0 m² en el corazón de
          Cundinamarca.
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
            💬 Consultar por WhatsApp
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
