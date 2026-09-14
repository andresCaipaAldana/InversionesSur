import './Footer.css'
import { TORRE, PRECIO_M2, PRECIO_PARQUEADERO, formatearPrecio } from '../data/apartamentos'

const WHATSAPP =
  'https://wa.me/573017982968?text=Hola,%20quiero%20informaci%C3%B3n%20sobre%20la%20Torre%20Manolo'

function Footer() {
  const anio = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container footer__contenido">
        <div className="footer__columna">
          <h3>🏢 Torre {TORRE}</h3>
          <p>Apartamentos en venta en Fusagasugá, Cundinamarca.</p>
          <p className="footer__direccion">Cl. 21 #4-35</p>
        </div>

        <div className="footer__columna">
          <h4>Contacto</h4>
          <a href={WHATSAPP} target="_blank" rel="noopener noreferrer">
            💬 WhatsApp
          </a>
        </div>

        <div className="footer__columna">
          <h4>Información</h4>
          <p>Precio: {formatearPrecio(PRECIO_M2)} / m²</p>
          <p>Parqueadero: {formatearPrecio(PRECIO_PARQUEADERO)}</p>
          <p>8 pisos · 15 apartamentos · 15 parqueaderos</p>
        </div>
      </div>

      <div className="footer__copy">
        <p>© {anio} Inversiones Sur. Todos los derechos reservados.</p>
      </div>
    </footer>
  )
}

export default Footer
