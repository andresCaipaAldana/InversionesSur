import './Mapa.css'

const LAT = 4.3435
const LNG = -74.3639

function Mapa() {
  const src = `https://www.google.com/maps?q=${LAT},${LNG}&z=15&output=embed`

  return (
    <section className="mapa">
      <div className="container">
        <h2>Ubicación</h2>
        <p className="mapa__intro">
          Nuestros apartamentos se encuentran en Fusagasugá, Cundinamarca.
          <br />
          <small>📍 Ubicación de referencia: Parque Principal de Fusagasugá</small>
        </p>
        <div className="mapa__contenedor">
          <iframe
            title="Ubicación Inversiones Sur"
            src={src}
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  )
}

export default Mapa
