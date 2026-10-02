import './CtaFinal.css'
import WhatsAppIcon from '../common/WhatsAppIcon'

const WHATSAPP =
  'https://wa.me/573017982968?text=Hola,%20quiero%20asesor%C3%ADa%20para%20encontrar%20mi%20pr%C3%B3ximo%20hogar'

function CtaFinal() {
  return (
    <section className="cta-final">
      <div className="container cta-final__contenido">
        <h2 className="cta-final__titulo">
          ¿No encuentras lo que buscas?
        </h2>
        <p className="cta-final__texto">
          Cuéntanos qué necesitas y te ayudamos a encontrar la propiedad ideal
          para ti y tu familia.
        </p>
        <a
          href={WHATSAPP}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn--whatsapp cta-final__btn"
        >
          <WhatsAppIcon size={20} />
          <span>Contactar por WhatsApp</span>
        </a>
      </div>
    </section>
  )
}

export default CtaFinal
