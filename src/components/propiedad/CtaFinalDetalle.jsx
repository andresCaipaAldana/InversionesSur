import './CtaFinalDetalle.css'
import WhatsAppIcon from '../common/WhatsAppIcon'

const TELEFONO = '573017982968'

function CtaFinalDetalle({ propiedad }) {
  if (!propiedad) return null

  const mensaje = encodeURIComponent(
    `Hola, quiero agendar una visita a ${propiedad.nombre}.`
  )
  const linkWhatsApp = `https://wa.me/${TELEFONO}?text=${mensaje}`

  return (
    <section className="cta-detalle">
      <div className="container cta-detalle__contenido">
        <h2 className="cta-detalle__titulo">
          ¿Te gustaría conocer {propiedad.nombre}?
        </h2>
        <p className="cta-detalle__texto">
          Agenda una visita y descubre todos los detalles en persona. Estamos
          listos para acompañarte en el proceso.
        </p>
        <a
          href={linkWhatsApp}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn--whatsapp cta-detalle__btn"
        >
          <WhatsAppIcon size={20} />
          <span>Agendar visita</span>
        </a>
      </div>
    </section>
  )
}

export default CtaFinalDetalle
