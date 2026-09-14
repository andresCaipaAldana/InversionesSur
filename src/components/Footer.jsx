import './Footer.css'

const WHATSAPP = 'https://wa.me/573001234567?text=Hola,%20quiero%20informaci%C3%B3n%20sobre%20los%20apartamentos'

function Footer() {
  const anio = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container footer__contenido">
        <div className="footer__columna">
          <h3>🏢 Inversiones Sur</h3>
          <p>Apartamentos en venta en Fusagasugá, Cundinamarca.</p>
        </div>

        <div className="footer__columna">
          <h4>Contacto</h4>
          <a href={WHATSAPP} target="_blank" rel="noopener noreferrer">
            💬 WhatsApp
          </a>
        </div>

        <div className="footer__columna">
          <h4>Información</h4>
          <p>Precio: $5.500.000 / m²</p>
          <p>8 pisos · 15 apartamentos</p>
        </div>
      </div>

      <div className="footer__copy">
        <p>© {anio} Inversiones Sur. Todos los derechos reservados.</p>
      </div>
    </footer>
  )
}

export default Footer
