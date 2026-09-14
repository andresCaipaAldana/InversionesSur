import './Hero.css'

const WHATSAPP = 'https://wa.me/573001234567?text=Hola,%20quiero%20informaci%C3%B3n%20sobre%20los%20apartamentos'

function Hero() {
  return (
    <section className="hero">
      <div className="container hero__contenido">
        <h1 className="hero__titulo">
          Tu nuevo hogar en <span>Fusagasugá</span>
        </h1>
        <p className="hero__subtitulo">
          Apartamentos modernos de 40m², 60m² y 90m² en el corazón de Cundinamarca.
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
